const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

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

const blogData = [
  {
    id: 'manager-message',
    slug: 'manager-message',
    date: '2021-05-23',
    image: '',
    category: 'business',
    title: {
      en: "Manager's Message",
      ar: "كلمة المدير العام",
    },
    excerpt: {
      en: "There is no doubt that information technology is the language of this era, and the need to develop and implement it in our business community is extremely urgent.",
      ar: "إنه مما لا شك فيه أن تقنية المعلومات هي لغة هذا العصر، وأن الحاجة إلى تطويرها وتفعيلها في مجتمع أعمالنا لهي حاجة ماسة جدًا.",
    },
    content: {
      en: "\n<p>There is no doubt that information technology is the language of this era, and the need to develop and implement it in our business community is extremely urgent—especially with the comprehensive economic renaissance currently taking place in the Kingdom across all sectors.</p>\n<p>Therefore, our goal is to help elevate this sector to be among the ranks of advanced nations and to support the business sector in relying on technology in all its activities.</p>\n<p>Out of love for our country and our community, we established this entity to contribute—if even a little—to the development of our beloved Kingdom, hand in hand with the building of this generous nation. May Allah protect it from all harm.</p>\n",
      ar: "\n<p>إنه مما لا شك فيه أن تقنية المعلومات هي لغة هذا العصر، وأن الحاجة إلى تطويرها وتفعيلها في مجتمع أعمالنا لهي حاجة ماسة جدًا، لاسيما مع ما تشهده المملكة اليوم من نهضة اقتصادية شاملة في جميع القطاعات.</p>\n<p>ولذلك، فهدفنا هو المساهمة في النهوض بهذا القطاع للارتقاء به إلى مصاف الدول المتقدمة، ومساعدة قطاع الأعمال للاعتماد على التقنية في جميع نشاطاته.</p>\n<p>وإنه لمن منطلق حبنا لوطننا ومجتمعنا، فلقد أسسنا هذا الكيان للمساهمة ولو بشيء يسير في نهضة مملكتنا الحبيبة، يداً بيد مع بناء هذا الوطن المعطاء. حفظه الله من كل سوء.</p>\n",
    },
  },
  {
    id: 'technical-manager-message',
    slug: 'technical-manager-message',
    date: '2021-05-20',
    image: '',
    category: 'tech',
    title: {
      en: "Message from the Technical Manager",
      ar: "كلمة المدير الفني",
    },
    excerpt: {
      en: "The technology sector is rapidly evolving; it has become one of the most fertile investment fields after oil, relied upon for simplifying and accelerating operations.",
      ar: "إن قطاع التكنولوجيا قطاع متطور بشكل سريع لمواكبة التطور في الأعمال وتسريعها وهو مجال خصب للاستثمار.",
    },
    content: {
      en: "\n<p>Anyone observing the current state of investment in information technology can see that this sector is one of the most fertile after the oil sector, and it is heavily relied upon—after God—for facilitating and simplifying operations.</p>\n<p>The technology sector in general is rapidly evolving to keep up with business development and acceleration, making it a promising field for investment.</p>\n<p>This has driven us to invest in it with dedication and focus, recognizing the importance of technology, and striving to advance our technical systems until they stand, God willing, among the leading exporters of technology.</p>\n",
      ar: "\n<p>إن الناظر اليوم لواقع الاستثمار في تقنية المعلومات ليبصر أن هذا القطاع هو من أخصب قطاعات الاستثمار بعد قطاع النفط وعليه الاعتماد بعد الله في تيسير وتسهيل الأعمال.</p>\n<p>كما أن قطاع التكنولوجيا بشكل عام هو قطاع متطور شكل سريع لمواكبة التطور في الأعمال وتسريعها وهو مجال خصب للاستثمار.</p>\n<p>مما حد بنا للاستثمار فيه جاعلين نصب أعيننا أهمية التقنية فبدأنا على الحرص والتفاني للارتقاء بمنظومة التقنية لتقف بسواعد رجالها في مطاف مصدري التقنية بمشيئة الله تعالى.</p>\n",
    },
  },
];

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Connected to MySQL and synced database');

    await Blog.bulkCreate(blogData);
    console.log('Seeded database with blogs');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
    console.log('Database connection closed');
  }
}

seedDatabase();