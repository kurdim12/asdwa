const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.mkurdi.com';
const OUTPUT_FILE = 'scraped_data_v2.json';
const IMAGE_DIR = 'public/images/legacy';

if (!fs.existsSync(IMAGE_DIR)) {
    fs.mkdirSync(IMAGE_DIR, { recursive: true });
}

async function scrape() {
    try {
        const result = {
            text: [],
            images: [],
            meta: {}
        };

        const pages = ['/', '/about', '/projects', '/services', '/contact', '/en', '/en/about', '/en/projects'];

        for (const page of pages) {
            const url = BASE_URL + page;
            console.log(`Fetching ${url}...`);
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                        'Accept-Language': 'en-US,en;q=0.5'
                    }
                });

                const $ = cheerio.load(data);

                // Meta from Homepage
                if (page === '/' || page === '/en') {
                    if (!result.meta.title) result.meta.title = $('title').text();
                    if (!result.meta.description) result.meta.description = $('meta[name="description"]').attr('content');
                }

                // Text
                $('p, h1, h2, h3, h4, h5, h6, li, span').each((i, el) => {
                    const text = $(el).text().trim();
                    if (text.length > 30 && !result.text.includes(text)) {
                        result.text.push(text);
                    }
                });

                // Images
                $('img').each((i, el) => {
                    let src = $(el).attr('src');
                    if (src) {
                        if (!src.startsWith('http')) {
                            src = src.startsWith('/') ? BASE_URL + src : BASE_URL + '/' + src;
                        }
                        // Filter out small icons if possible, or duplicates
                        if (!result.images.includes(src)) result.images.push(src);
                    }
                });
            } catch (pError) {
                // console.log(`Failed to fetch ${url}: ${pError.message}`);
                // Silent fail for 404s
            }
        }

        console.log(`Found ${result.text.length} text blocks and ${result.images.length} images.`);
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));

        // Download Images
        console.log('Downloading images...');
        let downloadedCount = 0;
        for (let i = 0; i < result.images.length; i++) {
            const imgUrl = result.images[i];
            if (downloadedCount > 30) break; // Increased limit

            // Skip known small icons or generic assets if possible
            if (imgUrl.includes('icon') || imgUrl.includes('logo')) continue;

            try {
                const cleanName = path.basename(imgUrl).split('?')[0].replace(/[^a-zA-Z0-9.]/g, '_');
                const imgName = `legacy_${i}_${cleanName}`;
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
                downloadedCount++;
            } catch (e) {
                //  console.error(`Failed to download ${imgUrl}: ${e.message}`);
            }
        }

        console.log('Done.');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

scrape();
