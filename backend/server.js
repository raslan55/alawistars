const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://alawistars.com', 'https://www.alawistars.com', 'https://alawistars-backend.railway.app']
    : 'http://localhost:3000',  // Your frontend dev server
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const sequelize = new Sequelize(
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

const Blog = sequelize.define(
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
      type: DataTypes.TEXT,
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
    console.log('MySQL connected and synced');
  } catch (error) {
    console.error('Unable to connect to MySQL:', error);
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

app.post('/api/blogs', async (req, res) => {
  try {
    const body = req.body;
    if (!body.title || !body.title.en) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const slugBase = body.slug || generateSlug(body.title.en || body.title || 'untitled');
    const slug = await makeUniqueSlug(slugBase);

    const payload = {
      id: body.id || createId(),
      slug,
      date: body.date || new Date().toISOString().split('T')[0],
      image: body.image || '',
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

    const updatedFields = {
      ...body,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
    };

    await blog.update(updatedFields);
    res.json(blog);
  } catch (error) {
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