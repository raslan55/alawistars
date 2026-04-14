const path = require('path');
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
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
    await sequelize.sync();
    console.log(`${sequelize.getDialect()} connected and synced`);
  } catch (error) {
    if (sequelize.getDialect() !== 'sqlite' && !isProduction) {
      console.warn('MySQL connection failed. Falling back to local SQLite storage for development.');
      console.warn(error.message);
      sequelize = createSequelize('sqlite');
      Blog = defineBlogModel(sequelize);
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('SQLite connected and synced');
      return;
    }

    console.error('Unable to connect to database:', error);
    process.exit(1);
  }
}

// Routes
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [['date', 'DESC']] });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
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