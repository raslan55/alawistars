const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, '..', 'public', 'Productes');
const outputDir = path.join(__dirname, '..', 'public', 'Productes', 'optimized');

const sizes = [400, 800, 1200]; // widths to generate

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function processFile(file) {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext).replace(/\s+/g, '_');
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    for (const w of sizes) {
      if (metadata.width && metadata.width < w) continue;
      const outName = `${name}-${w}.webp`;
      const outPath = path.join(outputDir, outName);
      await image.resize(w).webp({ quality: 80 }).toFile(outPath);
      console.log('wrote', outPath);
    }
    // Also write a compressed original-size webp
    const outFull = path.join(outputDir, `${name}-full.webp`);
    await image.webp({ quality: 80 }).toFile(outFull);
    console.log('wrote', outFull);
  } catch (err) {
    console.error('failed', file, err.message);
  }
}

async function main() {
  const files = fs.readdirSync(inputDir).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));
  for (const f of files) await processFile(f);
}

main();
