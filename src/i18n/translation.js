import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Alawistars!",
      home: "Home",
      products: "Products",
      services: "Services",
      about: "About Us",
      news: "News",
      contact: "Contact Us",
      title: "alawistars",
      CompanyName: "Nujoum Al Alawi Computer Systems",
      companyDescription:
        "Nujoum Al Alawi Computer Systems was launched in 1994 to provide For the Saudi society and economy aspiring for growth and leadership At that time, software solutions and electronic systems in addition to For various types of technical services and products Developed that keeps pace with the aspirations of companies and private institutions at that time, and in order to contribute from During its role in facilitating the management function and improving production, Governance and control of work, and was able from the first moment From its launch, gaining the trust of its customers and consolidating its position As a reliable and indispensable technology partner for many Government and private agencies, and continued to provide performance Distinguished and providing advanced technical services and products Through which it was able to enrich the system Management and the world of systems, software and modern technology in the Kingdom, and helped it achieve huge leaps in The size of its outputs, its profit margins, and its level of excellence in Work, management and organization, and tracked in this framework An ever-evolving working methodology based primarily on customer satisfaction and providing perfect and reliable products and services, Nojoom Al Alawi became the number one service provider and seller Expert technology with more than 10,000 companies and institutions Inside and outside the Kingdom",
      footertext:
        "To be a recognized world leader and authority in the industry for Software",
      Email: "Email",
      Fax: "Fax",
      QuickLinks: "Quick Links",
      Our_Location: "Our Location",
      HeadOfficeRiyadh: "Head Office – Riyadh",
      Jeddah_Branch: "Jeddah Branch",
      address_1: "Al-Malaz - Salah eddin Street ",
      address_2: " Western Baghdadia",
      FAQs: "FAQs",
      Privacy_Policy: "Privacy Policy",
      Terms_Conditions: "Terms & Conditions",
      Follow_us: "Follow us",
      time: "8:00 am - 12:30 pm 3:00 pm - 7:30 pm",
      Testimonial: "Testimonial",
      Stories: "Real Stories, Real Results",
      Testimonial_text:
        "Read what our clients have to say about their journey with us. We’re proud to deliver value that speaks for itself.",
      Partners_Heading: " Meet our  partners",
      Partners_text: "We’ve 10000+ Dedicated Partners",
      Hero_heading:
        "The Smart Solution for Managing Your Business and Tracking Inventory  with Ease",
      Hero_text:
        " Certified by the Saudi Zakat, Tax and Customs Authority for  Electronic Invoicing (Phase I & II)",
      Hero_P:
        " Start your digital transformation today! Prepare your team → Test  the system → Update your data → Review invoices → Stay up-to-date with official updates.",
      Start_btn: "Get Started Now",
      About_Us: " About Us ",
      About_text: "We Help Drive the IT Industry Forward Since 1994",
      Serv_h: " Development of Business Systems ",
      serv_p:
        "Software solutions serving various business sectors and industries.",
      ERP: "(ERP) Systems",
      serv2_p:
        " Comprehensive ERP solutions covering accounting, HR, inventory, sales, and more",
      SERVICES_WE_PROVIDE: "SERVICES WE PROVIDE",
      Cloud_Based_Solutions: "Cloud-Based Solutions",
      Desktop_Applications: "Desktop Applications",
      Inv_acc: "Sinmar For Accounting & Inventory ",
      acc_Inv_Disc:
        "An integrated accounting and inventory system that supports branches, barcodes, and advanced tax reports.",
      Inv: " Sinmar For Inventory ",
      Inv_Disc:
        "An effective tool for managing inventory, tracking products, and linking them to suppliers and invoices.",
      acc: "Sinmar General Accounting ",
      acc_desc:
        "A comprehensive system for managing general accounts, daily entries, and accurate financial reports.",
      Med: " Sinmar For Medical System",
      Med_Disc:
        "An integrated medical solution for managing clinics, appointments, patient records, and medical bills.",

      Furn: "Sinmar For Furnished Flats System",
      Furn_Disc:
        "A dedicated system for managing furnished apartment reservations and rentals with daily reports ",

      Pr: "Sinmar For Property Management",
      Pr_Disc:
        " A professional system for managing properties, rentals, contracts, and landlord and tenant records.",
      Maintenance: " Sinmar For Car Maintenance ",
      Maintenance_Disc:
        "A system for managing car maintenance operations, invoice records, breakdown details and spare parts. ",
      Car_sale: "Sinmar Car Sales.",
      Car_sale_Disc:
        "A specialized program for car showrooms that includes managing offers, sales, customers, and installments.",
      Hr: "  Sinmar for Human Resources",
      Hr_Disc:
        "An integrated personnel affairs system for managing attendance, salaries, vacations, and personal files.",
      Commu: "Sinmar Communications System",
      commu_Disc:
        "A solution for managing telecom companies, customer services, billing, and shipment tracking.",
      serv: "Sinmar Services",
      serv_Disc:
        " A system for managing public service companies, distributing tasks, and providing performance reports.",
      fuel: "Sinmar for gas stations",
      Fule_Disc:
        "Fuel station system for pumping and inventory management, and daily accounting for each pump.",
      Our_Product: "Our Products",
      Our_Product_h: "The Role of Al-Alawi Star for Computer Systems",
      Our_Product_p:
        " Supporting the work and production environment and enhancing the value of  modern technologies, software, and systems that serve companies, institutions, entrepreneurs, and the economy in Saudi Arabia and our customers abroad by providing innovative, high-quality technical solutions at competitive prices.",
      Explore_More: "Our innovative solutions",
      Our_Partners_p:
        "Our clients are our partners in success, thanks to God; Alawi Stars for Computer Systems has more than 10,000 clients so far in all disciplines, and achieved a great success in a short time through the production of the distinct software, these are some of our clients that we had the honor to serve them",
      Our_Partners: " Our Partners  ",
      ReadMore: "Read More",
      SUBSCRIBERS: "SUBSCRIBERS",
      PROJECTS: "PROJECTS",
      AWARDS: "AWARDS",
      Ourproducts: "Products & Solutions",
      Ourproducts_text:
        "Explore smart, scalable solutions to optimize your business performance.",
      Show: "View Details",
      our_mission: "Our Mission",
      our_vision: "Our vision",
      our_values: "Our values",

      mission_text:
        "Supporting the work environment and enhancing the value of modern technologies and systems that serve businesses, institutions, and entrepreneurs. We develop technical solutions according to the highest standards and in a competitive manner that meets customer needs.",

      vision_text:
        "We strive to expand our business locally and globally, becoming the preferred choice for our clients by applying best technical practices and providing reliable and innovative solutions that serve all sectors.",

      value_1_title: "dedication",
      value_1_text:
        "We provide the highest levels of service and commitment to on-time delivery with full support for our clients' needs at all stages.",

      value_2_title: "Privacy",
      value_2_text:
        "We are committed to providing systems and solutions that ensure data confidentiality and give users confidence in achieving the best performance and results.",

      value_3_title: "trust",
      value_3_text:
        "We build long-term relationships based on trust and credibility with our clients and partners to achieve common goals.",

      value_4_title: "Creativity",
      value_4_text:
        "We offer innovative solutions in unconventional ways, which distinguish us in the market and make our services truly valuable.",

      value_5_title: "development",
      value_5_text:
        "We are constantly developing ourselves and supporting our teams to ensure we deliver the latest technologies and solutions in accordance with best practices.",

      value_6_title: "Technical intelligence",
      value_6_text:
        "We combine deep technical knowledge with an understanding of customer needs to provide smart solutions that keep pace with market changes.",

      why_choose_us: "Why Choose Us",
      why_choose_us_desc:
        "We Provide Creative Solutions. Globally engage cross-media leadership skills before cross-media innovation. Develop standardized platforms without robust applications. Conveniently go forward with collaboration and idea-sharing.",
      reason_1_title: "Professional Team Member",
      reason_2_title: "Implements Business  ",
      reason_3_title: "Lifetime Free Services ",
      reason_4_title: "  Affordable Pricing Plans ",
      Call_US: "Call us anytime",
      Started: "Get Started Today",
      CTA_Text: "Empowering Your Business  with Smart Solutions",
      Tech_Solutions: "Tech Solutions",
      Tech_Text:
        " We enhance our clients' excellence and provide them with lasting operational efficiency by providing the best technical solutions.",
      pc: "computers ",
      Pc_text:
        "We have an exceptional team dedicated to meeting our clients' needs, providing them with the best and most powerful brands of computers, servers, and peripherals, as well as devices with special specifications, enabling them to innovate and achieve.",

      OS: "Operating programs",
      Os_text:
        "We provide our customers with a variety of operating software, including genuine Windows software, Office software, server operating systems, and appropriate peripherals.",
      PS: " Protection systems",
      PS_text:
        "We supply antivirus, anti-hacking, and anti-piracy systems to enhance cybersecurity and protect devices and data.",

      Ha: "Hardware accessories",
      Ha_text:
        "We offer high-quality, long-lasting printers, scanners, POS terminals, and other accessories at an affordable price.",
      LAN: "Local Area Networks (LANs)",
      LAN_text:
        "We build local area networks for homes, offices, and small businesses, and provide equipment, maintenance services, and full technical support.",
      WAN: "Wide Area Networks (WAN)",
      WAN_text:
        "We provide wide area networks with advanced equipment and infrastructure, connecting users across large geographic areas efficiently and cost-effectively.",
      Full_Name: " Full Name",
      Phones: " Phone Numbers",
      Subject: "Subject",
      Message: "Message",
      WhatsApp: " WhatsApp",
      Phone: "Phone",
      working_hours: " working hours",
      Jeddah_working_hours: " 9 AM - 6 PM ",
      Riyadh_working_hours: " 9 AM - 6 PM",
      address_1_contact:
        "Malaz Area – Sitten St. – Alyah Commercial Center -1st Floor – Office 1",
      address_2_contact:
        "Bughdadiah Area, Hail St., Hail Comm. Center, 2nd Floor,Office 21",
      CTA_About: "Why us ? ",
      Sales_Email: " Sales Email",

      Inv_acc_feature_1: "Accounting tree up to 10 sub-levels",
      Inv_acc_feature_2: "Export to Excel, Word, PDF, Txt",
      Inv_acc_feature_3:
        "The ability to save copies of documents within the journal entry",
      Inv_acc_feature_4: "In addition to 99 branches",
      Inv_acc_feature_5:
        "The advantage of multiple and individual cost centers",
      Inv_acc_feature_6: "SQL Server database",
      Inv_acc_feature_7:
        "A bond of receipt or cash disbursement in a sequence independent of the term",
      Inv_acc_feature_8:
        "The possibility of separating the cash and check in the exchange receivable",
      Inv_acc_feature_9: "Auto backup",
      Inv_acc_feature_10: "A multi-year and branch account statement",
      Inv_acc_feature_11: "A multi-year and branched general professor",
      Inv_acc_feature_12: "Independent powers for each user",
      Inv_acc_feature_13: "Fixed assets and calculating depreciation",
      Inv_acc_feature_14: "The possibility of dealing with documentary credits",
      Inv_acc_feature_15: "Diverse detailed reports and custom display options",
      Inv_acc_feature_16: "Revaluation of a fixed asset",


      acc_feature_1: "acc feature 1",
      acc_feature_2: "acc feature 2",
      acc_feature_3: "acc feature 3",
      acc_feature_4: "acc feature 4",
      acc_feature_5: "acc feature 5",
      acc_feature_6: "acc feature 6",
      acc_feature_7: "acc feature 7",
      acc_feature_8: "acc feature 8",
      acc_feature_9: "acc feature 9",
      acc_feature_10: "acc feature 10",

      Inv_feature_1: "Inv feature 1",
      Inv_feature_2: "Inv feature 2",
      Inv_feature_3: "Inv feature 3",
      Inv_feature_4: "Inv feature 4",
      Inv_feature_5: "Inv feature 5",
      Inv_feature_6: "Inv feature 6",
      Inv_feature_7: "Inv feature 7",
      Inv_feature_8: "Inv feature 8",
      Inv_feature_9: "Inv feature 9",
      Inv_feature_10: "Inv feature 10",


      Pr_feature_1: "Pr feature 1",
      Pr_feature_2: "Pr feature 2",
      Pr_feature_3: "Pr feature 3",
      Pr_feature_4: "Pr feature 4",
      Pr_feature_5: "Pr feature 5",
      Pr_feature_6: "Pr feature 6",
      Pr_feature_7: "Pr feature 7",
      Pr_feature_8: "Pr feature 8",
      Pr_feature_9: "Pr feature 9",
      Pr_feature_10: "Pr feature 10",


      Furn_feature_1: "Furn feature 1",
      Furn_feature_2: "Furn feature 2",
      Furn_feature_3: "Furn feature 3",
      Furn_feature_4: "Furn feature 4",
      Furn_feature_5: "Furn feature 5",
      Furn_feature_6: "Furn feature 6",
      Furn_feature_7: "Furn feature 7",
      Furn_feature_8: "Furn feature 8",
      

      Med_feature_1: "Med feature 1",
      Med_feature_2: "Med feature 2",
      Med_feature_3: "Med feature 3",
      Med_feature_4: "Med feature 4",
      Med_feature_5: "Med feature 5",
      Med_feature_6: "Med feature 6",
      Med_feature_7: "Med feature 7",
      Med_feature_8: "Med feature 8",

      Maintenance_feature_1: "Maintenance feature 1",
      Maintenance_feature_2: "Maintenance feature 2",
      Maintenance_feature_3: "Maintenance feature 3",
      Maintenance_feature_4: "Maintenance feature 4",
      Maintenance_feature_5: "Maintenance feature 5",
      Maintenance_feature_6: "Maintenance feature 6",
      Maintenance_feature_7: "Maintenance feature 7",
      Maintenance_feature_8: "Maintenance feature 8",

      Car_sale_feature_1: "Car_sale feature 1",
      Car_sale_feature_2: "Car_sale feature 2",
      Car_sale_feature_3: "Car_sale feature 3",
      Car_sale_feature_4: "Car_sale feature 4",
      Car_sale_feature_5: "Car_sale feature 5",
      Car_sale_feature_6: "Car_sale feature 6",
      Car_sale_feature_7: "Car_sale feature 7",
      Car_sale_feature_8: "Car_sale feature 8",

      Hr_feature_1: "Hr feature 1",
      Hr_feature_2: "Hr feature 2",
      Hr_feature_3: "Hr feature 3",
      Hr_feature_4: "Hr feature 4",
      Hr_feature_5: "Hr feature 5",
      Hr_feature_6: "Hr feature 6",
      Hr_feature_7: "Hr feature 7",
      Hr_feature_8: "Hr feature 8",

      Commu_feature_1: "Commu feature 1",
      Commu_feature_2: "Commu feature 2",
      Commu_feature_3: "Commu feature 3",
      Commu_feature_4: "Commu feature 4",
      Commu_feature_5: "Commu feature 5",
      Commu_feature_6: "Commu feature 6",
      Commu_feature_7: "Commu feature 7",
      Commu_feature_8: "Commu feature 8",

      serv_feature_1: "serv feature 1",
      serv_feature_2: "serv feature 2",
      serv_feature_3: "serv feature 3",
      serv_feature_4: "serv feature 4",
      serv_feature_5: "serv feature 5",
      serv_feature_6: "serv feature 6",
      serv_feature_7: "serv feature 7",
      serv_feature_8: "serv feature 8",

      fuel_feature_1: "fuel feature 1",
      fuel_feature_2: "fuel feature 2",
      fuel_feature_3: "fuel feature 3",
      fuel_feature_4: "fuel feature 4",
      fuel_feature_5: "fuel feature 5",
      fuel_feature_6: "fuel feature 6",
      fuel_feature_7: "fuel feature 7",
      fuel_feature_8: "fuel feature 8",
    },
  },

  ar: {
    translation: {
      home: "الصفحة الرئيسية ",
      products: "المنتجات",
      services: "الخدمات",
      about: "معلومات عنا",
      news: "الأخبار",
      contact: "اتصل بنا",
      CompanyName: "نجوم العلاوي لنظم الكمبيوتر ",
      companyDescription:
        "انطلقت نجوم العلاوي لنظم الكمبيوتر عام ١٩٩٤ لتوفر للمجتمع والاقتصاد السعودي الطامح للنمو والريادة آنذاك الحلول البرمجية والأنظمة الالكترونية بالإضافة لأنواع متعددة من الخدمات والمنتجات التقنية المتطورة التي تتواكب مع تطلعات الشركات والمؤسسات الخاصة في ذلك الوقت، ولكي تساهم من خلال دورها في تسهيل وظيفة الإدارة وتحسين الإنتاج ، وحوكمة وضبط العمل، واستطاعت منذ اللحظة الأولى من انطلاقها كسب ثقة عملائها وترسيخ مكانتها كشريك تقني موثوق ولا غنى عنه لدى الكثير من الجهات الحكومية والخاصة، واستمرت على تقديم الأداء المتميز وتقديم الخدمات والمنتجات التقنية المتطورة والتي استطاعت من خلالها العمل على إثراء منظومة الإدارة وعالم الأنظمة والبرمجيات والتكنولوجيا الحديثة بالمملكة، وساعدتها في تحقيق قفزات هائلة في حجم مخرجاتها وهوامش أرباحها ومستوى تميزها في العمل والإدارة والتنظيم، وتتبعت في هذا الإطار منهجية عمل دائمة التطور ترتكز في المقام الأول على رضا العملاء وتقديم منتجات وخدمات مثالية وموثوقة، فأصبحت نجوم العلاوى مزود الخدمة الأول وبائع التقنية الخبير لدى ما يزيد عن ١٠ آلاف شركة ومؤسسة داخل وخارج المملكة.",

      title: "نجوم العلاوي",
      footertext:
        "أن نكون شركة رائدة ومعترف بها عالميًا في مجال صناعة البرمجيات",
      Our_Location: "العنوان ",
      working_hours: " اوقات العمل ",
      Jeddah_working_hours: " 9 صباحا - 6 مساء ",
      Riyadh_working_hours: " 9 صباحا - 6 مساء",
      Email: "البريد الالكتروني ",
      Fax: "فاكس",
      WhatsApp: "واتس اب",

      Phone: "الهاتف",

      Full_Name: "الأسم بالكامل ",
      Phones: " ارقام الهاتف ",
      Subject: "الموضوع",
      Message: "الرسالة",
      QuickLinks: "روابط سريعة",
      HeadOfficeRiyadh: "المركز الرئيسي -الرياض ",
      Jeddah_Branch: "فرع جدة ",
      address_1: "الملز - شارع صلاح الدين ",
      address_2: "البغدادية الغربية",
      address_1_contact:
        "الملز-شارع صلاح الدين – مركز عالية  التجاري – الدور الأول – مكتب 1",
      address_2_contact:
        "البغدادية الغربية - شارع حائل - مركز حائل التجاري - الدور الثاني - مدخل أ - مكتب 21",
      FAQs: "الأسئلة الشائعة ",
      Privacy_Policy: "سياسة الخصوصية",
      Terms_Conditions: "الشروط والأحكام",
      Follow_us: "تابعنا ",
      time: " ص 8:00  - 12:30 م 3:00 م - 7:30 م",
      Testimonial: "ماذا قالوا عنا",
      Stories: "قصص واقعية، نتائج حقيقية",
      Testimonial_text:
        "اقرأ آراء عملائنا حول رحلتهم معنا. نفخر بتقديم قيمة حقيقية.",
      Partners_text: "لدينا أكثر من 10000 شريك",
      Hero_heading: "الحل الذكي لإدارة أعمالك وتتبع المخزون بكل سهولة",
      Hero_text:
        " معتمد من هيئة الزكاة والضريبة والجمارك السعودية للفوترة الإلكترونية (المرحلتين الأولى والثانية)",
      Hero_P:
        " ابدأ التحول الرقمي اليوم! جهّز فريقك → اختبر النظام → حدّث بياناتك → راجع الفواتير → تابع آخر التحديثات الرسمية.",
      Start_btn: "ابدأ الآن",
      About_Us: "من نحن",
      About_text: "نُساهم في تطوير قطاع تكنولوجيا المعلومات منذ عام 1994.",
      About_p:
        "تم تأسيس نجوم العلاوى لنظم الكمبيوتر في عام 1994 في مدينة الرياض في المملكة العربية السعودية بهدف إنتاج أنظمة تجارية متكاملة ذات قدرات وإمكانيات تضاهى من حيث الأداء الأنظمة الغربية المتطورة وتتميز بالخصوصية من حيث العمل في بيئات ثنائية اللغـة ومن حيث تلبية جميع احتياجات العملاء ولهذا تم تطوير عدة أنظمة تجارية مختلفة تخدم عدة مجالات متنوعة و أصبح لدينا قاعدة كبيرة من العملاء في شتى أنحاء المملكة.",
      Serv_h: " تطوير انظمة الأعمال ",
      serv_p: "حلول برمجية تخدم قطاعات وصناعات الأعمال المختلفة",
      ERP: "أنظمة تخطيط موارد المؤسسة",
      serv2_p:
        " حلول ERP شاملة تغطي المحاسبة، الموارد البشرية، المخزون، المبيعات، وأكثر",
      SERVICES_WE_PROVIDE: "الخدمات التي نقدمها",
      Desktop_Applications: "تطبيقات سطح المكتب",
      Cloud_Based_Solutions: "الانظمة السحابية",
      Inv_acc: "سنمار  للمحاسبة والمخزون ",
      acc_Inv_Disc:
        "نظام متكامل للمحاسبة والمخازن يدعم الفروع، الباركود، والتقارير الضريبية المتقدمة.",
      acc: "سنمار  للمحاسبة العامة",
      acc_desc:
        "نظام شامل لإدارة الحسابات العامة والقيود اليومية والتقارير المالية الدقيقة.",
      Inv: "سنمار  للمخزون",
      Inv_Disc:
        "أداة فعالة لإدارة المخزون، تتبع المنتجات، وربطها مع الموردين والفواتير.",
      Med: " سنمار  للنظام الطبي",
      Med_Disc:
        "حل طبي متكامل لإدارة العيادات والمواعيد وسجلات المرضى والفواتير الطبية.",
      Furn: "سنمار  لنظام الشقق المفروشة",
      Furn_Disc:
        "نظام مخصص لإدارة حجوزات وتأجير الشقق المفروشة مع تقارير يومية وسجل العملاء.",
      Pr: "سنمار  لإدارة الممتلكات",
      Pr_Disc:
        " نظام احترافي لإدارة العقارات والإيجارات والعقود وسجلات الملاك والمستأجرين.",
      Maintenance: " سنمار  لصيانة السيارات",
      Maintenance_Disc:
        "نظام لإدارة عمليات صيانة السيارات، سجل الفواتير، وتفاصيل الأعطال وقطع الغيار.",
      Car_sale: "سنمار لمبيعات السيارات.",
      Car_sale_Disc:
        "برنامج متخصص لمعارض السيارات يشمل إدارة العروض، البيع، العملاء، والأقساط.",
      Hr: "سنمار لشؤون الموظفين",
      Hr_Disc:
        " نظام شؤون موظفين متكامل لإدارة الحضور، الرواتب، والإجازات والملفات الشخصية.",
      Commu: "نظام سنمار للاتصالات ",
      commu_Disc:
        "حل موجه لإدارة شركات الاتصالات وخدمات العملاء والفواتير ومتابعة الشحنات.",
      serv: "سنمار للخدمات ",
      serv_Disc:
        " نظام لإدارة شركات الخدمات العامة وتوزيع المهام وتقديم تقارير الأداء.",
      fuel: "سنمار لمحطات الوقود ",
      Fule_Disc:
        "نظام محطات الوقود لإدارة الضخ والمخزون، والمحاسبة اليومية لكل مضخة.",
      Our_Product: "منتجاتنا",
      Our_Product_h: "دور نجوم العلاوي لأنظمة الكمبيوتر",
      Our_Product_p:
        "دعم بيئة العمل والإنتاج وتعزيز قيمة التقنيات الحديثة والبرمجيات والأنظمة التي تخدم الشركات والمؤسسات ورواد الأعمال والاقتصاد في المملكة العربية السعودية وعملائنا في الخارج من خلال توفير حلول تقنية مبتكرة وعالية الجودة بأسعار تنافسية.",
      Explore_More: "  حلولنا المبتكرة ",
      Our_Partners: "شركاؤنا ",
      Our_Partners_p:
        "عملاؤنا هم شركاؤنا في النجاح بفضل الله؛ حيث تمتلك شركة نجوم العلوي لأنظمة الحاسب الآلي أكثر من 10000 عميل حتى الآن في جميع التخصصات، وحققت نجاحاً باهراً في وقت قصير من خلال إنتاج البرمجيات المتميزة، هؤلاء بعض عملائنا الذين تشرفنا بخدمتهم",
      Partners_Heading: "تعرف على شركائنا",
      ReadMore: "شاهد المزيد",
      SUBSCRIBERS: "المشتركين",
      PROJECTS: "المشاريع",
      AWARDS: "الجوائز",
      Ourproducts: "المنتجات والحلول",
      Ourproducts_text: "اكتشف حلولًا ذكية ومرنة لتحسين أداء أعمالك.",

      Show: "اطّلع على المزيد",
      our_mission: "رسالتنا",
      our_vision: "رؤيتنا",
      our_values: "قيمنا",

      mission_text:
        "دعم بيئة العمل وتعزيز قيمة التقنيات والأنظمة الحديثة التي تخدم الشركات والمؤسسات ورواد الأعمال. نعمل على تطوير الحلول التقنية وفقًا لأعلى المعايير وبأسلوب تنافسي يتناسب مع حاجة العملاء.",

      vision_text:
        "نسعى لتوسيع نطاق عملنا محليًا وعالميًا، لنصبح الخيار الأفضل لعملائنا من خلال تطبيق أفضل الممارسات التقنية وتوفير حلول موثوقة ومبتكرة تخدم جميع القطاعات.",

      value_1_title: "التفاني",
      value_1_text:
        "نقدم أعلى مستويات الخدمة والالتزام بالتسليم في الوقت المحدد مع دعم كامل لاحتياجات عملائنا في جميع المراحل.",

      value_2_title: "الخصوصية",
      value_2_text:
        "نحرص على توفير الأنظمة والحلول التي تضمن سرية البيانات وتمنح المستخدم الثقة في تحقيق أفضل أداء ونتائج.",

      value_3_title: "الثقة",
      value_3_text:
        "نبني علاقات طويلة الأمد مبنية على الثقة والمصداقية مع عملائنا وشركائنا لتحقيق أهداف مشتركة.",

      value_4_title: "الإبداع",
      value_4_text:
        "نقدم حلولاً مبتكرة بطرق غير تقليدية، تميزنا في السوق وتجعل من خدماتنا ذات قيمة حقيقية.",

      value_5_title: "التطوير",
      value_5_text:
        "نطور أنفسنا دائمًا وندعم فرق العمل لضمان تقديم أحدث التقنيات والحلول وفق أفضل الممارسات.",

      value_6_title: "الذكاء التقني",
      value_6_text:
        "نمزج بين المعرفة التقنية العميقة وفهم احتياجات العملاء لنقدم حلولًا ذكية تواكب متغيرات السوق.",

      why_choose_us: "لماذا نحن؟",
      why_choose_us_desc:
        "نقدّم حلولًا إبداعية. نستخدم مهارات القيادة عبر الوسائط قبل تطوير الابتكار. نبني منصات قياسية دون تطبيقات معقدة. نتقدم بسهولة عبر التعاون وتبادل الأفكار",
      reason_1_title: "فريق عمل محترف",
      reason_2_title: "تنفيذ الأعمال باحترافية",
      reason_3_title: "خدمات مجانية مدى الحياة",
      reason_4_title: "خطط أسعار مناسبة",
      Call_US: "اتصل بنا في اي وقت ",
      Started: "ابدأ اليوم",
      CTA_Text: " تمكين أعمالك بحلول ذكية",
      Tech_Solutions: "حلولنا التقنية",
      Tech_Text:
        "  نعزز تميز عملائنا ونمنحهم كفاءة تشغيلية دائمة من خلال تقديم أفضل  الحلول التقنية.",
      pc: "أجهزة الكمبيوتر",
      Pc_text:
        "لدينا فريق عمل استثنائي يلبي حاجة عملائنا ويوفر لهم أجهزة الكمبيوتر من سيرفرات أو وحدات طرفية من أفضل وأقوى العلامات التجارية، وكذلك الأجهزة ذات المواصفات الخاصة لنمكنهم من الإبداع والإنجاز.",

      OS: "البرامج التشغيلية",
      Os_text:
        "نوفر حاجة عملائنا من برامج التشغيل المختلفة مثل برامج الويندوز الأصلية، برامج الأوفيس، وأنظمة تشغيل السيرفرات والوحدات الطرفية المناسبة.",
      PS: "أنظمة الحماية",
      PS_text:
        "نقوم بتوريد أنظمة مكافحة الفيروسات، ومكافحة الهكر والاختراق لتعزيز الأمن السيبراني وحماية الأجهزة والبيانات.",

      Ha: "ملحقات الأجهزة",
      Ha_text:
        "نوفر طابعات، ماسحات ضوئية، ونقاط بيع وغيرهم من الملحقات عالية الجودة ذات العمر الطويل والسعر المميز.",
      LAN: "الشبكات المحلية (LAN)",
      LAN_text:
        "نبني شبكات اتصال محلية للمنازل والمكاتب والمنشآت الصغيرة، ونوفر المعدات وخدمات الصيانة والدعم الفني الكامل.",
      WAN: "الشبكات واسعة النطاق (WAN)",
      WAN_text:
        "نوفر الشبكات الواسعة بمعدات وبنية تحتية متقدمة، لربط المستخدمين بمناطق جغرافية كبيرة بفعالية وبتكلفة مناسبة.",
      CTA_About: "   لماذا نحن ؟",
      Sales_Email: " البريد الإلكتروني للمبيعات",
      Inv_acc_feature_1: "شجرة محاسبية حتى 10 مستويات فرعية",
      Inv_acc_feature_2: "تصدير إلى Excel وWord وPDF وTxt",
      Inv_acc_feature_3: "إمكانية حفظ نسخ من المستندات داخل قيد اليومية",
      Inv_acc_feature_4: "دعم حتى 99 فرعًا",
      Inv_acc_feature_5: "ميزة مراكز التكلفة المتعددة والفردية",
      Inv_acc_feature_6: "قاعدة بيانات SQL Server",
      Inv_acc_feature_7: "سند قبض أو صرف نقدي بتسلسل مستقل عن المدة",
      Inv_acc_feature_8: "إمكانية فصل النقدي عن الشيكات في القبض أو الصرف",
      Inv_acc_feature_9: "نسخ احتياطي تلقائي",
      Inv_acc_feature_10: "كشف حساب متعدد السنوات والفروع",
      Inv_acc_feature_11: "أستاذ عام متعدد السنوات والفروع",
      Inv_acc_feature_12: "صلاحيات مستقلة لكل مستخدم",
      Inv_acc_feature_13: "الأصول الثابتة واحتساب الإهلاك",
      Inv_acc_feature_14: "إمكانية التعامل مع الاعتمادات المستندية",
      Inv_acc_feature_15: "تقارير تفصيلية متنوعة وخيارات عرض مخصصة",
      Inv_acc_feature_16: "إعادة تقييم الأصل الثابت",
      Sending: "جارٍ الإرسال...",
  Message_Sent_Successfully: "تم إرسال الرسالة بنجاح.",
  Message_Sending_Failed: "حدث خطأ أثناء الإرسال. حاول مرة أخرى."
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

