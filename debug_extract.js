const fs = require('fs');
const path = require('path');

const sqlPath = String.raw`c:\Users\User\Desktop\all the projects photo for marwan alkurdi - Copy\Catalog and web site\website_extracted\mkurdi.com_06-10-2021\Database\site.sql`;

try {
    console.log('Reading file from:', sqlPath);
    const sqlContent = fs.readFileSync(sqlPath, 'utf8');
    console.log('File read successfully. Length:', sqlContent.length);
    console.log('First 200 chars:', sqlContent.substring(0, 200));

    // Test regex
    const tableRegex = /INSERT INTO `(\w+)`/g;
    let match;
    let count = 0;
    while ((match = tableRegex.exec(sqlContent)) !== null) {
        console.log('Found table:', match[1], 'at index', match.index);
        count++;
        if (count > 5) break;
    }

    if (count === 0) {
        console.log('Regex found NO matches.');
    }

} catch (e) {
    console.error('Error:', e);
}
