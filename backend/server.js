const path = require('path');
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const DEFAULT_SQLITE_PATH = path.join(__dirname, 'database.sqlite');

const isProduction = process.env.NODE_ENV === 'production';
const hasPlaceholderMysqlConfig = [
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
].some((value) => typeof value === 'string' && value.includes('your_'));
const useSqlite =
  process.env.DB_DIALECT === 'sqlite' ||
  process.env.USE_SQLITE === 'true' ||
  hasPlaceholderMysqlConfig;

const createSequelize = (dialectOverride) => {
  const dialect = dialectOverride || (useSqlite ? 'sqlite' : 'mysql');

  if (dialect === 'sqlite') {
    return new Sequelize({
      dialect: 'sqlite',
      storage: process.env.SQLITE_STORAGE || DEFAULT_SQLITE_PATH,
      logging: false,
    });
  }

  return new Sequelize(
    process.env.MYSQL_DATABASE || 'alawistars',
    process.env.MYSQL_USER || 'root',
    process.env.MYSQL_PASSWORD || '',
    {
      host: process.env.MYSQL_HOST || 'localhost',
      port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
      dialect: 'mysql',
      logging: false,
    }
  );
};

let sequelize = createSequelize();
let Blog;

const defineBlogModel = (sequelizeInstance) =>
  sequelizeInstance.define(
    'Blog',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT('long'),
      },
      category: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.JSON,
      },
      excerpt: {
        type: DataTypes.JSON,
      },
      content: {
        type: DataTypes.JSON,
      },
      metaTitle: {
        type: DataTypes.JSON,
      },
      metaDescription: {
        type: DataTypes.JSON,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'published'
      },
    },
    {
      timestamps: false,
      tableName: 'blogs',
    }
  );

Blog = defineBlogModel(sequelize);

app.use(cors({
  origin: isProduction
    ? ['https://alawistars.com', 'https://www.alawistars.com', 'https://alawistars-backend.railway.app']
    : ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const generateSlug = (title) =>
  title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");

const createId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

const makeUniqueSlug = async (baseSlug, currentId = null) => {
  let slug = baseSlug;
  let index = 2;

  while (true) {
    const existing = await Blog.findOne({ where: { slug } });
    if (!existing || (currentId && existing.id === currentId)) {
      break;
    }
    slug = `${baseSlug}-${index}`;
    index += 1;
  }

  return slug;
};

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log(`${sequelize.getDialect()} connected and synced`);
  } catch (error) {
    if (sequelize.getDialect() !== 'sqlite' && !isProduction) {
      console.warn('MySQL connection failed. Falling back to local SQLite storage for development.');
      console.warn(error.message);
      sequelize = createSequelize('sqlite');
      Blog = defineBlogModel(sequelize);
      await sequelize.authenticate();
      await sequelize.sync({ alter: true });
      console.log('SQLite connected and synced');
      return;
    }

    console.error('Unable to connect to database:', error);
    process.exit(1);
  }
}

// S3 helpers
const s3Client = new S3Client({
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

async function uploadImageToS3(base64ImageData, filename) {
  // Strip the data URI prefix (e.g. "data:image/jpeg;base64,") and decode
  const matches = base64ImageData.match(/^data:([^;]+);base64,(.+)$/);
  if (!matches) {
    throw new Error('Invalid base64 image data: missing data URI prefix');
  }
  const contentType = matches[1];
  const buffer = Buffer.from(matches[2], 'base64');

  await s3Client.send(
    new PutObjectCommand({
      Bucket: process.env.BUCKET,
      Key: filename,
      Body: buffer,
      ContentType: contentType,
      ACL: 'public-read',
    })
  );

  // Build the public URL from the configured endpoint and bucket
  const endpoint = (process.env.ENDPOINT || '').replace(/\/$/, '');
  const bucket = process.env.BUCKET;
  const region = process.env.REGION;

  if (endpoint) {
    return `${endpoint}/${bucket}/${filename}`;
  }
  return `https://${bucket}.s3.${region}.amazonaws.com/${filename}`;
}

// Routes
app.get('/api/blogs', async (req, res) => {
  try {
    console.log('GET /api/blogs called');
    // Fetch only IDs sorted by date to avoid "Out of sort memory" with large LONGTEXT image columns
    const idRecords = await Blog.findAll({
      attributes: ['id'],
      order: [['date', 'DESC']]
    });
    
    const ids = idRecords.map(b => b.id);
    
    let blogs = [];
    if (ids.length > 0) {
      const unsortedBlogs = await Blog.findAll({
        where: { id: ids }
      });
      // Re-sort the blogs according to the strictly ordered IDs
      blogs = ids.map(id => unsortedBlogs.find(b => b.id === id)).filter(Boolean);
    }
    
    console.log('Blogs fetched successfully:', blogs.length);
    res.json(blogs);
  } catch (error) {
    console.error('GET /api/blogs error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
});

app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { slug: req.params.slug } });
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const fs = require('fs');

app.post('/api/blogs', async (req, res) => {
  try {
    fs.appendFileSync(path.join(__dirname, 'debug-body.log'), JSON.stringify(req.body) + '\n');
    const body = req.body;
    if (!body.title || !body.title.en) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const blogId = body.id || createId();
    const slugBase = body.slug || generateSlug(body.title.en || body.title || 'untitled');
    const slug = await makeUniqueSlug(slugBase);

    // Use base64 image directly if provided
    const imageUrl = body.image || '';

    const payload = {
      id: blogId,
      slug,
      date: body.date || new Date().toISOString().split('T')[0],
      image: imageUrl,
      category: body.category || '',
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      metaTitle: body.metaTitle || {},
      metaDescription: body.metaDescription || {},
      status: body.status || 'published',
    };

    const blog = await Blog.create(payload);
    res.status(201).json(blog);
  } catch (error) {
    console.error('POST /api/blogs error:', error);
    res.status(400).json({ error: error.message });
  }
});

app.put('/api/blogs/:id', async (req, res) => {
  try {
    const body = req.body;
    const blog = await Blog.findByPk(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    if (body.slug && body.slug !== blog.slug) {
      body.slug = await makeUniqueSlug(body.slug, blog.id);
    }

    // Use base64 image directly if provided; otherwise keep existing value
    if (!body.image) {
      // No new image supplied — preserve the existing one
      body.image = blog.image;
    }

    const updatedFields = {
      ...body,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      metaTitle: body.metaTitle || blog.metaTitle || {},
      metaDescription: body.metaDescription || blog.metaDescription || {},
      status: body.status || blog.status,
    };

    await blog.update(updatedFields);
    res.json(blog);
  } catch (error) {
    console.error('PUT /api/blogs/:id error:', error);
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    await blog.destroy();
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});