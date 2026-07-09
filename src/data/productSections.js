import { FiCheckCircle, FiXCircle, FiClock, FiShield, FiTrendingUp, FiZap, FiCheck, FiLayers, FiBriefcase, FiShoppingBag, FiTruck, FiHome, FiUsers, FiClipboard, FiCreditCard } from "react-icons/fi";

export const defaultSections = {
  // ── 1. Hero Section — القسم الرئيسي ──
  hero: {
    eyebrow: {
      ar: "برنامج سنمار للمحاسبة والمخزون — متكامل بالكامل مع ZATCA",
      en: "Sinmar Accounting & Inventory — ZATCA-ready"
    },
    title: {
      ar: "برنامج المحاسبة والمخزون — سنمار ERP",
      en: "Accounting & Inventory — Sinmar ERP"
    },
    desc: {
      ar: "برنامج سنمار للمحاسبة والمخزون يجمع المحاسبة والمخزون في منصة واحدة — كل حركة بضاعة تُولّد قيداً محاسبياً تلقائياً، بلا تدخل بشري وبلا أخطاء.",
      en: "Sinmar combines accounting and inventory in a single platform — every stock movement generates an accounting entry automatically, without manual intervention or errors."
    },
    bullets: [
      { ar: "توفير 40 ساعة شهرياً", en: "Save 40 hours monthly", key: "Prod_Save_Time", icon: "FiClock" },
      { ar: "تقليل الأخطاء 100%", en: "Reduce errors by 100%", key: "Prod_Reduce_Errors", icon: "FiTrendingUp" },
      { ar: "متوافق مع ZATCA", en: "ZATCA compliant", key: "Prod_Zatca_Compliant", icon: "FiShield" }
    ]
  },
  // ── 2. Definition Section — تعريف المنتج ──
  definition: {
    title: {
      ar: "ما هو برنامج المحاسبة والمخزون المتكامل؟",
      en: "What is an integrated accounting & inventory system?"
    },
    p1: {
      ar: "نظام واحد يربط البرنامج بالمخزون — تلقائياً.",
      en: "One system that connects inventory and accounting — automatically."
    },
    p2: {
      ar: "برنامج المحاسبة والمخزون المتكامل هو نظام ERP يجمع وحدتي المحاسبة وإدارة المخازن في منصة واحدة، بحيث تنعكس كل حركة مخزنية — استلام، بيع، إرجاع، تحويل — فوراً كقيود محاسبية دقيقة في السجلات المالية.",
      en: "An integrated accounting & inventory ERP links the accounting and inventory modules in a single platform so every stock movement — receive, sale, return, transfer — is immediately reflected as precise accounting entries in the financial records."
    }
  },

  // ── 3. ZATCA & Integration Section (Replaces Before/After) ──
  integration: {
    title: {
      ar: "برنامج مخزون متوافق مع ZATCA والفاتورة الإلكترونية",
      en: "ZATCA and E-Invoicing Compliant Inventory Software"
    },
    desc: {
      ar: "متطلبات هيئة الزكاة والضريبة والجمارك باتت إلزامية لجميع المنشآت. برنامج سنمار مهيأ بالكامل للامتثال دون أي تعقيدات.",
      en: "ZATCA requirements are mandatory for all establishments. Sinmar software is fully equipped for compliance without any complications."
    },
    leftBlocks: [
      {
        icon: "FiCheckCircle",
        title: { ar: "متوافق مع ZATCA — المرحلتان", en: "ZATCA Compliant — Both Phases" },
        desc: { ar: "نظام سنمار معتمد ومرتبط بمنصة فاتورة للمرحلتين الأولى والثانية من الفوترة الإلكترونية في المملكة.", en: "Sinmar system is certified and connected to the Fatoora platform for phases 1 and 2 of e-invoicing in the Kingdom." }
      },
      {
        icon: "FiShield",
        title: { ar: "أمان وحماية بيانات بنكية", en: "Bank-level Data Security & Protection" },
        desc: { ar: "تشفير كامل للبيانات، ونسخ احتياطية منتظمة لضمان الاستمرارية.", en: "Full data encryption, and regular backups to ensure continuity." }
      }
    ],
    rightBlocks: [
      {
        title: { ar: "الفاتورة الإلكترونية — المرحلة الثانية (الربط)", en: "E-Invoicing — Phase Two (Integration)" },
        desc: { ar: "النظام مربوط ببوابة فاتورة عبر API معتمد. يرسل الفواتير لحظياً ويستقبل الإشعارات بشكل آلي وفق متطلبات المرحلة الثانية من ZATCA.", en: "The system is connected to the Fatoora portal via approved API. It sends invoices instantly and receives notifications automatically." }
      },
      {
        title: { ar: "ضريبة القيمة المضافة (VAT 15%)", en: "Value Added Tax (VAT 15%)" },
        desc: { ar: "احتساب VAT تلقائياً على جميع فواتير المبيعات والمشتريات، مع إعداد الإقرارات الضريبية الدورية بصيغة جاهزة للتقديم.", en: "Automatic calculation of VAT on all sales and purchase invoices, with periodic tax return preparation." }
      },
      {
        title: { ar: "ربط الجمارك والاستيراد", en: "Customs and Import Integration" },
        desc: { ar: "تسجيل عمليات الاستيراد والتخليص الجمركي مع احتساب تكاليف الاستيراد وإضافتها لتكلفة البضاعة تلقائياً.", en: "Record import operations and customs clearance with automatic calculation of import costs." }
      },
      {
        title: { ar: "أرشفة إلكترونية معتمدة", en: "Certified Electronic Archiving" },
        desc: { ar: "حفظ جميع وثائق المخزون والفواتير والمستندات لمدة 6 سنوات وفق متطلبات الأرشفة الإلكترونية لهيئة الزكاة.", en: "Save all inventory documents, invoices and documents for 6 years according to ZATCA's e-archiving requirements." }
      }
    ]
  },
  // ── 4. Features Section — الميزات ──
  features: {
    title: {
      ar: "ميزات تقودك للنجاح",
      en: "Features that drive success"
    },
    desc: {
      ar: "نظام متكامل يمنحك كل الأدوات للسيطرة على مخزونك وحساباتك.",
      en: "An integrated system that gives you all the tools to control your inventory and accounts."
    },
    list: [
      {
        title: { ar: "ربط المخزون بالمحاسبة", en: "Inventory-Accounting Linkage" },
        desc: { ar: "تسجيل تلقائي لجميع حركات المخزون كقيود محاسبية مزدوجة فور حدوثها.", en: "Automatically records all inventory movements as double-entry journal entries instantly." },
        points: [
          { ar: "قيود اليومية والأستاذ آلياً", en: "Auto journal & ledger entries" },
          { ar: "تسوية البنك بنقرة واحدة", en: "One-click bank reconciliation" },
          { ar: "أرشيف محاسبي كامل", en: "Complete accounting archive" }
        ]
      },
      {
        title: { ar: "تقارير مالية لحظية", en: "Real-Time Financial Reports" },
        desc: { ar: "اطلع على الميزانية العمومية وقائمة الدخل والتدفقات النقدية بيانات محدّثة فوراً.", en: "View balance sheet, income statement, and cash flows with instantly updated data." },
        points: [
          { ar: "ميزانية ودخل فوري", en: "Instant balance & income" },
          { ar: "تصدير PDF وExcel", en: "PDF & Excel export" },
          { ar: "مقارنات بين الفترات", en: "Period comparisons" }
        ]
      },
      {
        title: { ar: "إدارة الفواتير المتكاملة", en: "Integrated Invoice Management" },
        desc: { ar: "إصدار فواتير ضريبية متوافقة مع ZATCA مرتبطة مباشرة بالمخزون والحسابات.", en: "Issue ZATCA-compliant tax invoices directly linked to inventory and accounts." },
        points: [
          { ar: "فواتير ZATCA المرحلتان", en: "ZATCA Phase 1 & 2" },
          { ar: "ربط فوري بالمخزون", en: "Instant inventory link" },
          { ar: "QR Code وXML تلقائياً", en: "Auto QR & XML" }
        ]
      },
      {
        title: { ar: "تتبع المخزون وتكاليفه", en: "Stock Tracking & Costing" },
        desc: { ar: "راقب مستويات المخزون وتكاليفه مع تنبيهات تلقائية عند الوصول لنقطة إعادة الطلب.", en: "Monitor stock levels and costs with automatic alerts when reorder point is reached." },
        points: [
          { ar: "تنبيهات نقطة الطلب", en: "Reorder point alerts" },
          { ar: "تتبع الدفعات والصلاحية", en: "Batch & expiry tracking" },
          { ar: "تكلفة مرجحة دقيقة", en: "Accurate weighted cost" }
        ]
      },
      {
        title: { ar: "إدارة مستودعات متعددة", en: "Multi-Warehouse Management" },
        desc: { ar: "أدر أكثر من مستودع مع مراكز تكلفة مستقلة وتقارير موحدة على مستوى المجموعة.", en: "Manage multiple warehouses with independent cost centers and consolidated reports." },
        points: [
          { ar: "تحويل بضائع بين الفروع", en: "Inter-branch transfers" },
          { ar: "مراكز تكلفة مستقلة", en: "Independent cost centers" },
          { ar: "تقارير موحدة", en: "Consolidated reports" }
        ]
      }
    ]
  },
  // ── 5. Social Proof Section — الإحصائيات والأرقام ──
  socialProof: {
    title: {
      ar: "شركاء النجاح يثقون في سنمار",
      en: "Success partners trust Sinmar"
    },

    stats: [
      { value: "+10000", label: { ar: "عميل", en: "Clients" } },
      { value: "99%", label: { ar: "نسبة نجاح", en: "Success Rate" } },
      { value: "100%", label: { ar: "متوافق مع ZATCA", en: "ZATCA Compliant" } },
      { value: "+30", label: { ar: "سنوات خبرة", en: "Years Exp" } }
    ]


  },
  // ── 6. Testimonials — آراء العملاء ──
  testimonialIds: ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
  // ── 7. FAQs — الأسئلة الشائعة ──
  faqs: [
    {
      q: { ar: "ما هو أفضل برنامج المحاسبة والمخزون في السعودية؟", en: "What is the best accounting software in SA?" },
      a: { ar: "أفضل حل هو النظام الموحد الذي يربط المخزون بالمحاسبة ويدعم ZATCA. سنمار مصمم للسوق المحلي.", en: "The best solution is a unified system. Sinmar is designed for the local market." }
    },
    {
      q: { ar: "هل النظام مناسب للشركات الصغيرة والمتوسطة؟", en: "Is it suitable for SMEs?" },
      a: { ar: "نعم، يمكن بدء باقة أساسية والتوسع لاحقاً مع نمو العمل.", en: "Yes, you can start with a basic package and scale." }
    },
    {
      q: { ar: "هل النظام سحابي وقابل للوصول من أي مكان؟", en: "Is it cloud-based?" },
      a: { ar: "نعم، النظام سحابي مع تحديثات ونسخ احتياطية وأمان مشدّد.", en: "Yes, cloud-based with high security." }
    }
  ],
  // ── 8. Use Cases — حالات الاستخدام ──
  useCases: {
    tag: { ar: "حالات الاستخدام", en: "Use Cases" },
    title: { ar: "إدارة المخزون عبر مختلف القطاعات", en: "Inventory management across sectors" },
    desc: { ar: "برنامج سنمار للمخزون العام مرن ومُصمَّم لخدمة طيف واسع من القطاعات والأحجام في السوق السعودي.", en: " Sinmar inventory system is flexible and designed to serve a wide range of sectors and sizes in the Saudi market." },
    cardTag: { ar: "قطاع", en: "Sector" },
    list: [
      {
        icon: FiShoppingBag,
        title: { ar: "برنامج مخزون للمتاجر الإلكترونية", en: "Inventory system for e-commerce" },
        description: { ar: "ربط المخزون بمنصات التجارة الإلكترونية، تحديث الأرصدة فورياً مع كل طلب، وتجنب بيع منتجات غير متوفرة.", en: "Connect inventory with e-commerce platforms, update balances instantly with every order, and avoid selling out-of-stock items." },
      },
      {
        icon: FiTruck,
        title: { ar: "إدارة مخزون المصانع والإنتاج", en: "Factory and production inventory management" },
        description: { ar: "تتبع المواد الخام، قيد الإنتاج، والمنتجات النهائية مع ربط مباشر بأوامر الإنتاج وتكاليف التصنيع.", en: "Track raw materials, work in progress, and finished goods with direct links to production orders and manufacturing costs." },
      },
      {
        icon: FiHome,
        title: { ar: "برنامج مخزون للمحلات التجارية", en: "Retail and general trade inventory system" },
        description: { ar: "إربط المخزون بنقطة البيع (POS) لتحديث الأرصدة لحظياً مع كل صفقة، وتقارير بضائع الأعلى والأقل مبيعاً.", en: "Connect inventory with Point of Sale (POS) to update balances instantly with every transaction, and generate best-selling and low-selling product reports." },
      },
      {
        icon: FiBriefcase,
        title: { ar: "مخزون مواد شركات المقاولات", en: "Inventory system for contracting companies" },
        description: { ar: "تتبع مواد البناء والمعدات عبر مواقع المشاريع المتعددة مع تخصيص التكاليف لكل مشروع.", en: "Track construction materials, project equipment, and operating costs with location-based reporting and e-invoicing integration." },
      },
      {
        icon: FiUsers,
        title: { ar: "برنامج مخزون الصيدليات والمستلزمات الطبية", en: "Inventory system for pharmacies and medical supplies" },
        description: { ar: "تتبع تواريخ الصلاحية، الدفعات الإنتاجية، وتنبيهات انتهاء الصلاحية قبل وقوع الهدر.", en: "Track expiry dates, batches, and expiry alerts before wastage occurs." },
      },
      {
        icon: FiClipboard,
        title: { ar: "إدارة مخزون شركات التوزيع والخدمات اللوجستية", en: "Inventory system for distribution and logistics companies" },
        description: { ar: "راقب حركة البضائع والمبيعات عبر نقاط التوزيع مع تقارير تفصيلية للشحنات والمخزون.", en: "Track goods movement and sales across distribution points with detailed reports for shipments and inventory." },
      }
    ]
  },
  // ── 9. ERP Modules — وحدات ERP المتكاملة ──
  erpModules: {
    tag: { ar: "وحدات ERP", en: "ERP Modules" },
    title: { ar: "برنامج المخزون جزء من منظومة ERP متكاملة", en: "Inventory is part of an integrated ERP system" },
    desc: { ar: "برنامج إدارة المخزون من سنمار ليس منعزلاً؛ بل هو قلب نابض يتصل لحظياً بجميع وحدات الأعمال الأخرى.", en: "Sinmar Inventory is not isolated; it is a beating heart that connects instantly to all other business units." },
    list: [
      {
        icon: FiLayers,
        title: { ar: "نظام المحاسبة", en: "Accounting module" },
        description: { ar: "ترحيل قيود المخزون والمشتريات للنظام المحاسبي تلقائًا بدون إدخال مزدوج.", en: "Transfer inventory and purchasing entries to the accounting system automatically without double entry." },
      },
      {
        icon: FiHome,
        title: { ar: "برنامج مخزون", en: "Inventory module" },
        description: { ar: "إدارة شاملة للمخزون مع متابعة دقيقة للمواد، المبيعات، وتنبيهات النقص.", en: "Comprehensive inventory management with accurate tracking of materials, sales, and stock alerts." },
      },
      {
        icon: FiUsers,
        title: { ar: "نقاط البيع (POS)", en: "POS module" },
        description: { ar: "نقاط بيع سريعة ومتكاملة مع دعم قارئ الباركود، طباعة الفواتير، وإدارة الكاشير.", en: "Fast, integrated POS system with barcode reader support, invoice printing, and cash register management." },
      },
      {
        icon: FiShoppingBag,
        title: { ar: "نظام المشتريات والموردين", en: "Purchasing module" },
        description: { ar: "من أمر الشراء حتى استلام البضاعة وتحديث المخزون — دورة مشتريات مغلقة بالكامل", en: "From purchase order to goods receipt and inventory update — a complete closed purchasing cycle" },
      },
      {
        icon: FiCreditCard,
        title: { ar: "نظام ERP المتكامل", en: "Integrated ERP system" },
        description: { ar: "المخزون قلب ERP — يتصل بالمبيعات، الإنتاج، المالية، والموارد البشرية.", en: "Inventory is the heart of ERP — connected to sales, production, finance, and HR." },
      },
      {
        icon: FiTruck,
        title: { ar: "التجارة الإلكترونية", en: "eCommerce module" },
        description: { ar: "مزامنة المخزون مع متجرك الإلكتروني لحظيًا لتجنب الطلبات على منتجات غير متوفرة.", en: "Synchronize inventory with your online store in real-time to avoid orders for unavailable products." },
      }
    ]
  },
  // ── 10. Strengths — نقاط القوة ──
  strengths: {
    tag: { ar: "لماذا سنمار؟", en: "Why Sinmar?" },
    title: { ar: "لماذا برنامج سنمار هو الخيار الأمثل لإدارة مخزونك؟", en: "Why is Sinmar the perfect choice for your inventory?" },
    quote: { ar: "“التحكم في المخزون هو التحكم في أرباحك.”", en: "\"Controlling inventory is controlling your profits.\"" },
    quoteText: { ar: "مع سنمار، لن تخسر مبيعات بسبب نفاد الكمية ولن تُجمد أموالك في بضائع راكدة.", en: "With Sinmar, you won't lose sales due to stockouts and won't freeze your money in dead stock." },
    list: [
      {
        icon: FiShield,
        title: { ar: "مُصمَّم للسوق السعودي", en: "Designed for the Saudi market" },
        description: { ar: "برنامج مخزون مبني خصيصًا لاحتياجات السوق السعودي — اللغة العربية، الريال السعودي، ومتطلبات ZATCA وVAT.", en: "Inventory software built specifically for Saudi market needs — Arabic language, Saudi Riyal, and ZATCA & VAT compliance." },
      },
      {
        icon: FiClock,
        title: { ar: "تشغيل سريع خلال أيام", en: "Fast deployment in days" },
        description: { ar: "فريق التطبيق لدينا يشغل النظام ويرحل بيانات مخزونك الحالية في أيام معدودة مع تدريب كامل للفريق.", en: "Our implementation team configures the system and migrates your existing inventory data in a few days, with full team training." },
      },
      {
        icon: FiUsers,
        title: { ar: "تقارير وتحليلات متقدمة", en: "Advanced analytics and reporting" },
        description: { ar: "أكثر من 50 تقرير جاهز: معدل دوران المخزون، أبطأ المنتجات حركة، التنبؤ بالطلب، وتحليل أداء الموردين.", en: "More than 50 ready reports: inventory turnover rate, slowest moving products, demand forecasting, and supplier performance analysis." },
      },
      {
        icon: FiTrendingUp,
        title: { ar: "دعم فني عربي متخصص 24/7", en: "Specialized Arabic technical support 24/7" },
        description: { ar: "فريق دعم يفهم عملك، يتكلم العربية، ومتاح عبر الواتساب والهاتف والبريد — دعم حقيقي لا ردود آلية.", en: "A support team that understands your business, speaks Arabic, and is available via WhatsApp, phone, and email — real support, not automated responses." },
      }
    ]
  },
  dashboardPreview: {
    title: {
      ar: "شاهد لوحة التحكم والواجهات الذكية في نظام سنمار",
      en: "Explore Sinmar's Smart Dashboard & Interfaces"
    },
    desc: {
      ar: "واجهة مستخدم عصرية، واضحة ومصممة بأعلى المعايير لتسهل عليك إدارة كافة العمليات من شاشة واحدة وبكل سلاسة.",
      en: "A modern, clear, and highly standard user interface designed to help you run all operations seamlessly from a single screen."
    },
    image: "Productes/dashboard-mockup.png"
  }
};

/* ═══════════════════════════════════════════════════════════════════════════
   📋 القالب الافتراضي — يُستخدم للمنتجات التي لم يتم تخصيص محتواها بعد
   Default Placeholder Template — used for products not yet customized
   ═══════════════════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════════════════
   📦 صفحة 3: نظام المخزون — inventory-system
   Page 3: Inventory System
   ═══════════════════════════════════════════════════════════════════════════ */
export const inventorySystemSections = {
  // ── 1. Hero Section — القسم الرئيسي ──
  hero: {
    eyebrow: {
      ar: "برنامج سنمار للمحاسبة والمخزون — متكامل بالكامل مع ZATCA",
      en: "Sinmar Accounting & Inventory — ZATCA-ready"
    },
    title: {
      ar: "برنامج سنمار لإدارة المخزون: رؤية كاملة على كل منتج في كل لحظة",
      en: "Sinmar Inventory System: Full visibility on every product at any time"
    },
    desc: {
      ar: "هو نظام إدارة مخازن سحابي متكامل يمنحك رؤية لحظية كاملة على كل منتج، في كل مستودع، في أي وقت — مع توافق تام مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA). ",
      en: "Sinmar Inventory is a comprehensive cloud-based inventory management system that gives you real-time visibility into every product, in every warehouse, at any time — fully compliant with Zakat, Tax and Customs Authority (ZATCA) requirements.   "
    },
    bullets: [
      { ar: "توفير 40 ساعة شهرياً", en: "Save 40 hours monthly", key: "Prod_Save_Time", icon: "FiClock" },
      { ar: "تقليل الأخطاء 100%", en: "Reduce errors by 100%", key: "Prod_Reduce_Errors", icon: "FiTrendingUp" },
      { ar: "متوافق مع ZATCA", en: "ZATCA compliant", key: "Prod_Zatca_Compliant", icon: "FiShield" }
    ]
  },
  // ── 2. Definition Section — تعريف المنتج ──
  definition: {
    title: {
      ar: " ما هو برنامج سنمار للمخزون؟ ولماذا تحتاجه شركتك؟ ",
      en: "What is Sinmar Inventory System?"
    },
    p1: {
      ar: " برنامج سنمار لإدارة المخزون: رؤية كاملة على كل منتج في كل لحظة ",
      en: "  Sinmar Inventory System: Full visibility on every product at any time  "
    },
    p2: {
      ar: " هو حل رقمي متكامل يُتيح لشركتك تتبع جميع المنتجات والبضائع عبر دورة حياتها الكاملة: من لحظة الاستلام من الموردين، مروراً بالتخزين والنقل بين المستودعات، وصولاً إلى البيع وتحديث الأرصدة تلقائياً ",
      en: "It is a complete digital solution that enables your company to track all products and goods throughout their entire lifecycle: from the moment of receipt from suppliers, through storage and transfer between warehouses, to sale and automatic balance updates."
    }
  },
  // ── 3. ZATCA & Integration Section (Replaces Before/After) ──
  integration: {
    title: {
      ar: "برنامج مخزون متوافق مع ZATCA والفاتورة الإلكترونية",
      en: "ZATCA and E-Invoicing Compliant Inventory Software"
    },
    desc: {
      ar: "متطلبات هيئة الزكاة والضريبة والجمارك باتت إلزامية لجميع المنشآت. برنامج سنمار مهيأ بالكامل للامتثال دون أي تعقيدات.",
      en: "ZATCA requirements are mandatory for all establishments. Sinmar software is fully equipped for compliance without any complications."
    },
    leftBlocks: [
      {
        icon: "FiCheckCircle",
        title: { ar: "متوافق مع ZATCA — المرحلتان", en: "ZATCA Compliant — Both Phases" },
        desc: { ar: "نظام سنمار معتمد ومرتبط بمنصة فاتورة للمرحلتين الأولى والثانية من الفوترة الإلكترونية في المملكة.", en: "Sinmar system is certified and connected to the Fatoora platform for phases 1 and 2 of e-invoicing in the Kingdom." }
      },
      {
        icon: "FiShield",
        title: { ar: "أمان وحماية بيانات بنكية", en: "Bank-level Data Security & Protection" },
        desc: { ar: "تشفير كامل للبيانات، ونسخ احتياطية منتظمة لضمان الاستمرارية.", en: "Full data encryption, and regular backups to ensure continuity." }
      }
    ],
    rightBlocks: [
      {
        title: { ar: "الفاتورة الإلكترونية — المرحلة الثانية (الربط)", en: "E-Invoicing — Phase Two (Integration)" },
        desc: { ar: "النظام مربوط ببوابة فاتورة عبر API معتمد. يرسل الفواتير لحظياً ويستقبل الإشعارات بشكل آلي وفق متطلبات المرحلة الثانية من ZATCA.", en: "The system is connected to the Fatoora portal via approved API. It sends invoices instantly and receives notifications automatically." }
      },
      {
        title: { ar: "ضريبة القيمة المضافة (VAT 15%)", en: "Value Added Tax (VAT 15%)" },
        desc: { ar: "احتساب VAT تلقائياً على جميع فواتير المبيعات والمشتريات، مع إعداد الإقرارات الضريبية الدورية بصيغة جاهزة للتقديم.", en: "Automatic calculation of VAT on all sales and purchase invoices, with periodic tax return preparation." }
      },
      {
        title: { ar: "ربط الجمارك والاستيراد", en: "Customs and Import Integration" },
        desc: { ar: "تسجيل عمليات الاستيراد والتخليص الجمركي مع احتساب تكاليف الاستيراد وإضافتها لتكلفة البضاعة تلقائياً.", en: "Record import operations and customs clearance with automatic calculation of import costs." }
      },
      {
        title: { ar: "أرشفة إلكترونية معتمدة", en: "Certified Electronic Archiving" },
        desc: { ar: "حفظ جميع وثائق المخزون والفواتير والمستندات لمدة 6 سنوات وفق متطلبات الأرشفة الإلكترونية لهيئة الزكاة.", en: "Save all inventory documents, invoices and documents for 6 years according to ZATCA's e-archiving requirements." }
      }
    ]
  },
  // ── 4. Features Section — الميزات ──
  features: {
    title: {
      ar: "ميزات تقودك للنجاح",
      en: "Features that drive success"
    },
    desc: {
      ar: "نظام متكامل يمنحك كل الأدوات للسيطرة على مخزونك وحساباتك.",
      en: "An integrated system that gives you all the tools to control your inventory and accounts."
    },
    list: [
      {
        title: { ar: "تتبع المخزون اللحظي", en: "Real-Time Stock Tracking" },
        desc: { ar: "رؤية فورية وشاملة على كل صنف في كل مستودع — الكمية والتكلفة والموقع.", en: "Instant full visibility on every item in every warehouse — quantity, cost, and location." },
        points: [
          { ar: "رصيد حي في كل مستودع", en: "Live balance per warehouse" },
          { ar: "تنبيه نقطة الطلب", en: "Reorder point alert" },
          { ar: "تتبع الباركود بسرعة", en: "Fast barcode scanning" }
        ]
      },
      {
        title: { ar: "ربط المخزون بالمحاسبة", en: "Inventory-Accounting Link" },
        desc: { ar: "كل حركة مخزنية تُولّد قيداً محاسبياً فورياً — بدون إدخال مزدوج.", en: "Every stock move instantly generates an accounting entry — no double entry." },
        points: [
          { ar: "قيود آلية فورية", en: "Instant auto entries" },
          { ar: "دفتر أستاذ محدّث", en: "Updated ledger" },
          { ar: "تقارير مالية حية", en: "Live financial reports" }
        ]
      },
      {
        title: { ar: "إدارة المشتريات والموردين", en: "Purchasing & Vendor Management" },
        desc: { ar: "دورة مشتريات مغلقة بالكامل من طلب الشراء حتى الاستلام وتحديث المخزون.", en: "A complete purchase cycle from order to receipt and inventory update." },
        points: [
          { ar: "أوامر شراء إلكترونية", en: "E-purchase orders" },
          { ar: "مقارنة عروض الأسعار", en: "Price quote comparison" },
          { ar: "تقييم أداء الموردين", en: "Vendor performance rating" }
        ]
      },
      {
        title: { ar: "الجرد والتسوية", en: "Physical Count & Reconciliation" },
        desc: { ar: "جرد المستودعات بسرعة باستخدام الجهاز المحمول أو الباركود، وتسوية الفروقات آلياً.", en: "Count warehouses quickly using handheld or barcode, and reconcile differences automatically." },
        points: [
          { ar: "جرد بالهاتف أو الباركود", en: "Mobile or barcode count" },
          { ar: "تقرير فروقات فوري", en: "Instant variance report" },
          { ar: "تسوية آلية", en: "Automatic reconciliation" }
        ]
      },
      {
        title: { ar: "مستودعات متعددة ومراكز تكلفة", en: "Multi-Warehouse & Cost Centers" },
        desc: { ar: "إدارة فروع ومستودعات متعددة مع مراكز تكلفة مستقلة وتقارير موحدة.", en: "Manage multiple branches and warehouses with independent cost centers and consolidated reports." },
        points: [
          { ar: "تحويل بضائع بين الفروع", en: "Inter-branch transfers" },
          { ar: "ربحية كل مستودع", en: "Per-warehouse profitability" },
          { ar: "تقرير موحد للمجموعة", en: "Consolidated group report" }
        ]
      }
    ]
  },
  // ── 5. Social Proof Section — الإحصائيات والأرقام ──
  socialProof: {
    title: {
      ar: "شركاء النجاح يثقون في سنمار",
      en: "Success partners trust Sinmar"
    },
    stats: [
      { value: "+500", label: { ar: "عميل", en: "Clients" } },
      { value: "99%", label: { ar: "نسبة نجاح", en: "Success Rate" } },
      { value: "100%", label: { ar: "متوافق مع ZATCA", en: "ZATCA Compliant" } },
      { value: "+10", label: { ar: "سنوات خبرة", en: "Years Exp" } }
    ]
  },
  // ── 6. Testimonials — آراء العملاء ──
  testimonialIds: ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
  // ── 7. FAQs — الأسئلة الشائعة ──
  faqs: [
    {
      q: { ar: "ما هو أفضل برنامج مخزون للشركات الصغيرة في السعودية؟", en: "What is the best inventory software for small businesses in Saudi Arabia?" },
      a: { ar: "برنامج سنمار للمخزون العام مصمم ليناسب جميع أحجام الشركات في المملكة — من المنشآت الصغيرة والمتوسطة إلى الشركات الكبيرة متعددة المستودعات. يوفر واجهة بسيطة وعربية كاملة، باقات مرنة تتناسب مع الميزانيات المختلفة، وتشغيل سريع خلال أيام. ما يميّزه هو دعمه الكامل للمتطلبات السعودية مثل ZATCA وVAT بدون إعدادات إضافية.", en: "Sinmar Inventory System is designed to suit all company sizes in the Kingdom — from small and medium enterprises to large multi-warehouse corporations. It offers a simple and fully Arabic interface, flexible packages tailored to different budgets, and rapid deployment within days. What makes it unique is its full support for Saudi requirements like ZATCA and VAT without any additional setup." }
    },
    {
      q: { ar: "كيف أختار برنامج مخزون مناسب لمتجري الإلكتروني؟", en: "How do I choose a suitable inventory software for my e-commerce store?" },
      a: { ar: "عند اختيار برنامج مخزون لمتجرك الإلكتروني، ابحث عن هذه المعايير: (١) مزامنة فورية بين المخزون والمتجر الإلكتروني لتجنب بيع منتجات غير متوفرة. (٢) دعم الباركود وQR Code لسرعة الاستلام والشحن. (٣) تكامل مع منصات التجارة الإلكترونية الشائعة. (٤) تقارير الأصناف الأعلى والأقل مبيعاً. برنامج سنمار يُغطي جميع هذه المعايير.", en: "When choosing an inventory software for your e-commerce store, look for these criteria: (1) Instant synchronization between the inventory and the e-store to avoid selling out-of-stock items. (2) Barcode and QR Code support for fast receiving and shipping. (3) Integration with popular e-commerce platforms. (4) Reports on top-selling and least-selling items. Sinmar covers all these criteria." }
    },
    {
      q: { ar: "ما هي مميزات برامج المخزون السحابية المتوفرة في السوق السعودي؟", en: "What are the features of cloud inventory software available in the Saudi market?" },
      a: { ar: "برامج المخزون السحابية تتميز بـ: وصول من أي مكان وأي جهاز، تحديثات تلقائية مستمرة بدون رسوم إضافية، نسخ احتياطية يومية لحماية البيانات، وإمكانية التوسع بسهولة مع نمو الشركة. في السوق السعودي تحديداً، الأهم هو أن يكون النظام السحابي متوافقاً مع ZATCA وربطه ببوابة فاتورة — وهو ما يوفره برنامج سنمار بالكامل.", en: "Cloud inventory software features: access from anywhere on any device, continuous automatic updates at no extra cost, daily backups to protect data, and easy scalability as the company grows. In the Saudi market specifically, the most crucial aspect is compliance with ZATCA and integration with the Fatoora portal — which Sinmar fully provides." }
    },
    {
      q: { ar: "هل يوجد حساب تجريبي للنظام؟", en: "Is there a demo account for the system?" },
      a: { ar: "نعم، نُقدّم جلسة عرض تجريبية مُخصَّصة مع أحد خبرائنا، نستعرض فيها النظام بناءً على طبيعة نشاطك ومتطلباتك تحديداً — لا عرضاً عاماً. تواصل معنا لتحديد موعد الجلسة، وستحصل على تقييم كامل لكيفية مساعدة برنامج سنمار لشركتك.", en: "Yes, we offer a customized demo session with one of our experts, showcasing the system based specifically on the nature of your business and requirements — not just a generic overview. Contact us to schedule a session, and you'll receive a full assessment of how Sinmar can help your company." }
    },
    {
      q: { ar: "ما هي خطوات ربط النظام بهيئة الزكاة والضريبة والجمارك (ZATCA)؟", en: "What are the steps to link the system with ZATCA?" },
      a: { ar: "عملية الربط مع ZATCA عبر برنامج سنمار تمر بثلاث خطوات رئيسية: (١) إعداد بيانات المنشأة ورقم التسجيل الضريبي داخل النظام. (٢) توليد شهادة التوقيع الإلكتروني (CSID) والتسجيل في بوابة فاتورة. (٣) الربط التلقائي عبر API لإرسال الفواتير واستقبال الإشعارات لحظياً. فريقنا التقني يُنجز هذه الخطوات بالكامل نيابةً عنك ضمن مرحلة التطبيق.", en: "Linking with ZATCA through Sinmar involves three main steps: (1) Setting up the establishment's data and tax registration number within the system. (2) Generating the cryptographic stamp (CSID) and registering on the Fatoora portal. (3) Automatic API integration to send invoices and receive real-time notifications. Our technical team fully executes these steps on your behalf during implementation." }
    },
    {
      q: { ar: "هل يدعم النظام الفواتير الإلكترونية بالكامل؟", en: "Does the system fully support e-invoicing?" },
      a: { ar: "نعم، برنامج سنمار يدعم الفاتورة الإلكترونية بالكامل وفق متطلبات ZATCA للمرحلتين: المرحلة الأولى (إصدار الفاتورة بصيغة XML مع QR Code)، والمرحلة الثانية (الربط الفوري ببوابة فاتورة وإرسال الفواتير إلكترونياً قبل تسليمها للعميل). النظام يدعم فواتير المبيعات، المشتريات، وإشعارات الدائن والمدين.", en: "Yes, Sinmar fully supports e-invoicing according to ZATCA requirements for both phases: Phase One (issuing invoices in XML format with QR Code), and Phase Two (instant integration with the Fatoora portal and sending invoices electronically before delivering them to the customer). The system supports sales invoices, purchase invoices, and debit/credit notes." }
    },
    {
      q: { ar: "ما الفرق بين النسخة السحابية والنسخة المحلية من النظام؟", en: "What is the difference between the cloud and on-premise versions of the system?" },
      a: { ar: "النسخة السحابية تعمل عبر الإنترنت دون الحاجة لخوادم محلية — تدفع اشتراكاً شهرياً وتحصل على تحديثات تلقائية وأمان عالٍ. النسخة المحلية تُنصَّب على خوادم شركتك وتتطلب استثماراً مسبقاً في الأجهزة والصيانة. نوصي بالنسخة السحابية لأنها تتميز بتكاليف تشغيل أقل، وأمان بنكي، وإمكانية الوصول من أي مكان — وهي الأنسب لمعظم الشركات في السوق السعودي الحالي.", en: "The cloud version operates online without the need for local servers — you pay a monthly subscription and get automatic updates and high security. The on-premise version is installed on your company's servers and requires an upfront investment in hardware and maintenance. We recommend the cloud version due to its lower operating costs, bank-level security, and anywhere-access — making it the most suitable choice for most companies in the Saudi market today." }
    },
    {
      q: { ar: "هل يمكن تخصيص النظام ليتناسب مع نشاط شركتي؟", en: "Can the system be customized to fit my business activity?" },
      a: { ar: "نعم، برنامج سنمار مرن وقابل للتخصيص لأي قطاع: تجزئة، تصنيع، توزيع، مقاولات، صيدليات، وغيرها. يمكن تخصيص: وحدات القياس والتصنيفات، مستويات التسعير، نماذج الطلبات والشحن، دليل الحسابات، وتقارير المخزون. كما يدعم النظام الباركود المخصص وربط RFID لبيئات المستودعات المتقدمة.", en: "Yes, Sinmar is flexible and customizable for any sector: retail, manufacturing, distribution, contracting, pharmacies, and more. You can customize: units of measurement and classifications, pricing levels, order and shipping templates, chart of accounts, and inventory reports. The system also supports custom barcodes and RFID integration for advanced warehouse environments." }
    },
    {
      q: { ar: "كيف يتم احتساب الزكاة والضرائب داخل النظام؟", en: "How are Zakat and taxes calculated within the system?" },
      a: { ar: "يحتسب النظام ضريبة القيمة المضافة (VAT 15%) تلقائياً على جميع الفواتير، ويُعدّ الإقرارات الضريبية الدورية بصيغة جاهزة للتقديم. بالنسبة للزكاة، يوفر النظام تقارير الأصول والمخزون المطلوبة لحسابات الزكاة — مع إمكانية الربط بنظام المحاسبة لإعداد القوائم المالية المطلوبة لإقرارات الزكاة.", en: "The system automatically calculates Value Added Tax (VAT 15%) on all invoices and prepares periodic tax returns in a ready-to-submit format. For Zakat, the system provides the required asset and inventory reports — with the ability to link to the accounting module to prepare the financial statements required for Zakat declarations." }
    },
    {
      q: { ar: "هل يتوافق النظام مع متطلبات المرحلة الثانية من الفوترة الإلكترونية؟", en: "Is the system compliant with Phase Two of e-invoicing?" },
      a: { ar: "نعم بالكامل. برنامج سنمار متوافق مع المرحلة الثانية (الربط والتكامل) من الفوترة الإلكترونية لـ ZATCA، التي تشترط إرسال الفاتورة إلكترونياً لبوابة فاتورة والحصول على موافقة أو إشعار قبل مشاركتها مع العميل. يتم ذلك تلقائياً داخل النظام بدون أي خطوات يدوية إضافية من المستخدم.", en: "Yes, completely. Sinmar complies with Phase Two (Integration) of ZATCA's e-invoicing, which requires sending the invoice electronically to the Fatoora portal and receiving approval or clearance before sharing it with the customer. This happens automatically within the system without any extra manual steps from the user." }
    }
  ],
  // ── 8. Use Cases — حالات الاستخدام ──
  useCases: {
    tag: { ar: "حالات الاستخدام", en: "Use Cases" },
    title: { ar: "إدارة المخزون عبر مختلف القطاعات", en: "Inventory management across sectors" },
    desc: { ar: "اكتشف كيف يتكيف نظام سنمار لإدارة المخزون مع احتياجات مختلف الأنشطة التجارية ليوفر تحكماً دقيقاً.", en: "Discover how Sinmar inventory system adapts to the needs of different business activities." },
    cardTag: { ar: "قطاع", en: "Sector" },
    list: [
      {
        icon: FiShoppingBag,
        title: { ar: "برنامج مخزون للمتاجر الإلكترونية", en: "Inventory system for e-commerce" },
        description: { ar: "ربط المخزون بمنصات التجارة الإلكترونية، تحديث الأرصدة فورياً مع كل طلب، وتجنب بيع منتجات غير متوفرة.", en: "Connect inventory with e-commerce platforms, update balances instantly with every order, and avoid selling out-of-stock items." },
      },
      {
        icon: FiTruck,
        title: { ar: "إدارة مخزون المصانع والإنتاج", en: "Factory and production inventory management" },
        description: { ar: "تتبع المواد الخام، قيد الإنتاج، والمنتجات النهائية مع ربط مباشر بأوامر الإنتاج وتكاليف التصنيع.", en: "Track raw materials, work in progress, and finished goods with direct links to production orders and manufacturing costs." },
      },
      {
        icon: FiHome,
        title: { ar: "برنامج مخزون للمحلات التجارية", en: "Retail and general trade inventory system" },
        description: { ar: "إربط المخزون بنقطة البيع (POS) لتحديث الأرصدة لحظياً مع كل صفقة، وتقارير بضائع الأعلى والأقل مبيعاً.", en: "Connect inventory with Point of Sale (POS) to update balances instantly with every transaction, and generate best-selling and low-selling product reports." },
      },
      {
        icon: FiBriefcase,
        title: { ar: "مخزون مواد شركات المقاولات", en: "Inventory system for contracting companies" },
        description: { ar: "تتبع مواد البناء والمعدات عبر مواقع المشاريع المتعددة مع تخصيص التكاليف لكل مشروع.", en: "Track construction materials, project equipment, and operating costs with location-based reporting and e-invoicing integration." },
      },
      {
        icon: FiUsers,
        title: { ar: "برنامج مخزون الصيدليات والمستلزمات الطبية", en: "Inventory system for pharmacies and medical supplies" },
        description: { ar: "تتبع تواريخ الصلاحية، الدفعات الإنتاجية، وتنبيهات انتهاء الصلاحية قبل وقوع الهدر.", en: "Track expiry dates, batches, and expiry alerts before wastage occurs." },
      },
      {
        icon: FiClipboard,
        title: { ar: "إدارة مخزون شركات التوزيع والخدمات اللوجستية", en: "Inventory system for distribution and logistics companies" },
        description: { ar: "راقب حركة البضائع والمبيعات عبر نقاط التوزيع مع تقارير تفصيلية للشحنات والمخزون.", en: "Track goods movement and sales across distribution points with detailed reports for shipments and inventory." },
      }
    ]
  },
  // ── 9. ERP Modules — وحدات ERP المتكاملة ──
  erpModules: {
    tag: { ar: "وحدات ERP", en: "ERP Modules" },
    title: { ar: "برنامج المخزون جزء من منظومة ERP متكاملة", en: "Inventory is part of an integrated ERP system" },
    desc: { ar: "برنامج إدارة المخزون من سنمار ليس منعزلاً؛ بل هو قلب نابض يتصل لحظياً بجميع وحدات الأعمال الأخرى.", en: "Sinmar Inventory is not isolated; it is a beating heart that connects instantly to all other business units." },
    list: [
      {
        icon: FiLayers,
        title: { ar: "نظام المحاسبة", en: "Accounting module" },
        description: { ar: "ترحيل قيود المخزون والمشتريات للنظام المحاسبي تلقائًا بدون إدخال مزدوج.", en: "Transfer inventory and purchasing entries to the accounting system automatically without double entry." },
      },
      {
        icon: FiHome,
        title: { ar: "برنامج مخزون", en: "Inventory module" },
        description: { ar: "إدارة شاملة للمخزون مع متابعة دقيقة للمواد، المبيعات، وتنبيهات النقص.", en: "Comprehensive inventory management with accurate tracking of materials, sales, and stock alerts." },
      },
      {
        icon: FiUsers,
        title: { ar: "نقاط البيع (POS)", en: "POS module" },
        description: { ar: "نقاط بيع سريعة ومتكاملة مع دعم قارئ الباركود، طباعة الفواتير، وإدارة الكاشير.", en: "Fast, integrated POS system with barcode reader support, invoice printing, and cash register management." },
      },
      {
        icon: FiShoppingBag,
        title: { ar: "نظام المشتريات والموردين", en: "Purchasing module" },
        description: { ar: "من أمر الشراء حتى استلام البضاعة وتحديث المخزون — دورة مشتريات مغلقة بالكامل", en: "From purchase order to goods receipt and inventory update — a complete closed purchasing cycle" },
      },
      {
        icon: FiCreditCard,
        title: { ar: "نظام ERP المتكامل", en: "Integrated ERP system" },
        description: { ar: "المخزون قلب ERP — يتصل بالمبيعات، الإنتاج، المالية، والموارد البشرية.", en: "Inventory is the heart of ERP — connected to sales, production, finance, and HR." },
      },
      {
        icon: FiTruck,
        title: { ar: "التجارة الإلكترونية", en: "eCommerce module" },
        description: { ar: "مزامنة المخزون مع متجرك الإلكتروني لحظيًا لتجنب الطلبات على منتجات غير متوفرة.", en: "Synchronize inventory with your online store in real-time to avoid orders for unavailable products." },
      }
    ]
  },
  // ── 10. Strengths — نقاط القوة ──
  strengths: {
    tag: { ar: "لماذا سنمار؟", en: "Why Sinmar?" },
    title: { ar: "لماذا برنامج سنمار هو الخيار الأمثل لإدارة مخزونك؟", en: "Why is Sinmar the perfect choice for your inventory?" },
    quote: { ar: "“التحكم في المخزون هو التحكم في أرباحك.”", en: "\"Controlling inventory is controlling your profits.\"" },
    quoteText: { ar: "مع سنمار، لن تخسر مبيعات بسبب نفاد الكمية ولن تُجمد أموالك في بضائع راكدة.", en: "With Sinmar, you won't lose sales due to stockouts and won't freeze your money in dead stock." },
    list: [
      {
        icon: FiShield,
        title: { ar: "مُصمَّم للسوق السعودي", en: "Designed for the Saudi market" },
        description: { ar: "برنامج مخزون مبني خصيصًا لاحتياجات السوق السعودي — اللغة العربية، الريال السعودي، ومتطلبات ZATCA وVAT.", en: "Inventory software built specifically for Saudi market needs — Arabic language, Saudi Riyal, and ZATCA & VAT compliance." },
      },
      {
        icon: FiClock,
        title: { ar: "تشغيل سريع خلال أيام", en: "Fast deployment in days" },
        description: { ar: "فريق التطبيق لدينا يشغل النظام ويرحل بيانات مخزونك الحالية في أيام معدودة مع تدريب كامل للفريق.", en: "Our implementation team configures the system and migrates your existing inventory data in a few days, with full team training." },
      },
      {
        icon: FiUsers,
        title: { ar: "تقارير وتحليلات متقدمة", en: "Advanced analytics and reporting" },
        description: { ar: "أكثر من 50 تقرير جاهز: معدل دوران المخزون، أبطأ المنتجات حركة، التنبؤ بالطلب، وتحليل أداء الموردين.", en: "More than 50 ready reports: inventory turnover rate, slowest moving products, demand forecasting, and supplier performance analysis." },
      },
      {
        icon: FiTrendingUp,
        title: { ar: "دعم فني عربي متخصص 24/7", en: "Specialized Arabic technical support 24/7" },
        description: { ar: "فريق دعم يفهم عملك، يتكلم العربية، ومتاح عبر الواتساب والهاتف والبريد — دعم حقيقي لا ردود آلية.", en: "A support team that understands your business, speaks Arabic, and is available via WhatsApp, phone, and email — real support, not automated responses." },
      }
    ]
  },
  dashboardPreview: {
    title: {
      ar: "شاهد واجهات برنامج سنمار للمخزون العام",
      en: "Explore Sinmar General Inventory Interfaces"
    },
    desc: {
      ar: "شاشات سهلة وسريعة تمكنك من جرد المخازن، طباعة الباركود، ومتابعة النواقص فوراً وبأقل مجهود.",
      en: "Easy and fast screens enabling you to perform inventory counts, print barcodes, and track shortages instantly with minimal effort."
    },
    image: "Productes/general-inventory.webp"
  }
};
/* ═══════════════════════════════════════════════════════════════════════════
   🗂️ ربط كل منتج ببياناته — Product Mapping
   ═══════════════════════════════════════════════════════════════════════════ */

const generateCustomSection = (base, integrationData, ctaData, previewData) => ({
  ...base,
  integration: integrationData,
  ...(ctaData ? { cta: ctaData } : {}),
  ...(previewData ? {
    dashboardPreview: {
      ...base.dashboardPreview,
      ...(typeof previewData === "string" ? { image: previewData } : previewData)
    }
  } : {})
});

export const productCTAs = {
  "accounting-inventory": {
    "tag": {
      "ar": "انطلق الآن بحسابات ومخزون دقيق",
      "en": "Start now with accurate accounting & inventory"
    },
    "title": {
      "ar": "هل أنت مستعد لربط مخزونك بحساباتك أوتوماتيكياً؟",
      "en": "Ready to link your inventory with accounting automatically?"
    },
    "desc": {
      "ar": "احصل على استشارة مالية وتقنية مجانية لمعرفة كيف يمكن لسنمار ERP توفير وقتك وأموالك.",
      "en": "Get a free financial and technical consultation to see how Sinmar ERP can save your time and money."
    },
    "btn1": {
      "ar": "ابدأ النظام المزدوج الآن",
      "en": "Start the Dual System Now"
    },
    "btn2": {
      "ar": "اطلب تسعيرة خاصة",
      "en": "Request Special Pricing"
    }
  },
  "general-accounting": {
    "tag": {
      "ar": "نظام مالي موثوق ومتوافق",
      "en": "Reliable & Compliant Financial System"
    },
    "title": {
      "ar": "هل تريد رؤية كل هذه المميزات في مؤسستك؟",
      "en": "Do you want to see all these features in your organization?"
    },
    "desc": {
      "ar": "احجز عرضًا تجريبيًا مع أحد خبرائنا لمدة 30 دقيقة واكتشف كيف يُحوّل برنامج سنمار المحاسبي عملياتك المالية ويزيد من كفاءة أعمالك.",
      "en": "Book a 30-minute demo with one of our experts and discover how Sinmar Accounting Software transforms your financial operations and increases business efficiency."
    },
    "btn1": {
      "ar": "احجز عرضاً تجريبياً",
      "en": "Book a Free Demo"
    },
    "btn2": {
      "ar": "تواصل مع المبيعات",
      "en": "Contact Sales"
    }
  },
  "inventory-system": {
    "tag": {
      "ar": "تأسيس مخزون سريع وذكي",
      "en": "Fast & Smart Inventory Setup"
    },
    "title": {
      "ar": "ابدأ إدارة مخزونك باحترافية مع برنامج سنمار  ",
      "en": "Start managing your inventory professionally with Sinmar program"
    },
    "desc": {
      "ar": " انضم إلى أكثر من 600 شركة ومؤسسة تثق في برنامج سنمار للمخزون العام لإدارة مستودعاتها بدقة وكفاءة في المملكة العربية السعودية.",
      "en": "Join over 600 companies and institutions that trust Sinmar General Inventory program to manage their warehouses accurately and efficiently in Saudi Arabia."
    },
    "btn1": {
      "ar": "رتب مستودعاتك الآن",
      "en": "Organize Your Warehouses Now"
    },
    "btn2": {
      "ar": "اطلب عرض لإدارة المخزون",
      "en": "Request Inventory Demo"
    }
  },
  "medical-system": {
    "tag": {
      "ar": "حلول طبية متطورة",
      "en": "Advanced Medical Solutions"
    },
    "title": {
      "ar": "جاهز لرقمنة وتطوير إدارة مركزك الطبي أو صيدليتك؟",
      "en": "Ready to digitize and improve your medical center or pharmacy management?"
    },
    "desc": {
      "ar": "اطلب عرضاً مخصصاً يشمل إدارة تواريخ الصلاحية، الوصفات الإلكترونية وملفات المرضى.",
      "en": "Request a customized demo including expiry date management, e-prescriptions, and patient records."
    },
    "btn1": {
      "ar": "احصل على نسختك الطبية",
      "en": "Get Your Medical Version"
    },
    "btn2": {
      "ar": "اطلب عرض للمراكز الطبية",
      "en": "Request Demo for Clinics"
    }
  },
  "real-estate-management": {
    "tag": {
      "ar": "إدارة أملاك احترافية",
      "en": "Professional Property Management"
    },
    "title": {
      "ar": "هل ترغب في أتمتة عقود الإيجار وتحصيل أملاكك بالكامل؟",
      "en": "Do you want to fully automate lease contracts and property collections?"
    },
    "desc": {
      "ar": "تخلص من عناء المتابعة الورقية وابدأ رحلة إدارة عقاراتك بضغطة زر وبدون تأخير في التحصيل.",
      "en": "Eliminate manual tracking and start managing your real estate with a click, ensuring zero collection delays."
    },
    "btn1": {
      "ar": "ابدأ نظام العقارات الآن", "en": "Start Real Estate System Now"
    }, "btn2": { "ar": "اطلب عرض لشركة عقارية", "en": "Request Real Estate Demo" }
  }, "furnished-apartments": { "tag": { "ar": "حجوزات وإدارة سلسة", "en": "Smooth Bookings & Management" }, "title": { "ar": "مستعد لرفع نسبة إشغال شققك المفروشة بأقل مجهود؟", "en": "Ready to increase your furnished apartments occupancy with minimal effort?" }, "desc": { "ar": "احصل على لوحة تحكم متكاملة للحجوزات، النظافة، والفوترة الإلكترونية لتسهيل راحة نزلائك.", "en": "Get a comprehensive dashboard for bookings, housekeeping, and e-invoicing to ensure guest comfort." }, "btn1": { "ar": "أتمتة الحجوزات اليوم", "en": "Automate Bookings Today" }, "btn2": { "ar": "تواصل مع المبيعات", "en": "Contact Sales" } }, "car-maintenance": { "tag": { "ar": "تنظيم الورش ومراكز الصيانة", "en": "Workshops & Maintenance Organization" }, "title": { "ar": "هل تبحث عن السيطرة الكاملة على كروت العمل وقطع الغيار؟", "en": "Looking for full control over job cards and spare parts?" }, "desc": { "ar": "حوّل مركز صيانة السيارات الخاص بك إلى بيئة عمل منظمة تزيد من أرباحك وتُرضي عملاءك.", "en": "Transform your car maintenance center into an organized workspace that boosts profits and satisfies customers." }, "btn1": { "ar": "شغّل نظام ورشتك", "en": "Run Your Workshop System" }, "btn2": { "ar": "اطلب تسعيرة المركز", "en": "Request Center Quote" } }, "car-sales": { "tag": { "ar": "إدارة معارض السيارات", "en": "Car Showrooms Management" }, "title": { "ar": "هل تريد إدارة مبايعات وأقساط سياراتك بدقة متناهية؟", "en": "Do you want to manage car sales and installments with pinpoint accuracy?" }, "desc": { "ar": "استخدم نظاماً ذكياً يتتبع أرقام الهياكل، يحسب الأرباح الفعلية، وينظم الأقساط بشكل آلي.", "en": "Use a smart system that tracks VINs, calculates actual profits, and organizes installments automatically." }, "btn1": { "ar": "ابدأ بيع السيارات بذكاء", "en": "Start Selling Cars Smartly" }, "btn2": { "ar": "طلب عرض للمعارض", "en": "Request Showroom Demo" } }, "pos-system": { "tag": { "ar": "كاشير سريع وموثوق", "en": "Fast & Reliable POS" }, "title": { "ar": "هل أنت جاهز لتسريع خدمة عملائك في نقاط البيع؟", "en": "Are you ready to speed up customer service at your POS?" }, "desc": { "ar": "تواصل معنا للحصول على كاشير متصل بالمخزون ويدعم الباركود لزيادة كفاءة متجرك.", "en": "Contact us to get a POS connected to inventory and supporting barcode for maximum store efficiency." }, "btn1": { "ar": "احصل على نظام الكاشير", "en": "Get the POS System" }, "btn2": { "ar": "طلب عرض للمحلات", "en": "Request Retail Demo" } }, "contracting-system": { "tag": { "ar": "إدارة مشاريع المقاولات", "en": "Contracting Projects Management" }, "title": { "ar": "كيف تتحكم في تكاليف مشاريعك والمقاولين بالباطن؟", "en": "How to control your project costs and subcontractors?" }, "desc": { "ar": "ابدأ الآن في متابعة العهد، المواد، والمستخلصات لكل مشروع بشكل منفصل ومفصل.", "en": "Start tracking petty cash, materials, and progress billings for each project separately and in detail." }, "btn1": { "ar": "نظّم مشاريعك الإنشائية", "en": "Organize Construction Projects" }, "btn2": { "ar": "تواصل مع خبير المقاولات", "en": "Contact Contracting Expert" } }, "gym-management": { "tag": { "ar": "إدارة الأندية الرياضية", "en": "Gym Management" }, "title": { "ar": "هل تطمح لمضاعفة اشتراكات ناديك الرياضي وتسهيل الدخول؟", "en": "Aiming to double your gym subscriptions and streamline entry?" }, "desc": { "ar": "احصل على نظام يربط البوابات الإلكترونية بإدارة المشتركين ويحسب العمولات والبرامج الرياضية.", "en": "Get a system that links smart gates with member management and calculates commissions and fitness programs." }, "btn1": { "ar": "ارفع كفاءة ناديك اليوم", "en": "Upgrade Your Gym Efficiency" }, "btn2": { "ar": "طلب تسعيرة الأندية", "en": "Request Gym Pricing" } }, "hr-system": { "tag": { "ar": "إدارة الموارد البشرية والرواتب", "en": "HR & Payroll Management" }, "title": { "ar": "هل تود أتمتة رواتب وحضور وانصراف موظفيك بالكامل؟", "en": "Would you like to fully automate your employees payroll and attendance?" }, "desc": { "ar": "وفر وقتك وتجنب الأخطاء البشرية باستخدام نظام سنمار لإدارة شؤون الموظفين المعتمد.", "en": "Save time and avoid human errors by using Sinmar’s certified HR management system." }, "btn1": { "ar": "أتمتة إدارة الموظفين", "en": "Automate HR Management" }, "btn2": { "ar": "اطلب عرض لبرنامج الموارد", "en": "Request HR Software Demo" } },
  "telecom-system": {
    "tag": {
      "ar": "ربط فروع متكامل",
      "en": "Integrated Branch Connectivity"
    },
    "title": {
      "ar": "هل تبحث عن ربط فروع شركتك ومزامنة بياناتها لحظياً؟",
      "en": "Looking to connect your branches and sync data in real-time?"
    },
    "desc": {
      "ar": "تواصل معنا لتأسيس نظام ربط الفروع المتكامل من سنمار وتسهيل الإشراف على المخازن والمبيعات من شاشة واحدة.",
      "en": "Contact us to establish Sinmar's integrated branch linking system and easily supervise stores and sales from a single screen."
    },
    "btn1": {
      "ar": "ابدأ ربط الفروع الآن",
      "en": "Start Branch Linking Now"
    },
    "btn2": {
      "ar": "اطلب استشارة فنية",
      "en": "Request Technical Consultation"
    }
  },
  "services-system": {
    "tag": {
      "ar": "نظام قطاع الخدمات",
      "en": "Services Sector System"
    },
    "title": {
      "ar": "هل ترغب في تنظيم عقود وجدولة مهام شركتك الخدمية؟",
      "en": "Do you want to organize contracts and schedule your service company tasks?"
    },
    "desc": {
      "ar": "احصل على نظام سنمار لإدارة الخدمات لتتبع تكاليف المشاريع وجدولة الفنيين وإصدار الفواتير الدورية تلقائياً.",
      "en": "Get Sinmar's services management system to track project costs, schedule technicians, and issue recurring invoices automatically."
    },
    "btn1": {
      "ar": "نظّم خدماتك اليوم",
      "en": "Organize Your Services Today"
    },
    "btn2": {
      "ar": "تواصل مع المبيعات",
      "en": "Contact Sales"
    }
  },
  "fuel-station": {
    "tag": {
      "ar": "إدارة محطات الوقود",
      "en": "Fuel Station Management"
    },
    "title": {
      "ar": "جاهز لأتمتة قراءات المضخات ومطابقة خزانات محطتك؟",
      "en": "Ready to automate pump readings and reconcile your station tanks?"
    },
    "desc": {
      "ar": "احصل على لوحة تحكم متكاملة تمنع الفاقد، تنظم الورديات، وتصدر فواتير ضريبية فورية لعملائك.",
      "en": "Get a comprehensive dashboard that prevents loss, organizes shifts, and issues instant tax invoices to your clients."
    },
    "btn1": {
      "ar": "ابدأ أتمتة المحطة الآن",
      "en": "Start Station Automation Now"
    },
    "btn2": {
      "ar": "اطلب عرض سعر للمحطة",
      "en": "Request Station Quote"
    }
  },
  "hr-system": {
    "tag": {
      "ar": "إدارة الموارد البشرية والرواتب",
      "en": "HR & Payroll Management"
    },
    "title": {
      "ar": "هل تود أتمتة رواتب وحضور وانصراف موظفيك بالكامل؟",
      "en": "Would you like to fully automate your employees payroll and attendance?"
    },
    "desc": {
      "ar": "وفر وقتك وتجنب الأخطاء البشرية باستخدام نظام سنمار لإدارة شؤون الموظفين المعتمد.",
      "en": "Save time and avoid human errors by using Sinmar’s certified HR management system."
    },
    "btn1": {
      "ar": "أتمتة إدارة الموظفين",
      "en": "Automate HR Management"
    },
    "btn2": {
      "ar": "اطلب عرض لبرنامج الموارد",
      "en": "Request HR Software Demo"
    }
  }
};

export const productSectionsData = {
  // 📦 1: المحاسبة والمخزون — Accounting & Inventory
  "accounting-inventory": generateCustomSection(defaultSections, {
    title: { ar: "برنامج متوافق مع متطلبات السوق السعودي وZATCA", en: "Compliant with Saudi Market and ZATCA" },
    desc: { ar: "إدارة متكاملة للحسابات والمخزون تضمن دقة وسرعة العمليات مع التوافق التام مع هيئة الزكاة والضريبة والجمارك.", en: "Integrated accounting and inventory ensuring accuracy and ZATCA compliance." },
    leftBlocks: [
      { icon: "FiCheckCircle", title: { ar: "ربط فوري بين الحسابات والمخزون", en: "Instant Accounting & Inventory Link" }, desc: { ar: "كل حركة مخزنية تولد قيداً محاسبياً فورياً دون تدخل بشري.", en: "Every inventory move generates an instant accounting entry." } },
      { icon: "FiShield", title: { ar: "دعم ضريبة القيمة المضافة", en: "VAT Support" }, desc: { ar: "حساب دقيق لضريبة القيمة المضافة (15%) وإعداد الإقرارات الضريبية بضغطة زر.", en: "Accurate VAT calculation and automated tax returns." } }
    ],
    rightBlocks: [
      { title: { ar: "تقارير مالية لحظية", en: "Real-time Financial Reports" }, desc: { ar: "استعرض الأرباح والخسائر والميزانية العمومية ببيانات محدثة لحظياً.", en: "View P&L and balance sheets with real-time data." } },
      { title: { ar: "فوترة إلكترونية متطورة", en: "Advanced E-invoicing" }, desc: { ar: "إصدار فواتير ضريبية مبسطة وتفصيلية متوافقة تماماً مع ZATCA.", en: "Issue simplified and detailed tax invoices complying with ZATCA." } },
      { title: { ar: "إدارة التدفقات النقدية", en: "Cash Flow Management" }, desc: { ar: "متابعة دقيقة للمقبوضات والمدفوعات لتوجيه قراراتك المالية.", en: "Precise tracking of payables and receivables." } },
      { title: { ar: "أمان وموثوقية عالية", en: "High Security & Reliability" }, desc: { ar: "تشفير شامل وحماية لبياناتك المالية مع نسخ احتياطي دوري.", en: "End-to-end encryption and regular backups for your data." } }
    ]
  }, productCTAs["accounting-inventory"], "Productes/sinmar-accounting-inventory.webp"),


  // 📦 2: المحاسبة العامة — General Accounting
  "general-accounting": {
    // ── 1. Hero Section — القسم الرئيسي ──
    hero: {
      eyebrow: {
        ar: "برنامج سنمار المحاسبي — معتمد من هيئة الزكاة والضريبة والجمارك (ZATCA)",
        en: "Sinmar Accounting — Approved by ZATCA"
      },
      title: {
        ar: "برنامج سنمار المحاسبي — إدارة مالية احترافية ومتوافقة",
        en: "Sinmar Accounting — Professional & Compliant Financial Management"
      },
      desc: {
        ar: "برنامج محاسبي سحابي متكامل يُدير جميع معاملاتك المالية من مكان واحد — من الفواتير والمدفوعات والرواتب وحتى التقارير الضريبية وقوائم الدخل والميزانية العمومية، مع أتمتة كاملة للقيود المحاسبية وتوافق تام مع الأنظمة السعودية.",
        en: "An integrated cloud-based accounting software that manages all your financial transactions from one place — from invoices, payments, and payroll to tax reports, income statements, and balance sheets, with full automation and Saudi regulatory compliance."
      },
      bullets: [
        { ar: "أتمتة كاملة للقيود المحاسبية", en: "Full Accounting Entry Automation", key: "Prod_Save_Time", icon: "FiZap" },
        { ar: "تقارير مالية لحظية ودقيقة", en: "Real-time Financial Reports", key: "Prod_Reduce_Errors", icon: "FiTrendingUp" },
        { ar: "معتمد من هيئة الزكاة والضريبة", en: "ZATCA Approved", key: "Prod_Zatca_Compliant", icon: "FiShield" }
      ]
    },
    // ── 2. Definition Section — تعريف المنتج ──
    definition: {
      title: {
        ar: "ما هو برنامج سنمار المحاسبي؟",
        en: "What is Sinmar Accounting Software?"
      },
      p1: {
        ar: "برنامج محاسبي متكامل يُدير جميع معاملاتك المالية من مكان واحد.",
        en: "An integrated accounting software that manages all your financial transactions from one place."
      },
      p2: {
        ar: "برنامج سنمار المحاسبي هو حل سحابي متخصص يُتيح لشركتك تسجيل وتتبع وتحليل جميع العمليات المالية في مكان واحد، بدءًا من الفواتير والمدفوعات والرواتب وحتى التقارير الضريبية وقوائم الدخل والميزانية العمومية. على عكس جداول Excel أو الأنظمة التقليدية، يوفر البرنامج أتمتة كاملة للقيود المحاسبية، وربطًا سلسًا مع أنظمة ERP، وتوافقًا كاملاً مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA).",
        en: "Sinmar Accounting is a specialized cloud solution that enables your company to record, track, and analyze all financial operations in one place — from invoices, payments, and payroll to tax reports, income statements, and balance sheets. Unlike Excel spreadsheets or traditional systems, it provides full automation of accounting entries, seamless ERP integration, and complete compliance with ZATCA requirements."
      }
    },
    // ── 3. ZATCA & Integration Section ──
    integration: {
      title: {
        ar: "برنامج معتمد من هيئة الزكاة والضريبة والجمارك (ZATCA)",
        en: "ZATCA Approved Accounting Software"
      },
      desc: {
        ar: "نظام محاسبي متوافق بالكامل مع الفاتورة الإلكترونية وضريبة القيمة المضافة والزكاة ومعايير SOCPA — بدون أي تعقيدات.",
        en: "Fully compliant accounting system with e-invoicing, VAT, Zakat, and SOCPA standards — without any complications."
      },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "الفاتورة الإلكترونية (ZATCA)", en: "E-Invoicing (ZATCA)" },
          desc: { ar: "دعم المرحلتين الأولى والثانية من الفاتورة الإلكترونية مع QR Code وXML والإرسال المباشر لمنصة فاتورة.", en: "Support for both phases of e-invoicing with QR Code, XML, and direct submission to the Fatoora platform." }
        },
        {
          icon: "FiShield",
          title: { ar: "أمان وفق معيار ISO 27001", en: "ISO 27001 Compliant Security" },
          desc: { ar: "بنية تحتية آمنة مع تشفير كامل للبيانات ونسخ احتياطية منتظمة لضمان حماية بياناتك المالية.", en: "Secure infrastructure with full data encryption and regular backups to protect your financial data." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "ضريبة القيمة المضافة (VAT 15%)", en: "Value Added Tax (VAT 15%)" },
          desc: { ar: "احتساب ضريبة القيمة المضافة 15% تلقائيًا على جميع الفواتير مع إعداد الإقرارات الضريبية بدقة وجاهزة للتقديم.", en: "Automatic 15% VAT calculation on all invoices with accurate tax return preparation ready for submission." }
        },
        {
          title: { ar: "الزكاة وضريبة الدخل", en: "Zakat & Income Tax" },
          desc: { ar: "تقارير مالية جاهزة لأغراض الزكاة والضرائب مع توثيق كامل لعمليات التدقيق.", en: "Ready financial reports for Zakat and tax purposes with full audit documentation." }
        },
        {
          title: { ar: "معايير SOCPA المحاسبية", en: "SOCPA Accounting Standards" },
          desc: { ar: "الالتزام الكامل بمعايير المحاسبة السعودية مع تقارير معتمدة لدى المدققين والجهات الرسمية.", en: "Full compliance with Saudi accounting standards with reports approved by auditors and official entities." }
        },
        {
          title: { ar: "نظام سحابي مشفر بالكامل", en: "Fully Encrypted Cloud System" },
          desc: { ar: "تشفير SSL كامل مع نسخ احتياطية يومية وتحديثات تلقائية مستمرة — بدون الحاجة إلى خوادم محلية.", en: "Full SSL encryption with daily backups and continuous automatic updates — no local servers needed." }
        }
      ]
    },
    // ── 4. Features Section — الميزات ──
    features: {
      title: {
        ar: "مميزات برنامج سنمار المحاسبي",
        en: "Features of Sinmar Accounting Software"
      },
      desc: {
        ar: "برنامج محاسبي سحابي متكامل يجمع بين سهولة الاستخدام، ودقة الحسابات، وقوة الإدارة المالية، ومصمم خصيصًا لتلبية متطلبات السوق السعودي.",
        en: "An integrated cloud accounting software combining ease of use, precise calculations, and powerful financial management, designed specifically for the Saudi market."
      },
      list: [
        {
          title: { ar: "القيود المحاسبية الآلية", en: "Automated Journal Entries" },
          desc: { ar: "تسجيل تلقائي لجميع القيود المزدوجة مع تتبع فوري لدفاتر الأستاذ العام والإجمالي.", en: "Automatic recording of all double entries with instant tracking of general and sub-ledgers." },
          points: [
            { ar: "قيود اليومية والأستاذ آلياً", en: "Auto journal & ledger entries" },
            { ar: "تسوية البنك بنقرة واحدة", en: "One-click bank reconciliation" },
            { ar: "أرشيف محاسبي كامل", en: "Complete accounting archive" }
          ]
        },
        {
          title: { ar: "تقارير مالية لحظية", en: "Real-Time Financial Reports" },
          desc: { ar: "إعداد قوائم الدخل والميزانية العمومية والتدفقات النقدية فوراً وتصديرها بصيغة PDF وExcel.", en: "Instant generation of income statements, balance sheets, and cash flows with PDF/Excel export." },
          points: [
            { ar: "ميزانية ودخل فوري", en: "Instant balance & income" },
            { ar: "مقارنات بين الفترات", en: "Period comparisons" },
            { ar: "تقارير مخصصة", en: "Custom reports" }
          ]
        },
        {
          title: { ar: "إدارة الفواتير والمستحقات", en: "Invoicing & Receivables" },
          desc: { ar: "إنشاء فواتير احترافية متوافقة مع VAT ومتابعة الديون مع تذكيرات سداد آلية للعملاء والموردين.", en: "Create professional VAT-compliant invoices with automated payment reminders to customers and suppliers." },
          points: [
            { ar: "فواتير VAT احترافية", en: "Professional VAT invoices" },
            { ar: "تذكيرات سداد آلية", en: "Automated payment reminders" },
            { ar: "متابعة المستحقات", en: "Receivables tracking" }
          ]
        },
        {
          title: { ar: "إدارة الرواتب والمصروفات", en: "Payroll & Expense Management" },
          desc: { ar: "احتساب الرواتب والبدلات والتأمينات (GOSI) تلقائياً مع إدارة السلف والعهد وربط محاسبي مباشر.", en: "Calculate salaries, allowances, and GOSI automatically with advances management and direct accounting link." },
          points: [
            { ar: "رواتب وGOSI آلياً", en: "Auto payroll & GOSI" },
            { ar: "إدارة السلف والعهد", en: "Advances & custody mgmt" },
            { ar: "نهايات خدمة وإجازات", en: "End-of-service & leave" }
          ]
        },
        {
          title: { ar: "إدارة الخزينة والبنوك", en: "Treasury & Bank Management" },
          desc: { ar: "دعم حسابات بنكية متعددة وتسوية بنكية آلية وتحويلات داخلية مع متابعة الأرصدة اللحظية.", en: "Multiple bank accounts with automated reconciliation, internal transfers, and real-time balance monitoring." },
          points: [
            { ar: "حسابات بنكية متعددة", en: "Multiple bank accounts" },
            { ar: "تسوية بنكية آلية", en: "Automated reconciliation" },
            { ar: "متابعة الشيكات", en: "Check management" }
          ]
        },
        {
          title: { ar: "سحابي 100% — وصول من أي مكان", en: "100% Cloud — Access Anywhere" },
          desc: { ar: "وصول آمن من أي جهاز مع تشفير SSL كامل ونسخ احتياطي يومي تلقائي دون الحاجة لخوادم.", en: "Secure access from any device with full SSL encryption and daily auto backups — no local servers needed." },
          points: [
            { ar: "وصول من أي جهاز", en: "Access from any device" },
            { ar: "تشفير SSL كامل", en: "Full SSL encryption" },
            { ar: "نسخ احتياطي يومي", en: "Daily auto backup" }
          ]
        }
      ]
    },
    // ── 5. Social Proof Section ──
    socialProof: {
      title: {
        ar: "شركاء النجاح يثقون في سنمار المحاسبي",
        en: "Success partners trust Sinmar Accounting"
      },
      stats: [
        { value: "+500", label: { ar: "عميل", en: "Clients" } },
        { value: "99%", label: { ar: "نسبة نجاح", en: "Success Rate" } },
        { value: "100%", label: { ar: "دقة محاسبية", en: "Accounting Accuracy" } },
        { value: "+10", label: { ar: "سنوات خبرة", en: "Years Exp" } }
      ]
    },
    // ── 6. Testimonials ──
    testimonialIds: ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
    faqs: [
      {
        q: { ar: "هل برنامج سنمار المحاسبي معتمد من هيئة الزكاة والضريبة والجمارك (ZATCA)؟", en: "Is Sinmar Accounting Software approved by the Zakat, Tax and Customs Authority (ZATCA)?" },
        a: { ar: "نعم، برنامج سنمار المحاسبي مدرج ضمن البرامج المحاسبية المعتمدة من هيئة الزكاة والضريبة والجمارك (ZATCA) في المملكة العربية السعودية. يدعم النظام الفاتورة الإلكترونية بالكامل وفق متطلبات ZATCA للمرحلتين الأولى والثانية، بما يشمل توليد QR Code، وملف XML الموافق للمعايير، وإرسال الفواتير إلكترونياً لمنصة فاتورة.", en: "Yes, Sinmar Accounting Software is listed among the accounting programs approved by the Zakat, Tax and Customs Authority in the Kingdom of Saudi Arabia. The system fully supports e-invoicing in accordance with ZATCA requirements for both Phase 1 and Phase 2, including generating QR Codes, standards-compliant XML files, and sending invoices electronically to the Fatoora platform." }
      },
      {
        q: { ar: "هل برنامج سنمار أفضل برنامج محاسبة للشركات الصغيرة والمتوسطة في السعودية؟", en: "Is Sinmar the best accounting software for SMEs in Saudi Arabia?" },
        a: { ar: "نعم. نُقدّم باقات مصممة خصيصاً للمنشآت الصغيرة والمتوسطة، مع واجهة عربية سهلة الاستخدام لا تحتاج خبرة محاسبية متقدمة. يمكن للمنشأة البدء بباقة أساسية والتوسع تدريجياً مع النمو، مع الحفاظ على جميع بيانات الشركة ومتطلبات الامتثال.", en: "Yes. We offer packages specially designed for small and medium enterprises, featuring a user-friendly Arabic interface that requires no advanced accounting experience. Businesses can start with a basic package and scale gradually as they grow, while maintaining all company data and compliance requirements." }
      },
      {
        q: { ar: "ما مميزات برنامج المحاسبة الأون لاين (السحابي) مقارنة بالنظام المحلي التقليدي؟", en: "What are the advantages of online (cloud) accounting software compared to traditional on-premise systems?" },
        a: { ar: "برنامج المحاسبة السحابي لا يحتاج إلى خوادم محلية أو عمليات تنصيب معقدة، ويمكن تشغيله مباشرة عبر المتصفح من أي مكان ومن أي جهاز. كما يتضمن تحديثات تلقائية مستمرة، ونسخاً احتياطية يومية، وأماناً عالياً بتشفير SSL. أما النظام التقليدي فيتطلب استثمارات إضافية في الأجهزة والصيانة والتحديثات المدفوعة.", en: "Cloud accounting software does not require local servers or complex installations; it can be run directly via any browser from anywhere on any device. It also includes continuous automatic updates, daily backups, and high security with SSL encryption. On the other hand, traditional systems require additional investments in hardware, maintenance, and paid upgrades." }
      },
      {
        q: { ar: "كيف يضمن برنامج المحاسبة التوافق الكامل مع الفاتورة الإلكترونية؟", en: "How does the accounting software guarantee full compliance with e-invoicing?" },
        a: { ar: "يقوم النظام بإنشاء الفاتورة تلقائياً بصيغة XML المعتمدة من ZATCA، مع إضافة QR Code بشكل آلي، وإرسالها مباشرة إلى منصة فاتورة عبر API متكامل. كما يحتفظ بأرشيف إلكتروني كامل للفواتير الصادرة والواردة وفق متطلبات الأرشفة الإلكترونية لمدة 6 سنوات.", en: "The system automatically generates invoices in the ZATCA-approved XML format, dynamically includes a QR Code, and sends them directly to the Fatoora platform via an integrated API. It also maintains a complete electronic archive of incoming and outgoing invoices for 6 years in accordance with e-archiving regulations." }
      },
      {
        q: { ar: "هل يمكن ربط برنامج المحاسبة مع نظام ERP الخاص بشركتي؟", en: "Can the accounting software be integrated with my company's ERP system?" },
        a: { ar: "نعم، برنامج سنمار المحاسبي مصمم كجزء من منظومة ERP متكاملة. يتصل بسلاسة مع نظام المخزون، الموارد البشرية، المشتريات، ونقاط البيع، مما يلغي الحاجة إلى الإدخال المزدوج للبيانات بين الأقسام. كما يوفر API مفتوحاً للتكامل مع الأنظمة الأخرى.", en: "Yes, Sinmar Accounting Software is designed as part of an integrated ERP ecosystem. It connects seamlessly with inventory, HR, purchasing, and POS systems, eliminating the need for double data entry between departments. It also provides an open API for integration with other systems." }
      },
      {
        q: { ar: "ما الذي يجعل برنامج سنمار المحاسبي أفضل برنامج محاسبة سحابي في السوق السعودي؟", en: "What makes Sinmar Accounting Software the best cloud accounting software in the Saudi market?" },
        a: { ar: "يتميز برنامج سنمار المحاسبي بثلاثة عوامل رئيسية: 1. التوافق الكامل مع متطلبات السوق السعودي وهيئة الزكاة والضريبة والجمارك (ZATCA) والفاتورة الإلكترونية. 2. دعم فني متخصص ومتواصل على مدار الساعة. 3. تكامل سلس مع جميع أنظمة الشركة مثل ERP وHR وPOS، مما يجعله حلاً متكاملاً لإدارة الأعمال.", en: "Sinmar Accounting Software is distinguished by three key factors: 1. Full compatibility with Saudi market requirements, ZATCA regulations, and e-invoicing phases. 2. Specialized, round-the-clock technical support. 3. Seamless integration with all company systems like ERP, HR, and POS, making it a comprehensive business management solution." }
      },
      {
        q: { ar: "كم من الوقت يستغرق تطبيق برنامج المحاسبة في شركتي؟", en: "How long does it take to implement the accounting software in my company?" },
        a: { ar: "بالنسبة للشركات الصغيرة والمتوسطة، يستغرق التطبيق عادة من 3 إلى 7 أيام عمل، ويشمل ترحيل البيانات، وإعداد دليل الحسابات، والتدريب، والاختبار النهائي. أما الشركات الكبيرة ومتعددة الفروع فقد تحتاج من 2 إلى 4 أسابيع حسب حجم وتعقيد العمليات.", en: "For small and medium enterprises, implementation typically takes 3 to 7 business days, including data migration, chart of accounts setup, training, and final testing. For large or multi-branch companies, it may take 2 to 4 weeks depending on the size and complexity of operations." }
      },
      {
        q: { ar: "هل برنامج الحسابات يدعم تعدد العملات والفروع ومراكز التكلفة؟", en: "Does the accounting software support multiple currencies, branches, and cost centers?" },
        a: { ar: "نعم، يدعم برنامج سنمار المحاسبي تعدد العملات مع تحديث أسعار الصرف تلقائياً. كما يتيح إدارة فروع متعددة بحسابات مستقلة لكل فرع، مع إمكانية إصدار تقارير موحدة على مستوى المجموعة. بالإضافة إلى ذلك، يمكن تعريف مراكز تكلفة متعددة لمتابعة ربحية كل قسم أو مشروع بشكل منفصل.", en: "Yes, Sinmar Accounting Software supports multiple currencies with exchange rates updated automatically. It also enables managing multiple branches with independent accounts for each branch and the ability to issue consolidated group-level reports. Additionally, multiple cost centers can be defined to track the profitability of each department or project separately." }
      }
    ],
    // ── 8. Use Cases — حالات الاستخدام ──
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "أهم استخدامات برنامج سنمار المحاسبي عبر القطاعات", en: "Key Uses of Sinmar Accounting Software Across Sectors" },
      desc: { ar: "برامج المحاسبة من Alawi Stars مرنة وقابلة للتهيئة لتناسب مختلف القطاعات والأحجام في السوق السعودي، من الشركات الناشئة إلى المؤسسات متعددة الفروع.", en: "Alawi Stars accounting software is flexible and configurable to suit various sectors and sizes in the Saudi market, from startups to multi-branch enterprises." },
      cardTag: { ar: "قطاع", en: "Sector" },
      list: [
        {
          icon: FiBriefcase,
          title: { ar: "برامج محاسبية للشركات والمؤسسات", en: "Corporate & Enterprise Accounting" },
          description: { ar: "إدارة حسابات متعددة الفروع، ومراكز التكلفة، والتقارير المالية الموحدة لاتخاذ قرارات استراتيجية فعالة.", en: "Manage multi-branch accounts, cost centers, and consolidated financial reports for effective strategic decisions." },
        },
        {
          icon: FiShoppingBag,
          title: { ar: "برنامج محاسبة للمحلات والمتاجر التجارية", en: "Retail & Store Accounting" },
          description: { ar: "متابعة المبيعات والفواتير والمدفوعات وتكاليف البضائع بشكل يومي، مع ربط مباشر بنقاط البيع (POS).", en: "Daily tracking of sales, invoices, payments, and goods costs, with direct integration with POS systems." },
        },
        {
          icon: FiTruck,
          title: { ar: "برنامج حسابات للمصانع والشركات الصناعية", en: "Factory & Manufacturing Accounting" },
          description: { ar: "محاسبة التكاليف الصناعية، وتتبع تكاليف الإنتاج، وإدارة المخازن والمواد الخام بدقة كاملة.", en: "Industrial cost accounting, production cost tracking, and precise raw materials and inventory management." },
        },
        {
          icon: FiHome,
          title: { ar: "برنامج محاسبي للمطاعم والفنادق والكافيهات", en: "Restaurant, Hotel & Cafe Accounting" },
          description: { ar: "إدارة حسابات المطاعم، وتكاليف الأصناف، والفواتير، والتقارير المالية اليومية والشهرية بدقة عالية.", en: "High-precision management of restaurant accounts, item costs, invoicing, and daily/monthly financial reports." },
        },
        {
          icon: FiClipboard,
          title: { ar: "نظام محاسبي لشركات المقاولات والإنشاءات", en: "Construction & Contracting Accounting" },
          description: { ar: "محاسبة المشاريع، وتكاليف العقود، والاستحقاقات التدريجية، وإعداد الفواتير المرحلية والنهائية.", en: "Project accounting, contract costs, progressive accruals, and preparation of milestone and final invoicing." },
        },
        {
          icon: FiCreditCard,
          title: { ar: "أفضل برنامج محاسبة للشركات الصغيرة والمتوسطة", en: "Best Accounting Software for SMEs" },
          description: { ar: "نظام محاسبي احترافي سهل الاستخدام يناسب المنشآت الناشئة، مع قدرات توسع واستيعاب للنمو المستقبلي للأعمال.", en: "An easy-to-use professional accounting system suitable for startups, with scalability to accommodate future business growth." },
        }
      ]
    },
    // ── 9. ERP Modules — وحدات ERP المتكاملة ──
    erpModules: {
      tag: { ar: "التكامل مع الأنظمة", en: "System Integration" },
      title: { ar: "نظام المحاسبة جزء من منظومة ERP متكاملة", en: "Accounting is part of an integrated ERP ecosystem" },
      desc: { ar: "ربط جميع أقسام الشركة في منصة واحدة — إلغاء الإدخال المزدوج وتحديث البيانات لحظيًا وزيادة دقة العمليات المالية.", en: "Connect all company departments on a single platform — eliminate double entry, real-time data updates, and increased financial accuracy." },
      list: [
        {
          icon: FiLayers,
          title: { ar: "نظام المحاسبة", en: "Accounting module" },
          description: { ar: "قيود محاسبية آلية مع تتبع فوري لدفاتر الأستاذ العام والإجمالي.", en: "Automated journal entries with instant tracking of general and sub-ledgers." },
        },
        {
          icon: FiHome,
          title: { ar: "إدارة المخزون", en: "Inventory Management" },
          description: { ar: "ربط المخزون بالحسابات لتحديث الأرصدة والتكاليف تلقائيًا مع كل حركة.", en: "Link inventory with accounts for automatic balance and cost updates with every movement." },
        },
        {
          icon: FiUsers,
          title: { ar: "الموارد البشرية والرواتب", en: "HR & Payroll" },
          description: { ar: "إدارة الرواتب والبدلات والتأمينات مع ترحيل تلقائي للحسابات المالية.", en: "Payroll, allowances, and insurance management with automatic posting to financial accounts." },
        },
        {
          icon: FiShoppingBag,
          title: { ar: "نقاط البيع POS", en: "POS System" },
          description: { ar: "نقاط بيع متكاملة مع النظام المحاسبي لتسجيل المبيعات والفواتير فوريًا.", en: "Integrated POS with accounting for instant sales and invoice recording." },
        },
        {
          icon: FiCreditCard,
          title: { ar: "إدارة العملاء CRM", en: "CRM System" },
          description: { ar: "ربط بيانات العملاء بالحسابات المالية لمتابعة المديونيات والمستحقات.", en: "Link customer data with financial accounts for receivables and payables tracking." },
        },
        {
          icon: FiTruck,
          title: { ar: "المشتريات والمبيعات", en: "Purchasing & Sales" },
          description: { ar: "دورة مشتريات ومبيعات مغلقة مع ترحيل القيود المحاسبية تلقائيًا.", en: "Complete purchase and sales cycle with automatic journal entry posting." },
        }
      ]
    },
    // ── 10. Strengths — نقاط القوة ──
    strengths: {
      tag: { ar: "لماذا سنمار المحاسبي؟", en: "Why Sinmar Accounting?" },
      title: { ar: "لماذا تختار برنامج سنمار المحاسبي؟", en: "Why choose Sinmar Accounting?" },
      quote: { ar: "\"إدارة مالية احترافية ومتوافقة مع الأنظمة السعودية.\"", en: "\"Professional financial management compliant with Saudi regulations.\"" },
      quoteText: { ar: "مع سنمار المحاسبي، ستتخلص من الأخطاء الحسابية المُكلفة والتقارير البطيئة وعدم الامتثال للوائح — وستحصل على أتمتة ذكية وتقارير فورية وامتثال كامل.", en: "With Sinmar Accounting, eliminate costly calculation errors, slow reports, and non-compliance — get smart automation, instant reports, and full compliance." },
      list: [
        {
          icon: FiShield,
          title: { ar: "مصمم للسوق السعودي", en: "Designed for the Saudi Market" },
          description: { ar: "متوافق مع اللوائح المحلية واللغة العربية والعملة المحلية ومتطلبات هيئة الزكاة والضريبة.", en: "Compatible with local regulations, Arabic language, local currency, and ZATCA requirements." },
        },
        {
          icon: FiClock,
          title: { ar: "تطبيق سريع خلال أيام", en: "Fast deployment in days" },
          description: { ar: "تشغيل النظام خلال أيام مع تدريب كامل للفريق وترحيل البيانات المالية الحالية.", en: "System operational in days with full team training and current financial data migration." },
        },
        {
          icon: FiUsers,
          title: { ar: "دعم فني 24/7", en: "24/7 Technical Support" },
          description: { ar: "دعم عبر الهاتف والواتساب والبريد الإلكتروني — دعم حقيقي بفريق عربي متخصص لا ردود آلية.", en: "Support via phone, WhatsApp, and email — real support by a specialized Arabic team, not automated responses." },
        },
        {
          icon: FiTrendingUp,
          title: { ar: "قابل للتوسع مع نمو أعمالك", en: "Scalable with your business growth" },
          description: { ar: "يناسب الشركات الناشئة والكبيرة ومتعددة الفروع — باقات مرنة تناسب جميع أحجام الأعمال.", en: "Suits startups, large companies, and multi-branch businesses — flexible packages for all sizes." },
        }
      ]
    },
    dashboardPreview: {
      title: {
        ar: "شاهد واجهات برنامج سنمار المحاسبي",
        en: "Explore Sinmar Accounting Interfaces"
      },
      desc: {
        ar: "واجهة مستخدم عصرية وواضحة مصممة بأعلى المعايير لتسهل عليك إدارة كافة العمليات المالية من شاشة واحدة وبكل سلاسة.",
        en: "A modern, clear user interface designed with the highest standards to help you manage all financial operations seamlessly from a single screen."
      },
      image: "Productes/sinmar-accounting.webp"
    },
    cta: productCTAs["general-accounting"]
  },

  // 📦 3: نظام المخزون — Inventory System (Using the original ZATCA template)
  "inventory-system": { ...inventorySystemSections, cta: productCTAs["inventory-system"] },

  // 📦 4: النظام الطبي — Medical System
  "medical-system": {
    // ── 1. Hero Section ──
    hero: {
      eyebrow: {
        ar: "برنامج سنمار للنظام الطبي — إدارة شاملة للمراكز الطبية والصيدليات",
        en: "Sinmar Medical System — Complete Management for Clinics & Pharmacies"
      },
      title: {
        ar: "نظام طبي متكامل لإدارة العيادات والمستشفيات والصيدليات",
        en: "Integrated Medical System for Clinics, Hospitals & Pharmacies"
      },
      desc: {
        ar: "برنامج سنمار الطبي يجمع إدارة ملفات المرضى، المواعيد، الوصفات الإلكترونية، ومخزون الأدوية في منصة واحدة — لتقديم رعاية صحية أفضل وإدارة أكثر كفاءة.",
        en: "Sinmar Medical System unifies patient records, appointments, e-prescriptions, and pharmacy inventory in one platform — delivering better healthcare and more efficient management."
      },
      bullets: [
        { ar: "إدارة ملفات المرضى بسهولة", en: "Easy patient record management", key: "Prod_Save_Time", icon: "FiClock" },
        { ar: "وصفات طبية إلكترونية آنية", en: "Instant electronic prescriptions", key: "Prod_Reduce_Errors", icon: "FiTrendingUp" },
        { ar: "تنبيهات انتهاء صلاحية الأدوية", en: "Medicine expiry alerts", key: "Prod_Zatca_Compliant", icon: "FiShield" }
      ]
    },
    // ── 2. Definition Section ──
    definition: {
      title: {
        ar: "ما هو برنامج سنمار للنظام الطبي؟",
        en: "What is Sinmar Medical System?"
      },
      p1: {
        ar: "نظام طبي رقمي متكامل يُدير جميع عمليات المركز الطبي أو الصيدلية من شاشة واحدة.",
        en: "A comprehensive digital medical system managing all clinic or pharmacy operations from a single screen."
      },
      p2: {
        ar: "برنامج سنمار الطبي هو حل سحابي متخصص يُمكّن المراكز الطبية والصيدليات والمستشفيات من إدارة ملفات المرضى، جدولة المواعيد، إصدار الوصفات الطبية الإلكترونية، ومتابعة مخزون الأدوية مع تنبيهات انتهاء الصلاحية — كل ذلك مع ربط محاسبي تلقائي وتكامل مع شركات التأمين الصحي.",
        en: "Sinmar Medical System is a specialized cloud solution enabling medical centers, pharmacies, and hospitals to manage patient records, schedule appointments, issue e-prescriptions, and track medicine inventory with expiry alerts — with automatic accounting integration and health insurance connectivity."
      }
    },
    // ── 3. Integration Section ──
    integration: {
      title: {
        ar: "نظام طبي مؤمّن ومتكامل مع التأمين الصحي والوصفات الإلكترونية",
        en: "Secure Medical System Integrated with Health Insurance & E-Prescriptions"
      },
      desc: {
        ar: "برنامج سنمار الطبي يلبي متطلبات القطاع الصحي السعودي — من حماية بيانات المرضى وفق معايير الخصوصية، إلى التكامل مع شركات التأمين الصحي وهيئة الصحة السعودية.",
        en: "Sinmar Medical System meets Saudi healthcare sector requirements — from patient data protection per privacy standards, to integration with health insurance companies and Saudi Health Authority."
      },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "إدارة تواريخ الصلاحية والدفعات", en: "Expiry Dates & Batch Management" },
          desc: { ar: "تتبع أرقام التشغيلات (Batches) لكل دواء مع تنبيهات مبكرة قبل انتهاء الصلاحية لمنع أي هدر.", en: "Track batches for every medicine with early alerts before expiry to prevent any wastage." }
        },
        {
          icon: "FiShield",
          title: { ar: "حماية بيانات المرضى", en: "Patient Data Protection" },
          desc: { ar: "تشفير كامل لملفات المرضى وسجلاتهم الطبية وفقاً لمعايير الخصوصية الدولية وأنظمة حماية البيانات الصحية.", en: "Full encryption of patient files and medical records per international privacy standards and health data protection regulations." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "الوصفات الطبية الإلكترونية", en: "Electronic Prescriptions" },
          desc: { ar: "ربط العيادة بالصيدلية لصرف الوصفات الطبية إلكترونياً بشكل فوري دون أوراق ودون تأخير.", en: "Link the clinic to the pharmacy for instant electronic prescription dispensing without paperwork or delays." }
        },
        {
          title: { ar: "تنبيهات نواقص الأدوية", en: "Medicine Shortage Alerts" },
          desc: { ar: "إشعارات فورية تلقائية عند وصول كمية الدواء للحد الأدنى لتفادي انقطاع الخدمة وضمان توافر الأدوية دائماً.", en: "Automatic instant notifications when medicine stock reaches the minimum to prevent service interruption." }
        },
        {
          title: { ar: "تكامل مع شركات التأمين الصحي", en: "Health Insurance Integration" },
          desc: { ar: "إدارة مطالبات التأمين الصحي والموافقات الطبية المسبقة بكفاءة عالية مع تتبع حالة كل مطالبة.", en: "Efficiently manage health insurance claims and prior medical approvals with full status tracking." }
        },
        {
          title: { ar: "إدارة مواعيد المرضى", en: "Patient Appointment Management" },
          desc: { ar: "جدولة وتنظيم المواعيد بكفاءة، وإرسال تذكيرات تلقائية للمرضى، وتقليل أوقات الانتظار في العيادات.", en: "Schedule and organize appointments efficiently, send automatic patient reminders, and reduce waiting times." }
        }
      ]
    },
    // ── 4. Features Section ──
    features: {
      title: {
        ar: "ميزات برنامج سنمار الطبي",
        en: "Sinmar Medical System Features"
      },
      desc: {
        ar: "نظام طبي متكامل يمنح المراكز الطبية والصيدليات كل الأدوات اللازمة لتقديم رعاية صحية أفضل وإدارة أكثر احترافية.",
        en: "A complete medical system giving clinics and pharmacies all the tools needed for better healthcare and more professional management."
      },
      list: [
        {
          title: { ar: "ملفات المرضى الإلكترونية", en: "Electronic Patient Records" },
          desc: { ar: "سجل طبي شامل لكل مريض يتضمن التاريخ المرضي، الحساسيات، الأدوية السابقة، والتقارير الطبية.", en: "Comprehensive medical record for each patient including history, allergies, previous medications, and reports." },
          points: [
            { ar: "سجل طبي كامل ومنظم", en: "Complete organized medical record" },
            { ar: "الحساسيات والأمراض المزمنة", en: "Allergies & chronic conditions" },
            { ar: "بحث سريع عن المريض", en: "Fast patient search" }
          ]
        },
        {
          title: { ar: "إدارة المواعيد والجدولة", en: "Appointment & Scheduling Management" },
          desc: { ar: "نظام جدولة ذكي يوزع المواعيد على الأطباء ويرسل تذكيرات تلقائية للمرضى لتقليل الغيابات.", en: "Smart scheduling system distributing appointments across doctors with automatic patient reminders to reduce no-shows." },
          points: [
            { ar: "تقويم تفاعلي للأطباء", en: "Interactive doctor calendar" },
            { ar: "تذكيرات SMS تلقائية", en: "Automatic SMS reminders" },
            { ar: "قائمة انتظار إلكترونية", en: "Electronic waiting list" }
          ]
        },
        {
          title: { ar: "إدارة مخزون الأدوية والصيدلية", en: "Medicine & Pharmacy Inventory" },
          desc: { ar: "تتبع شامل لجميع الأدوية والمستلزمات الطبية مع تنبيهات الصلاحية والنواقص ودفعات الإنتاج.", en: "Comprehensive tracking of all medicines and medical supplies with expiry alerts, shortage notifications, and batch tracking." },
          points: [
            { ar: "تتبع الدفعات والصلاحية", en: "Batch & expiry tracking" },
            { ar: "تنبيه نقطة إعادة الطلب", en: "Reorder point alert" },
            { ar: "صرف بالباركود أو QR", en: "Barcode or QR dispensing" }
          ]
        },
        {
          title: { ar: "الوصفات الطبية الإلكترونية", en: "Electronic Prescriptions" },
          desc: { ar: "إصدار وصفات طبية إلكترونية مباشرةً من العيادة وصرفها في الصيدلية فورياً دون أي ورق.", en: "Issue electronic prescriptions directly from the clinic and dispense them instantly at the pharmacy without paperwork." },
          points: [
            { ar: "ربط فوري العيادة–الصيدلية", en: "Instant clinic-pharmacy link" },
            { ar: "توقيع رقمي للطبيب", en: "Doctor digital signature" },
            { ar: "سجل الوصفات السابقة", en: "Previous prescription history" }
          ]
        },
        {
          title: { ar: "الفوترة والتأمين الصحي", en: "Billing & Health Insurance" },
          desc: { ar: "إصدار فواتير طبية احترافية وإدارة مطالبات التأمين الصحي والموافقات المسبقة بكفاءة تامة.", en: "Issue professional medical invoices and manage health insurance claims and prior approvals with full efficiency." },
          points: [
            { ar: "فواتير طبية متوافقة مع VAT", en: "VAT-compliant medical invoices" },
            { ar: "إدارة مطالبات التأمين", en: "Insurance claims management" },
            { ar: "تتبع المدفوعات والمستحقات", en: "Payment & receivables tracking" }
          ]
        },
        {
          title: { ar: "التقارير والإحصاءات الطبية", en: "Medical Reports & Analytics" },
          desc: { ar: "تقارير تفصيلية عن الأداء، أكثر الأمراض شيوعاً، إيرادات العيادات، وحركة الصيدلية.", en: "Detailed reports on performance, most common diagnoses, clinic revenues, and pharmacy activity." },
          points: [
            { ar: "تقارير إيرادات يومية", en: "Daily revenue reports" },
            { ar: "إحصاءات أمراض وأدوية", en: "Disease & medicine statistics" },
            { ar: "تصدير PDF و Excel", en: "PDF & Excel export" }
          ]
        }
      ]
    },
    // ── 5. Social Proof Section ──
    socialProof: {
      title: {
        ar: "مراكز طبية وصيدليات تثق في سنمار الطبي",
        en: "Medical Centers & Pharmacies Trust Sinmar Medical"
      },
      stats: [
        { value: "+200", label: { ar: "مركز طبي وصيدلية", en: "Clinics & Pharmacies" } },
        { value: "99%", label: { ar: "رضا العملاء", en: "Client Satisfaction" } },
        { value: "100%", label: { ar: "أمان بيانات المرضى", en: "Patient Data Security" } },
        { value: "+10", label: { ar: "سنوات خبرة طبية", en: "Medical Experience" } }
      ]
    },
    // ── 6. Testimonials ──
    testimonialIds: ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
    // ── 7. FAQs ──
    faqs: [
      {
        q: { ar: "ما هو برنامج سنمار للنظام الطبي وما الذي يقدمه؟", en: "What is Sinmar Medical System and what does it offer?" },
        a: { ar: "برنامج سنمار للنظام الطبي هو حل سحابي متكامل مصمم خصيصاً للمراكز الطبية، العيادات، المستشفيات، والصيدليات في المملكة العربية السعودية. يشمل النظام: إدارة ملفات المرضى الإلكترونية، جدولة المواعيد، الوصفات الطبية الإلكترونية، مخزون الأدوية مع تتبع تواريخ الصلاحية، الفوترة الطبية المتوافقة مع VAT، وإدارة مطالبات التأمين الصحي.", en: "Sinmar Medical System is an integrated cloud solution designed for medical centers, clinics, hospitals, and pharmacies in Saudi Arabia. It includes: electronic patient records, appointment scheduling, e-prescriptions, medicine inventory with expiry tracking, VAT-compliant medical billing, and health insurance claims management." }
      },
      {
        q: { ar: "هل النظام مناسب للعيادات الصغيرة والمراكز الطبية المتخصصة؟", en: "Is the system suitable for small clinics and specialized medical centers?" },
        a: { ar: "نعم، النظام مرن وقابل للتهيئة ليناسب جميع أحجام المنشآت الطبية — من عيادة طبيب واحد إلى مستشفى متعدد التخصصات والفروع. يمكن البدء بالوحدات الأساسية وإضافة وحدات متخصصة (مختبر، أشعة، صيدلية) تدريجياً مع التوسع.", en: "Yes, the system is flexible and configurable to suit all sizes of medical facilities — from a single-doctor clinic to a multi-specialty, multi-branch hospital. You can start with basic modules and add specialized units (lab, radiology, pharmacy) gradually as you expand." }
      },
      {
        q: { ar: "كيف يضمن النظام حماية بيانات المرضى وسريتها؟", en: "How does the system ensure patient data protection and confidentiality?" },
        a: { ar: "يستخدم النظام تشفير SSL كاملاً لجميع البيانات المنقولة والمحفوظة، مع صلاحيات وصول مقيدة لكل مستخدم حسب دوره (طبيب، ممرض، موظف استقبال، محاسب). كما يتم إجراء نسخ احتياطية يومية تلقائية، ويمتثل النظام لمعايير حماية البيانات الصحية المعمول بها في المملكة العربية السعودية.", en: "The system uses full SSL encryption for all transmitted and stored data, with restricted access permissions for each user based on their role (doctor, nurse, receptionist, accountant). Automatic daily backups are performed, and the system complies with health data protection standards in Saudi Arabia." }
      },
      {
        q: { ar: "هل يمكن ربط النظام بشركات التأمين الصحي؟", en: "Can the system integrate with health insurance companies?" },
        a: { ar: "نعم، يوفر النظام تكاملاً مباشراً مع شركات التأمين الصحي الرئيسية في المملكة لإدارة الموافقات المسبقة، إرسال المطالبات إلكترونياً، وتتبع حالة كل مطالبة. هذا يقلل من وقت الانتظار ويسرّع دورة التحصيل.", en: "Yes, the system provides direct integration with major health insurance companies in Saudi Arabia to manage prior approvals, submit claims electronically, and track each claim's status. This reduces waiting time and accelerates the collection cycle." }
      },
      {
        q: { ar: "كيف تعمل الوصفات الطبية الإلكترونية في النظام؟", en: "How do electronic prescriptions work in the system?" },
        a: { ar: "يقوم الطبيب بإصدار الوصفة الطبية إلكترونياً من شاشة الكشف مباشرةً — تظهر فوراً في قسم الصيدلية لصرفها دون أي ورق. يتم تسجيل الوصفة في سجل المريض تلقائياً، ويخصم النظام الأدوية المصروفة من مخزون الصيدلية بشكل فوري مع تحديث الأرصدة لحظياً.", en: "The doctor issues the prescription electronically from the examination screen directly — it appears instantly in the pharmacy to be dispensed without any paperwork. The prescription is automatically recorded in the patient's record, and the system instantly deducts dispensed medicines from pharmacy stock with real-time balance updates." }
      },
      {
        q: { ar: "كيف يساعد النظام في إدارة تواريخ صلاحية الأدوية؟", en: "How does the system help manage medicine expiry dates?" },
        a: { ar: "يتتبع النظام كل دفعة (Batch) من الأدوية برقمها وتاريخ انتهاء صلاحيتها. يرسل تنبيهات تلقائية مبكرة (قابلة للضبط: 30، 60، أو 90 يوماً قبل الانتهاء) لضمان التخلص من الأدوية منتهية الصلاحية أو إعادة توزيعها في الوقت المناسب. كما يصدر تقارير تفصيلية بالأدوية القريبة من الانتهاء.", en: "The system tracks every medicine batch by number and expiry date. It sends automatic early alerts (configurable: 30, 60, or 90 days before expiry) to ensure timely disposal or redistribution of expiring medicines. It also generates detailed reports of near-expiry items." }
      },
      {
        q: { ar: "هل يمكن إدارة عيادات متعددة التخصصات من النظام نفسه؟", en: "Can the system manage multi-specialty clinics from the same platform?" },
        a: { ar: "نعم، النظام مصمم لدعم العيادات متعددة التخصصات مع صلاحيات منفصلة لكل قسم أو تخصص طبي. يمكن لكل طبيب الوصول لملفات مرضاه فقط، بينما تستطيع الإدارة رؤية تقارير موحدة لجميع الأقسام. كما يدعم النظام الصيدلية، المختبر، والأشعة كوحدات مستقلة ومتكاملة.", en: "Yes, the system is designed to support multi-specialty clinics with separate permissions for each department or medical specialty. Each doctor can only access their patients' files, while management can view consolidated reports across all departments. The system also supports pharmacy, lab, and radiology as independent integrated units." }
      },
      {
        q: { ar: "ما هو الفرق بين برنامج سنمار الطبي والبرامج الطبية الأخرى؟", en: "What differentiates Sinmar Medical System from other medical software?" },
        a: { ar: "يتميز برنامج سنمار الطبي بثلاثة عوامل رئيسية: (١) تصميم مخصص للسوق السعودي يدعم اللغة العربية والريال السعودي ومتطلبات هيئة الصحة السعودية. (٢) ربط متكامل مع وحدات ERP الأخرى كالمحاسبة والمخزون والموارد البشرية مما يلغي الحاجة لبرامج منفصلة. (٣) دعم فني متخصص على مدار الساعة بفريق عربي يفهم احتياجات القطاع الصحي.", en: "Sinmar Medical System stands out in three key areas: (1) Custom design for the Saudi market supporting Arabic, Saudi Riyal, and Saudi Health Authority requirements. (2) Full integration with other ERP modules like accounting, inventory, and HR, eliminating the need for separate software. (3) Specialized 24/7 technical support with an Arabic team that understands healthcare sector needs." }
      }
    ],
    // ── 8. Use Cases ──
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "النظام الطبي لجميع المنشآت الصحية", en: "Medical System for All Healthcare Facilities" },
      desc: { ar: "برنامج سنمار الطبي مرن ومُصمَّم لخدمة طيف واسع من المنشآت الصحية في المملكة العربية السعودية — من العيادات الخاصة إلى المستشفيات الكبرى.", en: "Sinmar Medical System is flexible and designed to serve a wide range of healthcare facilities in Saudi Arabia — from private clinics to large hospitals." },
      cardTag: { ar: "قطاع صحي", en: "Health Sector" },
      list: [
        {
          icon: FiUsers,
          title: { ar: "العيادات الخاصة والمراكز الطبية", en: "Private Clinics & Medical Centers" },
          description: { ar: "إدارة ملفات المرضى، المواعيد، الكشوفات، والوصفات الطبية بكفاءة عالية مع تتبع إيرادات كل طبيب.", en: "Manage patient files, appointments, examinations, and prescriptions efficiently with revenue tracking per doctor." },
        },
        {
          icon: FiClipboard,
          title: { ar: "الصيدليات ومستودعات الأدوية", en: "Pharmacies & Medicine Warehouses" },
          description: { ar: "تتبع مخزون الأدوية بالدفعات والصلاحية، وصرف الوصفات إلكترونياً، وتنبيهات النواقص — مع ربط محاسبي فوري.", en: "Track medicine inventory by batch and expiry, dispense prescriptions electronically, and receive shortage alerts — with instant accounting integration." },
        },
        {
          icon: FiShield,
          title: { ar: "المستشفيات متعددة التخصصات", en: "Multi-Specialty Hospitals" },
          description: { ar: "إدارة أقسام متعددة (باطنية، جراحة، نساء، أطفال) مع ملفات موحدة للمريض وتقارير مالية موحدة للمجموعة.", en: "Manage multiple departments (internal medicine, surgery, obstetrics, pediatrics) with unified patient files and consolidated group financial reports." },
        },
        {
          icon: FiHome,
          title: { ar: "المختبرات الطبية والأشعة", en: "Medical Laboratories & Radiology" },
          description: { ar: "استقبال طلبات التحاليل والأشعة إلكترونياً، إصدار النتائج للمريض والطبيب، وإدارة المستلزمات المختبرية.", en: "Receive lab and radiology requests electronically, issue results to patients and doctors, and manage lab supplies." },
        },
        {
          icon: FiBriefcase,
          title: { ar: "مراكز طب الأسنان", en: "Dental Centers" },
          description: { ar: "ملف أسنان مفصل لكل مريض مع رسم توضيحي للأسنان، جدولة جلسات العلاج، وتتبع المستلزمات والمواد المستخدمة.", en: "Detailed dental file per patient with tooth chart, treatment session scheduling, and tracking of supplies and materials used." },
        },
        {
          icon: FiTruck,
          title: { ar: "شركات توزيع الأدوية والمستلزمات الطبية", en: "Medicine & Medical Supply Distributors" },
          description: { ar: "إدارة مخزون الأدوية والمستلزمات الطبية على نطاق واسع مع تتبع الدفعات والصلاحية وإدارة طلبات العملاء والتوزيع.", en: "Manage medicines and medical supplies at scale with batch and expiry tracking, customer orders, and distribution management." },
        }
      ]
    },
    // ── 9. ERP Modules ──
    erpModules: {
      tag: { ar: "وحدات النظام الطبي", en: "Medical System Modules" },
      title: { ar: "النظام الطبي منظومة متكاملة الوحدات", en: "Medical System — A Complete Integrated Suite" },
      desc: { ar: "برنامج سنمار الطبي ليس برنامج حجز مواعيد فقط — إنه منظومة طبية متكاملة تربط جميع أقسام المنشأة الصحية في منصة واحدة.", en: "Sinmar Medical System is not just an appointment booking software — it is a fully integrated medical suite connecting all healthcare facility departments in one platform." },
      list: [
        {
          icon: FiUsers,
          title: { ar: "إدارة المرضى وملفاتهم", en: "Patient Management" },
          description: { ar: "سجل طبي إلكتروني شامل لكل مريض يتضمن التاريخ المرضي، الحساسيات، الأدوية السابقة، والنتائج الطبية.", en: "Comprehensive electronic medical record for each patient including history, allergies, previous medications, and medical results." },
        },
        {
          icon: FiClipboard,
          title: { ar: "إدارة المواعيد والجدولة", en: "Appointment & Scheduling" },
          description: { ar: "تقويم ذكي لتوزيع المواعيد على الأطباء مع تذكيرات تلقائية وإدارة قائمة الانتظار.", en: "Smart calendar to distribute appointments across doctors with automatic reminders and waiting list management." },
        },
        {
          icon: FiShoppingBag,
          title: { ar: "الصيدلية ومخزون الأدوية", en: "Pharmacy & Medicine Inventory" },
          description: { ar: "إدارة شاملة لمخزون الأدوية مع تتبع الدفعات، الصلاحية، والوصفات الإلكترونية وصرفها فورياً.", en: "Comprehensive medicine inventory management with batch tracking, expiry dates, e-prescriptions and instant dispensing." },
        },
        {
          icon: FiCreditCard,
          title: { ar: "الفوترة والتأمين الصحي", en: "Billing & Health Insurance" },
          description: { ar: "إصدار فواتير طبية متوافقة مع VAT وإدارة مطالبات التأمين الصحي والموافقات المسبقة.", en: "Issue VAT-compliant medical invoices and manage health insurance claims and prior approvals." },
        },
        {
          icon: FiLayers,
          title: { ar: "المحاسبة المالية الطبية", en: "Medical Financial Accounting" },
          description: { ar: "ربط فوري بين العمليات الطبية والحسابات المالية — كل فاتورة أو صرف دواء يولد قيداً محاسبياً تلقائياً.", en: "Instant link between medical operations and financial accounts — every invoice or medicine dispensing generates an automatic accounting entry." },
        },
        {
          icon: FiTrendingUp,
          title: { ar: "التقارير والإحصاءات الطبية", en: "Medical Reports & Analytics" },
          description: { ar: "تقارير شاملة: إيرادات العيادات، أداء الأطباء، حركة الصيدلية، وإحصاءات الأمراض لاتخاذ قرارات طبية وإدارية أفضل.", en: "Comprehensive reports: clinic revenues, doctor performance, pharmacy activity, and disease statistics for better medical and management decisions." },
        }
      ]
    },
    // ── 10. Strengths ──
    strengths: {
      tag: { ar: "لماذا سنمار الطبي؟", en: "Why Sinmar Medical?" },
      title: { ar: "لماذا يختار المراكز الطبية والصيدليات برنامج سنمار؟", en: "Why Medical Centers & Pharmacies Choose Sinmar?" },
      quote: { ar: "\"إدارة المريض بشكل صحيح تبدأ ببيانات صحيحة وعمليات منظمة.\"", en: "\"Proper patient management starts with accurate data and organized operations.\"" },
      quoteText: { ar: "مع سنمار الطبي، لن تفوّتك وصفة، ولن تفقد ملف مريض، ولن ينفذ دواء قبل أن تعلم.", en: "With Sinmar Medical, you won't miss a prescription, lose a patient file, or run out of medicine before you know." },
      list: [
        {
          icon: FiShield,
          title: { ar: "مُصمَّم للقطاع الصحي السعودي", en: "Designed for the Saudi Healthcare Sector" },
          description: { ar: "نظام طبي مبني على متطلبات السوق السعودي — اللغة العربية، الريال السعودي، متطلبات هيئة الصحة السعودية والتأمين الصحي.", en: "A medical system built on Saudi market requirements — Arabic language, Saudi Riyal, Saudi Health Authority requirements, and health insurance." },
        },
        {
          icon: FiClock,
          title: { ar: "تشغيل سريع خلال أيام قليلة", en: "Fast Deployment in a Few Days" },
          description: { ar: "فريق التطبيق لدينا يشغّل النظام ويُدرّب فريقك الطبي والإداري خلال أيام معدودة مع ترحيل البيانات الحالية.", en: "Our implementation team runs the system and trains your medical and administrative staff within a few days with existing data migration." },
        },
        {
          icon: FiUsers,
          title: { ar: "دعم فني طبي متخصص 24/7", en: "Specialized Medical Technical Support 24/7" },
          description: { ar: "فريق دعم يفهم احتياجات القطاع الصحي، متاح عبر الواتساب والهاتف والبريد — دعم حقيقي لا ردود آلية.", en: "Support team that understands healthcare sector needs, available via WhatsApp, phone, and email — real support, not automated responses." },
        },
        {
          icon: FiTrendingUp,
          title: { ar: "تكامل مع جميع أنظمة الأعمال", en: "Integration with All Business Systems" },
          description: { ar: "النظام الطبي يتصل بالمحاسبة، الموارد البشرية، والمخزون — منصة واحدة لإدارة الجانب الصحي والإداري والمالي.", en: "The medical system connects with accounting, HR, and inventory — one platform managing the medical, administrative, and financial aspects." },
        }
      ]
    },
    // ── 11. Dashboard Preview ──
    dashboardPreview: {
      title: {
        ar: "شاهد واجهات برنامج سنمار الطبي",
        en: "Explore Sinmar Medical System Interfaces"
      },
      desc: {
        ar: "واجهة طبية عصرية وسهلة الاستخدام تُمكّن الأطباء والصيادلة والإداريين من إدارة جميع العمليات بكل سلاسة من شاشة واحدة.",
        en: "A modern, easy-to-use medical interface enabling doctors, pharmacists, and administrators to manage all operations smoothly from a single screen."
      },
      image: "Productes/sinmar-medical.webp"
    },
    // ── 12. CTA ──
    cta: productCTAs["medical-system"]
  },


  // 📦 5: إدارة العقارات — Real Estate Management
  "real-estate-management": {
    ...defaultSections,
    dashboardPreview: { ...defaultSections.dashboardPreview, image: "Productes/real-estate-management-bg.webp" },
    hero: {
      eyebrow: {
        ar: "برنامج سنمار لإدارة الأملاك — حل شامل وموثوق",
        en: "Sanmar Property Management — Comprehensive & Reliable Solution"
      },
      title: {
        ar: "برنامج سنمار لإدارة الممتلكات والعقارات",
        en: "Sanmar Property & Real Estate Management Software"
      },
      desc: {
        ar: "تحكم كامل في عقاراتك، إدارة سلسة للعقود والإيجارات، ومتابعة دقيقة للتحصيلات والصيانة من منصة واحدة متكاملة ترتقي بأعمالك العقارية.",
        en: "Full control over your properties, seamless contract and lease management, and precise tracking of collections and maintenance from a single integrated platform that elevates your real estate business."
      },
      bullets: [
        { ar: "إدارة العقود بذكاء", en: "Smart Contract Mgmt", key: "Prod_Smart_Contract", icon: "FiCheckCircle" },
        { ar: "تنبيهات الدفع الآلية", en: "Auto Payment Alerts", key: "Prod_Auto_Alerts", icon: "FiClock" },
        { ar: "تقارير مالية شاملة", en: "Comprehensive Reports", key: "Prod_Finance_Reports", icon: "FiTrendingUp" }
      ]
    },
    definition: {
      title: {
        ar: "ما هو برنامج سنمار لإدارة الممتلكات؟",
        en: "What is Sanmar Property Management Software?"
      },
      p1: {
        ar: "نظام متكامل صُمم خصيصاً لتسهيل وإدارة كافة جوانب الأملاك والعقارات السكنية والتجارية.",
        en: "An integrated system specifically designed to facilitate and manage all aspects of residential and commercial properties."
      },
      p2: {
        ar: "يتيح لك البرنامج أتمتة دورة التأجير بالكامل؛ بدءاً من تسجيل الوحدات وبيانات المستأجرين، مروراً بتجديد العقود وإصدار الفواتير المتوافقة مع ZATCA، وصولاً إلى إدارة طلبات الصيانة وإصدار التقارير المالية والإدارية التي تدعم قراراتك.",
        en: "The software allows you to fully automate the leasing cycle; from registering units and tenant data, through renewing contracts and issuing ZATCA-compliant invoices, to managing maintenance requests and generating financial and administrative reports that support your decisions."
      }
    },
    features: {
      title: {
        ar: "ميزات تقودك للنجاح",
        en: "Features that drive success"
      },
      desc: {
        ar: "نظام متكامل يمنحك كل الأدوات للسيطرة على عقاراتك وإيراداتها.",
        en: "An integrated system that gives you all the tools to control your properties and revenues."
      },
      list: [
        {
          title: { ar: "إدارة العقود والإيجارات", en: "Contract & Lease Management" },
          desc: { ar: "إنشاء وتجديد العقود بضغطة زر، مع متابعة دقيقة لتواريخ الانتهاء.", en: "Create and renew contracts with a click, with precise tracking of expiration dates." },
          points: [
            { ar: "تجديد العقود بسهولة", en: "Easy contract renewal" },
            { ar: "إدارة ملفات المستأجرين", en: "Tenant profile management" },
            { ar: "أرشفة إلكترونية للعقود", en: "Electronic contract archiving" }
          ]
        },
        {
          title: { ar: "التحصيل المالي المرن", en: "Flexible Financial Collection" },
          desc: { ar: "تسجيل الدفعات، إصدار سندات القبض، وجدولة الدفعات المستحقة بسهولة.", en: "Record payments, issue receipts, and easily schedule due payments." },
          points: [
            { ar: "سندات قبض آلية", en: "Auto receipt vouchers" },
            { ar: "جدولة الدفعات", en: "Payment scheduling" },
            { ar: "متابعة المتأخرات", en: "Tracking overdue payments" }
          ]
        },
        {
          title: { ar: "تنبيهات وإشعارات تلقائية", en: "Auto Alerts & Notifications" },
          desc: { ar: "تنبيهات استباقية للمستأجرين ومسؤولي الأملاك باقتراب موعد الدفع أو انتهاء العقد.", en: "Proactive alerts for tenants and property managers on upcoming payments or contract expirations." },
          points: [
            { ar: "إشعارات قرب انتهاء العقد", en: "Contract expiry alerts" },
            { ar: "تذكير بمواعيد السداد", en: "Payment due reminders" },
            { ar: "رسائل نصية وبريد إلكتروني", en: "SMS and Email integration" }
          ]
        },
        {
          title: { ar: "إدارة الصيانة والتشغيل", en: "Maintenance & Operations" },
          desc: { ar: "تتبع طلبات الصيانة لكل وحدة، تسجيل التكاليف، وربطها بالتقارير المالية.", en: "Track maintenance requests per unit, record costs, and link them to financial reports." },
          points: [
            { ar: "تسجيل بلاغات الأعطال", en: "Register fault reports" },
            { ar: "متابعة حالة الصيانة", en: "Track maintenance status" },
            { ar: "تحميل التكلفة على الوحدة", en: "Allocate costs to units" }
          ]
        },
        {
          title: { ar: "لوحة معلومات وتقارير", en: "Dashboard & Reports" },
          desc: { ar: "رؤية شاملة لحالة الوحدات، نسب التحصيل، والإيرادات والمصروفات.", en: "Comprehensive view of unit status, collection rates, and revenues/expenses." },
          points: [
            { ar: "تقرير الإشغال والشاغر", en: "Occupancy and vacancy report" },
            { ar: "كشف حساب المالك", en: "Owner account statement" },
            { ar: "إيرادات ومصروفات دورية", en: "Periodic revenue & expense" }
          ]
        }
      ]
    },
    faqs: [
      {
        q: { ar: "هل يمكن ربط البرنامج بنظام المحاسبة العام؟", en: "Can the program be linked to the general accounting system?" },
        a: { ar: "نعم، جميع العمليات المالية (كالإيجارات والمصروفات) تُرحّل تلقائياً إلى نظام الحسابات العامة لضمان دقة القوائم المالية.", en: "Yes, all financial operations (like rent and expenses) are automatically posted to the general accounting system to ensure the accuracy of financial statements." }
      },
      {
        q: { ar: "هل يدعم البرنامج إدارة الأملاك للغير (الملاك المتعددين)؟", en: "Does the software support third-party property management (multiple owners)?" },
        a: { ar: "بالتأكيد، يمكنك إدارة عقارات لملاك مختلفين في نفس الوقت وإصدار كشوف حساب خاصة ودقيقة بكل مالك بسهولة تامة.", en: "Absolutely, you can manage properties for different owners simultaneously and easily issue specific and accurate account statements for each owner." }
      },
      {
        q: { ar: "هل الفواتير الصادرة من النظام متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA)؟", en: "Are the invoices issued from the system compliant with ZATCA requirements?" },
        a: { ar: "نعم، الفواتير الإلكترونية الصادرة عن برنامج إدارة الممتلكات متوافقة بالكامل مع متطلبات ZATCA (المرحلتين الأولى والثانية) وتتضمن رمز الاستجابة السريعة (QR Code).", en: "Yes, the e-invoices issued by the property management software are fully compliant with ZATCA requirements (Phases 1 and 2) and include the QR Code." }
      }
    ],
    integration: {
      title: { ar: "نظام إدارة أملاك متوافق مع ZATCA والفاتورة الإلكترونية", en: "ZATCA and E-Invoicing Compliant Property Management System" },
      desc: { ar: "أصدر فواتير الإيجارات والمطالبات المالية بشكل آلي ومتوافق كلياً مع متطلبات هيئة الزكاة والضريبة والجمارك.", en: "Automatically issue rent invoices and financial claims fully compliant with ZATCA requirements." },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "متوافق مع ZATCA", en: "ZATCA Compliant" },
          desc: { ar: "إصدار فواتير ضريبية لإيجارات العقارات التجارية والسكنية وفق اللوائح.", en: "Issue tax invoices for commercial and residential property rentals according to regulations." }
        },
        {
          icon: "FiShield",
          title: { ar: "أمان وموثوقية", en: "Security & Reliability" },
          desc: { ar: "حماية تامة لبيانات عقودك ومستأجريك، مع نسخ احتياطي دائم للبيانات.", en: "Full protection of your contracts and tenants data, with permanent data backup." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "الفاتورة الإلكترونية B2B و B2C", en: "B2B and B2C E-Invoicing" },
          desc: { ar: "يدعم النظام إصدار الفواتير للشركات (B2B) وللأفراد (B2C) حسب طبيعة التأجير.", en: "The system supports issuing invoices to companies (B2B) and individuals (B2C) based on the rental nature." }
        },
        {
          title: { ar: "ضريبة القيمة المضافة للإيجار التجاري", en: "VAT for Commercial Rent" },
          desc: { ar: "احتساب ضريبة القيمة المضافة على العقارات التجارية وإضافتها للفواتير آلياً.", en: "Calculate VAT on commercial properties and add it to invoices automatically." }
        }
      ]
    },
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "إدارة الأملاك في مختلف القطاعات العقارية", en: "Property management across real estate sectors" },
      desc: { ar: "برنامج سنمار لإدارة الأملاك يتكيف مع جميع أنواع العقارات والأنشطة العقارية في السوق السعودي.", en: "Sanmar property management software adapts to all types of properties and real estate activities in the Saudi market." },
      cardTag: { ar: "قطاع", en: "Sector" },
      list: [
        { icon: FiHome, title: { ar: "شركات إدارة الأملاك", en: "Property Management Companies" }, description: { ar: "إدارة مئات العقارات لصالح الملاك مع متابعة التحصيل وإعداد كشوف حساب دورية لكل مالك.", en: "Manage hundreds of properties on behalf of owners with collection tracking and periodic statements." } },
        { icon: FiBriefcase, title: { ar: "المجمعات التجارية والمكتبية", en: "Commercial & Office Complexes" }, description: { ar: "إدارة عقود إيجار المحلات والمكاتب مع متابعة رسوم الخدمات المشتركة والصيانة الدورية.", en: "Manage lease contracts for shops and offices with shared service charges and periodic maintenance." } },
        { icon: FiUsers, title: { ar: "المجمعات السكنية والأبراج", en: "Residential Complexes & Towers" }, description: { ar: "متابعة عقود المستأجرين، إدارة الوحدات الشاغرة، وتحصيل الإيجارات بإشعارات آلية.", en: "Track tenant contracts, manage vacant units, and collect rents with automatic notifications." } },
        { icon: FiTruck, title: { ar: "شركات التطوير العقاري", en: "Real Estate Developers" }, description: { ar: "تتبع مبيعات الوحدات العقارية بالأقساط وإدارة محافظ العقارات المتعددة المشاريع.", en: "Track unit sales by installments and manage multi-project real estate portfolios." } },
        { icon: FiClipboard, title: { ar: "الأفراد وملاك العقارات", en: "Individual Property Owners" }, description: { ar: "حل بسيط لأصحاب العقارات الأفراد لمتابعة الإيجارات والمصروفات وصافي الأرباح.", en: "Simple solution for individual owners to track rents, expenses, and net profits." } },
        { icon: FiShoppingBag, title: { ar: "الأسواق ومراكز التسوق", en: "Malls & Shopping Centers" }, description: { ar: "إدارة إيجارات المحلات التجارية مع احتساب نسبة من المبيعات كإيجار متغير.", en: "Manage retail store leases with percentage-of-sales variable rent calculation." } }
      ]
    },
    erpModules: {
      tag: { ar: "وحدات ERP", en: "ERP Modules" },
      title: { ar: "برنامج إدارة الأملاك جزء من منظومة سنمار المتكاملة", en: "Property management is part of Sanmar's integrated system" },
      desc: { ar: "نظام إدارة الأملاك مرتبط بالمحاسبة والفوترة لتحقيق إدارة مالية شاملة لعقاراتك.", en: "The property system is linked to accounting and invoicing for comprehensive financial management." },
      list: [
        { icon: FiLayers, title: { ar: "إدارة العقود والإيجارات", en: "Contracts & Leases" }, description: { ar: "إصدار وتتبع عقود الإيجار بأنواعها مع تجديد آلي وتنبيهات انتهاء.", en: "Issue and track lease contracts with auto-renewal and expiry alerts." } },
        { icon: FiHome, title: { ar: "التحصيل والمالية", en: "Collections & Finance" }, description: { ar: "متابعة الإيجارات المستحقة وإصدار سندات القبض مع ربط محاسبي كامل.", en: "Track due rents and issue receipt vouchers with full accounting integration." } },
        { icon: FiUsers, title: { ar: "إدارة المستأجرين", en: "Tenant Management" }, description: { ar: "قاعدة بيانات شاملة للمستأجرين مع سجل المعاملات والمراسلات.", en: "Comprehensive tenant database with transaction and communication history." } },
        { icon: FiClipboard, title: { ar: "الصيانة والمرافق", en: "Maintenance & Facilities" }, description: { ar: "تسجيل طلبات الصيانة ومتابعة تنفيذها مع ربط التكاليف بالوحدة العقارية.", en: "Log maintenance requests and track execution with cost allocation per unit." } },
        { icon: FiCreditCard, title: { ar: "الفوترة الإلكترونية", en: "E-Invoicing" }, description: { ar: "إصدار فواتير إيجار إلكترونية متوافقة مع ZATCA لكل مستأجر.", en: "Issue ZATCA-compliant electronic rent invoices for each tenant." } },
        { icon: FiTrendingUp, title: { ar: "التقارير والتحليلات", en: "Reports & Analytics" }, description: { ar: "تقارير الإشغال، العوائد، والمصروفات لاتخاذ قرارات استثمارية ذكية.", en: "Occupancy, returns, and expense reports for smart investment decisions." } }
      ]
    },
    strengths: {
      tag: { ar: "لماذا سنمار؟", en: "Why Sanmar?" },
      title: { ar: "لماذا سنمار هو الخيار الأمثل لإدارة أملاكك العقارية؟", en: "Why is Sanmar the best choice for your property management?" },
      quote: { ar: "\"عقار مُدار بذكاء = استثمار مضمون العوائد.\"", en: "\"A smartly managed property = a guaranteed return on investment.\"" },
      quoteText: { ar: "مع سنمار، لن تفوتك دفعة إيجار ولن تتراكم عليك مصروفات صيانة بدون علمك.", en: "With Sanmar, you won't miss a rent payment and maintenance costs won't pile up without your knowledge." },
      list: [
        { icon: FiShield, title: { ar: "مصمم للسوق العقاري السعودي", en: "Designed for Saudi Real Estate" }, description: { ar: "يدعم عقود إيجار الموحدة ومنصة إيجار وشبكة إلكترونية متوافقة مع الأنظمة السعودية.", en: "Supports unified lease contracts and Ejar platform compatible with Saudi regulations." } },
        { icon: FiClock, title: { ar: "تحصيل آلي بلا متابعة يدوية", en: "Automatic collection without manual follow-up" }, description: { ar: "إشعارات تلقائية للمستأجرين قبل موعد الدفع وتنبيهات فورية عند التأخر.", en: "Automatic notifications to tenants before payment dates and instant alerts on delays." } },
        { icon: FiUsers, title: { ar: "تقارير عوائد شاملة", en: "Comprehensive return reports" }, description: { ar: "تعرف على صافي العائد لكل عقار ووحدة بعد خصم المصروفات والصيانة.", en: "Know the net return per property and unit after deducting expenses and maintenance." } },
        { icon: FiTrendingUp, title: { ar: "دعم فني عقاري متخصص", en: "Specialized real estate support" }, description: { ar: "فريق دعم يفهم قطاع العقارات ومتاح عبر الواتساب والهاتف لمساعدتك.", en: "A support team that understands real estate, available via WhatsApp and phone." } }
      ]
    },
    cta: productCTAs["real-estate-management"]
  },

  // 📦 6: الشقق المفروشة — Furnished Apartments
  "furnished-apartments": {
    ...defaultSections,
    dashboardPreview: { ...defaultSections.dashboardPreview, image: "Productes/furnished-apartments-bg.webp" },
    hero: {
      eyebrow: {
        ar: "برنامج سنمار لإدارة الشقق المفروشة — نظام فندقي ذكي",
        en: "Sanmar Furnished Apartments — Smart Hotel System"
      },
      title: {
        ar: "برنامج إدارة الشقق المفروشة والفنادق",
        en: "Furnished Apartments & Hotel Management Software"
      },
      desc: {
        ar: "نظام متكامل لتنظيم الحجوزات، تسريع إجراءات الدخول والخروج، وإدارة حالة الغرف بدقة مع ربط مباشر بالفواتير والمحاسبة لضمان أقصى كفاءة تشغيلية.",
        en: "An integrated system to organize bookings, speed up check-in/out procedures, and accurately manage room status with direct link to invoicing and accounting for maximum operational efficiency."
      },
      bullets: [
        { ar: "لوحة حجوزات تفاعلية", en: "Interactive Bookings", key: "FA_Interactive_Board", icon: "FiLayers" },
        { ar: "تسجيل دخول/خروج سريع", en: "Fast Check-in/out", key: "FA_Fast_Checkin", icon: "FiClock" },
        { ar: "إدارة الشواغر والنظافة", en: "Vacancy & Cleaning Mgmt", key: "FA_Cleaning_Mgmt", icon: "FiCheckCircle" }
      ]
    },
    definition: {
      title: {
        ar: "ما هو برنامج سنمار للشقق المفروشة؟",
        en: "What is Sanmar Furnished Apartments Software?"
      },
      p1: {
        ar: "نظام متخصص في إدارة الفنادق والشقق المفروشة يجمع بين سهولة الاستخدام والدقة المحاسبية لتلبية احتياجات قطاع الضيافة.",
        en: "A specialized system for managing hotels and furnished apartments that combines ease of use with accounting accuracy to meet the needs of the hospitality sector."
      },
      p2: {
        ar: "يتيح لك النظام متابعة حالة الغرف لحظياً، إدارة أسعار المواسم، وتسكين النزلاء بسرعة فائقة مع إصدار عقود وفواتير إلكترونية متوافقة بالكامل مع متطلبات ZATCA وتوجيهات وزارة السياحة.",
        en: "The system allows you to monitor room status in real-time, manage seasonal pricing, and check-in guests incredibly fast, while issuing electronic contracts and invoices fully compliant with ZATCA requirements and Ministry of Tourism directives."
      }
    },
    features: {
      title: {
        ar: "ميزات تقودك للنجاح في قطاع الضيافة",
        en: "Features driving your success in hospitality"
      },
      desc: {
        ar: "نظام متكامل يمنحك كل الأدوات لإدارة الشقق الفندقية وزيادة الأرباح.",
        en: "An integrated system giving you all the tools to manage hotel apartments and increase profits."
      },
      list: [
        {
          title: { ar: "لوحة الحجوزات التفاعلية", en: "Interactive Booking Dashboard" },
          desc: { ar: "عرض حالة الغرف والأجنحة في شاشة واحدة (متاحة، مشغولة، صيانة، نظافة).", en: "View room and suite status on a single screen (available, occupied, under maintenance, housekeeping)." },
          points: [
            { ar: "رؤية شاملة للغرف", en: "Comprehensive room view" },
            { ar: "تحديث الحالة فورياً", en: "Instant status update" },
            { ar: "تفاصيل النزلاء بضغطة", en: "Guest details in a click" }
          ]
        },
        {
          title: { ar: "تسجيل الدخول والخروج السريع", en: "Fast Check-in & Check-out" },
          desc: { ar: "أتمتة الإجراءات لتقليل وقت انتظار النزلاء ورفع مستوى رضاهم.", en: "Automate procedures to reduce guest waiting time and raise satisfaction levels." },
          points: [
            { ar: "طباعة العقود آلياً", en: "Auto-print contracts" },
            { ar: "إصدار الفواتير الفوري", en: "Instant invoicing" },
            { ar: "تمديد الحجوزات بمرونة", en: "Flexible booking extensions" }
          ]
        },
        {
          title: { ar: "إدارة أسعار المواسم والضرائب", en: "Seasonal Pricing & Taxes Mgmt" },
          desc: { ar: "مرونة في تغيير الأسعار بناءً على المواسم والإجازات مع احتساب رسوم البلدية وVAT آلياً.", en: "Flexibility in changing prices based on seasons and holidays with auto-calculation of Baladiya fees and VAT." },
          points: [
            { ar: "تسعير آلي للمواسم", en: "Automated seasonal pricing" },
            { ar: "رسوم البلدية (Baladiya fees)", en: "Baladiya fees calculation" },
            { ar: "ضريبة القيمة المضافة", en: "Value Added Tax (VAT)" }
          ]
        },
        {
          title: { ar: "متابعة خدمات النظافة والصيانة", en: "Housekeeping & Maintenance" },
          desc: { ar: "توجيه فريق النظافة للغرف الشاغرة وتحديث حالتها فور الانتهاء لتصبح جاهزة للتأجير.", en: "Direct the housekeeping team to vacant rooms and update status upon completion to make them ready for rent." },
          points: [
            { ar: "تنبيهات لفريق النظافة", en: "Alerts for housekeeping" },
            { ar: "متابعة أعمال الصيانة", en: "Track maintenance work" },
            { ar: "تسريع تجهيز الغرف", en: "Speed up room prep" }
          ]
        },
        {
          title: { ar: "الفوترة الممتدة والدفع الآجل", en: "Extended Invoicing & Credit" },
          desc: { ar: "مرونة في التعامل مع الإقامات الطويلة وتمديد الحجوزات مع دعم نظام الشركات الآجل.", en: "Flexibility in handling long stays and booking extensions with support for corporate credit." },
          points: [
            { ar: "فواتير الإقامات الطويلة", en: "Long-stay invoices" },
            { ar: "حجوزات الشركات الآجلة", en: "Corporate credit bookings" },
            { ar: "سندات قبض يومية", en: "Daily receipt vouchers" }
          ]
        }
      ]
    },
    faqs: [
      {
        q: { ar: "هل يدعم النظام تسجيل بيانات النزلاء وربطها بالجهات الأمنية؟", en: "Does the system support recording guest data and linking it to security authorities?" },
        a: { ar: "نعم، النظام مصمم لتسجيل بيانات الهوية الوطنية وجوازات السفر بدقة لتسهيل إعداد الكشوفات الأمنية ورفعها للجهات المختصة حسب توجيهات وزارة السياحة.", en: "Yes, the system is designed to accurately record national IDs and passports to facilitate the preparation of security lists for relevant authorities as per Ministry of Tourism directives." }
      },
      {
        q: { ar: "هل يتم احتساب رسوم البلدية بشكل صحيح ومفصل في الفاتورة؟", en: "Are Baladiya (Municipal) fees calculated correctly and detailed in the invoice?" },
        a: { ar: "بالتأكيد، يقوم النظام باحتساب رسوم البلدية بشكل منفصل وتطبيق ضريبة القيمة المضافة (VAT) آلياً وعرضها في الفاتورة الإلكترونية بصيغة متوافقة مع متطلبات الهيئة.", en: "Absolutely, the system calculates Baladiya fees separately and applies VAT automatically, displaying them in the e-invoice in compliance with ZATCA requirements." }
      },
      {
        q: { ar: "كيف يتعامل النظام مع حجوزات الشركات والعملاء الدائمين؟", en: "How does the system handle corporate bookings and loyal customers?" },
        a: { ar: "يحتوي البرنامج على ملفات خاصة للشركات تتيح لك إدارة العقود السنوية، تطبيق أسعار مخفضة، والسماح بالدفع الآجل وإصدار كشوف حساب وفواتير مجمعة بنهاية الفترة.", en: "The software has specific profiles for companies allowing you to manage annual contracts, apply discounted rates, allow credit payments, and issue consolidated invoices/statements at the end of the period." }
      }
    ],
    integration: {
      title: { ar: "نظام فندقي متوافق مع ZATCA والتنظيمات السياحية", en: "Hotel System Compliant with ZATCA and Tourism Regulations" },
      desc: { ar: "أصدر فواتير الإقامة إلكترونياً وتوافق تماماً مع نظام وزارة السياحة وهيئة الزكاة والضريبة والجمارك.", en: "Issue accommodation invoices electronically and comply fully with Ministry of Tourism and ZATCA regulations." },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "متوافق مع ZATCA", en: "ZATCA Compliant" },
          desc: { ar: "فواتير ضريبية مفصلة تشمل تفاصيل الغرف والضرائب ورمز الاستجابة السريعة.", en: "Detailed tax invoices including room details, taxes, and QR Code." }
        },
        {
          icon: "FiShield",
          title: { ar: "تطبيق رسوم البلدية", en: "Applying Baladiya Fees" },
          desc: { ar: "دعم مدمج لاحتساب رسوم الإيواء البلدي حسب النسبة المقررة آلياً.", en: "Built-in support for auto-calculating municipal accommodation fees." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "إدارة حسابات الشركات الآجلة", en: "Corporate Credit Mgmt" },
          desc: { ar: "إصدار فواتير ضريبية (B2B) للشركات المتعاقدة وإدارة تحصيلها بكل دقة.", en: "Issue B2B tax invoices for contracted companies and manage collections." }
        },
        {
          title: { ar: "تصدير قوائم النزلاء", en: "Exporting Guest Lists" },
          desc: { ar: "طباعة وتصدير الكشوفات الدورية للنزلاء لتلبية طلبات التفتيش والجهات الأمنية.", en: "Print and export periodic guest lists to meet inspection and security requirements." }
        }
      ]
    },
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "إدارة منشآت الإيواء السياحي", en: "Managing Tourist Accommodation Facilities" },
      desc: { ar: "برنامج سنمار للشقق المفروشة يخدم قطاعات الإيواء بمختلف أحجامها.", en: "Sanmar Furnished Apartments software serves accommodation sectors of all sizes." },
      cardTag: { ar: "قطاع", en: "Sector" },
      list: [
        { icon: FiHome, title: { ar: "الشقق المفروشة", en: "Furnished Apartments" }, description: { ar: "إدارة يومية وتأجير شهري للوحدات السكنية المفروشة بمرونة تامة.", en: "Daily management and monthly rental of furnished residential units with full flexibility." } },
        { icon: FiBriefcase, title: { ar: "الفنادق الاقتصادية", en: "Budget Hotels" }, description: { ar: "تسكين سريع، متابعة نظافة الغرف، وإصدار فواتير ضريبية فورية للنزلاء.", en: "Fast check-in, room cleaning tracking, and instant tax invoices for guests." } },
        { icon: FiUsers, title: { ar: "الأجنحة الفندقية", en: "Hotel Suites" }, description: { ar: "نظام حجوزات مرن يناسب الأجنحة الفندقية التي تستهدف العائلات والإقامات الطويلة.", en: "Flexible booking system suitable for hotel suites targeting families and long stays." } },
        { icon: FiTruck, title: { ar: "المنتجعات السياحية", en: "Tourist Resorts" }, description: { ar: "إدارة حجوزات الشاليهات والمرافق الترفيهية مع ربط خدمات الضيافة بالفاتورة.", en: "Manage chalet and recreational facility bookings with hospitality services linked to the invoice." } },
        { icon: FiClipboard, title: { ar: "سكن الموظفين والعمال", en: "Staff & Labor Camps" }, description: { ar: "إدارة تسكين موظفي الشركات والعمالة في مجمعات سكنية مخصصة.", en: "Manage accommodation of company staff and labor in dedicated residential complexes." } },
        { icon: FiShoppingBag, title: { ar: "النزل وبيوت الشباب", en: "Hostels & Guest Houses" }, description: { ar: "إدارة الإشغال السريع وإصدار تقارير يومية بحالة الغرف والأسرّة.", en: "Manage fast occupancy and issue daily reports on room and bed status." } }
      ]
    },
    erpModules: {
      tag: { ar: "وحدات ERP", en: "ERP Modules" },
      title: { ar: "نظام فندقي مدمج مع تخطيط الموارد", en: "Hotel system integrated with resource planning" },
      desc: { ar: "لا يقتصر البرنامج على الاستقبال، بل يمتد ليشمل المحاسبة وإدارة المرافق.", en: "The software is not limited to reception, but extends to accounting and facility management." },
      list: [
        { icon: FiLayers, title: { ar: "الاستقبال والحجوزات", en: "Front Desk & Reservations" }, description: { ar: "شاشة استعلام سريعة للغرف الشاغرة وإتمام إجراءات التسكين بثوانٍ.", en: "Fast query screen for vacant rooms and check-in procedures in seconds." } },
        { icon: FiHome, title: { ar: "المالية والمحاسبة", en: "Finance & Accounting" }, description: { ar: "ترحيل إيرادات الغرف والخدمات إلى الحسابات العامة أوتوماتيكياً.", en: "Automatic posting of room and service revenues to general ledger." } },
        { icon: FiUsers, title: { ar: "إدارة النزلاء", en: "Guest Management" }, description: { ar: "سجل متكامل للنزيل، المرفقات الثبوتية، والقائمة السوداء للمتأخرين.", en: "Comprehensive guest record, ID attachments, and blacklist for defaulters." } },
        { icon: FiClipboard, title: { ar: "الإشراف الداخلي", en: "Housekeeping" }, description: { ar: "تحديث حالة الغرفة (نظيفة، غير نظيفة، صيانة) لضمان جاهزية التأجير.", en: "Update room status (clean, dirty, maintenance) to ensure rental readiness." } },
        { icon: FiCreditCard, title: { ar: "فواتير ZATCA والشموس", en: "ZATCA & Shmous Invoicing" }, description: { ar: "ربط إلكتروني لإرسال بيانات النزلاء لـ (الشموس) وإصدار فواتير ضريبية.", en: "Electronic linking to send guest data to (Shmous) and issue tax invoices." } },
        { icon: FiTrendingUp, title: { ar: "إيرادات الخدمات", en: "Service Revenues" }, description: { ar: "إضافة خدمات إضافية كالمغسلة والكافتيريا لفاتورة النزيل بسهولة.", en: "Easily add extra services like laundry and cafeteria to the guest's invoice." } }
      ]
    },
    strengths: {
      tag: { ar: "لماذا سنمار؟", en: "Why Sanmar?" },
      title: { ar: "لماذا تعتمد على سنمار لإدارة شققك المفروشة؟", en: "Why rely on Sanmar to manage your furnished apartments?" },
      quote: { ar: "\"خدمة أسرع للنزيل = تقييم أعلى وإيرادات مستمرة.\"", en: "\"Faster guest service = higher ratings and continuous revenue.\"" },
      quoteText: { ar: "يقضي النظام على أخطاء التسكين اليدوي ويوفر لمدير المنشأة تقارير إشغال حية.", en: "The system eliminates manual check-in errors and provides the facility manager with live occupancy reports." },
      list: [
        { icon: FiShield, title: { ar: "توافق حكومي كامل", en: "Full Government Compliance" }, description: { ar: "النظام متوافق مع متطلبات السياحة، منصة الشموس، وهيئة الزكاة والضريبة والجمارك (ZATCA).", en: "System is compliant with Tourism requirements, Shmous platform, and ZATCA." } },
        { icon: FiClock, title: { ar: "تسكين بنقرة واحدة", en: "One-Click Check-in" }, description: { ar: "قراءة الهوية وإدخال بيانات النزيل بسرعة فائقة لتجنب طوابير الاستقبال.", en: "ID reading and extremely fast guest data entry to avoid front desk queues." } },
        { icon: FiUsers, title: { ar: "لوحة تحكم تفاعلية", en: "Interactive Dashboard" }, description: { ar: "رؤية حالة الفندق بالكامل بألوان واضحة (مشغول، شاغر، نظافة).", en: "View the entire hotel status with clear colors (occupied, vacant, cleaning)." } },
        { icon: FiTrendingUp, title: { ar: "حماية من التلاعب", en: "Fraud Protection" }, description: { ar: "صلاحيات دقيقة لموظفي الاستقبال وتسجيل كل حركة (إلغاء، تعديل سعر).", en: "Precise permissions for receptionists and logging of every action (cancellation, price change)." } }
      ]
    },
    cta: productCTAs["furnished-apartments"]
  },

  // 📦 7: صيانة السيارات — Car Maintenance
  "car-maintenance": {
    ...defaultSections,
    dashboardPreview: { ...defaultSections.dashboardPreview, image: "Productes/car-maintenance-bg.webp" },
    hero: {
      eyebrow: {
        ar: "برنامج سنمار لصيانة السيارات — إدارة الورش باحترافية",
        en: "Sanmar Car Maintenance — Professional Workshop Mgmt"
      },
      title: {
        ar: "برنامج إدارة مراكز وورش صيانة السيارات",
        en: "Car Maintenance & Workshop Mgmt Software"
      },
      desc: {
        ar: "نظام متكامل يبدأ من استقبال سيارة العميل، فتح كرت عمل تفصيلي، متابعة قطع الغيار والعمالة، وحتى تسليم السيارة وإصدار الفاتورة لضمان أعلى درجات التنظيم والربحية.",
        en: "An integrated system starting from receiving the customer's car, opening a detailed job card, tracking spare parts and labor, to car delivery and invoice issuance, ensuring the highest levels of organization and profitability."
      },
      bullets: [
        { ar: "كروت عمل مفصلة", en: "Detailed Job Cards", key: "CM_Job_Cards", icon: "FiClipboard" },
        { ar: "ربط بقطع الغيار", en: "Spare Parts Integration", key: "CM_Spare_Parts", icon: "FiSettings" },
        { ar: "حساب عمولات الفنيين", en: "Tech Commissions", key: "CM_Commissions", icon: "FiDollarSign" }
      ]
    },
    definition: {
      title: {
        ar: "ما هو برنامج سنمار لصيانة السيارات؟",
        en: "What is Sanmar Car Maintenance Software?"
      },
      p1: {
        ar: "هو الحل البرمجي الأمثل لإدارة ومراقبة حركة العمل داخل مراكز صيانة السيارات وورش الميكانيكا والسمكرة، لضمان سير العمليات بسلاسة.",
        en: "The optimal software solution for managing and monitoring workflow inside car maintenance centers, mechanic, and auto body shops to ensure operations run smoothly."
      },
      p2: {
        ar: "يمكنك النظام من تتبع حالة السيارات لحظة بلحظة، إسناد المهام للفنيين وتحديد التكاليف بدقة، بالإضافة إلى الربط التام بين خدمات الورشة، مخزون قطع الغيار، والنظام المحاسبي لإصدار فواتير ضريبية معتمدة.",
        en: "The system enables you to track car status moment by moment, assign tasks to technicians and accurately determine costs, in addition to seamless integration between workshop services, spare parts inventory, and the accounting system to issue certified tax invoices."
      }
    },
    features: {
      title: {
        ar: "ميزات برنامج صيانة السيارات",
        en: "Car Maintenance Software Features"
      },
      desc: {
        ar: "كل ما تحتاجه لإدارة الورشة باحترافية وزيادة رضا عملائك.",
        en: "Everything you need to manage the workshop professionally and increase customer satisfaction."
      },
      list: [
        {
          title: { ar: "كروت عمل مفصلة", en: "Detailed Job Cards" },
          desc: { ar: "تسجيل بيانات السيارة (اللوحة، رقم الهيكل)، شكوى العميل، والتكلفة التقديرية في بطاقة صيانة منظمة.", en: "Register car details (plate, VIN), customer complaint, and estimated cost in an organized maintenance card." },
          points: [
            { ar: "استقبال سريع للسيارة", en: "Fast car reception" },
            { ar: "تحديد الفني المسؤول", en: "Assign responsible tech" },
            { ar: "طباعة كرت دخول", en: "Print entry card" }
          ]
        },
        {
          title: { ar: "الربط مع مخزون قطع الغيار", en: "Spare Parts Integration" },
          desc: { ar: "سحب القطع المطلوبة من المخزون مباشرة لكرت العمل واحتساب التكلفة آلياً لتفادي الهدر وتسريع العمل.", en: "Deduct required parts from inventory directly to the job card and auto-calculate cost to prevent waste." },
          points: [
            { ar: "تحديث المخزون آلياً", en: "Auto stock update" },
            { ar: "تحديد تكلفة القطع", en: "Determine parts cost" },
            { ar: "تنبيهات نواقص القطع", en: "Parts shortage alerts" }
          ]
        },
        {
          title: { ar: "تتبع حالة السيارة", en: "Car Status Tracking" },
          desc: { ar: "تحديث حالة الإصلاح (قيد الانتظار، جاري العمل، جاهزة) لإبلاغ العميل وإدارة وقت الورشة بفعالية.", en: "Update repair status (waiting, in progress, ready) to inform the customer and manage workshop time effectively." },
          points: [
            { ar: "متابعة مراحل الإصلاح", en: "Track repair stages" },
            { ar: "رسائل SMS للعميل", en: "SMS alerts to customer" },
            { ar: "تقليل وقت الانتظار", en: "Reduce waiting time" }
          ]
        },
        {
          title: { ar: "حساب عمولات الفنيين", en: "Technician Commissions" },
          desc: { ar: "احتساب تلقائي لنسبة كل فني أو ميكانيكي من أجور اليد والخدمات المنفذة بناءً على سياسات المركز.", en: "Automatic calculation of each technician's percentage from labor and services based on center policies." },
          points: [
            { ar: "تحديد نسبة لكل خدمة", en: "Set % per service" },
            { ar: "كشف عمولات مفصل", en: "Detailed commission report" },
            { ar: "تحفيز فريق العمل", en: "Motivate the team" }
          ]
        },
        {
          title: { ar: "سجل صيانة المركبة", en: "Vehicle Service History" },
          desc: { ar: "الاحتفاظ بتاريخ الصيانة المفصل لكل سيارة لتكون مرجعاً موثوقاً يبني ثقة العملاء في الزيارات القادمة.", en: "Keep detailed service history for each car as a reliable reference building customer trust for future visits." },
          points: [
            { ar: "بحث برقم اللوحة/الهيكل", en: "Search by plate/VIN" },
            { ar: "مراجعة الإصلاحات السابقة", en: "Review past repairs" },
            { ar: "تذكير بالصيانة الدورية", en: "Periodic maintenance reminder" }
          ]
        }
      ]
    },
    faqs: [
      {
        q: { ar: "هل يمكنني إرسال تنبيهات للعملاء بجاهزية سياراتهم؟", en: "Can I send alerts to customers when their cars are ready?" },
        a: { ar: "نعم، يتيح لك النظام إرسال رسائل نصية قصيرة (SMS) للعميل لإبلاغه بانتهاء الصيانة لسرعة الاستلام.", en: "Yes, the system allows you to send SMS to the customer informing them that maintenance is finished for quick pickup." }
      },
      {
        q: { ar: "هل يدعم النظام بيع قطع الغيار بشكل منفصل عن خدمات الصيانة؟", en: "Does the system support selling spare parts separately from maintenance services?" },
        a: { ar: "بالتأكيد، يوفر البرنامج نقطة بيع (POS) تتيح لك بيع قطع الغيار مباشرة للعملاء (كمتجر مستقل) دون الحاجة لفتح كرت عمل صيانة.", en: "Absolutely, the software provides a POS system allowing you to sell spare parts directly to customers (as an independent store) without opening a maintenance job card." }
      }
    ],
    integration: {
      title: { ar: "فواتير ورش متوافقة مع متطلبات ZATCA", en: "Workshop Invoices Compliant with ZATCA Requirements" },
      desc: { ar: "إصدار فواتير إلكترونية متكاملة للخدمات وقطع الغيار وفق الأنظمة الضريبية السعودية.", en: "Issue comprehensive e-invoices for services and spare parts according to Saudi tax regulations." },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "متوافق مع ZATCA", en: "ZATCA Compliant" },
          desc: { ar: "فواتير تشمل أجور اليد وقطع الغيار بوضوح مع QR Code.", en: "Invoices clearly detailing labor and parts with QR Code." }
        },
        {
          icon: "FiShield",
          title: { ar: "تأمين بيانات العملاء", en: "Customer Data Security" },
          desc: { ar: "حفظ وتشفير سجلات المركبات وعملائك بشكل آمن.", en: "Securely store and encrypt vehicle and customer records." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "الفاتورة الإلكترونية B2B و B2C", en: "B2B and B2C E-Invoicing" },
          desc: { ar: "دعم فواتير الأفراد وفواتير الشركات (أساطيل السيارات).", en: "Support invoices for individuals and companies (car fleets)." }
        },
        {
          title: { ar: "أرشفة معتمدة", en: "Certified Archiving" },
          desc: { ar: "أرشفة إلكترونية لكافة كروت العمل والفواتير للرجوع إليها مستقبلاً.", en: "Electronic archiving of all job cards and invoices for future reference." }
        }
      ]
    },
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "إدارة مراكز صيانة السيارات", en: "Managing Car Maintenance Centers" },
      desc: { ar: "حلول سنمار تغطي كافة تخصصات صيانة السيارات الخفيفة والثقيلة.", en: "Sanmar solutions cover all specialties of light and heavy car maintenance." },
      cardTag: { ar: "نشاط", en: "Activity" },
      list: [
        { icon: FiBriefcase, title: { ar: "ورش الميكانيكا والكهرباء", en: "Mechanics & Electrical Workshops" }, description: { ar: "تشخيص الأعطال، فتح كروت عمل، وتحديد أجور الفنيين بدقة.", en: "Diagnose faults, open job cards, and accurately determine technician fees." } },
        { icon: FiLayers, title: { ar: "مراكز السمكرة والدهان", en: "Body & Paint Centers" }, description: { ar: "تتبع عمليات الإصلاح المطولة وإدارة تعميدات شركات التأمين.", en: "Track lengthy repair processes and manage insurance company authorizations." } },
        { icon: FiTruck, title: { ar: "صيانة الشاحنات والمعدات", en: "Trucks & Equipment Maintenance" }, description: { ar: "إدارة عقود الصيانة الدورية للأساطيل والمعدات الثقيلة.", en: "Manage periodic maintenance contracts for fleets and heavy equipment." } },
        { icon: FiShoppingBag, title: { ar: "مراكز تغيير الزيوت والإطارات", en: "Oil & Tire Change Centers" }, description: { ar: "خدمات سريعة، إدارة مخزون الزيوت، وتنبيه العملاء بموعد التغيير القادم.", en: "Fast services, oil inventory management, and alerting customers to the next change date." } },
        { icon: FiUsers, title: { ar: "محلات العناية بالسيارات", en: "Car Care Shops" }, description: { ar: "إدارة خدمات التلميع، التظليل، والحماية مع إصدار شهادات الضمان.", en: "Manage polishing, tinting, and protection services with warranty certificate issuance." } },
        { icon: FiClipboard, title: { ar: "مراكز الفحص الشامل", en: "Comprehensive Inspection Centers" }, description: { ar: "إصدار تقارير فحص دقيقة للسيارات المستعملة قبل البيع.", en: "Issue accurate inspection reports for used cars before sale." } }
      ]
    },
    erpModules: {
      tag: { ar: "وحدات ERP", en: "ERP Modules" },
      title: { ar: "دورة عمل متكاملة للمركز", en: "Integrated Workflow for the Center" },
      desc: { ar: "يربط النظام بين الاستقبال، الورشة، ومستودع قطع الغيار آلياً.", en: "The system automatically links reception, the workshop, and the spare parts warehouse." },
      list: [
        { icon: FiClipboard, title: { ar: "إدارة كروت العمل (Job Cards)", en: "Job Cards Management" }, description: { ar: "فتح أمر شغل يتضمن بيانات السيارة، العميل، والشكوى الأولية.", en: "Open a job order including car, customer, and initial complaint data." } },
        { icon: FiHome, title: { ar: "مستودع قطع الغيار", en: "Spare Parts Warehouse" }, description: { ar: "صرف قطع الغيار على كرت العمل وتحديث المخزون لحظياً.", en: "Issue spare parts to the job card and update inventory instantly." } },
        { icon: FiUsers, title: { ar: "إنتاجية الفنيين", en: "Technician Productivity" }, description: { ar: "احتساب العمولات بناءً على الأعمال المنجزة لكل فني أو مهندس.", en: "Calculate commissions based on completed tasks for each technician or engineer." } },
        { icon: FiLayers, title: { ar: "مطالبات التأمين", en: "Insurance Claims" }, description: { ar: "إصدار فواتير مخصصة لشركات التأمين مع تحمل العميل.", en: "Issue customized invoices for insurance companies with customer deductible." } },
        { icon: FiCreditCard, title: { ar: "الفوترة والمدفوعات", en: "Invoicing & Payments" }, description: { ar: "تجميع أجور اليد وقطع الغيار في فاتورة ضريبية واحدة معتمدة.", en: "Aggregate labor fees and spare parts into a single approved tax invoice." } },
        { icon: FiTrendingUp, title: { ar: "رسائل التذكير", en: "Reminder Messages" }, description: { ar: "إرسال رسائل نصية للعميل عند جاهزية السيارة أو لموعد الصيانة الدورية.", en: "Send SMS to the customer when the car is ready or for the periodic maintenance date." } }
      ]
    },
    strengths: {
      tag: { ar: "لماذا سنمار؟", en: "Why Sanmar?" },
      title: { ar: "تحكم كامل بورشة الصيانة الخاصة بك", en: "Full control of your maintenance workshop" },
      quote: { ar: "\"تنظيم الورشة = كسب ثقة العميل وزيادة الأرباح.\"", en: "\"Organizing the workshop = gaining customer trust and increasing profits.\"" },
      quoteText: { ar: "يوفر لك سنمار تتبعاً دقيقاً لتكاليف كل سيارة ويمنع تسرب الإيرادات أو فقدان القطع.", en: "Sanmar provides accurate tracking of each car's costs and prevents revenue leakage or lost parts." },
      list: [
        { icon: FiShield, title: { ar: "تاريخ شامل للمركبة", en: "Comprehensive Vehicle History" }, description: { ar: "البحث برقم اللوحة لمعرفة كافة الإصلاحات السابقة التي تمت في مركزك.", en: "Search by plate number to see all previous repairs done in your center." } },
        { icon: FiClock, title: { ar: "تسعير مسبق (Quotations)", en: "Pre-pricing (Quotations)" }, description: { ar: "إصدار عروض أسعار للعميل قبل البدء بالعمل وتحويلها لفاتورة عند الموافقة.", en: "Issue quotes to the customer before starting work and convert to invoice upon approval." } },
        { icon: FiUsers, title: { ar: "إدارة ساحة الانتظار", en: "Parking Lot Management" }, description: { ar: "معرفة السيارات المتوقفة في الورشة وحالة كل منها (بانتظار القطع، قيد العمل، جاهزة).", en: "Know the cars parked in the workshop and their status (waiting for parts, in progress, ready)." } },
        { icon: FiTrendingUp, title: { ar: "فواتير مفصلة وواضحة", en: "Detailed & Clear Invoices" }, description: { ar: "فصل أجور اليد عن قيمة قطع الغيار لشفافية تامة مع العميل ومتطلبات الزكاة.", en: "Separate labor fees from spare parts value for complete transparency with the customer and ZATCA." } }
      ]
    },
    cta: productCTAs["car-maintenance"]
  },

  // 📦 8: معارض السيارات — Car Sales
  "car-sales": {
    ...defaultSections,
    hero: {
      eyebrow: {
        ar: "برنامج سنمار لمبيعات السيارات — دقة في الحسابات وسرعة في الإنجاز",
        en: "Sanmar Car Sales — Accuracy & Speed"
      },
      title: {
        ar: "برنامج إدارة معارض السيارات والمبيعات",
        en: "Car Showroom & Sales Management Software"
      },
      desc: {
        ar: "تتبع المركبات برقم الهيكل، إدارة التكاليف المباشرة، وحساب الأرباح الفعلية لكل سيارة بدقة مطلقة، مع نظام مرن لإدارة الأقساط ومتابعة التحصيل.",
        en: "Track vehicles by VIN, manage direct costs, and calculate actual profit per car accurately, with a flexible system for managing installments and collections."
      },
      bullets: [
        { ar: "مخزون برقم الهيكل", en: "VIN-based Inventory", key: "CS_VIN", icon: "FiBox" },
        { ar: "تكاليف السيارة الدقيقة", en: "Accurate Car Costs", key: "CS_Costs", icon: "FiBarChart2" },
        { ar: "نظام إدارة الأقساط", en: "Installments System", key: "CS_Installments", icon: "FiCalendar" }
      ]
    },
    definition: {
      title: {
        ar: "ما هو برنامج سنمار لمعارض السيارات؟",
        en: "What is Sanmar Car Sales Software?"
      },
      p1: {
        ar: "هو الحل الشامل الذي تحتاجه لإدارة معرض السيارات الخاص بك، مصمم خصيصاً للتعامل مع دورة حياة السيارة من لحظة شرائها أو استيرادها وحتى بيعها للمستهلك.",
        en: "The comprehensive solution you need to manage your car showroom, specifically designed to handle the car's lifecycle from the moment it is purchased or imported until it is sold to the consumer."
      },
      p2: {
        ar: "يمنحك البرنامج القدرة على احتساب التكلفة الفعلية لكل مركبة من خلال إضافة رسوم النقل والجمارك والصيانة وغيرها، مع إمكانية جدولة أقساط العملاء ومتابعتها آلياً وتوثيق رسوم نقل الملكية.",
        en: "The software gives you the ability to calculate the actual cost of each vehicle by adding transport, customs, and maintenance fees, along with the ability to schedule and automatically track customer installments and document ownership transfer fees."
      }
    },
    features: {
      title: {
        ar: "ميزات برنامج معارض السيارات",
        en: "Car Showrooms Software Features"
      },
      desc: {
        ar: "تحكم كامل في مبيعاتك، مخزونك، وحساباتك.",
        en: "Full control over your sales, inventory, and accounts."
      },
      list: [
        {
          title: { ar: "مخزون برقم الهيكل (VIN)", en: "VIN-based Inventory" },
          desc: { ar: "إدخال ومتابعة السيارات باستخدام رقم الهيكل، اللوحة، اللون، والموديل لتتبع دقيق لكل مركبة.", en: "Enter and track cars using VIN, plate, color, and model for accurate tracking of each vehicle." },
          points: [
            { ar: "بحث سريع برقم الهيكل", en: "Quick search by VIN" },
            { ar: "متابعة حالة المخزون", en: "Track inventory status" },
            { ar: "تسجيل الأمانات", en: "Register consignments" }
          ]
        },
        {
          title: { ar: "تكاليف السيارة الدقيقة", en: "Accurate Car Costs" },
          desc: { ar: "إضافة مصروفات النقل، الجمارك، ورسوم الصيانة إلى التكلفة الأساسية للسيارة لمعرفة هامش الربح الحقيقي.", en: "Add transport, customs, and maintenance expenses to the base cost to know the true profit margin." },
          points: [
            { ar: "تسجيل المصروفات المباشرة", en: "Record direct expenses" },
            { ar: "حساب الربح الدقيق", en: "Accurate profit calculation" },
            { ar: "تفادي الخسائر المخفية", en: "Avoid hidden losses" }
          ]
        },
        {
          title: { ar: "إدارة مبيعات الأقساط", en: "Installments Management" },
          desc: { ar: "جدولة الدفعات آلياً للمشترين بالأقساط مع إشعارات دورية بمواعيد السداد وتتبع المتأخرات.", en: "Automatically schedule payments for buyers on installments with periodic alerts for due dates and late payments." },
          points: [
            { ar: "جدولة آلية للأقساط", en: "Auto-schedule installments" },
            { ar: "تنبيهات للمتأخرات", en: "Overdue payment alerts" },
            { ar: "إيصالات سداد فورية", en: "Instant payment receipts" }
          ]
        },
        {
          title: { ar: "نقل الملكية واللوحات", en: "Ownership & Plates Transfer" },
          desc: { ar: "تنظيم وتوثيق رسوم نقل الملكية وتكاليف الخدمات الحكومية ضمن فاتورة البيع بشكل آلي.", en: "Organize and document ownership transfer fees and government service costs within the sales invoice automatically." },
          points: [
            { ar: "إضافة رسوم المرور", en: "Add traffic fees" },
            { ar: "عقود بيع إلكترونية", en: "Electronic sales contracts" },
            { ar: "نماذج تسليم رسمية", en: "Official delivery forms" }
          ]
        },
        {
          title: { ar: "تقارير أرباح مفصلة", en: "Detailed Profit Reports" },
          desc: { ar: "استخراج تقارير توضح الربح أو الخسارة لكل سيارة على حدة، وتقارير شاملة لأداء المعرض المالي.", en: "Generate reports showing profit or loss for each car individually, and comprehensive reports for financial performance." },
          points: [
            { ar: "تقرير ربحية السيارة", en: "Car profitability report" },
            { ar: "مبيعات المندوبين", en: "Sales reps performance" },
            { ar: "القوائم المالية الشاملة", en: "Comprehensive financials" }
          ]
        }
      ]
    },
    faqs: [
      {
        q: { ar: "هل يدعم النظام تسجيل سيارات العملاء المعروضة للبيع (الأمانات)؟", en: "Does the system support registering customers' cars offered for sale (consignments)?" },
        a: { ar: "نعم، يتيح لك النظام تسجيل سيارات معروضة لحساب الغير وإدارة عمولات المعرض من بيعها بكل دقة.", en: "Yes, the system allows you to register cars offered on behalf of others and manage the showroom's commissions from selling them accurately." }
      },
      {
        q: { ar: "كيف يتعامل البرنامج مع تعدد طرق الدفع؟", en: "How does the software handle multiple payment methods?" },
        a: { ar: "يدعم النظام استلام دفعات متعددة للسيارة الواحدة (جزء نقدي، جزء شبكة، أو تمويل بنكي) مع ترحيلها محاسبياً بالشكل الصحيح.", en: "The system supports receiving multiple payments for a single car (part cash, part POS, or bank financing) and posting them correctly in accounting." }
      }
    ],
    integration: {
      title: { ar: "فواتير ضريبية لبيع السيارات (ZATCA)", en: "Tax Invoices for Car Sales (ZATCA)" },
      desc: { ar: "إصدار فواتير بيع السيارات متوافقة بالكامل مع هيئة الزكاة والضريبة والجمارك مع احتساب دقيق للضريبة.", en: "Issue car sales invoices fully compliant with ZATCA with accurate tax calculation." },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "متوافق مع ZATCA", en: "ZATCA Compliant" },
          desc: { ar: "فواتير تشمل ضريبة القيمة المضافة ورمز الاستجابة السريعة.", en: "Invoices including VAT and QR Code." }
        },
        {
          icon: "FiShield",
          title: { ar: "أرشفة عقود البيع", en: "Sales Contracts Archiving" },
          desc: { ar: "حفظ الكتروني آمن لعقود المبايعة للرجوع إليها بأي وقت.", en: "Secure electronic storage of sales contracts to access anytime." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "حساب ضريبة هامش الربح", en: "Profit Margin Tax Calculation" },
          desc: { ar: "دعم آلية احتساب ضريبة القيمة المضافة على هامش الربح للسيارات المستعملة.", en: "Support VAT calculation mechanism on profit margin for used cars." }
        },
        {
          title: { ar: "سندات قبض معتمدة", en: "Certified Receipt Vouchers" },
          desc: { ar: "إصدار وطباعة سندات القبض للعملاء عند دفع العربون أو الأقساط.", en: "Issue and print receipt vouchers for down payments or installments." }
        }
      ]
    },
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "إدارة معارض وتجارة السيارات", en: "Managing Car Showrooms and Dealerships" },
      desc: { ar: "نظام مصمم خصيصاً لتلبية احتياجات تجار السيارات في المملكة.", en: "A system specifically designed to meet the needs of car dealers in the Kingdom." },
      cardTag: { ar: "نشاط", en: "Activity" },
      list: [
        { icon: FiTruck, title: { ar: "معارض السيارات الجديدة", en: "New Car Showrooms" }, description: { ar: "إدارة مبيعات السيارات الجديدة، الجمارك، واستخراج اللوحات.", en: "Manage new car sales, customs, and plate issuance." } },
        { icon: FiBriefcase, title: { ar: "تجارة السيارات المستعملة", en: "Used Car Trading" }, description: { ar: "تسجيل سيارات مستعملة، احتساب تكاليف التجهيز، وإدارة نقل الملكية.", en: "Register used cars, calculate prep costs, and manage ownership transfer." } },
        { icon: FiClipboard, title: { ar: "بيع السيارات بالتقسيط", en: "Car Installment Sales" }, description: { ar: "نظام مرن لجدولة الأقساط الشهرية، متابعة السداد، والفوائد.", en: "Flexible system for scheduling monthly installments, tracking payments, and interest." } },
        { icon: FiUsers, title: { ar: "مبيعات الجملة للشركات", en: "Wholesale Fleet Sales" }, description: { ar: "إدارة عقود بيع الأساطيل للشركات ووكالات تأجير السيارات.", en: "Manage fleet sales contracts for companies and car rental agencies." } },
        { icon: FiShoppingBag, title: { ar: "الاستيراد والتخليص", en: "Import & Customs Clearance" }, description: { ar: "إضافة مصاريف الشحن والجمارك لتحديد التكلفة الفعلية لكل سيارة.", en: "Add shipping and customs expenses to determine the actual cost per car." } },
        { icon: FiLayers, title: { ar: "سيارات الأمانة (الوساطة)", en: "Consignment Cars (Brokerage)" }, description: { ar: "عرض سيارات الغير في المعرض واحتساب عمولة السعي عند البيع.", en: "Display third-party cars in the showroom and calculate commission upon sale." } }
      ]
    },
    erpModules: {
      tag: { ar: "وحدات ERP", en: "ERP Modules" },
      title: { ar: "تتبع مالي وإداري لكل سيارة", en: "Financial and administrative tracking for every car" },
      desc: { ar: "السيارة في نظام سنمار تعامل كمركز تكلفة مستقل منذ شرائها حتى بيعها.", en: "A car in the Sanmar system is treated as an independent cost center from purchase to sale." },
      list: [
        { icon: FiLayers, title: { ar: "إدارة مخزون المركبات", en: "Vehicle Inventory Management" }, description: { ar: "تسجيل المركبة برقم الهيكل (VIN)، اللون، الموديل، والمواصفات.", en: "Register vehicle by VIN, color, model, and specifications." } },
        { icon: FiHome, title: { ar: "مراكز التكلفة (Cost Centers)", en: "Cost Centers" }, description: { ar: "تحميل كل سيارة بمصاريفها الخاصة (نقل، صيانة، فحص) لمعرفة صافي الربح.", en: "Load each car with its specific expenses (transport, repair, inspection) to know net profit." } },
        { icon: FiUsers, title: { ar: "إدارة العقود والمبايعات", en: "Contracts & Sales Management" }, description: { ar: "طباعة عقود البيع، خطابات المرور، وإقرارات الاستلام آلياً.", en: "Automatically print sales contracts, traffic department letters, and delivery receipts." } },
        { icon: FiClipboard, title: { ar: "التأمين ونقل الملكية", en: "Insurance & Ownership Transfer" }, description: { ar: "إضافة رسوم التأمين ونقل الملكية وإدارة المبالغ المحصلة لطرف ثالث.", en: "Add insurance and ownership transfer fees and manage amounts collected for third parties." } },
        { icon: FiCreditCard, title: { ar: "نظام المحاسبة المالي", en: "Financial Accounting System" }, description: { ar: "تسجيل دفعات العملاء (عربون، كاش، شيكات) وربطها بالبنوك.", en: "Record customer payments (down payment, cash, checks) and link them to banks." } },
        { icon: FiTrendingUp, title: { ar: "تطبيق ضريبة هامش الربح", en: "Profit Margin Tax Application" }, description: { ar: "دعم ضريبة القيمة المضافة على هامش ربح السيارات المستعملة وفق قوانين ZATCA.", en: "Support VAT on the profit margin of used cars according to ZATCA laws." } }
      ]
    },
    strengths: {
      tag: { ar: "لماذا سنمار؟", en: "Why Sanmar?" },
      title: { ar: "أدر معرضك بذكاء وبدون أوراق", en: "Manage your showroom smartly and paperless" },
      quote: { ar: "\"معرفة التكلفة الحقيقية للسيارة هي مفتاح الربح.\"", en: "\"Knowing the true cost of a car is the key to profit.\"" },
      quoteText: { ar: "مع سنمار، لن تتفاجأ بمصاريف خفية قللت من هامش ربحك بعد إتمام البيع.", en: "With Sanmar, you won't be surprised by hidden expenses that reduced your profit margin after closing the sale." },
      list: [
        { icon: FiShield, title: { ar: "توافق مع منصة تم", en: "Tamm Platform Compatibility" }, description: { ar: "تسهيل استخراج بيانات المركبة وربطها مع الأنظمة المرورية.", en: "Facilitate extracting vehicle data and linking it with traffic systems." } },
        { icon: FiClock, title: { ar: "بحث متقدم وسريع", en: "Advanced & Fast Search" }, description: { ar: "البحث عن السيارات الشاغرة بالموديل، اللون، أو آخر أرقام الهيكل لخدمة العميل بسرعة.", en: "Search for available cars by model, color, or last VIN digits to serve customers quickly." } },
        { icon: FiUsers, title: { ar: "حساب عمولات المناديب", en: "Sales Rep Commissions" }, description: { ar: "احتساب آلي لعمولة البائع أو المعقب بناءً على كل بيعة تمت عن طريقه.", en: "Automatic calculation of salesperson or expediter commission based on every sale made through them." } },
        { icon: FiTrendingUp, title: { ar: "تقارير الجرد الميداني", en: "Field Inventory Reports" }, description: { ar: "طباعة كشوفات جرد ساحة المعرض لمطابقة السيارات الموجودة فعلياً بالنظام.", en: "Print showroom lot inventory sheets to reconcile physically present cars with the system." } }
      ]
    },
    cta: productCTAs["car-sales"]
  },

  // 📦 9: نظام الموارد البشرية — HR System
  "hr-system": {
    ...defaultSections,
    dashboardPreview: { ...defaultSections.dashboardPreview, image: "Productes/hr-system-bg.webp" },
    hero: {
      eyebrow: {
        ar: "برنامج سنمار لشؤون الموظفين — إدارة مواردك البشرية بذكاء",
        en: "Sanmar HR System — Smart Human Resources Mgmt"
      },
      title: {
        ar: "برنامج إدارة الموارد البشرية والرواتب",
        en: "HR & Payroll Management Software"
      },
      desc: {
        ar: "أتمتة كاملة لشؤون الموظفين بدءاً من الحضور والانصراف، إدارة الإجازات، وحتى مسيرات الرواتب المتوافقة مع نظام حماية الأجور (WPS) لضمان بيئة عمل منظمة وقانونية.",
        en: "Full automation of HR processes from attendance and leave management to WPS-compliant payrolls, ensuring an organized and legal work environment."
      },
      bullets: [
        { ar: "مسير الرواتب الآلي", en: "Automated Payroll", key: "HR_Payroll", icon: "FiDollarSign" },
        { ar: "التوافق مع منصة مُدد", en: "WPS Compliant", key: "HR_WPS", icon: "FiShield" },
        { ar: "إدارة الإجازات", en: "Leave Management", key: "HR_Leave", icon: "FiCalendar" }
      ]
    },
    definition: {
      title: {
        ar: "ما هو برنامج سنمار لشؤون الموظفين؟",
        en: "What is Sanmar HR System?"
      },
      p1: {
        ar: "هو نظام معتمد صمم خصيصاً لتسهيل إدارة الكوادر البشرية في الشركات والمؤسسات داخل المملكة، متوافقاً بالكامل مع نظام العمل السعودي.",
        en: "It is a certified system specifically designed to facilitate human resource management for companies and institutions within the Kingdom, fully compliant with the Saudi labor law."
      },
      p2: {
        ar: "يوفر النظام لوحة تحكم مركزية لمتابعة حضور وغياب الموظفين من خلال الربط المباشر مع أجهزة البصمة، مع قدرة عالية على حساب الرواتب، البدلات، الخصومات وعمل التسويات النهائية للموظف بضغطة زر.",
        en: "The system provides a centralized dashboard to track employee attendance by integrating directly with biometric devices, with high capabilities to calculate salaries, allowances, deductions, and process final settlements with a click of a button."
      }
    },
    features: {
      title: {
        ar: "ميزات برنامج شؤون الموظفين",
        en: "HR Software Features"
      },
      desc: {
        ar: "كل ما تحتاجه لإدارة مواردك البشرية باحترافية وتوافق تام مع الأنظمة.",
        en: "Everything you need to manage your human resources professionally and in full compliance."
      },
      list: [
        {
          title: { ar: "مسير الرواتب الآلي", en: "Automated Payroll" },
          desc: { ar: "حساب الرواتب الشاملة مع البدلات، الخصومات، السلف، والمكافآت بضغطة زر لضمان دقة وتوفير وقت المحاسب.", en: "Calculate comprehensive salaries with allowances, deductions, advances, and bonuses in one click for accuracy and time savings." },
          points: [
            { ar: "بدلات وخصومات مرنة", en: "Flexible allowances & deductions" },
            { ar: "إدارة السلف واقتطاعها", en: "Manage advances & deductions" },
            { ar: "كشوف رواتب مفصلة", en: "Detailed pay slips" }
          ]
        },
        {
          title: { ar: "التوافق مع حماية الأجور (WPS)", en: "WPS Compliance" },
          desc: { ar: "تصدير ملفات مسير الرواتب بصيغة البنوك المعتمدة لتسهيل الرفع على منصة \"مُدد\" ونظام حماية الأجور.", en: "Export payroll files in certified bank formats for easy upload to Mudad platform and WPS." },
          points: [
            { ar: "ملفات بصيغة SIF المعتمدة", en: "Certified SIF format files" },
            { ar: "الرفع لمنصة مُدد", en: "Upload to Mudad platform" },
            { ar: "تصدير لجميع البنوك", en: "Export for all banks" }
          ]
        },
        {
          title: { ar: "الحضور والانصراف", en: "Attendance Management" },
          desc: { ar: "ربط مباشر مع أجهزة البصمة لتسجيل أوقات الدوام، واحتساب آلي للتأخيرات وساعات العمل الإضافي.", en: "Direct integration with biometric devices to log work hours, with automatic calculation of tardiness and overtime." },
          points: [
            { ar: "ربط أجهزة البصمة", en: "Biometric integration" },
            { ar: "حساب التأخير والإضافي", en: "Tardiness & overtime calc" },
            { ar: "تقارير الدوام اليومية", en: "Daily attendance reports" }
          ]
        },
        {
          title: { ar: "إدارة الإجازات والغياب", en: "Leave Management" },
          desc: { ar: "متابعة أرصدة الإجازات السنوية، إدارة طلبات الموظفين، وحساب أيام الغياب تلقائياً مع ربطها المباشر بالراتب.", en: "Track annual leave balances, manage employee requests, and auto-calculate absences linked to payroll." },
          points: [
            { ar: "أرصدة الإجازات المتاحة", en: "Available leave balances" },
            { ar: "طلبات إلكترونية مؤتمتة", en: "Automated leave requests" },
            { ar: "خصم الغياب آلياً", en: "Auto-deduct absences" }
          ]
        },
        {
          title: { ar: "تنبيهات الوثائق الرسمية", en: "Official Document Alerts" },
          desc: { ar: "إشعارات استباقية قبل انتهاء الإقامات، الجوازات، رخص العمل، والتأمين الطبي لتفادي الغرامات الحكومية.", en: "Proactive alerts before expiry of Iqamas, passports, work permits, and medical insurance to avoid government fines." },
          points: [
            { ar: "تنبيهات انتهاء الإقامة", en: "Iqama expiry alerts" },
            { ar: "تنبيهات التأمين الطبي", en: "Medical insurance alerts" },
            { ar: "تجديدات رخص العمل", en: "Work permit renewals" }
          ]
        }
      ]
    },
    faqs: [
      {
        q: { ar: "هل يدعم النظام ربط أجهزة البصمة في فروع مختلفة؟", en: "Does the system support linking biometric devices in different branches?" },
        a: { ar: "نعم، يمكنك ربط عدة أجهزة بصمة في فروع متباعدة جغرافياً لتتزامن بيانات الحضور والانصراف تلقائياً إلى النظام المركزي.", en: "Yes, you can link multiple biometric devices in geographically distant branches for automatic synchronization of attendance data to the central system." }
      },
      {
        q: { ar: "كيف يتعامل النظام مع السلف والعهد الخاصة بالموظفين؟", en: "How does the system handle employee advances and custodies?" },
        a: { ar: "يتيح النظام تسجيل العهد المالية والعينية والسلف واقتطاعها آلياً من الراتب الشهري أو تسويتها عند نهاية الخدمة.", en: "The system allows recording financial and in-kind custodies and advances, automatically deducting them from monthly salary or settling them at end of service." }
      },
      {
        q: { ar: "هل يحتسب النظام مكافأة نهاية الخدمة آلياً؟", en: "Does the system automatically calculate end-of-service benefits?" },
        a: { ar: "نعم، يقوم النظام بحساب مكافأة نهاية الخدمة تلقائياً وفقاً لنظام العمل السعودي مع الأخذ في الاعتبار سنوات الخدمة ونوع إنهاء العقد.", en: "Yes, the system automatically calculates end-of-service benefits according to the Saudi labor law, considering years of service and contract termination type." }
      }
    ],
    integration: {
      title: { ar: "نظام موارد بشرية متوافق مع الأنظمة السعودية", en: "HR System Compliant with Saudi Regulations" },
      desc: { ar: "توافق تام مع نظام حماية الأجور (WPS)، منصة مُدد، ومتطلبات وزارة الموارد البشرية والتنمية الاجتماعية.", en: "Full compliance with WPS, Mudad platform, and Ministry of Human Resources and Social Development requirements." },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "نظام حماية الأجور (WPS)", en: "Wage Protection System" },
          desc: { ar: "تصدير ملفات الرواتب بصيغة SIF المعتمدة لتسليمها للبنوك.", en: "Export payroll files in certified SIF format for banks." }
        },
        {
          icon: "FiShield",
          title: { ar: "أمان بيانات الموظفين", en: "Employee Data Security" },
          desc: { ar: "حماية تامة لبيانات الموظفين الشخصية والمالية مع صلاحيات متعددة.", en: "Full protection of personal and financial employee data with multiple access levels." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "التوافق مع منصة مُدد", en: "Mudad Platform Compliance" },
          desc: { ar: "رفع بيانات الرواتب بشكل مباشر لمنصة مُدد المعتمدة من وزارة الموارد البشرية.", en: "Upload payroll data directly to the Mudad platform approved by MOHR." }
        },
        {
          title: { ar: "التقارير الحكومية", en: "Government Reports" },
          desc: { ar: "إعداد التقارير المطلوبة من الجهات الحكومية كالتأمينات والجوازات.", en: "Prepare required reports for government entities like GOSI and Jawazat." }
        }
      ]
    },
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "إدارة الموارد البشرية لجميع المنشآت", en: "HR Management for All Organizations" },
      desc: { ar: "برنامج سنمار لشؤون الموظفين يناسب جميع القطاعات ويغطي كافة متطلبات العمل في السعودية.", en: "Sanmar HR software suits all sectors and covers all labor requirements in Saudi Arabia." },
      cardTag: { ar: "قطاع", en: "Sector" },
      list: [
        { icon: FiBriefcase, title: { ar: "الشركات والمؤسسات التجارية", en: "Commercial Companies" }, description: { ar: "تنظيم هيكل الشركة، الرواتب، والإجازات لضمان بيئة عمل احترافية.", en: "Organize company structure, payroll, and leaves to ensure a professional work environment." } },
        { icon: FiTruck, title: { ar: "شركات المقاولات والتشغيل", en: "Contracting & Operations" }, description: { ar: "إدارة عهد الموظفين، سلف العمال، وتوزيع الرواتب على المشاريع.", en: "Manage employee custodianship, labor advances, and payroll allocation to projects." } },
        { icon: FiHome, title: { ar: "المطاعم والفنادق", en: "Restaurants & Hotels" }, description: { ar: "جدولة ورديات العمل المعقدة، احتساب الإضافي، ومتابعة الحضور بالبصمة.", en: "Schedule complex work shifts, calculate overtime, and track attendance via fingerprint." } },
        { icon: FiUsers, title: { ar: "المدارس والمستشفيات", en: "Schools & Hospitals" }, description: { ar: "إدارة ملفات الموظفين الضخمة، التقييم السنوي، وتجديد الرخص المهنية.", en: "Manage massive employee files, annual evaluations, and professional license renewals." } },
        { icon: FiClipboard, title: { ar: "قطاع التجزئة والمبيعات", en: "Retail & Sales" }, description: { ar: "ربط العمولات الشهرية بالرواتب ومتابعة غياب وحضور موظفي الفروع.", en: "Link monthly commissions to salaries and track branch employee attendance." } },
        { icon: FiShoppingBag, title: { ar: "المصانع والإنتاج", en: "Factories & Production" }, description: { ar: "إدارة سكن العمال، الإعاشة، وتذاكر السفر للإجازات السنوية.", en: "Manage labor accommodation, catering, and travel tickets for annual leaves." } }
      ]
    },
    erpModules: {
      tag: { ar: "وحدات ERP", en: "ERP Modules" },
      title: { ar: "منظومة إدارية ومالية متكاملة للموظفين", en: "Integrated administrative and financial system for employees" },
      desc: { ar: "شؤون الموظفين في سنمار مرتبطة مباشرة بالمحاسبة العامة لتسجيل الرواتب كقيود آلية.", en: "Sanmar HR is directly linked to general accounting to record salaries as automatic entries." },
      list: [
        { icon: FiUsers, title: { ar: "ملفات الموظفين والوثائق", en: "Employee Files & Docs" }, description: { ar: "حفظ بيانات الموظف، العقود، والوثائق الرسمية مع تنبيهات قبل الانتهاء.", en: "Save employee data, contracts, and official documents with pre-expiry alerts." } },
        { icon: FiLayers, title: { ar: "الحضور والانصراف", en: "Attendance & Departure" }, description: { ar: "ربط مباشر بأجهزة البصمة لسحب الحركات واحتساب التأخير والغياب آلياً.", en: "Direct integration with biometric devices to fetch logs and auto-calculate delays and absences." } },
        { icon: FiCreditCard, title: { ar: "مسير الرواتب (Payroll)", en: "Payroll Management" }, description: { ar: "إعداد مسير الرواتب بنقرة واحدة شاملاً البدلات، الخصومات، والإضافي.", en: "Prepare payroll with one click, including allowances, deductions, and overtime." } },
        { icon: FiClipboard, title: { ar: "الإجازات والمخالصات", en: "Leaves & Final Settlements" }, description: { ar: "رصيد الإجازات الآلي واحتساب مكافأة نهاية الخدمة بدقة عند خروج الموظف.", en: "Auto leave balance and precise end-of-service calculation upon employee exit." } },
        { icon: FiHome, title: { ar: "السلف والعهد", en: "Advances & Custody" }, description: { ar: "إدارة سلف الموظفين وجدولتها، ومتابعة العهد العينية المسلمة لهم.", en: "Manage and schedule employee advances, and track items issued to them." } },
        { icon: FiTrendingUp, title: { ar: "نظام حماية الأجور (WPS)", en: "Wage Protection System" }, description: { ar: "تصدير ملف حماية الأجور بالصيغة المعتمدة من وزارة الموارد البشرية لرفعه للبنك.", en: "Export the WPS file in the format approved by the Ministry of HR to upload to the bank." } }
      ]
    },
    strengths: {
      tag: { ar: "لماذا سنمار؟", en: "Why Sanmar?" },
      title: { ar: "إدارة موارد بشرية بدون أخطاء وبدون تأخير", en: "Error-free and delay-free HR management" },
      quote: { ar: "\"موظفون سعداء = إنتاجية أعلى وولاء أكبر.\"", en: "\"Happy employees = higher productivity and greater loyalty.\"" },
      quoteText: { ar: "نظام سنمار يضمن حصول كل موظف على حقه بدقة تامة وفي الوقت المحدد دون عناء من الإدارة.", en: "Sanmar ensures every employee gets their exact dues on time without hassle from management." },
      list: [
        { icon: FiShield, title: { ar: "توافق مع نظام العمل السعودي", en: "Saudi Labor Law Compliance" }, description: { ar: "احتساب نهاية الخدمة والإجازات مبني بالكامل على أحدث لوائح نظام العمل.", en: "End of service and leave calculations are built entirely on the latest labor law regulations." } },
        { icon: FiClock, title: { ar: "توفير وقت محاسب الرواتب", en: "Save Payroll Accountant Time" }, description: { ar: "بدلاً من أيام من العمل اليدوي، يتم إعداد الرواتب وقيودها المحاسبية في دقائق.", en: "Instead of days of manual work, payroll and accounting entries are prepared in minutes." } },
        { icon: FiUsers, title: { ar: "تنبيهات استباقية", en: "Proactive Alerts" }, description: { ar: "إشعارات تظهر على الشاشة قبل انتهاء الإقامات، الجوازات، ورخص العمل لتفادي الغرامات.", en: "On-screen alerts before Iqamas, passports, and work permits expire to avoid fines." } },
        { icon: FiTrendingUp, title: { ar: "مرونة في البدلات والخصومات", en: "Flexible Allowances & Deductions" }, description: { ar: "إمكانية تعريف بدلات مخصصة لشركتك وخصومات مرتبطة بنسب معينة من الراتب.", en: "Ability to define custom allowances for your company and deductions tied to salary percentages." } }
      ]
    },
    cta: productCTAs["hr-system"]
  },

  // 📦 10: قطاع الاتصالات — Telecom System
  "telecom-system": {
    ...defaultSections,
    dashboardPreview: { ...defaultSections.dashboardPreview, image: "Productes/telecom-system-bg.webp" },
    hero: {
      eyebrow: {
        ar: "برنامج سنمار للاتصالات — تحكم كامل بالأجهزة والباقات",
        en: "Sanmar Telecom — Full Control of Devices & Packages"
      },
      title: {
        ar: "برنامج إدارة متاجر الاتصالات والجوالات",
        en: "Telecom & Mobile Store Management Software"
      },
      desc: {
        ar: "نظام مصمم خصيصاً لمتاجر الاتصالات يتتبع الأجهزة بأرقامها التسلسلية (IMEI)، يدير الضمانات والإصلاحات، ويتابع مبيعات كروت الشحن والباقات مع فوترة ضريبية فورية.",
        en: "A system specifically designed for telecom stores that tracks devices by IMEI, manages warranties and repairs, and monitors recharge cards and data package sales with instant tax invoicing."
      },
      bullets: [
        { ar: "تتبع IMEI الأجهزة", en: "IMEI Tracking", key: "TC_IMEI", icon: "FiSmartphone" },
        { ar: "إدارة الضمان والإصلاح", en: "Warranty & Repair Mgmt", key: "TC_Warranty", icon: "FiShield" },
        { ar: "نقاط بيع سريعة", en: "Fast POS System", key: "TC_POS", icon: "FiZap" }
      ]
    },
    definition: {
      title: {
        ar: "ما هو برنامج سنمار للاتصالات؟",
        en: "What is Sanmar Telecom Software?"
      },
      p1: {
        ar: "نظام متخصص صُمم لتلبية الاحتياجات الفريدة لقطاع الاتصالات وتقنية المعلومات، يجمع بين إدارة المخزون الذكي ونقاط البيع السريعة وخدمة ما بعد البيع.",
        en: "A specialized system designed to meet the unique needs of the telecom and IT sector, combining smart inventory management, fast POS, and after-sales service."
      },
      p2: {
        ar: "يمكّنك من تتبع كل جهاز بدقة عبر رقمه التسلسلي (IMEI)، إدارة بطاقات الشحن والباقات، واستقبال أجهزة الصيانة وتتبعها حتى تسليمها للعميل، مع إمكانية تحويل المخزون بين الفروع بسهولة.",
        en: "Enables you to precisely track every device via its IMEI, manage recharge cards and packages, receive and track repair devices until delivery to the customer, with easy stock transfer between branches."
      }
    },
    features: {
      title: {
        ar: "ميزات برنامج الاتصالات",
        en: "Telecom Software Features"
      },
      desc: {
        ar: "كل ما يحتاجه متجر الاتصالات والجوالات لإدارة عملياته بكفاءة.",
        en: "Everything a telecom and mobile store needs to manage its operations efficiently."
      },
      list: [
        {
          title: { ar: "تتبع الأرقام التسلسلية (IMEI)", en: "IMEI Tracking" },
          desc: { ar: "مراقبة دخول وخروج كل جهاز بناءً على رقمه التسلسلي الفريد (IMEI) لضمان تتبع دقيق ومنع الفقد.", en: "Monitor every device entry and exit via its unique IMEI for accurate tracking and loss prevention." },
          points: [
            { ar: "تسجيل IMEI عند الشراء", en: "Register IMEI on purchase" },
            { ar: "ربط IMEI بفاتورة البيع", en: "Link IMEI to sales invoice" },
            { ar: "بحث فوري برقم IMEI", en: "Instant IMEI search" }
          ]
        },
        {
          title: { ar: "إدارة الضمان والصيانة", en: "Warranty & Repair Mgmt" },
          desc: { ar: "استقبال الأجهزة المعطلة، فتح بطاقة إصلاح، متابعة حالتها، ومعرفة حالة الضمان بسهولة.", en: "Receive faulty devices, open a repair ticket, track status, and easily check warranty status." },
          points: [
            { ar: "فتح بطاقة إصلاح", en: "Open repair ticket" },
            { ar: "تحقق من الضمان", en: "Verify warranty status" },
            { ar: "إبلاغ العميل بالجاهزية", en: "Notify customer on readiness" }
          ]
        },
        {
          title: { ar: "شحن الأرصدة والباقات", en: "Recharge Cards & Data Packages" },
          desc: { ar: "إدارة مخزون كروت الشحن وباقات الإنترنت ومتابعة مبيعاتها وأرباحها بكفاءة.", en: "Manage recharge card inventory and data packages, track their sales and profits efficiently." },
          points: [
            { ar: "متابعة مخزون الكروت", en: "Track card inventory" },
            { ar: "أرباح كل نوع باقة", en: "Profit per package type" },
            { ar: "تقارير مبيعات يومية", en: "Daily sales reports" }
          ]
        },
        {
          title: { ar: "نقاط بيع سريعة", en: "Fast POS System" },
          desc: { ar: "إصدار فواتير سريعة لدعم الحركة الكثيفة في محلات الاتصالات دون تأخير مع دعم ماسح الباركود.", en: "Issue fast invoices to support high traffic telecom stores without delay, with barcode scanner support." },
          points: [
            { ar: "دعم ماسح الباركود", en: "Barcode scanner support" },
            { ar: "فواتير ضريبية فورية", en: "Instant tax invoices" },
            { ar: "طرق دفع متعددة", en: "Multiple payment methods" }
          ]
        },
        {
          title: { ar: "إدارة الإكسسوارات", en: "Accessories Management" },
          desc: { ar: "إدارة الأصناف المتنوعة من إكسسوارات الجوالات باستخدام الباركود مع تنبيهات حد أدنى للمخزون.", en: "Manage various mobile accessories using barcode with minimum stock alerts." },
          points: [
            { ar: "باركود لكل صنف", en: "Barcode per item" },
            { ar: "تنبيهات نقص المخزون", en: "Low stock alerts" },
            { ar: "نقل بين الفروع", en: "Inter-branch transfer" }
          ]
        }
      ]
    },
    faqs: [
      {
        q: { ar: "هل يمكن متابعة جهاز الصيانة من قبل العميل؟", en: "Can the customer track their repair device?" },
        a: { ar: "نعم، يمكنك مشاركة رقم الطلب مع العميل ليتابع حالة جهازه (قيد الاستلام، جاري الإصلاح، جاهز) عبر النظام.", en: "Yes, you can share the order number with the customer to track device status (received, repairing, ready) through the system." }
      },
      {
        q: { ar: "هل يدعم النظام إدارة عدة فروع لنفس المتجر؟", en: "Does the system support managing multiple branches for the same store?" },
        a: { ar: "بالتأكيد، يمكنك نقل المخزون وأرصدة كروت الشحن بين الفروع وتتبع مبيعات كل فرع على حدة.", en: "Absolutely, you can transfer stock and recharge card balances between branches and track each branch's sales separately." }
      }
    ],
    integration: {
      title: { ar: "فواتير متاجر الاتصالات المتوافقة مع ZATCA", en: "Telecom Store Invoices Compliant with ZATCA" },
      desc: { ar: "إصدار فواتير إلكترونية لبيع الأجهزة والإكسسوارات وخدمات الصيانة وفق أنظمة ZATCA.", en: "Issue e-invoices for device sales, accessories, and repair services according to ZATCA regulations." },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "متوافق مع ZATCA", en: "ZATCA Compliant" },
          desc: { ar: "فواتير مفصلة تتضمن الأرقام التسلسلية للأجهزة ورمز QR.", en: "Detailed invoices including device serial numbers and QR Code." }
        },
        {
          icon: "FiShield",
          title: { ar: "ضمان إلكتروني موثق", en: "Documented E-Warranty" },
          desc: { ar: "إصدار شهادات ضمان إلكترونية مرتبطة برقم IMEI الجهاز.", en: "Issue electronic warranty certificates linked to the device IMEI." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "فواتير خدمات الصيانة", en: "Repair Service Invoices" },
          desc: { ar: "إصدار فواتير ضريبية لخدمات إصلاح الأجهزة بشكل منفصل.", en: "Issue tax invoices for device repair services separately." }
        },
        {
          title: { ar: "تقارير مبيعات الفروع", en: "Branch Sales Reports" },
          desc: { ar: "تقارير شاملة لمبيعات كل فرع لمقارنة الأداء واتخاذ القرارات.", en: "Comprehensive reports for each branch's sales to compare performance." }
        }
      ]
    },
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "إدارة متكاملة لقطاع الاتصالات", en: "Integrated Management for Telecom Sector" },
      desc: { ar: "برنامج سنمار يلبي متطلبات محلات الجوالات والصيانة بجميع تفرعاتها.", en: "Sanmar software meets the requirements of mobile and repair shops with all their branches." },
      cardTag: { ar: "نشاط", en: "Activity" },
      list: [
        { icon: FiShoppingBag, title: { ar: "معارض بيع الجوالات", en: "Mobile Showrooms" }, description: { ar: "إدارة مبيعات الأجهزة الذكية مع تتبع دقيق لرقم IMEI لكل جهاز.", en: "Manage smart device sales with precise tracking of each device's IMEI." } },
        { icon: FiClipboard, title: { ar: "مراكز صيانة الجوالات", en: "Mobile Repair Centers" }, description: { ar: "استقبال الأجهزة المعطلة، تتبع حالة الإصلاح، وإدارة قطع الغيار والشاشات.", en: "Receive faulty devices, track repair status, and manage spare parts and screens." } },
        { icon: FiLayers, title: { ar: "محلات الإكسسوارات", en: "Accessories Shops" }, description: { ar: "بيع الكفرات، الشواحن، السماعات باستخدام الباركود وإدارة نواقص المخزون.", en: "Sell covers, chargers, headphones using barcode and manage inventory shortages." } },
        { icon: FiCreditCard, title: { ar: "نقاط شحن الأرصدة", en: "Recharge Points" }, description: { ar: "إدارة مبيعات كروت الشحن وباقات الإنترنت من مختلف مزودي الخدمة.", en: "Manage sales of recharge cards and data packages from various service providers." } },
        { icon: FiHome, title: { ar: "موزعي الجملة", en: "Wholesale Distributors" }, description: { ar: "بيع الجوالات والإكسسوارات بالجملة للمحلات مع إدارة مديونيات العملاء.", en: "Sell mobiles and accessories wholesale to shops while managing customer debts." } },
        { icon: FiUsers, title: { ar: "الوكلاء ومقدمي الضمان", en: "Agents & Warranty Providers" }, description: { ar: "إدارة استبدال الأجهزة المشمولة بالضمان ومتابعة التعويضات مع الشركات الأم.", en: "Manage replacement of warranty-covered devices and track compensations with parent companies." } }
      ]
    },
    erpModules: {
      tag: { ar: "وحدات ERP", en: "ERP Modules" },
      title: { ar: "دورة عمل رقمية لمحلات الاتصالات", en: "Digital Workflow for Telecom Shops" },
      desc: { ar: "نظام يربط بين المبيعات، الصيانة، والمخزون لضمان عدم ضياع أي جهاز أو قطعة.", en: "A system linking sales, repair, and inventory to ensure no device or part is lost." },
      list: [
        { icon: FiShoppingBag, title: { ar: "نقاط البيع (POS)", en: "Point of Sale (POS)" }, description: { ar: "شاشة مبيعات سريعة تدعم قارئ الباركود وتُصدر الفاتورة بثوانٍ.", en: "Fast sales screen supporting barcode readers and issuing invoices in seconds." } },
        { icon: FiLayers, title: { ar: "إدارة الأرقام التسلسلية", en: "Serial Numbers Management" }, description: { ar: "تسجيل أرقام IMEI عند الشراء وإجبار البائع على اختيارها عند البيع.", en: "Record IMEI numbers on purchase and force the seller to select them upon sale." } },
        { icon: FiClipboard, title: { ar: "نظام الصيانة الذكي", en: "Smart Repair System" }, description: { ar: "فتح تذكرة صيانة برمز الاسترداد وتحديد تكلفة القطع وأجرة الفني.", en: "Open a repair ticket with a redemption code and set part costs and tech fee." } },
        { icon: FiHome, title: { ar: "إدارة كروت الشحن", en: "Recharge Cards Management" }, description: { ar: "فصل مبيعات كروت الشحن لمعرفة الربح الصافي بدقة بعيداً عن الأجهزة.", en: "Separate recharge card sales to accurately know net profit apart from devices." } },
        { icon: FiUsers, title: { ar: "إدارة الضمانات", en: "Warranty Management" }, description: { ar: "طباعة سياسة الضمان على الفاتورة وتتبع فترة صلاحية كل جهاز مباع.", en: "Print warranty policy on invoice and track the validity period of each sold device." } },
        { icon: FiCreditCard, title: { ar: "الفوترة الإلكترونية", en: "E-Invoicing" }, description: { ar: "دعم فواتير ZATCA B2C للمبيعات النقدية و B2B لفواتير الجملة.", en: "Support ZATCA B2C invoices for cash sales and B2B for wholesale invoices." } }
      ]
    },
    strengths: {
      tag: { ar: "لماذا سنمار؟", en: "Why Sanmar?" },
      title: { ar: "تحكم كامل بمخزونك الدقيق والمرتفع القيمة", en: "Full control over your precise and high-value inventory" },
      quote: { ar: "\"جهاز مفقود = ضياع أرباح شهر كامل.\"", en: "\"One lost device = a whole month's lost profits.\"" },
      quoteText: { ar: "نظام سنمار يحمي رأس مالك عبر التتبع الدقيق لكل جهاز ولكل قطعة إكسسوار في متجرك.", en: "Sanmar system protects your capital through precise tracking of every device and accessory in your store." },
      list: [
        { icon: FiShield, title: { ar: "منع السرقات والفقد", en: "Prevent Theft & Loss" }, description: { ar: "من المستحيل بيع جهاز دون تسجيله، والجرد بالـ IMEI يطابق المخزون 100%.", en: "It's impossible to sell a device without registering it, and IMEI inventory matches 100%." } },
        { icon: FiClock, title: { ar: "سرعة في مواسم الزحام", en: "Speed in Peak Seasons" }, description: { ar: "إصدار فاتورة لعدة أجهزة وكفرات وباقات شحن في فاتورة واحدة بسرعة فائقة.", en: "Issue one invoice for multiple devices, covers, and recharge packages at top speed." } },
        { icon: FiUsers, title: { ar: "تنظيم عمل الفنيين", en: "Organize Tech Work" }, description: { ar: "توزيع مهام الصيانة على الفنيين ومعرفة إنجاز كل فني نهاية اليوم لصرف عمولته.", en: "Distribute repair tasks to techs and know each one's daily output to pay commissions." } },
        { icon: FiTrendingUp, title: { ar: "تقارير الأرباح التفصيلية", en: "Detailed Profit Reports" }, description: { ar: "اعرف ربحك من بيع الأجهزة، ربح الصيانة، وربح كروت الشحن كلاً على حدة.", en: "Know your profit from device sales, repair profit, and recharge cards separately." } }
      ]
    },
    cta: productCTAs["telecom-system"]
  },

  // 📦 11: قطاع الخدمات — Services System
  "services-system": {
    ...defaultSections,
    hero: {
      eyebrow: {
        ar: "برنامج سنمار للخدمات — إدارة شركتك الخدمية باحترافية",
        en: "Sanmar Services — Manage Your Service Business Professionally"
      },
      title: {
        ar: "برنامج إدارة الشركات الخدمية",
        en: "Service Companies Management Software"
      },
      desc: {
        ar: "نظام شامل لتنظيم عمل الشركات الخدمية بدءاً من إصدار عقود الصيانة والاشتراكات الدورية، جدولة فرق العمل الميدانية، وحتى الفوترة المتكررة وتحليل ربحية كل عقد.",
        en: "A comprehensive system to organize service company operations from issuing maintenance contracts and recurring subscriptions, scheduling field teams, to recurring invoicing and analyzing profitability per contract."
      },
      bullets: [
        { ar: "عقود خدمات مرنة", en: "Flexible Contracts", key: "SV_Contracts", icon: "FiFileText" },
        { ar: "جدولة فرق العمل", en: "Team Scheduling", key: "SV_Scheduling", icon: "FiUsers" },
        { ar: "فوترة دورية آلية", en: "Auto Recurring Invoicing", key: "SV_Invoicing", icon: "FiRepeat" }
      ]
    },
    definition: {
      title: {
        ar: "ما هو برنامج سنمار للخدمات؟",
        en: "What is Sanmar Services Software?"
      },
      p1: {
        ar: "هو الحل الأمثل لشركات الخدمات (النظافة، الصيانة، الحراسات الأمنية، وغيرها) التي تحتاج إلى إدارة عقود متعددة وفرق ميدانية بدقة ومرونة عالية.",
        en: "The optimal solution for service companies (cleaning, maintenance, security, etc.) that need to manage multiple contracts and field teams with precision and high flexibility."
      },
      p2: {
        ar: "يمكنك النظام من إصدار عقود خدمات بأنواعها (زمنية أو بعدد الزيارات)، تسعير مخصص لكل عميل، جدولة الزيارات الميدانية، وإصدار فواتير دورية تلقائية مع متابعة التحصيل وتقييم ربحية كل عقد.",
        en: "The system enables you to issue service contracts of all types (time-based or visit-based), custom pricing per client, schedule field visits, and issue automatic recurring invoices with collection tracking and per-contract profitability assessment."
      }
    },
    features: {
      title: {
        ar: "ميزات برنامج الخدمات",
        en: "Services Software Features"
      },
      desc: {
        ar: "أدوات متكاملة لإدارة شركتك الخدمية وزيادة ربحيتها.",
        en: "Integrated tools to manage your service company and increase its profitability."
      },
      list: [
        {
          title: { ar: "عقود الخدمات المرنة", en: "Flexible Service Contracts" },
          desc: { ar: "إصدار وتتبع العقود الزمنية وعقود الزيارات مع المتابعة الدقيقة لالتزام الطرفين.", en: "Issue and track time-based and visit-based contracts with precise monitoring of both parties' commitments." },
          points: [
            { ar: "عقود زمنية وبالزيارات", en: "Time & visit-based contracts" },
            { ar: "شروط وأحكام مرنة", en: "Flexible terms & conditions" },
            { ar: "أرشفة إلكترونية للعقود", en: "Electronic contract archiving" }
          ]
        },
        {
          title: { ar: "جدولة فرق العمل", en: "Team Scheduling" },
          desc: { ar: "توزيع المهام على الفنيين والعمال الميدانيين وتتبع إنجاز كل مهمة والتأكد من تنفيذ الزيارات.", en: "Assign tasks to technicians and field workers, track each task completion and verify visit execution." },
          points: [
            { ar: "توزيع المهام بالتاريخ", en: "Date-based task assignment" },
            { ar: "تأكيد تنفيذ الزيارات", en: "Visit execution confirmation" },
            { ar: "متابعة إنتاجية الفريق", en: "Track team productivity" }
          ]
        },
        {
          title: { ar: "الفوترة الدورية الآلية", en: "Auto Recurring Invoicing" },
          desc: { ar: "إصدار فواتير شهرية أو سنوية تلقائية للعملاء أصحاب عقود الاشتراك دون تدخل يدوي.", en: "Auto-issue monthly or annual invoices for subscription contract clients without manual intervention." },
          points: [
            { ar: "فوترة شهرية/ربعية/سنوية", en: "Monthly/quarterly/annual billing" },
            { ar: "إصدار تلقائي بلا تدخل", en: "Auto issue without intervention" },
            { ar: "متابعة التحصيل", en: "Collection tracking" }
          ]
        },
        {
          title: { ar: "إدارة تكاليف الخدمات", en: "Service Cost Management" },
          desc: { ar: "احتساب تكلفة كل خدمة بدقة (ساعات عمل + مواد) لمعرفة هامش الربح الفعلي لكل عقد.", en: "Accurately calculate each service cost (labor hours + materials) to know the actual profit margin per contract." },
          points: [
            { ar: "تكلفة ساعات العمل", en: "Labor hours cost" },
            { ar: "تكلفة المواد المستخدمة", en: "Materials cost" },
            { ar: "تحليل ربحية العقد", en: "Contract profitability analysis" }
          ]
        },
        {
          title: { ar: "تنبيهات تجديد العقود", en: "Contract Renewal Alerts" },
          desc: { ar: "متابعة العقود المقاربة على الانتهاء وتذكير العملاء بضرورة التجديد للحفاظ على الإيرادات.", en: "Track expiring contracts and remind clients to renew to maintain revenue streams." },
          points: [
            { ar: "تنبيهات قبل الانتهاء", en: "Pre-expiry alerts" },
            { ar: "تجديد العقود بسهولة", en: "Easy contract renewal" },
            { ar: "تقارير العقود النشطة", en: "Active contracts reports" }
          ]
        }
      ]
    },
    faqs: [
      {
        q: { ar: "هل يمكنني تحديد تسعيرة مختلفة لكل عميل؟", en: "Can I set a different price for each customer?" },
        a: { ar: "نعم، يدعم النظام التسعير المخصص بناءً على حجم العقد ونوع الخدمة والمنطقة الجغرافية.", en: "Yes, the system supports custom pricing based on contract size, service type, and geographic area." }
      },
      {
        q: { ar: "كيف يتابع النظام إنجاز الزيارات الميدانية؟", en: "How does the system track field visit completion?" },
        a: { ar: "يتم تسجيل كل زيارة بتاريخها وحالتها (تم التنفيذ، تم التأجيل، لم يتم)، ومطابقة عدد الزيارات المنجزة مع ما هو مطلوب في العقد.", en: "Each visit is recorded with its date and status (completed, postponed, not done), and the number of completed visits is matched against what's required in the contract." }
      }
    ],
    integration: {
      title: { ar: "فوترة خدمات متوافقة مع ZATCA", en: "Service Invoicing Compliant with ZATCA" },
      desc: { ar: "إصدار فواتير دورية ومقطوعة لعقود الخدمات متوافقة تماماً مع متطلبات ZATCA.", en: "Issue recurring and one-time invoices for service contracts fully compliant with ZATCA requirements." },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "متوافق مع ZATCA", en: "ZATCA Compliant" },
          desc: { ar: "فواتير ضريبية لعقود الخدمات الدورية والمقطوعة مع QR Code.", en: "Tax invoices for recurring and one-time service contracts with QR Code." }
        },
        {
          icon: "FiShield",
          title: { ar: "حماية بيانات العقود", en: "Contract Data Protection" },
          desc: { ar: "تشفير وحماية بيانات العقود والعملاء مع صلاحيات وصول متعددة.", en: "Encrypt and protect contract and client data with multi-level access." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "فواتير اشتراكات B2B", en: "B2B Subscription Invoices" },
          desc: { ar: "إصدار فواتير ضريبية مجمعة للشركات بناءً على عقود الخدمات.", en: "Issue grouped tax invoices for companies based on service contracts." }
        },
        {
          title: { ar: "تقارير إيرادات العقود", en: "Contract Revenue Reports" },
          desc: { ar: "تقارير شاملة لإيرادات كل عقد ومقارنتها بالتكاليف لمعرفة الربحية.", en: "Comprehensive reports for each contract's revenue compared to costs for profitability." }
        }
      ]
    },
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "إدارة الشركات والمؤسسات الخدمية", en: "Management of Service Companies and Institutions" },
      desc: { ar: "برنامج سنمار الخدمي مرن ويناسب جميع الأنشطة التي تعتمد على العقود والجهد البشري.", en: "Sanmar service software is flexible and suits all activities based on contracts and human effort." },
      cardTag: { ar: "نشاط", en: "Activity" },
      list: [
        { icon: FiClipboard, title: { ar: "شركات النظافة والصيانة", en: "Cleaning & Maintenance Companies" }, description: { ar: "إدارة عقود النظافة الدورية، جدولة زيارات العمالة، واحتساب التكاليف.", en: "Manage periodic cleaning contracts, schedule labor visits, and calculate costs." } },
        { icon: FiShield, title: { ar: "شركات الحراسات الأمنية", en: "Security Guard Companies" }, description: { ar: "إدارة عقود توفير الحراس للمنشآت، جدولة الورديات، والفوترة الشهرية.", en: "Manage facility guard contracts, schedule shifts, and issue monthly billing." } },
        { icon: FiLayers, title: { ar: "وكالات الدعاية والإعلان", en: "Advertising Agencies" }, description: { ar: "تسعير المشاريع الإعلانية، متابعة التنفيذ، وإصدار فواتير الدفعات.", en: "Price advertising projects, track execution, and issue installment invoices." } },
        { icon: FiUsers, title: { ar: "مكاتب المحاماة والاستشارات", en: "Law Firms & Consulting" }, description: { ar: "إدارة عقود الاستشارات السنوية والقضايا مع احتساب الساعات المفوترة.", en: "Manage annual consulting contracts and cases with billable hours calculation." } },
        { icon: FiTruck, title: { ar: "شركات مكافحة الحشرات", en: "Pest Control Companies" }, description: { ar: "جدولة الرش الدوري، إصدار شهادات الضمان، وتذكير العملاء بالزيارات.", en: "Schedule periodic spraying, issue warranty certificates, and remind clients of visits." } },
        { icon: FiBriefcase, title: { ar: "خدمات تنسيق الحدائق", en: "Landscaping Services" }, description: { ar: "عقود العناية بالحدائق، صرف المواد، وتتبع ربحية كل مشروع.", en: "Garden care contracts, materials issue, and tracking profitability of each project." } }
      ]
    },
    erpModules: {
      tag: { ar: "وحدات ERP", en: "ERP Modules" },
      title: { ar: "أدوات متكاملة لنجاح تقديم الخدمات", en: "Integrated Tools for Successful Service Delivery" },
      desc: { ar: "يحول النظام خدماتك غير الملموسة إلى أرقام ومهام قابلة للقياس والإدارة.", en: "The system turns your intangible services into measurable and manageable numbers and tasks." },
      list: [
        { icon: FiClipboard, title: { ar: "إدارة العقود والاشتراكات", en: "Contracts & Subscriptions" }, description: { ar: "إنشاء عقود مفصلة (تاريخ بداية ونهاية، قيمة العقد، شروط الدفع، وعدد الزيارات).", en: "Create detailed contracts (start/end dates, value, payment terms, visit count)." } },
        { icon: FiUsers, title: { ar: "جدولة المهام والفرق", en: "Task & Team Scheduling" }, description: { ar: "تقويم تفاعلي لتوزيع المهام على الفنيين الميدانيين وضمان عدم تضارب المواعيد.", en: "Interactive calendar to assign tasks to field techs and ensure no schedule conflicts." } },
        { icon: FiCreditCard, title: { ar: "الفوترة الدورية الآلية", en: "Auto Recurring Invoicing" }, description: { ar: "إصدار الفواتير التلقائية بداية كل شهر لعقود الصيانة السنوية.", en: "Auto-issue invoices at the beginning of each month for annual maintenance contracts." } },
        { icon: FiLayers, title: { ar: "احتساب التكاليف (Costing)", en: "Service Costing" }, description: { ar: "ربط ساعات عمل الفريق والمواد المستهلكة بكل عقد لمعرفة هامش الربح الحقيقي.", en: "Link team hours and consumed materials to each contract to know the true profit margin." } },
        { icon: FiHome, title: { ar: "بوابة العملاء (اختياري)", en: "Customer Portal (Optional)" }, description: { ar: "تمكين العميل من متابعة حالة عقده، طلب صيانة إضافية، وتحميل الفواتير.", en: "Enable the client to track their contract status, request extra maintenance, and download invoices." } },
        { icon: FiTrendingUp, title: { ar: "التقارير الإدارية", en: "Management Reports" }, description: { ar: "متابعة إنجاز المهام، العقود المقاربة على الانتهاء، وإيرادات الخدمات.", en: "Track task completion, expiring contracts, and service revenues." } }
      ]
    },
    strengths: {
      tag: { ar: "لماذا سنمار؟", en: "Why Sanmar?" },
      title: { ar: "نظم خدماتك، ارضِ عملاءك، وضاعف أرباحك", en: "Organize your services, satisfy clients, and double profits" },
      quote: { ar: "\"الخدمة الممتازة تبدأ من الإدارة المنظمة.\"", en: "\"Excellent service starts with organized management.\"" },
      quoteText: { ar: "نظام سنمار الخدمي يقضي على الفوضى التشغيلية ويضمن التزامك التام مع عملائك وفق العقود المبرمة.", en: "Sanmar Service System eliminates operational chaos and ensures full compliance with your clients' contracts." },
      list: [
        { icon: FiShield, title: { ar: "توثيق والتزام قانوني", en: "Documentation & Legal Compliance" }, description: { ar: "العقود والفواتير تُصدر بشكل نظامي يحمي حقوق شركتك ويضمن حقوق العميل.", en: "Contracts and invoices are issued systematically, protecting both your company and the client." } },
        { icon: FiClock, title: { ar: "لا نسيان للمواعيد", en: "No Forgotten Appointments" }, description: { ar: "النظام ينبهك بالزيارات المجدولة وعمليات الصيانة الدورية قبل موعدها بوقت كافٍ.", en: "The system alerts you to scheduled visits and periodic maintenance well in advance." } },
        { icon: FiUsers, title: { ar: "تسعير مدروس", en: "Well-Studied Pricing" }, description: { ar: "معرفة تكلفة تقديم الخدمة بدقة يجعلك تسعر خدماتك بشكل تنافسي ومربح في نفس الوقت.", en: "Knowing the exact cost of service delivery lets you price competitively and profitably." } },
        { icon: FiTrendingUp, title: { ar: "ضمان استمرارية الإيرادات", en: "Ensure Revenue Continuity" }, description: { ar: "تنبيهات تجديد العقود تساعدك على التواصل مع العميل وتجديد اشتراكه قبل أن يغادر لمنافس.", en: "Contract renewal alerts help you contact the client and renew before they leave for a competitor." } }
      ]
    },
    cta: productCTAs["services-system"]
  },

  // 📦 12: محطات الوقود — Fuel Station
  "fuel-station": {
    ...defaultSections,
    dashboardPreview: { ...defaultSections.dashboardPreview, image: "Productes/fuel-station-bg.webp" },
    hero: {
      eyebrow: {
        ar: "برنامج سنمار لمحطات الوقود — دقة في القراءات وشفافية في الحسابات",
        en: "Sanmar Fuel Station — Precise Readings & Transparent Accounts"
      },
      title: {
        ar: "برنامج إدارة محطات الوقود والمحروقات",
        en: "Fuel Station & Petroleum Management Software"
      },
      desc: {
        ar: "تحكم بقراءات العدادات، مبيعات التموين، إيرادات الورديات، ومطابقة الخزانات الأرضية بدقة متناهية مع فوترة ضريبية لعملاء الكوبونات والآجل.",
        en: "Control pump meter readings, fuel sales, shift revenues, and underground tank reconciliation with pinpoint accuracy, with tax invoicing for coupon and credit customers."
      },
      bullets: [
        { ar: "قراءات العدادات", en: "Pump Meter Readings", key: "FS_Meters", icon: "FiActivity" },
        { ar: "مطابقة الخزانات", en: "Tanks Reconciliation", key: "FS_Tanks", icon: "FiDatabase" },
        { ar: "إدارة الورديات", en: "Shift Management", key: "FS_Shifts", icon: "FiRefreshCw" }
      ]
    },
    definition: {
      title: {
        ar: "ما هو برنامج سنمار لمحطات الوقود؟",
        en: "What is Sanmar Fuel Station Software?"
      },
      p1: {
        ar: "نظام متخصص صُمم لمعالجة التحديات التشغيلية والمحاسبية الفريدة في محطات الوقود والمحروقات بالمملكة العربية السعودية.",
        en: "A specialized system designed to address the unique operational and accounting challenges in fuel stations in the Kingdom of Saudi Arabia."
      },
      p2: {
        ar: "يوفر البرنامج أدوات متكاملة لتسجيل قراءات المضخات في بداية ونهاية كل وردية، مطابقة المخزون الفعلي للخزانات الأرضية مع المبيعات، إدارة كوبونات الشركات والعملاء الآجلين، بالإضافة إلى نقطة بيع مخصصة لبقالة المحطة.",
        en: "The software provides integrated tools for recording pump readings at the start and end of each shift, reconciling actual underground tank stock with sales, managing corporate coupons and credit customers, in addition to a dedicated POS for the station's convenience store."
      }
    },
    features: {
      title: {
        ar: "ميزات برنامج محطات الوقود",
        en: "Fuel Station Software Features"
      },
      desc: {
        ar: "تحكم كامل في عمليات المحطة بشفافية ودقة محاسبية.",
        en: "Full control over station operations with transparency and accounting accuracy."
      },
      list: [
        {
          title: { ar: "قراءات عدادات المضخات", en: "Pump Meter Readings" },
          desc: { ar: "تسجيل القراءات الافتتاحية والختامية للورديات واحتساب كميات ومبالغ المبيعات لكل مضخة تلقائياً.", en: "Record opening and closing shift readings and automatically calculate sales quantities and amounts per pump." },
          points: [
            { ar: "قراءة افتتاحية وختامية", en: "Opening & closing readings" },
            { ar: "حساب المبيعات آلياً", en: "Auto-calculate sales" },
            { ar: "تقرير لكل مضخة", en: "Report per pump" }
          ]
        },
        {
          title: { ar: "مطابقة الخزانات الأرضية", en: "Tanks Reconciliation" },
          desc: { ar: "مقارنة المخزون الفعلي في الخزانات مع المبيعات المسجلة لكشف أي فاقد أو تسرب أو فروقات.", en: "Compare actual tank stock with recorded sales to detect any loss, leakage, or discrepancies." },
          points: [
            { ar: "قياس المخزون الفعلي", en: "Measure actual stock" },
            { ar: "كشف التسربات والفاقد", en: "Detect leaks & losses" },
            { ar: "نسب التبخر المسموحة", en: "Allowed evaporation rates" }
          ]
        },
        {
          title: { ar: "إدارة الورديات (الشفتات)", en: "Shift Management" },
          desc: { ar: "تسليم وتسلم النقدية والشبكة بين عمال المحطة وتسوية عهد كل وردية بدقة تامة.", en: "Cash and POS handover between station workers with precise settlement of each shift's custody." },
          points: [
            { ar: "تسليم وتسلم الوردية", en: "Shift handover process" },
            { ar: "تسوية العهد المالية", en: "Financial custody settlement" },
            { ar: "تقرير إيرادات الوردية", en: "Shift revenue report" }
          ]
        },
        {
          title: { ar: "كوبونات التموين للشركات", en: "Corporate Fuel Coupons" },
          desc: { ar: "تتبع كوبونات الشركات والمبيعات الآجلة، وإصدار مطالبات وفواتير ضريبية مجمعة للتحصيل.", en: "Track corporate coupons and credit sales, issue grouped claims and tax invoices for collection." },
          points: [
            { ar: "تسجيل كوبونات الشركات", en: "Register corporate coupons" },
            { ar: "فواتير مجمعة للتحصيل", en: "Grouped invoices for collection" },
            { ar: "كشف حساب لكل شركة", en: "Statement per company" }
          ]
        },
        {
          title: { ar: "نقاط بيع التموينات", en: "C-Store POS" },
          desc: { ar: "إدارة مبيعات بقالة المحطة والزيوت والإكسسوارات ضمن نفس النظام مع فواتير ضريبية فورية.", en: "Manage convenience store sales, oils, and accessories within the same system with instant tax invoices." },
          points: [
            { ar: "كاشير بقالة المحطة", en: "Station store cashier" },
            { ar: "إدارة مخزون الزيوت", en: "Oil inventory management" },
            { ar: "فواتير ضريبية فورية", en: "Instant tax invoices" }
          ]
        }
      ]
    },
    faqs: [
      {
        q: { ar: "كيف يتعامل النظام مع الفاقد والتبخر في الوقود؟", en: "How does the system handle fuel loss and evaporation?" },
        a: { ar: "يقوم النظام بحساب النسب الطبيعية للتبخر بناءً على المعايير المعتمدة، ويقارن الفاقد الفعلي بالنسب المسموحة لتنبيهك بأي خلل يتطلب فحصاً.", en: "The system calculates natural evaporation rates based on approved standards and compares actual loss with allowed rates to alert you of any anomaly requiring inspection." }
      },
      {
        q: { ar: "هل يمكن إدارة أكثر من محطة في نفس النظام؟", en: "Can multiple stations be managed in the same system?" },
        a: { ar: "نعم، يدعم النظام إدارة عدة محطات وفروع ضمن نظام واحد مع فصل كامل لبيانات كل محطة وتقاريرها المالية.", en: "Yes, the system supports managing multiple stations and branches within one system with complete separation of each station's data and financial reports." }
      }
    ],
    integration: {
      title: { ar: "فواتير محطات الوقود المتوافقة مع ZATCA", en: "Fuel Station Invoices Compliant with ZATCA" },
      desc: { ar: "إصدار فواتير ضريبية لمبيعات الوقود بالتجزئة وكوبونات الشركات وفق أنظمة هيئة الزكاة والضريبة.", en: "Issue tax invoices for retail fuel sales and corporate coupons according to ZATCA regulations." },
      leftBlocks: [
        {
          icon: "FiCheckCircle",
          title: { ar: "متوافق مع ZATCA", en: "ZATCA Compliant" },
          desc: { ar: "فواتير ضريبية للتجزئة والآجل تشمل تفاصيل الوقود والكميات.", en: "Tax invoices for retail and credit including fuel details and quantities." }
        },
        {
          icon: "FiShield",
          title: { ar: "مطابقة مالية دقيقة", en: "Precise Financial Reconciliation" },
          desc: { ar: "تسوية يومية بين قراءات المضخات والإيرادات النقدية والشبكة.", en: "Daily reconciliation between pump readings and cash/POS revenues." }
        }
      ],
      rightBlocks: [
        {
          title: { ar: "فواتير الشركات (B2B)", en: "Corporate Invoices (B2B)" },
          desc: { ar: "إصدار فواتير ضريبية مجمعة للشركات المتعاقدة بناءً على الكوبونات.", en: "Issue grouped tax invoices for contracted companies based on coupons." }
        },
        {
          title: { ar: "تقارير الإيرادات والفاقد", en: "Revenue & Loss Reports" },
          desc: { ar: "تقارير شاملة لإيرادات المحطة مع تحليل نسب الفاقد والتبخر.", en: "Comprehensive station revenue reports with loss and evaporation analysis." }
        }
      ]
    },
    useCases: {
      tag: { ar: "حالات الاستخدام", en: "Use Cases" },
      title: { ar: "إدارة المحروقات ومحطات الوقود", en: "Managing Fuels and Gas Stations" },
      desc: { ar: "برنامج سنمار لمحطات الوقود يوفر حلاً متكاملاً يغطي كافة عمليات بيع وإدارة المحروقات.", en: "Sanmar fuel station software provides a comprehensive solution covering all fuel sales and management operations." },
      cardTag: { ar: "نشاط", en: "Activity" },
      list: [
        { icon: FiBriefcase, title: { ar: "محطات الوقود المستقلة", en: "Independent Fuel Stations" }, description: { ar: "إدارة المحطة الفردية بكامل مرافقها من مضخات وبقالة وتغيير زيوت.", en: "Manage a single station with all its facilities: pumps, grocery, and oil change." } },
        { icon: FiLayers, title: { ar: "شركات إدارة المحطات", en: "Station Management Companies" }, description: { ar: "ربط عدة فروع ومحطات في نظام مركزي واحد لمراقبة المبيعات والمخزون عن بعد.", en: "Link multiple branches and stations in one central system for remote sales and inventory monitoring." } },
        { icon: FiTruck, title: { ar: "بيع المحروقات للشركات (B2B)", en: "B2B Fuel Sales" }, description: { ar: "إدارة عقود التموين للشركات ذات الأساطيل وإصدار فواتير شهرية مجمعة.", en: "Manage fuel contracts for fleet companies and issue grouped monthly invoices." } },
        { icon: FiHome, title: { ar: "مراكز خدمات السيارات الملحقة", en: "Attached Car Service Centers" }, description: { ar: "إدارة مغسلة السيارات، البنشر، والخدمات الملحقة بالمحطة عبر نقاط بيع سريعة.", en: "Manage car wash, tire shop, and attached services via fast POS terminals." } },
        { icon: FiShoppingBag, title: { ar: "تموينات المحطة (C-Store)", en: "Convenience Stores (C-Store)" }, description: { ar: "نظام كاشير متكامل لبقالة المحطة مع إدارة المخزون وقارئ الباركود.", en: "Integrated cashier system for the station grocery with inventory management and barcode reader." } },
        { icon: FiClipboard, title: { ar: "موزعي الديزل والمحروقات", en: "Diesel & Fuel Distributors" }, description: { ar: "إدارة مبيعات الصهاريج المتنقلة وتوصيل الديزل للشركات والمصانع.", en: "Manage mobile tanker sales and diesel delivery to companies and factories." } }
      ]
    },
    erpModules: {
      tag: { ar: "وحدات ERP", en: "ERP Modules" },
      title: { ar: "دورة محاسبية مغلقة للمحطة", en: "Closed Accounting Cycle for the Station" },
      desc: { ar: "البرنامج مصمم لمعالجة التحديات المحاسبية الخاصة بمحطات الوقود كالتبخر والفروقات.", en: "The software is designed to handle accounting challenges specific to fuel stations like evaporation and variances." },
      list: [
        { icon: FiClipboard, title: { ar: "نظام قراءات المضخات", en: "Pump Readings System" }, description: { ar: "إدخال قراءات العدادات لكل طرمبة بنزين لاحتساب الكميات المباعة أتوماتيكياً.", en: "Enter meter readings for each fuel pump to automatically calculate sold quantities." } },
        { icon: FiHome, title: { ar: "إدارة الخزانات الأرضية", en: "Underground Tanks Management" }, description: { ar: "تسجيل تفريغ الناقلات ومطابقة المخزون الفعلي بالخزانات مع المبيعات المسجلة.", en: "Record tanker unloads and reconcile actual underground tank stock with recorded sales." } },
        { icon: FiUsers, title: { ar: "إدارة ورديات العمال", en: "Workers Shift Management" }, description: { ar: "تسوية عهدة كل عامل بنهاية الشفت (نقد، شبكة، كوبونات) وتسجيل العجز أو الزيادة.", en: "Settle each worker's custody at shift end (cash, POS, coupons) and record shortages or overages." } },
        { icon: FiLayers, title: { ar: "نظام الكوبونات والآجل", en: "Coupons & Credit System" }, description: { ar: "تعريف كوبونات الشركات المطبوعة أو الرقمية وتجميعها لإصدار مطالبة مالية.", en: "Define printed or digital corporate coupons and group them to issue a financial claim." } },
        { icon: FiCreditCard, title: { ar: "الفوترة الإلكترونية للوقود", en: "Fuel E-Invoicing" }, description: { ar: "إصدار فواتير ضريبية مفصلة للعملاء النقديين والشركات متوافقة مع ZATCA.", en: "Issue detailed ZATCA-compliant tax invoices for cash and corporate customers." } },
        { icon: FiTrendingUp, title: { ar: "معالجة التبخر والفاقد", en: "Evaporation & Loss Handling" }, description: { ar: "حساب نسب التبخر المسموح بها نظامياً وإثباتها محاسبياً كالمصروفات أو الفواقد.", en: "Calculate legally allowed evaporation rates and account for them as expenses or losses." } }
      ]
    },
    strengths: {
      tag: { ar: "لماذا سنمار؟", en: "Why Sanmar?" },
      title: { ar: "إدارة محطتك بدقة القطرة والهللة", en: "Manage your station with drop and Halala accuracy" },
      quote: { ar: "\"السيطرة على عدادات الوقود هي السيطرة على أرباح المحطة.\"", en: "\"Controlling fuel meters is controlling the station's profits.\"" },
      quoteText: { ar: "يوفر لك سنمار حلاً يقضي على التلاعب، يضبط عهد العمال، ويضمن دقة الحسابات الضريبية.", en: "Sanmar provides a solution that eliminates fraud, controls workers' custodies, and ensures tax calculation accuracy." },
      list: [
        { icon: FiShield, title: { ar: "مطابقة لا تقبل الخطأ", en: "Infallible Reconciliation" }, description: { ar: "النظام يطابق بين قراءات المضخات، والمبيعات النقدية/الشبكة، ومخزون الخزانات لكشف أي تسرب.", en: "The system reconciles pump readings, cash/POS sales, and tank inventory to detect any leakage." } },
        { icon: FiClock, title: { ar: "تسليم ورديات سريع", en: "Fast Shift Handover" }, description: { ar: "إجراءات تقفيل الشفت وتسليم النقدية تستغرق دقائق بدلاً من ساعات من الحساب اليدوي.", en: "Shift closing and cash handover procedures take minutes instead of hours of manual calculation." } },
        { icon: FiUsers, title: { ar: "إدارة البقالة في نفس النظام", en: "Grocery in the Same System" }, description: { ar: "لا داعي لنظامين؛ سنمار يدير نقاط بيع التموينات والوقود في منصة موحدة.", en: "No need for two systems; Sanmar manages grocery POS and fuel on a unified platform." } },
        { icon: FiTrendingUp, title: { ar: "راحة بال مع ZATCA", en: "Peace of Mind with ZATCA" }, description: { ar: "النظام يسهل إصدار الفواتير المجمعة للشركات والتي كانت تمثل كابوساً محاسبياً للمحطات.", en: "The system facilitates issuing grouped corporate invoices, which used to be an accounting nightmare for stations." } }
      ]
    },
    cta: productCTAs["fuel-station"]
  }
};
