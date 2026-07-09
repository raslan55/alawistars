const fs = require('fs');
let content = fs.readFileSync('src/data/productSections.js', 'utf8');

// inventorySystemSections replacements
content = content.replace(
`  // ── 8. Use Cases — حالات الاستخدام ──
  useCases: [
    {`,
`  // ── 8. Use Cases — حالات الاستخدام ──
  useCases: {
    tag: { ar: "حالات الاستخدام", en: "Use Cases" },
    title: { ar: "إدارة المخزون عبر مختلف القطاعات", en: "Inventory management across sectors" },
    desc: { ar: "اكتشف كيف يتكيف نظام سنمار لإدارة المخزون مع احتياجات مختلف الأنشطة التجارية ليوفر تحكماً دقيقاً.", en: "Discover how Sinmar inventory system adapts to the needs of different business activities." },
    cardTag: { ar: "قطاع", en: "Sector" },
    list: [
    {`
);

content = content.replace(
`  // ── 9. ERP Modules — وحدات ERP المتكاملة ──
  erpModules: [
    {`,
`  // ── 9. ERP Modules — وحدات ERP المتكاملة ──
  erpModules: {
    tag: { ar: "وحدات ERP", en: "ERP Modules" },
    title: { ar: "برنامج المخزون جزء من منظومة ERP متكاملة", en: "Inventory is part of an integrated ERP system" },
    desc: { ar: "برنامج إدارة المخزون من سنمار ليس منعزلاً؛ بل هو قلب نابض يتصل لحظياً بجميع وحدات الأعمال الأخرى.", en: "Sinmar Inventory is not isolated; it is a beating heart that connects instantly to all other business units." },
    list: [
    {`
);

content = content.replace(
`  // ── 10. Strengths — نقاط القوة ──
  strengths: [
    {`,
`  // ── 10. Strengths — نقاط القوة ──
  strengths: {
    tag: { ar: "لماذا سنمار؟", en: "Why Sinmar?" },
    title: { ar: "لماذا برنامج سنمار هو الخيار الأمثل لإدارة مخزونك؟", en: "Why is Sinmar the perfect choice for your inventory?" },
    quote: { ar: "“التحكم في المخزون هو التحكم في أرباحك.”", en: "\\"Controlling inventory is controlling your profits.\\"" },
    quoteText: { ar: "مع سنمار، لن تخسر مبيعات بسبب نفاد الكمية ولن تُجمد أموالك في بضائع راكدة.", en: "With Sinmar, you won't lose sales due to stockouts and won't freeze your money in dead stock." },
    list: [
    {`
);

// End of inventorySystemSections strengths
content = content.replace(
`    },
  ]
};

export const inventorySystemSections = {`,
`    }
    ]
  }
};

export const inventorySystemSections = {`
);

// wait, the error is above inventorySystemSections or inside?
// Oh! inventorySystemSections was duplicated twice?
// Let's check `inventorySystemSections` in the file.
fs.writeFileSync('src/data/productSections.js', content);
