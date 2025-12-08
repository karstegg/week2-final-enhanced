
import fs from 'fs';
import path from 'path';

const dataDir = 'data-extract/temp_production';
const targetEquipment = ['DT'];

if (!fs.existsSync(dataDir)) {
    console.error(`Directory not found: ${dataDir}`);
    process.exit(1);
}

const files = fs.readdirSync(dataDir).filter(f => f.includes('gloria') && f.endsWith('.json'));
console.log(`Found ${files.length} files.`);

const findings = {};

files.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
    try {
        const data = JSON.parse(content);
        const date = data.date || file.replace('production_report_', '').replace('.json', '');

        const searchInObject = (obj, context = '') => {
            if (!obj) return;
            if (typeof obj === 'string') {
                targetEquipment.forEach(eq => {
                    if (obj.includes(eq)) {
                        if (!findings[eq]) findings[eq] = [];
                        findings[eq].push({ date, context, text: obj });
                    }
                });
            } else if (typeof obj === 'object') {
                Object.keys(obj).forEach(key => {
                    searchInObject(obj[key], context ? `${context} > ${key}` : key);
                });
            }
        };

        searchInObject(data);

    } catch (e) {
        console.error(`Error parsing ${file}:`, e);
    }
});

console.log(JSON.stringify(findings, null, 2));
