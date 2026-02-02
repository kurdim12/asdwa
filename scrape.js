const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.mkurdi.com';
const OUTPUT_FILE = 'scraped_data.json';
const IMAGE_DIR = 'public/images/legacy';

if (!fs.existsSync(IMAGE_DIR)) {
    fs.mkdirSync(IMAGE_DIR, { recursive: true });
}

async function scrape() {
    try {
        console.log(`Fetching ${BASE_URL}...`);
        // Mimic a browser to avoid 406
        const { data } = await axios.get(BASE_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5'
            }
        });

        const $ = cheerio.load(data);
        const result = {
            text: [],
            images: [],
            meta: {}
        };

        // Title & Meta
        result.meta.title = $('title').text();
        result.meta.description = $('meta[name="description"]').attr('content');

        // Text Content (paragraphs)
        $('p').each((i, el) => {
            const text = $(el).text().trim();
            if (text.length > 20) result.text.push(text);
        });

        // Specific Sections (headings)
        $('h1, h2, h3').each((i, el) => {
            const text = $(el).text().trim();
            if (text) result.text.push(`[HEADING] ${text}`);
        });


        // Images
        $('img').each((i, el) => {
            let src = $(el).attr('src');
            if (src) {
                if (!src.startsWith('http')) {
                    src = src.startsWith('/') ? BASE_URL + src : BASE_URL + '/' + src;
                }
                result.images.push(src);
            }
        });

        console.log(`Found ${result.text.length} text blocks and ${result.images.length} images.`);
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));

        // Download Images
        console.log('Downloading images...');
        for (let i = 0; i < result.images.length; i++) {
            const imgUrl = result.images[i];
            if (i > 10) break; // Limit for now
            try {
                const imgName = `legacy_${i}_${path.basename(imgUrl).split('?')[0]}`;
                const imgPath = path.join(IMAGE_DIR, imgName);

                const response = await axios({
                    url: imgUrl,
                    method: 'GET',
                    responseType: 'stream'
                });

                const writer = fs.createWriteStream(imgPath);
                response.data.pipe(writer);

                await new Promise((resolve, reject) => {
                    writer.on('finish', resolve);
                    writer.on('error', reject);
                });
                console.log(`Saved ${imgName}`);
            } catch (e) {
                console.error(`Failed to download ${imgUrl}: ${e.message}`);
            }
        }

        console.log('Done.');

    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) console.error('Status:', error.response.status);
    }
}

scrape();
