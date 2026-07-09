const fs = require('fs');
let c = fs.readFileSync('src/data/productSections.js', 'utf8');

// 1. Remove my injected closing brace and generalAccountingSections
const part1 = `"btn2": { "ar": "اطلب عرض لبرنامج الموارد", "en": "Request HR Software Demo" } } }; \n\nexport const generalAccountingSections = {\n// ── 4. Features Section — الميزات ──`;
const rep1 = `"btn2": { "ar": "اطلب عرض لبرنامج الموارد", "en": "Request HR Software Demo" } },`;
if (c.includes(part1)) {
    c = c.replace(part1, rep1);
    console.log('Replaced part 1');
} else {
    console.log('Part 1 not found');
}

// 2. Remove the pasted features block and the trailing car-sales broken part
const featuresStartIdx = c.indexOf('    features: {');
const telecomIdx = c.indexOf('  "telecom-system": {');

if (featuresStartIdx !== -1 && telecomIdx !== -1) {
    const toReplace2 = c.substring(featuresStartIdx, telecomIdx);
    c = c.replace(toReplace2, '');
    console.log('Replaced part 2');
} else {
    console.log('Part 2 not found');
}

fs.writeFileSync('src/data/productSections.js', c);
console.log('Done');
