const path = require('path');
const fs = require('fs');
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
].some((v) => typeof v === 'string' && v.includes('your_'));
const useSqlite =
  process.env.DB_DIALECT === 'sqlite' ||
  process.env.USE_SQLITE === 'true' ||
  hasPlaceholderMysqlConfig;

// ─── DB FACTORY ───────────────────────────────────────────────────────────────
const createSequelize = (dialectOverride) => {
  const dialect = dialectOverride || (useSqlite ? 'sqlite' : 'mysql');
  if (dialect === 'sqlite') {
    return new Sequelize({ dialect: 'sqlite', storage: process.env.SQLITE_STORAGE || DEFAULT_SQLITE_PATH, logging: false });
  }
  return new Sequelize(
    process.env.MYSQL_DATABASE || 'alawistars',
    process.env.MYSQL_USER || 'root',
    process.env.MYSQL_PASSWORD || '',
    { host: process.env.MYSQL_HOST || 'localhost', port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306, dialect: 'mysql', logging: false }
  );
};

let sequelize = createSequelize();
let Blog, Testimonial, Partner, SiteStat, SiteSetting, Product, Service;

const createId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

// ─── MODEL DEFINITIONS ────────────────────────────────────────────────────────
const defineBlogModel = (sq) => sq.define('Blog', {
  id: { type: DataTypes.STRING, primaryKey: true },
  slug: { type: DataTypes.STRING, allowNull: false, unique: true },
  date: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.TEXT('long') },
  category: { type: DataTypes.STRING },
  title: { type: DataTypes.JSON },
  excerpt: { type: DataTypes.JSON },
  content: { type: DataTypes.JSON },
  metaTitle: { type: DataTypes.JSON },
  metaDescription: { type: DataTypes.JSON },
  status: { type: DataTypes.STRING, defaultValue: 'published' },
}, { timestamps: false, tableName: 'blogs' });

const defineTestimonialModel = (sq) => sq.define('Testimonial', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name_en: { type: DataTypes.STRING, defaultValue: '' },
  name_ar: { type: DataTypes.STRING, defaultValue: '' },
  location_en: { type: DataTypes.STRING, defaultValue: '' },
  location_ar: { type: DataTypes.STRING, defaultValue: '' },
  text_en: { type: DataTypes.TEXT },
  text_ar: { type: DataTypes.TEXT },
  image: { type: DataTypes.TEXT('long') },
  sort_order: { type: DataTypes.INTEGER, defaultValue: 0 },
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { timestamps: false, tableName: 'testimonials' });

const definePartnerModel = (sq) => sq.define('Partner', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, defaultValue: '' },
  image: { type: DataTypes.TEXT('long') },
  sort_order: { type: DataTypes.INTEGER, defaultValue: 0 },
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { timestamps: false, tableName: 'partners' });

const defineSiteStatModel = (sq) => sq.define('SiteStat', {
  id: { type: DataTypes.STRING, primaryKey: true },
  stat_key: { type: DataTypes.STRING, unique: true },
  value: { type: DataTypes.STRING, defaultValue: '' },
  label_en: { type: DataTypes.STRING, defaultValue: '' },
  label_ar: { type: DataTypes.STRING, defaultValue: '' },
  icon_color: { type: DataTypes.STRING, defaultValue: 'bg-blue-500' },
  sort_order: { type: DataTypes.INTEGER, defaultValue: 0 },
}, { timestamps: false, tableName: 'site_stats' });

const defineSiteSettingModel = (sq) => sq.define('SiteSetting', {
  id: { type: DataTypes.STRING, primaryKey: true },
  setting_key: { type: DataTypes.STRING, unique: true },
  value_en: { type: DataTypes.TEXT('long') },
  value_ar: { type: DataTypes.TEXT('long') },
}, { timestamps: false, tableName: 'site_settings' });

const defineProductModel = (sq) => sq.define('Product', {
  id: { type: DataTypes.STRING, primaryKey: true },
  title_en: { type: DataTypes.STRING, defaultValue: '' },
  title_ar: { type: DataTypes.STRING, defaultValue: '' },
  slug: { type: DataTypes.STRING, allowNull: false, unique: true },
  image: { type: DataTypes.TEXT('long') },
  description_en: { type: DataTypes.TEXT('long') },
  description_ar: { type: DataTypes.TEXT('long') },
  features: { type: DataTypes.JSON, defaultValue: [] }, // Array of { en, ar }
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
  sort_order: { type: DataTypes.INTEGER, defaultValue: 0 },
}, { timestamps: false, tableName: 'products' });

const defineServiceModel = (sq) => sq.define('Service', {
  id: { type: DataTypes.STRING, primaryKey: true },
  title_en: { type: DataTypes.STRING, defaultValue: '' },
  title_ar: { type: DataTypes.STRING, defaultValue: '' },
  description_en: { type: DataTypes.TEXT, defaultValue: '' },
  description_ar: { type: DataTypes.TEXT, defaultValue: '' },
  icon_name: { type: DataTypes.STRING, defaultValue: 'FaTools' },
  description_en: { type: DataTypes.TEXT },
  description_ar: { type: DataTypes.TEXT },
  sort_order: { type: DataTypes.INTEGER, defaultValue: 0 },
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { timestamps: false, tableName: 'services' });

const defineAllModels = (sq) => {
  Blog        = defineBlogModel(sq);
  Testimonial = defineTestimonialModel(sq);
  Partner     = definePartnerModel(sq);
  SiteStat    = defineSiteStatModel(sq);
  SiteSetting = defineSiteSettingModel(sq);
  Product     = defineProductModel(sq);
  Service     = defineServiceModel(sq);
};

defineAllModels(sequelize);

// ─── MIDDLEWARE ───────────────────────────────────────────────────────────────
app.use(cors({
  origin: [
    'https://alawistars.com',
    'https://www.alawistars.com',
    'https://alawistars-production.up.railway.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5173'
  ],
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ─── BLOG HELPERS ─────────────────────────────────────────────────────────────
const generateSlug = (title) =>
  title.trim().toLowerCase()
    .replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, '')
    .replace(/-+/g, '-').replace(/(^-|-$)/g, '');

const makeUniqueSlug = async (baseSlug, currentId = null) => {
  let slug = baseSlug; let index = 2;
  while (true) {
    const existing = await Blog.findOne({ where: { slug } });
    if (!existing || (currentId && existing.id === currentId)) break;
    slug = `${baseSlug}-${index}`; index++;
  }
  return slug;
};

// ─── BLOG ROUTES ──────────────────────────────────────────────────────────────
app.get('/api/blogs', async (req, res) => {
  try {
    const idRecords = await Blog.findAll({ attributes: ['id'], order: [['date', 'DESC']] });
    const ids = idRecords.map(b => b.id);
    let blogs = [];
    if (ids.length > 0) {
      const unsorted = await Blog.findAll({ where: { id: ids } });
      blogs = ids.map(id => unsorted.find(b => b.id === id)).filter(Boolean);
    }
    res.json(blogs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { slug: req.params.slug } });
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/blogs', async (req, res) => {
  try {
    fs.appendFileSync(path.join(__dirname, 'debug-body.log'), JSON.stringify(req.body) + '\n');
    const body = req.body;
    if (!body.title || !body.title.en) return res.status(400).json({ error: 'Title is required' });
    const blogId = body.id || createId();
    const slug = await makeUniqueSlug(body.slug || generateSlug(body.title.en || 'untitled'));
    const blog = await Blog.create({
      id: blogId, slug,
      date: body.date || new Date().toISOString().split('T')[0],
      image: body.image || '', category: body.category || '',
      title: body.title, excerpt: body.excerpt, content: body.content,
      metaTitle: body.metaTitle || {}, metaDescription: body.metaDescription || {},
      status: body.status || 'published',
    });
    res.status(201).json(blog);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.put('/api/blogs/:id', async (req, res) => {
  try {
    const body = req.body;
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    if (body.slug && body.slug !== blog.slug) body.slug = await makeUniqueSlug(body.slug, blog.id);
    if (!body.image) body.image = blog.image;
    await blog.update({ ...body, metaTitle: body.metaTitle || blog.metaTitle || {}, metaDescription: body.metaDescription || blog.metaDescription || {}, status: body.status || blog.status });
    res.json(blog);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    await blog.destroy();
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ─── TESTIMONIAL ROUTES ───────────────────────────────────────────────────────
app.get('/api/testimonials', async (req, res) => {
  try {
    const all = req.query.all === 'true';
    const where = all ? {} : { active: true };
    const items = await Testimonial.findAll({ where, order: [['sort_order', 'ASC']] });
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/testimonials', async (req, res) => {
  try {
    const b = req.body;
    const item = await Testimonial.create({
      id: createId(), name_en: b.name_en || '', name_ar: b.name_ar || '',
      location_en: b.location_en || '', location_ar: b.location_ar || '',
      text_en: b.text_en || '', text_ar: b.text_ar || '',
      image: b.image || '', sort_order: b.sort_order || 0,
      active: b.active !== undefined ? b.active : true,
    });
    res.status(201).json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.put('/api/testimonials/:id', async (req, res) => {
  try {
    const item = await Testimonial.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Testimonial not found' });
    const b = req.body;
    if (!b.image) b.image = item.image;
    await item.update(b);
    res.json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.delete('/api/testimonials/:id', async (req, res) => {
  try {
    const item = await Testimonial.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Testimonial not found' });
    await item.destroy();
    res.json({ message: 'Testimonial deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ─── PARTNER ROUTES ───────────────────────────────────────────────────────────
app.get('/api/partners', async (req, res) => {
  try {
    const all = req.query.all === 'true';
    const where = all ? {} : { active: true };
    const items = await Partner.findAll({ where, order: [['sort_order', 'ASC']] });
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/partners', async (req, res) => {
  try {
    const b = req.body;
    const item = await Partner.create({
      id: createId(), name: b.name || '', image: b.image || '',
      sort_order: b.sort_order || 0, active: b.active !== undefined ? b.active : true,
    });
    res.status(201).json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.put('/api/partners/:id', async (req, res) => {
  try {
    const item = await Partner.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Partner not found' });
    const b = req.body;
    if (!b.image) b.image = item.image;
    await item.update(b);
    res.json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.delete('/api/partners/:id', async (req, res) => {
  try {
    const item = await Partner.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Partner not found' });
    await item.destroy();
    res.json({ message: 'Partner deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ─── SITE STATS ROUTES ────────────────────────────────────────────────────────
app.get('/api/stats', async (req, res) => {
  try {
    const items = await SiteStat.findAll({ order: [['sort_order', 'ASC']] });
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/stats/:id', async (req, res) => {
  try {
    const item = await SiteStat.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Stat not found' });
    await item.update(req.body);
    res.json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// ─── SITE SETTINGS ROUTES ─────────────────────────────────────────────────────
app.get('/api/settings', async (req, res) => {
  try {
    const items = await SiteSetting.findAll();
    // Return as a map { key: { value_en, value_ar } }
    const map = {};
    items.forEach(item => { map[item.setting_key] = { value_en: item.value_en, value_ar: item.value_ar }; });
    res.json(map);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Bulk upsert settings
app.post('/api/settings', async (req, res) => {
  try {
    const entries = req.body; // { key: { value_en, value_ar } }
    const results = [];
    for (const [key, val] of Object.entries(entries)) {
      let item = await SiteSetting.findOne({ where: { setting_key: key } });
      if (item) {
        await item.update({ value_en: val.value_en || '', value_ar: val.value_ar || '' });
      } else {
        item = await SiteSetting.create({ id: createId(), setting_key: key, value_en: val.value_en || '', value_ar: val.value_ar || '' });
      }
      results.push(item);
    }
    res.json({ updated: results.length });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// ─── PRODUCT ROUTES ───────────────────────────────────────────────────────────
app.get('/api/products', async (req, res) => {
  try {
    const all = req.query.all === 'true';
    const where = all ? {} : { active: true };
    const items = await Product.findAll({ where, order: [['sort_order', 'ASC']] });
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/products/:slug', async (req, res) => {
  try {
    const item = await Product.findOne({ where: { slug: req.params.slug } });
    if (!item) return res.status(404).json({ error: 'Product not found' });
    res.json(item);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/products', async (req, res) => {
  try {
    const b = req.body;
    const slug = b.slug || generateSlug(b.title_en || 'product');
    const item = await Product.create({
      id: createId(), 
      title_en: b.title_en || '', title_ar: b.title_ar || '',
      slug, image: b.image || '',
      description_en: b.description_en || '', description_ar: b.description_ar || '',
      features: b.features || [], sort_order: b.sort_order || 0,
      active: b.active !== undefined ? b.active : true,
    });
    res.status(201).json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.put('/api/products/:id', async (req, res) => {
  try {
    const item = await Product.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Product not found' });
    const b = req.body;
    if (!b.image) b.image = item.image;
    await item.update(b);
    res.json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    const item = await Product.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Product not found' });
    await item.destroy();
    res.json({ message: 'Product deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ─── SERVICE ROUTES ───────────────────────────────────────────────────────────
app.get('/api/services', async (req, res) => {
  try {
    const all = req.query.all === 'true';
    const where = all ? {} : { active: true };
    const items = await Service.findAll({ where, order: [['sort_order', 'ASC']] });
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/services', async (req, res) => {
  try {
    const b = req.body;
    const item = await Service.create({
      id: createId(), 
      title_en: b.title_en || '', title_ar: b.title_ar || '',
      description_en: b.description_en || '', description_ar: b.description_ar || '',
      icon_name: b.icon_name || 'FaTools', sort_order: b.sort_order || 0,
      active: b.active !== undefined ? b.active : true,
    });
    res.status(201).json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.put('/api/services/:id', async (req, res) => {
  try {
    const item = await Service.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Service not found' });
    await item.update(req.body);
    res.json(item);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.delete('/api/services/:id', async (req, res) => {
  try {
    const item = await Service.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Service not found' });
    await item.destroy();
    res.json({ message: 'Service deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ─── SEED DEFAULT DATA ────────────────────────────────────────────────────────
const seedDefaultData = async () => {
  // Seed default stats if table is empty
  const statCount = await SiteStat.count();
  if (statCount === 0) {
    await SiteStat.bulkCreate([
      { id: createId(), stat_key: 'pc',          value: '500+',  label_en: 'Satisfied Clients',  label_ar: 'عميل راضٍ',     icon_color: 'bg-blue-500',    sort_order: 1 },
      { id: createId(), stat_key: 'erp',         value: '1000+', label_en: 'ERP Systems',         label_ar: 'نظام ERP',       icon_color: 'bg-indigo-500',  sort_order: 2 },
      { id: createId(), stat_key: 'ps',          value: '2000+', label_en: 'Support Cases',       label_ar: 'حالة دعم',       icon_color: 'bg-emerald-500', sort_order: 3 },
      { id: createId(), stat_key: 'maintenance', value: '300+',  label_en: 'Maintenance',         label_ar: 'صيانة',          icon_color: 'bg-orange-500',  sort_order: 4 },
    ]);
    console.log('Seeded default site stats');
  }

  // Seed default settings keys if table is empty
  const settingCount = await SiteSetting.count();
  if (settingCount === 0) {
    const defaultSettings = [
      { setting_key: 'hero_heading', value_en: '', value_ar: '' },
      { setting_key: 'hero_text',    value_en: '', value_ar: '' },
      { setting_key: 'hero_p',       value_en: '', value_ar: '' },
      { setting_key: 'team1_name',   value_en: '', value_ar: '' },
      { setting_key: 'team1_title',  value_en: '', value_ar: '' },
      { setting_key: 'team1_date',   value_en: '', value_ar: '' },
      { setting_key: 'team1_bio',    value_en: '', value_ar: '' },
      { setting_key: 'team1_image',  value_en: '', value_ar: '' },
      { setting_key: 'team2_name',   value_en: '', value_ar: '' },
      { setting_key: 'team2_title',  value_en: '', value_ar: '' },
      { setting_key: 'team2_date',   value_en: '', value_ar: '' },
      { setting_key: 'team2_bio',    value_en: '', value_ar: '' },
      { setting_key: 'team2_image',  value_en: '', value_ar: '' },
    ];
    await SiteSetting.bulkCreate(defaultSettings.map(s => ({ id: createId(), ...s })));
    console.log('Seeded default site settings');
  }

  // Seed default products if empty
  const productCount = await Product.count();
  if (productCount === 0) {
    const defaultProducts = [
      {
        title_en: "Accounting & Inventory", title_ar: "نظام المحاسبة والمستودعات",
        slug: "accounting-inventory", image: "", description_en: "Full accounting and inventory system...", description_ar: "نظام محاسبي ومخزني متكامل...",
        features: [{en: "Multi-branch", ar: "تعدد الفروع"}], sort_order: 1
      },
      // More can be added here or via admin
    ];
    await Product.bulkCreate(defaultProducts.map(p => ({ id: createId(), ...p })));
    console.log('Seeded default products');
  }

  // Seed default services if empty
  const serviceCount = await Service.count();
  if (serviceCount === 0) {
    const defaultServices = [
      { title_en: "Technical Support", title_ar: "الدعم الفني", description_en: "24/7 technical support...", description_ar: "دعم فني على مدار الساعة...", icon_name: "FaTools", sort_order: 1 },
      // More can be added
    ];
    await Service.bulkCreate(defaultServices.map(s => ({ id: createId(), ...s })));
    console.log('Seeded default services');
  }
};

// ─── DB INIT ──────────────────────────────────────────────────────────────────
async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log(`${sequelize.getDialect()} connected and synced`);
    await seedDefaultData();
  } catch (error) {
    if (sequelize.getDialect() !== 'sqlite' && !isProduction) {
      console.warn('MySQL failed, falling back to SQLite.');
      sequelize = createSequelize('sqlite');
      defineAllModels(sequelize);
      await sequelize.authenticate();
      await sequelize.sync({ alter: true });
      await seedDefaultData();
      console.log('SQLite connected and synced');
      return;
    }
    console.error('Unable to connect to database:', error);
    process.exit(1);
  }
}

initializeDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});