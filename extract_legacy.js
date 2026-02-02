const fs = require('fs');
const path = require('path');

const sqlPath = String.raw`c:\Users\User\Desktop\all the projects photo for marwan alkurdi - Copy\Catalog and web site\website_extracted\mkurdi.com_06-10-2021\Database\site.sql`;
const outputPath = './legacy_export.json';

function unwrap(val) {
    val = (val || '').trim();
    if (val.startsWith("'") && val.endsWith("'")) {
        val = val.slice(1, -1);
        val = val.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    return val;
}

function parseSqlValues(sql) {
    const values = [];
    // Find the start of VALUES
    // We assume the SQL statement passed is "INSERT INTO ... VALUES ... ;"
    // Use upper case match to be safe
    const valuesIndex = sql.toUpperCase().indexOf('VALUES');
    if (valuesIndex === -1) return values;

    const valPart = sql.substring(valuesIndex + 6).trim();

    // State machine to parse tuples
    let inTuple = false;
    let inQuote = false;
    let currentTuple = [];
    let currentVal = '';

    for (let i = 0; i < valPart.length; i++) {
        const char = valPart[i];

        // Handle escaped quotes inside strings
        if (char === "'" && valPart[i - 1] !== '\\') {
            inQuote = !inQuote;
        }

        if (!inQuote) {
            if (char === '(' && !inTuple) {
                inTuple = true;
                currentTuple = [];
                currentVal = '';
                continue;
            }
            if (char === ')' && inTuple) {
                inTuple = false;
                currentTuple.push(unwrap(currentVal));
                values.push(currentTuple);
                currentVal = '';
                continue;
            }
            if (char === ',' && inTuple) {
                currentTuple.push(unwrap(currentVal));
                currentVal = '';
                continue;
            }
            // Ignore commas/semicolons outside tuples (between rows)
            if (!inTuple) continue;
        }

        if (inTuple) {
            currentVal += char;
        }
    }
    return values;
}

const sqlContent = fs.readFileSync(sqlPath, 'utf8');

const tables = {
    projects: [],
    categories: [],
    pages: [],
    photos_projects: [],
    news: []
};

// Regex matches "INSERT INTO `table` ... ;" across newlines
// [\s\S] matches any char including newlines
// +? non-greedy
const tableRegex = /INSERT INTO `(\w+)`[\s\S]+?;/g;
let match;
let foundTables = [];

while ((match = tableRegex.exec(sqlContent)) !== null) {
    const tableName = match[1];
    const insertStatement = match[0];
    foundTables.push(tableName);

    if (tables[tableName]) {
        const rows = parseSqlValues(insertStatement);
        tables[tableName].push(...rows);
    }
}

console.log('Tables found in SQL:', [...new Set(foundTables)]);

// Map the data

// Categories (cat_id, cat_name, cat_name_en, ...)
// 0: id, 1: ar, 2: en
const categories = tables.categories.map(row => ({
    id: row[0],
    ar: row[1],
    en: row[2]
}));

// Projects (project_id, name, name_en, cat1, cat2, cat3, cat4, desc, desc_en, views, order)
// 0, 1, 2, 3, 4, 5, 6, 7, 8
const projects = tables.projects.map(row => ({
    id: row[0],
    title: { ar: row[1], en: row[2] },
    categories: [row[3], row[4], row[5], row[6]].filter(id => id != 0 && id != '0'),
    description: { ar: row[7], en: row[8] },
    images: []
}));

// Photos (photo_id, project_id, path)
// 0, 1, 2
tables.photos_projects.forEach(row => {
    const projectId = row[1];
    const imagePath = row[2];
    const project = projects.find(p => p.id == projectId);
    if (project) {
        project.images.push(imagePath);
    }
});

// Pages (id, title, content, status, views, date, time, lang)
// 0, 1, 2, 3, 4, 5, 6, 7
const pages = tables.pages.map(row => ({
    id: row[0],
    title: row[1],
    content: row[2],
    lang: row[7]
}));

const output = {
    categories,
    projects,
    pages
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log('Legacy data extracted to', outputPath);
console.log(`Found ${projects.length} projects.`);
console.log(`Found ${pages.length} pages.`);
