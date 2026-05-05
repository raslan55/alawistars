import React, { useState, useEffect, lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import products from "../data/products";
const CTA = lazy(() => import("./CTA"));
const ProductsSlider = lazy(() => import("./ProductsSlider"));
const FAQ = lazy(() => import("./FAQ"));
const Testimonial = lazy(() => import("./Testimonial"));
import { getRoutePath } from "../utils/i18nHelpers";
import ProductService from "../services/productService";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FiCheckCircle, FiXCircle, FiClock, FiShield, FiTrendingUp, FiZap, FiCheck, FiLayers, FiBriefcase, FiShoppingBag, FiTruck, FiHome, FiUsers, FiClipboard, FiCreditCard } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetails() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [apiProduct, setApiProduct] = useState(null);
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";
  const isRTL = i18n.dir() === "rtl";
  const MotionLink = motion(Link);
  
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await ProductService.fetchBySlug(slug);
      if (data) setApiProduct(data);
    };
    load();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 450);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const staticProduct = products.find((p) => p.slug === slug);
  const product = apiProduct ? {
    ...apiProduct,
    title: lang === 'ar' ? apiProduct.title_ar : apiProduct.title_en,
    description: lang === 'ar' ? apiProduct.description_ar : apiProduct.description_en,
    features: (apiProduct.features || []).map(f => lang === 'ar' ? f.ar : f.en),
    isApi: true
  } : staticProduct;

  // Structured bilingual content for accounting-inventory product (ar + en)
  const accountingInventorySections = {
    hero: {
      ar: {
        eyebrow: "برنامج سنمار للمحاسبة والمخزون — متكامل بالكامل مع ZATCA",
        title: "برنامج المحاسبة والمخزون — سنمار ERP",
        desc: "برنامج سنمار للمحاسبة والمخزون يجمع المحاسبة والمخزون في منصة واحدة — كل حركة بضاعة تُولّد قيداً محاسبياً تلقائياً، بلا تدخل بشري وبلا أخطاء.",
        ctas: [
          { label: "احجز عرضك التجريبي ←", href: "/contact" },
          { label: "شاهد الديمو", href: "/demo" }
        ]
      },
      en: {
        eyebrow: "Sinmar Accounting & Inventory — ZATCA-ready",
        title: "Accounting & Inventory — Sinmar ERP",
        desc: "Sinmar combines accounting and inventory in a single platform — every stock movement generates an accounting entry automatically, without manual intervention or errors.",
        ctas: [
          { label: "Book a demo ←", href: "/contact" },
          { label: "Watch demo", href: "/demo" }
        ]
      }
    },
    problems: {
      ar: [
        "اختلاف بين أرقام المخزون والحسابات",
        "إدخال يدوي مزدوج في نظامين منفصلين",
        "تقارير مالية لا تعكس الواقع الفعلي للمخزون",
        "عدم توافق مع الفاتورة الإلكترونية ZATCA"
      ],
      en: [
        "Mismatch between stock and accounting figures",
        "Duplicate manual entry in two separate systems",
        "Financial reports that don't reflect actual stock",
        "Non-compliance with electronic invoicing (ZATCA)"
      ]
    },
    definition: {
      ar: {
        title: "ما هو برنامج المحاسبة والمخزون المتكامل؟",
        paragraphs: [
          "نظام واحد يربط البرنامج بالمخزون — تلقائياً.",
          "برنامج المحاسبة والمخزون المتكامل هو نظام ERP يجمع وحدتي المحاسبة وإدارة المخازن في منصة واحدة، بحيث تنعكس كل حركة مخزنية — استلام، بيع، إرجاع، تحويل — فوراً كقيود محاسبية دقيقة في السجلات المالية.",
          "بدلاً من العمل في نظامين منفصلين مع الحاجة لمطابقة يدوية دورية وإدخال مزدوج للبيانات، برنامج سنمار يجعل كل عملية مخزنية تُكمل عملية محاسبية تلقائياً — مما يُلغي الأخطاء ويوفّر الوقت ويعطيك صورة مالية دقيقة في الوقت الفعلي."
        ]
      },
      en: {
        title: "What is an integrated accounting & inventory system?",
        paragraphs: [
          "One system that connects inventory and accounting — automatically.",
          "An integrated accounting & inventory ERP links the accounting and inventory modules in a single platform so every stock movement — receive, sale, return, transfer — is immediately reflected as precise accounting entries in the financial records.",
          "Instead of working in two separate systems requiring regular manual reconciliation and duplicate data entry, Sinmar ensures each inventory action completes the accounting entry automatically — eliminating errors, saving time, and providing an accurate real-time financial picture."
        ]
      }
    },
    why: {
      ar: {
        title: "لماذا تحتاج شركتك إلى نظام محاسبة ومخزون متكامل؟",
        cards: [
          { title: "أخطاء مالية بسبب عدم الربط", text: "قيمة المخزون في دفاتر المحاسبة لا تتطابق مع ما هو فعلياً في المستودع." },
          { title: "هدر الوقت في الإدخال المزدوج", text: "إدخال نفس البيانات في نظامين يستهلك ساعات يومياً من وقت فريقك." },
          { title: "تأخير في التقارير المالية", text: "إعداد قوائم الدخل والميزانية يستغرق أياماً بسبب الحاجة لمطابقة البيانات." },
          { title: "صعوبة اتخاذ القرار", text: "القرارات المالية والمخزنية تحتاج بيانات موحدة — مستحيل اتخاذ قرار صائب بنظامين يتعارضان." }
        ]
      },
      en: {
        title: "Why does your company need an integrated accounting & inventory system?",
        cards: [
          { title: "Financial errors due to lack of linkage", text: "Inventory value in the accounting books does not match the actual warehouse stock." },
          { title: "Wasted time on duplicate entry", text: "Entering the same data in two systems consumes hours of your team's time daily." },
          { title: "Delayed financial reports", text: "Preparing income statements and balance sheets takes days due to reconciliation." },
          { title: "Difficulty making decisions", text: "Financial and inventory decisions require unified data — you can't make sound choices with conflicting systems." }
        ]
      }
    },
    features: {
      ar: [
        "ربط المخزون بالمحاسبة — قيود آلية فورية",
        "تقارير مالية لحظية تعكس المخزون الحقيقي",
        "إدارة الفواتير المتكاملة مع المخزون (متوافقة مع ZATCA)",
        "تتبع المخزون وتكاليفه مع تنبيهات نقطة إعادة الطلب",
        "إدارة مستودعات متعددة مع مراكز تكلفة"
      ],
      en: [
        "Inventory-accounting linkage — instant automated entries",
        "Real-time financial reports reflecting true stock",
        "Integrated invoicing with inventory (ZATCA-compliant)",
        "Stock costing and reorder point alerts",
        "Multi-warehouse management with cost centers"
      ]
    },
    profit: {
      ar: {
        title: "كيف يساعدك البرنامج في زيادة الأرباح وتقليل الخسائر؟",
        bullets: [
          "تقليل الهدر والمخزون الراكد",
          "تحسين قرارات الشراء",
          "تقليل الأخطاء المحاسبية بفضل القيود الآلية",
          "تحسين إدارة التدفق النقدي"
        ]
      },
      en: {
        title: "How the system helps increase profit and reduce losses",
        bullets: [
          "Reduce waste and dead stock",
          "Improve purchasing decisions",
          "Reduce accounting errors through automated entries",
          "Improve cash flow management"
        ]
      }
    },
    useCases: {
      ar: [
        "المحلات التجارية ونقاط البيع",
        "المصانع والإنتاج",
        "الشركات متعددة الفروع",
        "التجارة الإلكترونية وتكامل المتاجر",
        "التوزيع واللوجستيك",
        "شركات المقاولات وإدارة مواقع المشاريع"
      ],
      en: [
        "Retail stores and POS",
        "Manufacturing and production",
        "Multi-branch companies",
        "E-commerce and store integrations",
        "Distribution and logistics",
        "Contracting companies and site management"
      ]
    },
    integrations: {
      ar: [
        "تكامل مع نظام ERP المتكامل",
        "ربط بنقاط البيع (POS)",
        "تكامل مع الموارد البشرية والرواتب",
        "ربط المشتريات والموردين",
        "التوافق مع نظام المحاسبة العام وZATCA"
      ],
      en: [
        "Integration with ERP core modules",
        "POS connectivity",
        "HR and payroll integration",
        "Purchasing and supplier linkage",
        "Compliance with general accounting and ZATCA"
      ]
    },
    whyUs: {
      ar: [
        "الربط الفعلي — ليس مجرد واجهة",
        "مصمم للسوق السعودي: عربي، ريال، ZATCA، VAT",
        "قابل للتوسع مع نمو عملك",
        "تنفيذ سريع ونتائج فورية",
        "دعم فني عربي متخصص 24/7"
      ],
      en: [
        "Real integration — not just a UI",
        "Built for the Saudi market: Arabic, SAR, ZATCA, VAT",
        "Scales as your business grows",
        "Fast implementation and immediate results",
        "24/7 specialized Arabic technical support"
      ]
    },
    faq: {
      ar: [
        { q: "ما هو أفضل برنامج المحاسبة والمخزون في السعودية؟", a: "أفضل حل هو النظام الموحد الذي يربط المخزون بالمحاسبة ويدعم ZATCA. سنمار مصمم للسوق المحلي." },
        { q: "هل النظام مناسب للشركات الصغيرة والمتوسطة؟", a: "نعم، يمكن بدء باقة أساسية والتوسع لاحقاً مع نمو العمل." },
        { q: "هل النظام سحابي وقابل للوصول من أي مكان؟", a: "نعم، النظام سحابي مع تحديثات ونسخ احتياطية وأمان مشدّد." }
      ],
      en: [
        { q: "What is the best accounting & inventory software in Saudi Arabia?", a: "The best solution is a unified system that links inventory with accounting and supports ZATCA. Sinmar is designed for the local market." },
        { q: "Is the system suitable for SMEs?", a: "Yes — you can start with a basic package and expand as your business grows." },
        { q: "Is the system cloud-based and accessible from anywhere?", a: "Yes — it is cloud-hosted with backups, updates, and strong security." }
      ]
    },
    cta: {
      ar: { title: "ابدأ اليوم مع برنامج سنمار للمحاسبة والمخزون", desc: "انضم لأكثر من 600 شركة ومتجر ومصنع يثقون في البرنامج لإدارة أعمالهم بدقة وكفاءة." },
      en: { title: "Start today with Sinmar Accounting & Inventory", desc: "Join over 600 companies, stores, and factories that trust the system to manage their business accurately and efficiently." }
    }
  };

  // Overrides for existing sections when viewing accounting-inventory
  const heroEyebrow = slug === 'accounting-inventory'
    ? accountingInventorySections.hero[lang].eyebrow
    : t([`Prod_Ultimate_Solution_${slug}`, "Prod_Ultimate_Solution"]);

  const heroSubtitle = slug === 'accounting-inventory'
    ? accountingInventorySections.hero[lang].title
    : t([`Prod_Efficient_Management_${slug}`, "Prod_Efficient_Management"]);

  const heroDesc = slug === 'accounting-inventory'
    ? accountingInventorySections.hero[lang].desc
    : (product.isApi ? product.description : t([`Prod_Description_${slug}`, product.description]));

  const whatTitle = slug === 'accounting-inventory'
    ? accountingInventorySections.definition[lang].title
    : t([`Prod_What_Title_${slug}`, "Prod_What_Title_Default"]);

  const whatP1 = slug === 'accounting-inventory'
    ? accountingInventorySections.definition[lang].paragraphs[0]
    : t([`Prod_What_P1_${slug}`, "Prod_What_P1_Default"]);

  const whatP2 = slug === 'accounting-inventory'
    ? accountingInventorySections.definition[lang].paragraphs[1]
    : t([`Prod_What_P2_${slug}`, "Prod_What_P2_Default"]);

  const featuresList = slug === 'accounting-inventory' ? accountingInventorySections.features[lang] : product.features;

  if (!product) {
    return (
      <div className="text-center py-16 text-red-600 text-xl font-semibold">
        {t("Product_Not_Found")}
      </div>
    );
  }

  // --- Dynamic Content Logic ---
  
  // 1. FAQs Mapping
  const getProductFaqs = () => {
    const generalFaqs = [
      { question: t("faq.q1"), answer: t("faq.a1") },
      { question: t("faq.q4"), answer: t("faq.a4") },
      { question: t("faq.q9"), answer: t("faq.a9") },
      { question: t("faq.q11"), answer: t("faq.a11") },
    ];

    const specificFaqs = [];
    // Map each product slug to its relevant FAQ key from translation.js
    const faqMap = {
      "accounting-inventory": "inv_acc",
      "general-accounting": "general_acc",
      "inventory-system": "inventory",
      "medical-system": "med",
      "hr-system": "hr",
      "real-estate-management": "real_estate",
      "furnished-apartments": "furnished", 
      "car-maintenance": "car_maintenance",
      "car-sales": "car_sale",
      "telecom-system": "telecom",
      "services-system": "serv_system",
      "fuel-station": "fuel"
    };

    const faqPrefix = faqMap[slug];
    if (faqPrefix) {
      specificFaqs.push({ 
        question: t(`faq.${faqPrefix}_q1`), 
        answer: t(`faq.${faqPrefix}_a1`) 
      });
    }

    return [...specificFaqs, ...generalFaqs];
  };

  // 2. Testimonials Filtering logic
  const getProductTestimonials = () => {
    // Mapping product categories to relevant testimonial IDs
    const testimonialFilterMap = {
      "medical-system": ["testimonial_2", "testimonial_3", "testimonial_4"],
      "car-maintenance": ["testimonial_9", "testimonial_0"],
      "car-sales": ["testimonial_9", "testimonial_0"],
      "accounting-inventory": ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
      "general-accounting": ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
      "inventory-system": ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
      "hr-system": ["testimonial_5", "testimonial_10", "testimonial_11"],
      "real-estate-management": ["testimonial_11", "testimonial_7"],
      "furnished-apartments": ["testimonial_11", "testimonial_7"],
    };

    return testimonialFilterMap[slug] || null;
  };

  const showProductSections = true;

  const productUseCases = [
    {
      icon: FiShoppingBag,
      title: {
        ar: "حلول لإدارة المبيعات اليومية والعملاء",
        en: "Daily sales and customer management",
      },
      description: {
        ar: "تابع المبيعات والفواتير والمستحقات تلقائياً في نظام واحد مع تقارير دقيقة.",
        en: "Track sales, invoices, and receivables automatically in one system with accurate reporting.",
      },
    },
    {
      icon: FiTruck,
      title: {
        ar: "إدارة المخزون والشحن بذكاء",
        en: "Smart inventory and shipping management",
      },
      description: {
        ar: "راقب المخزون، حركات البضائع، وعمليات الشحن داخل مركز التحكم بسهولة.",
        en: "Monitor stock, goods movement, and shipping operations from a single control center.",
      },
    },
    {
      icon: FiHome,
      title: {
        ar: "حلول للأعمال التجارية والخدمية",
        en: "Solutions for retail and service businesses",
      },
      description: {
        ar: "ادعم بيع المنتجات أو الخدمات مع أدوات دفع وفواتير متوافقة تماماً.",
        en: "Support product or service sales with fully compliant invoicing and payment tools.",
      },
    },
    {
      icon: FiBriefcase,
      title: {
        ar: "التوسع والإدارة المؤسسية",
        en: "Growth and enterprise management",
      },
      description: {
        ar: "ربط الفروع ونقاط البيع مع تقارير موحدة ومراكز تكلفة متعددة.",
        en: "Link branches and POS with unified reporting and multiple cost centers.",
      },
    },
    {
      icon: FiUsers,
      title: {
        ar: "إدارة الموارد البشرية بسهولة",
        en: "Easy HR and payroll management",
      },
      description: {
        ar: "تابع الحضور والرواتب والإجازات مع توثيق شامل ومرتب.",
        en: "Track attendance, payroll, and leave with complete, organized documentation.",
      },
    },
    {
      icon: FiClipboard,
      title: {
        ar: "مراقبة المشاريع والخدمات",
        en: "Project and service tracking",
      },
      description: {
        ar: "تابع تنفيذ المهام والمشاريع والخدمات بدقة مع تقارير الأداء الفورية.",
        en: "Track projects and services accurately with instant performance reports.",
      },
    },
  ];

  const productErpModules = [
    {
      icon: FiLayers,
      title: {
        ar: "النظام المركزي المتكامل",
        en: "Integrated central system",
      },
      description: {
        ar: "ربط الحسابات، المبيعات، المخزون، والموارد البشرية في منصة واحدة.",
        en: "Connect accounting, sales, inventory, and HR in one platform.",
      },
    },
    {
      icon: FiHome,
      title: {
        ar: "إدارة المخازن والمستودعات",
        en: "Warehouse and stock management",
      },
      description: {
        ar: "تحكم في حركة البضائع والمخزون بصورة دقيقة وموثوقة.",
        en: "Control goods movement and stock with precise, reliable tracking.",
      },
    },
    {
      icon: FiUsers,
      title: {
        ar: "إدارة الموظفين والرواتب",
        en: "Employee and payroll management",
      },
      description: {
        ar: "نظام متكامل لحضور الموظفين، الرواتب، والبيانات الشخصية.",
        en: "A complete system for attendance, payroll, and employee records.",
      },
    },
    {
      icon: FiShoppingBag,
      title: {
        ar: "المشتريات والفواتير",
        en: "Purchasing and invoicing",
      },
      description: {
        ar: "متابعة أوامر الشراء وفواتير الموردين ودورة الشراء كاملة.",
        en: "Track purchase orders, supplier invoices, and the full procurement cycle.",
      },
    },
    {
      icon: FiCreditCard,
      title: {
        ar: "إدارة العملاء والمدفوعات",
        en: "Customer and payment management",
      },
      description: {
        ar: "ربط بيانات العملاء مع المدفوعات والتقارير بسهولة.",
        en: "Link customer data with payments and reporting easily.",
      },
    },
    {
      icon: FiTruck,
      title: {
        ar: "نقاط البيع والأتمتة",
        en: "POS and automation",
      },
      description: {
        ar: "تحويل عمليات البيع اليومية إلى نظام سريع وموثوق دون تدخل يدوي.",
        en: "Turn daily sales into a fast, reliable system without manual intervention.",
      },
    },
  ];

  const productStrengths = [
    {
      icon: FiShield,
      title: {
        ar: "متوافق مع السوق السعودي",
        en: "Saudi market compliant",
      },
    },
    {
      icon: FiClock,
      title: {
        ar: "تنفيذ سريع ومباشر",
        en: "Fast, direct implementation",
      },
    },
    {
      icon: FiUsers,
      title: {
        ar: "دعم فني محلي متميز",
        en: "Outstanding local support",
      },
    },
    {
      icon: FiTrendingUp,
      title: {
        ar: "ينمو مع عملك",
        en: "Grows with your business",
      },
    },
    {
      icon: FiBriefcase,
      title: {
        ar: "خطط مرنة تناسب الجميع",
        en: "Flexible plans for every need",
      },
    },
  ];

  const contactPath = `/${getRoutePath("contact", t)}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative pb-24 md:pb-0 font-['Cairo',sans-serif]">
      {/* 1. Hero Section (Outcome-Driven) */}
      <section className="bg-gradient-to-b from-[#eef5ffb0] to-[#eef5ffb0] pt-12 pb-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12 overflow-hidden border-b border-gray-100">
        <div className="md:w-1/2 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.span variants={itemVariants} className="inline-block py-1.5 px-4 rounded-full bg-[#F0F4FA] text-text-color font-bold text-sm mb-6 border border-[#1b6ba9]/20 shadow-sm w-fit">
              {heroEyebrow}
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-Main-color leading-tight mb-6">
              {product.isApi ? product.title : t(product.title)} <br/> 
              <span className="text-text-color text-2xl sm:text-3xl mt-2 block font-bold leading-relaxed">{heroSubtitle}</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-slate-600 mb-8 leading-relaxed max-w-xl text-lg lg:text-xl font-medium">
              {heroDesc}
            </motion.p>

            {/* Benefit Bullets */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 mb-10 w-fit">
              {[
                { key: "Prod_Save_Time", icon: <FiClock className="text-Main-color w-6 h-6 shrink-0" /> },
                { key: "Prod_Reduce_Errors", icon: <FiTrendingUp className="text-Main-color w-6 h-6 shrink-0" /> },
                { key: "Prod_Zatca_Compliant", icon: <FiShield className="text-Main-color w-6 h-6 shrink-0" /> },
              ].map((bullet, idx) => {
                const label = t([`${bullet.key}_${slug}`, bullet.key]);
                if (!label) return null;
                return (
                  <div key={idx} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-50">
                    {bullet.icon}
                    <span className="text-slate-700 font-bold">{label}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col flex-wrap sm:flex-row items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/966504139243?text=%D8%B4%D9%83%D8%B1%D8%A7%20%D9%84%D9%83%20%D8%B9%D9%84%D9%89%20%D8%AA%D9%88%D8%A7%D8%B5%D9%84%D9%83%20%D9%85%D8%B9%20%D8%A8%D8%B1%D8%A7%D9%85%D8%AC%20%D8%B3%D9%86%D9%85%D8%A7%D8%B1%20%D9%85%D9%86%20%D9%81%D8%B6%D9%84%D9%83%20%D8%A3%D8%AE%D8%A8%D8%B1%D9%86%D8%A7%20%D9%83%D9%8A%D9%81%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D8%A7%20%D8%AE%D8%AF%D9%85%D8%AA%D9%83%20%D9%88%D8%B3%D9%86%D9%82%D9%88%D9%85%20%D8%A8%D8%A7%D9%84%D8%B1%D8%AF%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%81%D9%8A%20%D8%A7%D9%82%D8%B1%D8%A8%20%D9%88%D9%82%D8%AA%20%D9%85%D8%AA%D8%A7%D8%AD%0A%0AThank%20you%20for%20contacting%20Sinmar%20Programs.%20Please%20tell%20us%20how%20we%20can%20serve%20you%20and%20we%20will%20respond%20to%20you%20as%20soon%20as%20possible."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl shadow-xl shadow-Main-color/20 text-white font-extrabold text-lg bg-Main-color hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {t("Prod_Book_Demo")} 
                {isRTL ? <FaArrowLeftLong /> : <FaArrowRightLong />}
              </motion.a>
              
              <MotionLink
                whileHover={{ scale: 1.05 }}
                to={contactPath}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border-[2.5px] border-slate-200 text-slate-700 font-extrabold text-lg bg-white hover:border-Main-color hover:text-Main-color transition-all flex items-center justify-center gap-2"
              >
                {t("Prod_See_Action")}
              </MotionLink>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1b6ba9]/20 rounded-full blur-3xl opacity-50 z-0 scale-90"></div>
          <img
            src={product.image || "/placeholder.png"}
            alt={product.isApi ? product.title : t(product.title)}
            width="1200"
            height="675"
            decoding="async"
            className="relative z-10 w-full h-auto floating-anim"
          />
        </motion.div>
      </section>

      

      {/* 1.5. What is this Product Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#1b6ba9]/5 rounded-full blur-[100px] -z-10 translate-y-[-50%]"></div>
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(27,107,169,0.06)] border border-slate-100 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Abstract Graphic Side */}
          <div className="w-full lg:w-1/3 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1b6ba9]/20 to-blue-300/20 rounded-full blur-3xl scale-150"></div>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-[2.5rem] bg-gradient-to-tr from-[#1b6ba9] to-[#154080] flex items-center justify-center shadow-2xl shadow-[#1b6ba9]/30 border-4 border-white overflow-hidden group"
            >
              {/* Inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_50%)]"></div>
              {/* Icon */}
              <FiLayers className="w-24 h-24 text-white opacity-90 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
            
            {/* Floating Badges */}
            <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 lg:-right-10 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-20"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="font-bold text-slate-700 text-sm whitespace-nowrap">{t([`Prod_ZATCA_Badge_${slug}`, "Prod_ZATCA_Badge"])}</span>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F4FA] text-Main-color font-bold text-sm mb-6 border border-[#1b6ba9]/10">
              <span className="w-2 h-2 rounded-full bg-Main-color animate-pulse"></span>
              {whatTitle}
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 mb-8 leading-tight">
              {whatTitle}
            </h2>
            
            <div className="relative">
              <div className={`md:${isRTL ? "pr-8" : "pl-8"} space-y-6`}>
                <p className="text-slate-700 text-xl md:text-2xl font-bold leading-relaxed">
                  {whatP1}
                </p>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                  {whatP2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showProductSections && (
        <>
          {/* 2. Product use cases */}
          <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-[#F0F4FA] px-5 py-2 mb-4 text-sm font-bold text-Main-color border border-[#1b6ba9]/20 shadow-sm">
                {t("Prod_Use_Cases_Tag")}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-Main-color mb-4">{t("Prod_Use_Cases_Title")}</h2>
              <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">{t("Prod_Use_Cases_Desc")}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productUseCases.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(27,107,169,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(27,107,169,0.16)]">
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br from-[#1b6ba9]/20 to-transparent opacity-80 blur-2xl"></div>
                    <div className="relative z-10 flex items-center justify-between gap-4 mb-8">
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-3xl bg-gradient-to-br from-[#1b6ba9] to-[#4f84ff] text-white shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[13px] tracking-[0.24em] uppercase text-[#1b6ba9] font-semibold">{t("Prod_Use_Cases_Card")}</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{item.title[lang]}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description[lang]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3. ERP integration modules */}
          <section className="py-24 px-4 bg-[#F8FAFF]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-14">
                <div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 mb-4 text-sm font-bold text-[#1b6ba9] border border-[#1b6ba9]/20 shadow-sm">
                  {t("Prod_Module_Tag")}
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-Main-color mb-4">{t("Prod_ERP_Title")}</h2>
                <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">{t("Prod_ERP_Desc")}</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {productErpModules.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,107,169,0.15)]">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#1b6ba9] to-[#154080] text-white shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title[lang]}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description[lang]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 4. Why this product works best */}
          <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-[#F0F4FA] px-5 py-2 mb-4 text-sm font-bold text-Main-color border border-[#1b6ba9]/20 shadow-sm">
                {t("Prod_Why_Tag")}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-Main-color mb-4">{t("Prod_Why_Title")}</h2>
              <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">{t("Prod_Why_Desc")}</p>
            </div>

            <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] items-start">
              <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-[#f7f7ff] p-10 shadow-[0_20px_60px_rgba(27,107,169,0.08)]">
                <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[#1b6ba9]/10 blur-3xl"></div>
                <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-[#4f84ff]/10 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-Main-color text-white text-2xl mb-6">★</div>
                  <p className="text-slate-900 text-2xl md:text-3xl font-bold leading-tight mb-4">{t("Prod_Why_Quote")}</p>
                  <p className="text-slate-600 text-lg leading-relaxed">{t("Prod_Why_Quote_Text")}</p>
                </div>
              </div>

              <div className="grid gap-5">
                {productStrengths.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-5 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_15px_35px_rgba(27,107,169,0.08)] transition-all duration-300 hover:-translate-y-1">
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#1b6ba9] to-[#4f84ff] text-white text-2xl shadow-lg">
                        <Icon />
                      </div>
                      <p className="text-slate-900 font-semibold leading-tight">{item.title[lang]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 2. Before vs After (Problem & Solution) */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-Main-color mb-4">{t("Prod_Why_System")}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">{t("Prod_Diff_Desc")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Before */}
          <div className="bg-red-50 border-2 border-red-100 p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden transition-all hover:bg-red-100/50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-[4rem] -z-10 opacity-70"></div>
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-red-200">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shadow-sm shrink-0">
                <FiXCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-red-900">{t("Prod_Trad_Methods")}</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Prod_Trad_Err1",
                "Prod_Trad_Err2",
                "Prod_Trad_Err3",
                "Prod_Trad_Err4"
              ].map((item, i) => {
                const label = t([`${item}_${slug}`, item]);
                if (!label) return null;
                return (
                  <li key={i} className="flex flex-start gap-4 text-slate-700 items-center">
                    <FiXCircle className="text-red-500 w-5 h-5 shrink-0" />
                    <span className="font-semibold text-[15px]">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* After */}
          <div className="bg-[#F0F4FA] border-2 border-[#1b6ba9]/20 p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden shadow-xl shadow-[#1b6ba9]/10 transition-all hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#1b6ba9]/5 rounded-br-[4rem] -z-10 opacity-70"></div>
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#1b6ba9]/10">
              <div className="w-14 h-14 bg-Main-color rounded-2xl flex items-center justify-center text-emerald-400 shadow-md shrink-0">
                <FiCheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-Main-color">{t("Prod_With_System")} {product.isApi ? product.title : t(product.title)}</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Prod_Auto_Adv1",
                "Prod_Auto_Adv2",
                "Prod_Auto_Adv3",
                "Prod_Auto_Adv4"
              ].map((item, i) => {
                const label = t([`${item}_${slug}`, item]);
                if (!label) return null;
                return (
                  <li key={i} className="flex flex-start gap-4 text-slate-800 items-center">
                    <FiCheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                    <span className="font-bold text-[15px]">{label}</span>
                  </li>
                );
              })}
            </ul>
            
            <div className="mt-8 pt-8 text-center sm:text-start">
              <Link to={contactPath} className="inline-flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto px-6 py-3 rounded-xl bg-white border-2 border-Main-color text-Main-color font-bold hover:bg-Main-color hover:text-white transition-colors duration-300 shadow-sm">
                {t("Prod_Start_Org")} {isRTL ? <FaArrowLeftLong /> : <FaArrowRightLong/>}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section (Benefit-driven) */}
      {product.features && product.features.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-[#F0F4FA]/50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-Main-color mb-4">{t("Prod_Feat_Success")}</h2>
              <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">{t("Prod_Feat_Desc")}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuresList && featuresList.map((feature, idx) => {
                // Alternating high-converting micro-benefits natively injected 
                const microBenefitKey = `Prod_Micro_Benefit_${idx % 6}`;
                const shortResult = t(microBenefitKey);
                
                return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:border-[#1b6ba9]/20 transition-all duration-300 group flex flex-col items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F4FA] text-Main-color flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-Main-color group-hover:text-white transition-all shadow-sm">
                    <FiZap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">{product.isApi ? feature : t(feature)}</h3>
                  <p className="text-Main-color mt-auto font-bold text-[15px] flex items-center gap-2 bg-[#F0F4FA] px-3 py-1.5 rounded-lg border border-slate-100">
                    <FiCheck className="w-4 h-4 text-emerald-500"/> {shortResult}
                  </p>
                </motion.div>
              )})}
            </div>
            
            <div className="mt-16 text-center flex justify-center">
              <Link to={contactPath} className="inline-flex items-center gap-3 justify-center px-10 py-5 rounded-full shadow-[0_10px_40px_rgba(27,107,169,0.3)] text-white font-bold text-lg bg-gradient-to-r from-[#1b6ba9] to-[#154080] hover:opacity-90 transition-all hover:scale-105">
                   {t("Prod_See_30mins")} <FiClock className="w-5 h-5"/>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. Social Proof Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 border-b border-slate-100">
        <div className="bg-[#1E5FAD] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 relative z-10 leading-tight">{t("Prod_Partners_Trust")}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10 divide-x divide-x-reverse divide-white/20 md:divide-x-0">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-3">+500</span>
              <span className="font-bold text-blue-100 text-lg">{t("Prod_Clients")}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-emerald-400 mb-3">99%</span>
              <span className="font-bold text-blue-100 text-lg">{t("Prod_Success_Rate")}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-emerald-400 mb-3">100%</span>
              <span className="font-bold text-blue-100 text-lg max-w-[120px] mx-auto leading-tight">
                {t([`Prod_ZATCA_Badge_${slug}`, "Prod_ZATCA_Badge"])}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-3">+10</span>
              <span className="font-bold text-blue-100 text-lg">{t("Prod_Years_Exp")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials (Dynamic) */}
      <Suspense fallback={<div className="py-10 text-center">{t("loading") || 'Loading...'}</div>}>
        <Testimonial 
          customTitle={t("testi_prod_title")} 
          customSubtitle={t("testi_prod_subtitle")}
          filterIds={getProductTestimonials()}
        />
      </Suspense>

      {/* 6. FAQ (Dynamic) */}
      <Suspense fallback={<div className="py-10 text-center">{t("loading") || 'Loading...'}</div>}>
        <FAQ 
          customFaqs={getProductFaqs()} 
          customTitle={t("faq_prod_title")}
        />
      </Suspense>

      {/* 7. Pricing / Offer Urgency */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-tr from-white to-slate-50 border-4 border-white rounded-[3rem] p-8 md:p-16 text-center shadow-[0_20px_60px_rgba(27,107,169,0.15)] relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#1b6ba9]/10 rounded-full blur-3xl"></div>
          
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-green-50 border border-green-100 text-Main-color font-bold rounded-full text-sm mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            {t("Prod_Limited_Time")}
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-Main-color mb-6 leading-snug">{t("Prod_Ready_Next")}</h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">{t("Prod_Free_Consult")}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
            <Link to={contactPath} className="w-full sm:w-auto px-10 py-5 rounded-2xl shadow-xl shadow-Main-color/20 text-white font-extrabold text-lg bg-Main-color hover:opacity-90 hover:-translate-y-1 transition-all">
              {t("Prod_Start_Now")}
            </Link>
            <Link to={contactPath} className="w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-Main-color text-Main-color font-extrabold text-lg bg-white hover:bg-slate-50 hover:-translate-y-1 transition-all">
              {t("Prod_Request_Quote")}
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Slider Add-on */}
      <Suspense fallback={<div className="py-10 text-center">{t("loading") || 'Loading...'}</div>}>
        <ProductsSlider />
      </Suspense>
      <Suspense fallback={<div className="py-6 text-center">{t("loading") || 'Loading...'}</div>}>
        <CTA 
          heading={t("Tech_Started")} 
          subheading={t("Tech_CTA_Text")} 
          btnText={t("Start_btn")}
        />
      </Suspense>

     
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] p-4 sm:px-8`}
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="hidden sm:block">
                <div className="font-extrabold text-Main-color text-xl">{product.isApi ? product.title : t(product.title)}</div>
                <div className="text-slate-500 font-semibold text-sm mt-1">{t("Prod_Start_Auto_Conf")}</div>
              </div>
              <a href="https://wa.me/966504139243?text=%D8%B4%D9%83%D8%B1%D8%A7%20%D9%84%D9%83%20%D8%B9%D9%84%D9%89%20%D8%AA%D9%88%D8%A7%D8%B5%D9%84%D9%83%20%D9%85%D8%B9%20%D8%A8%D8%B1%D8%A7%D9%85%D8%AC%20%D8%B3%D9%86%D9%85%D8%A7%D8%B1%20%D9%85%D9%86%20%D9%81%D8%B6%D9%84%D9%83%20%D8%A3%D8%AE%D8%A8%D8%B1%D9%86%D8%A7%20%D9%83%D9%8A%D9%81%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D8%A7%20%D8%AE%D8%AF%D9%85%D8%AA%D9%83%20%D9%88%D8%B3%D9%86%D9%82%D9%88%D9%85%20%D8%A8%D8%A7%D9%84%D8%B1%D8%AF%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%81%D9%8A%20%D8%A7%D9%82%D8%B1%D8%A8%20%D9%88%D9%82%D8%AA%20%D9%85%D8%AA%D8%A7%D8%AD%0A%0AThank%20you%20for%20contacting%20Sinmar%20Programs.%20Please%20tell%20us%20how%20we%20can%20serve%20you%20and%20we%20will%20respond%20to%20you%20as%20soon%20as%20possible." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 text-center px-10 py-4 rounded-xl shadow-lg shadow-[#1b6ba9]/30 text-white font-bold text-[17px] bg-gradient-to-r from-[#1b6ba9] to-[#154080] hover:opacity-90 hover:scale-[1.02] transition-all">
                {t("Prod_Book_Offer_Now")}
                <FiZap className="w-5 h-5"/>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
