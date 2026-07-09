const fs = require('fs');

const CTAs = {
  'accounting-inventory': {
    tag: { ar: 'انطلق الآن بحسابات ومخزون دقيق', en: 'Start now with accurate accounting & inventory' },
    title: { ar: 'هل أنت مستعد لربط مخزونك بحساباتك أوتوماتيكياً؟', en: 'Ready to link your inventory with accounting automatically?' },
    desc: { ar: 'احصل على استشارة مالية وتقنية مجانية لمعرفة كيف يمكن لسنمار ERP توفير وقتك وأموالك.', en: 'Get a free financial and technical consultation to see how Sinmar ERP can save your time and money.' },
    btn1: { ar: 'ابدأ النظام المزدوج الآن', en: 'Start the Dual System Now' },
    btn2: { ar: 'اطلب تسعيرة خاصة', en: 'Request Special Pricing' }
  },
  'general-accounting': {
    tag: { ar: 'نظام مالي موثوق', en: 'Reliable Financial System' },
    title: { ar: 'هل حان الوقت لتوديع الأخطاء المحاسبية في شركتك؟', en: 'Is it time to say goodbye to accounting errors in your company?' },
    desc: { ar: 'تواصل معنا لتأسيس نظام محاسبي متوافق مع هيئة الزكاة والضريبة والجمارك بكل سهولة.', en: 'Contact us to establish a ZATCA-compliant accounting system with ease.' },
    btn1: { ar: 'ابدأ دورتك المالية اليوم', en: 'Start Your Financial Cycle Today' },
    btn2: { ar: 'تواصل مع خبير مالي', en: 'Contact a Financial Expert' }
  },
  'inventory-system': {
    tag: { ar: 'تأسيس مخزون سريع وذكي', en: 'Fast & Smart Inventory Setup' },
    title: { ar: 'هل حان الوقت لتوديع الفوضى في إدارة مستودعاتك؟', en: 'Is it time to say goodbye to chaos in your warehouse management?' },
    desc: { ar: 'تواصل معنا للحصول على نظام متكامل يدير باركود منتجاتك، وينبهك بالنواقص، ويراقب تحركات بضاعتك لحظة بلحظة.', en: 'Contact us to get an integrated system that manages your barcodes, alerts you of shortages, and monitors goods movement in real-time.' },
    btn1: { ar: 'رتب مستودعاتك الآن', en: 'Organize Your Warehouses Now' },
    btn2: { ar: 'اطلب عرض لإدارة المخزون', en: 'Request Inventory Demo' }
  },
  'medical-system': {
    tag: { ar: 'حلول طبية متطورة', en: 'Advanced Medical Solutions' },
    title: { ar: 'جاهز لرقمنة وتطوير إدارة مركزك الطبي أو صيدليتك؟', en: 'Ready to digitize and improve your medical center or pharmacy management?' },
    desc: { ar: 'اطلب عرضاً مخصصاً يشمل إدارة تواريخ الصلاحية، الوصفات الإلكترونية وملفات المرضى.', en: 'Request a customized demo including expiry date management, e-prescriptions, and patient records.' },
    btn1: { ar: 'احصل على نسختك الطبية', en: 'Get Your Medical Version' },
    btn2: { ar: 'اطلب عرض للمراكز الطبية', en: 'Request Demo for Clinics' }
  },
  'real-estate-management': {
    tag: { ar: 'إدارة أملاك احترافية', en: 'Professional Property Management' },
    title: { ar: 'هل ترغب في أتمتة عقود الإيجار وتحصيل أملاكك بالكامل؟', en: 'Do you want to fully automate lease contracts and property collections?' },
    desc: { ar: 'تخلص من عناء المتابعة الورقية وابدأ رحلة إدارة عقاراتك بضغطة زر وبدون تأخير في التحصيل.', en: 'Eliminate manual tracking and start managing your real estate with a click, ensuring zero collection delays.' },
    btn1: { ar: 'ابدأ نظام العقارات الآن', en: 'Start Real Estate System Now' },
    btn2: { ar: 'اطلب عرض لشركة عقارية', en: 'Request Real Estate Demo' }
  },
  'furnished-apartments': {
    tag: { ar: 'حجوزات وإدارة سلسة', en: 'Smooth Bookings & Management' },
    title: { ar: 'مستعد لرفع نسبة إشغال شققك المفروشة بأقل مجهود؟', en: 'Ready to increase your furnished apartments occupancy with minimal effort?' },
    desc: { ar: 'احصل على لوحة تحكم متكاملة للحجوزات، النظافة، والفوترة الإلكترونية لتسهيل راحة نزلائك.', en: 'Get a comprehensive dashboard for bookings, housekeeping, and e-invoicing to ensure guest comfort.' },
    btn1: { ar: 'أتمتة الحجوزات اليوم', en: 'Automate Bookings Today' },
    btn2: { ar: 'تواصل مع المبيعات', en: 'Contact Sales' }
  },
  'car-maintenance': {
    tag: { ar: 'تنظيم الورش ومراكز الصيانة', en: 'Workshops & Maintenance Organization' },
    title: { ar: 'هل تبحث عن السيطرة الكاملة على كروت العمل وقطع الغيار؟', en: 'Looking for full control over job cards and spare parts?' },
    desc: { ar: 'حوّل مركز صيانة السيارات الخاص بك إلى بيئة عمل منظمة تزيد من أرباحك وتُرضي عملاءك.', en: 'Transform your car maintenance center into an organized workspace that boosts profits and satisfies customers.' },
    btn1: { ar: 'شغّل نظام ورشتك', en: 'Run Your Workshop System' },
    btn2: { ar: 'اطلب تسعيرة المركز', en: 'Request Center Quote' }
  },
  'car-sales': {
    tag: { ar: 'إدارة معارض السيارات', en: 'Car Showrooms Management' },
    title: { ar: 'هل تريد إدارة مبايعات وأقساط سياراتك بدقة متناهية؟', en: 'Do you want to manage car sales and installments with pinpoint accuracy?' },
    desc: { ar: 'استخدم نظاماً ذكياً يتتبع أرقام الهياكل، يحسب الأرباح الفعلية، وينظم الأقساط بشكل آلي.', en: 'Use a smart system that tracks VINs, calculates actual profits, and organizes installments automatically.' },
    btn1: { ar: 'ابدأ بيع السيارات بذكاء', en: 'Start Selling Cars Smartly' },
    btn2: { ar: 'طلب عرض للمعارض', en: 'Request Showroom Demo' }
  },
  'pos-system': {
    tag: { ar: 'كاشير سريع وموثوق', en: 'Fast & Reliable POS' },
    title: { ar: 'هل أنت جاهز لتسريع خدمة عملائك في نقاط البيع؟', en: 'Are you ready to speed up customer service at your POS?' },
    desc: { ar: 'تواصل معنا للحصول على كاشير متصل بالمخزون ويدعم الباركود لزيادة كفاءة متجرك.', en: 'Contact us to get a POS connected to inventory and supporting barcode for maximum store efficiency.' },
    btn1: { ar: 'احصل على نظام الكاشير', en: 'Get the POS System' },
    btn2: { ar: 'طلب عرض للمحلات', en: 'Request Retail Demo' }
  },
  'contracting-system': {
    tag: { ar: 'إدارة مشاريع المقاولات', en: 'Contracting Projects Management' },
    title: { ar: 'كيف تتحكم في تكاليف مشاريعك والمقاولين بالباطن؟', en: 'How to control your project costs and subcontractors?' },
    desc: { ar: 'ابدأ الآن في متابعة العهد، المواد، والمستخلصات لكل مشروع بشكل منفصل ومفصل.', en: 'Start tracking petty cash, materials, and progress billings for each project separately and in detail.' },
    btn1: { ar: 'نظّم مشاريعك الإنشائية', en: 'Organize Construction Projects' },
    btn2: { ar: 'تواصل مع خبير المقاولات', en: 'Contact Contracting Expert' }
  },
  'gym-management': {
    tag: { ar: 'إدارة الأندية الرياضية', en: 'Gym Management' },
    title: { ar: 'هل تطمح لمضاعفة اشتراكات ناديك الرياضي وتسهيل الدخول؟', en: 'Aiming to double your gym subscriptions and streamline entry?' },
    desc: { ar: 'احصل على نظام يربط البوابات الإلكترونية بإدارة المشتركين ويحسب العمولات والبرامج الرياضية.', en: 'Get a system that links smart gates with member management and calculates commissions and fitness programs.' },
    btn1: { ar: 'ارفع كفاءة ناديك اليوم', en: 'Upgrade Your Gym Efficiency' },
    btn2: { ar: 'طلب تسعيرة الأندية', en: 'Request Gym Pricing' }
  },
  'hr-system': {
    tag: { ar: 'إدارة الموارد البشرية والرواتب', en: 'HR & Payroll Management' },
    title: { ar: 'هل تود أتمتة رواتب وحضور وانصراف موظفيك بالكامل؟', en: 'Would you like to fully automate your employees payroll and attendance?' },
    desc: { ar: 'وفر وقتك وتجنب الأخطاء البشرية باستخدام نظام سنمار لإدارة شؤون الموظفين المعتمد.', en: 'Save time and avoid human errors by using Sinmar’s certified HR management system.' },
    btn1: { ar: 'أتمتة إدارة الموظفين', en: 'Automate HR Management' },
    btn2: { ar: 'اطلب عرض لبرنامج الموارد', en: 'Request HR Software Demo' }
  }
};

let content = fs.readFileSync('src/data/productSections.js', 'utf8');

// 1. Remove cta from defaultSections
content = content.replace(/\s+cta: \{[\s\S]*?\},\n\s+faqs: \[/, '\n  faqs: [');

// 2. Add productCTAs declaration
let ctaCode = 'export const productCTAs = ' + JSON.stringify(CTAs, null, 2) + ';\n';
if (!content.includes('export const productCTAs')) {
  content = content.replace('export const productSectionsData = {', ctaCode + '\nexport const productSectionsData = {');
}

// 3. Inject into each product
for (const key of Object.keys(CTAs)) {
  if (key === 'inventory-system') {
     content = content.replace('"inventory-system": inventorySystemSections,', '"inventory-system": { ...inventorySystemSections, cta: productCTAs["' + key + '"] },');
  } else {
     // match generateCustomSection(defaultSections, { ... }] ... })
     const regex = new RegExp('"' + key + '": generateCustomSection\\(defaultSections, \\{([\\s\\S]*?)\\]\\n    \\]\\n  \\}\\)', 'g');
     content = content.replace(regex, (match) => {
         // if already appended, skip
         if (match.includes(', productCTAs')) return match;
         return match + ', productCTAs["' + key + '"]';
     });
     
     // hr-system might not have trailing comma or something, but the above regex doesn't match the closing if it doesn't end in `  })` with a comma
     // let's do a more robust replace:
     const regex2 = new RegExp('"' + key + '": generateCustomSection\\(defaultSections, \\{([\\s\\S]*?)\\]\\n  \\}\\)', 'g');
     content = content.replace(regex2, (match) => {
         if (match.includes(', productCTAs')) return match;
         return match + ', productCTAs["' + key + '"]';
     });
  }
}

// Ensure HR System is caught since it's the last element
content = content.replace(
  '      { title: { ar: "نظام تقييم الأداء", en: "Performance Evaluation" }, desc: { ar: "تقييم دوري للموظفين لربط الأداء بالمكافآت والترقيات.", en: "Periodic employee evaluation to link performance with rewards." } }\n    ]\n  })',
  '      { title: { ar: "نظام تقييم الأداء", en: "Performance Evaluation" }, desc: { ar: "تقييم دوري للموظفين لربط الأداء بالمكافآت والترقيات.", en: "Periodic employee evaluation to link performance with rewards." } }\n    ]\n  }, productCTAs["hr-system"])'
);

fs.writeFileSync('src/data/productSections.js', content);
console.log('Done');
