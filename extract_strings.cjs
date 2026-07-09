const fs = require('fs');
const content = fs.readFileSync('src/data/productSections.js', 'utf8');

// Match ar: "...", ar: `...`, en: "...", en: `...`
const arRegex = /ar:\s*`([^`]+)`|ar:\s*"([^"]+)"/g;
const enRegex = /en:\s*`([^`]+)`|en:\s*"([^"]+)"/g;

let arMatches = [];
let match;
while ((match = arRegex.exec(content)) !== null) {
    arMatches.push(match[1] || match[2]);
}

let enMatches = [];
while ((match = enRegex.exec(content)) !== null) {
    enMatches.push(match[1] || match[2]);
}

fs.writeFileSync('ar_strings.txt', arMatches.join('\n'));
fs.writeFileSync('en_strings.txt', enMatches.join('\n'));
console.log('Extracted ' + arMatches.length + ' Arabic strings and ' + enMatches.length + ' English strings.');
