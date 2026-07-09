const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const DIST = path.resolve(__dirname, '../dist');
const EXTENSIONS = new Set(['.html', '.js', '.css', '.svg', '.json', '.txt', '.xml']);

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (EXTENSIONS.has(ext) && !entry.name.endsWith('.gz')) {
        await gzipFile(full);
      }
    }
  }
}

function gzipFile(filePath) {
  return new Promise((resolve, reject) => {
    const gzPath = `${filePath}.gz`;
    // Skip if gz already exists and is newer than source
    fs.stat(gzPath, (err, gzStat) => {
      if (!err) {
        fs.stat(filePath, (err2, stat) => {
          if (!err2 && gzStat.mtime >= stat.mtime) return resolve();
          doGzip();
        });
      } else {
        doGzip();
      }
    });

    function doGzip() {
      const input = fs.createReadStream(filePath);
      const output = fs.createWriteStream(gzPath);
      const gzip = zlib.createGzip({ level: 9 });
      input.pipe(gzip).pipe(output)
        .on('finish', () => {
          console.log('gzipped', path.relative(DIST, filePath));
          resolve();
        })
        .on('error', reject);
    }
  });
}

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error('dist/ not found. Run `npm run build` first.');
    process.exit(1);
  }
  console.log('Precompressing assets in', DIST);
  await walk(DIST);
  console.log('Done.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
