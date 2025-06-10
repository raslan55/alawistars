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
      CompanyName:"Nujoum Al Alawi Computer Systems",
      companyDescription: "Nujoum Al Alawi Computer Systems was launched in 1994 to provide For the Saudi society and economy aspiring for growth and leadership At that time, software solutions and electronic systems in addition to For various types of technical services and products Developed that keeps pace with the aspirations of companies and private institutions at that time, and in order to contribute from During its role in facilitating the management function and improving production, Governance and control of work, and was able from the first moment From its launch, gaining the trust of its customers and consolidating its position As a reliable and indispensable technology partner for many Government and private agencies, and continued to provide performance Distinguished and providing advanced technical services and products Through which it was able to enrich the system Management and the world of systems, software and modern technology in the Kingdom, and helped it achieve huge leaps in The size of its outputs, its profit margins, and its level of excellence in Work, management and organization, and tracked in this framework An ever-evolving working methodology based primarily on customer satisfaction and providing perfect and reliable products and services, Nojoom Al Alawi became the number one service provider and seller Expert technology with more than 10,000 companies and institutions Inside and outside the Kingdom",
      footertext:"To be a recognized world leader and authority in the industry for Software",
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
      commu_Disc:"A solution for managing telecom companies, customer services, billing, and shipment tracking.",
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
   Sales_Email :" Sales Email",

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
       CompanyName:"نجوم العلاوي لنظم الكمبيوتر ",
             companyDescription: "انطلقت نجوم العلاوي لنظم الكمبيوتر عام ١٩٩٤ لتوفر للمجتمع والاقتصاد السعودي الطامح للنمو والريادة آنذاك الحلول البرمجية والأنظمة الالكترونية بالإضافة لأنواع متعددة من الخدمات والمنتجات التقنية المتطورة التي تتواكب مع تطلعات الشركات والمؤسسات الخاصة في ذلك الوقت، ولكي تساهم من خلال دورها في تسهيل وظيفة الإدارة وتحسين الإنتاج ، وحوكمة وضبط العمل، واستطاعت منذ اللحظة الأولى من انطلاقها كسب ثقة عملائها وترسيخ مكانتها كشريك تقني موثوق ولا غنى عنه لدى الكثير من الجهات الحكومية والخاصة، واستمرت على تقديم الأداء المتميز وتقديم الخدمات والمنتجات التقنية المتطورة والتي استطاعت من خلالها العمل على إثراء منظومة الإدارة وعالم الأنظمة والبرمجيات والتكنولوجيا الحديثة بالمملكة، وساعدتها في تحقيق قفزات هائلة في حجم مخرجاتها وهوامش أرباحها ومستوى تميزها في العمل والإدارة والتنظيم، وتتبعت في هذا الإطار منهجية عمل دائمة التطور ترتكز في المقام الأول على رضا العملاء وتقديم منتجات وخدمات مثالية وموثوقة، فأصبحت نجوم العلاوى مزود الخدمة الأول وبائع التقنية الخبير لدى ما يزيد عن ١٠ آلاف شركة ومؤسسة داخل وخارج المملكة.",

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
      Sales_Email :" البريد الإلكتروني للمبيعات",
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
