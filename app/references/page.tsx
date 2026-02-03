import { ReferencesView } from "@/components/references/ReferencesView";
import fs from 'fs';
import path from 'path';

const CATEGORIES = {
    all: {
        id: 'all',
        label: { en: 'All Certificates', ar: 'جميع الشهادات' },
        keywords: []
    },
    registration: {
        id: 'registration',
        label: { en: 'Registration & Company Docs', ar: 'شهادات التسجيل' },
        keywords: ['تسجيل', 'نقابة', 'غرفة تجارة', '1981', 'تأسيس']
    },
    projects: {
        id: 'projects',
        label: { en: 'Project Experience', ar: 'شهادات الخبرة والمشاريع' },
        keywords: ['سد', 'الديسي', 'الموجب', 'الوالة', 'جسر', 'تحويلة', 'طريق', 'راس النقب', 'وادي اليتم', 'العقبة', 'المحطة الحرارية', 'الفوسفات', 'ابنية']
    },
    appreciation: {
        id: 'appreciation',
        label: { en: 'Appreciation & Recommendations', ar: 'كتب شكر وتوصية' },
        keywords: ['توصية', 'شكر', 'تقدير', 'كتاب']
    }
};

function normalizeText(text: string): string {
    return text
        .toLowerCase()
        .replace(/[أإآ]/g, 'ا') // Normalize Alif
        .replace(/ة/g, 'ه')    // Normalize Taa Marbuta
        .replace(/ى/g, 'ي');   // Normalize Alif Maqsura
}

function getCertificates() {
    try {
        const dir = path.join(process.cwd(), 'public', 'images', 'certificates');
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir)
                .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

            // Deduplicate: If "X.jpg" and "Copy of X.jpg" exist, prefer X.jpg.
            const uniqueFiles = new Map<string, string>();

            files.forEach(file => {
                const cleanName = file.replace(/^Copy of\s+/i, '').trim();
                console.log(cleanName);
                if (!uniqueFiles.has(cleanName)) {
                    uniqueFiles.set(cleanName, file);
                } else {
                    const current = uniqueFiles.get(cleanName)!;
                    if (current.startsWith('Copy of') && !file.startsWith('Copy of')) {
                        uniqueFiles.set(cleanName, file);
                    }
                }
            });

            const allCerts = Array.from(uniqueFiles.values()).map(file => ({
                path: `/images/certificates/${file}`,
                name: file
            }));

            // Categorize
            const categorized = {
                all: allCerts.map(c => c.path),
                registration: [] as string[],
                projects: [] as string[],
                appreciation: [] as string[],
                other: [] as string[]
            };

            allCerts.forEach(cert => {
                const normalizedName = normalizeText(cert.name);

                let matched = false;
                if (CATEGORIES.registration.keywords.some(k => normalizedName.includes(normalizeText(k)))) {
                    categorized.registration.push(cert.path);
                    matched = true;
                }

                if (CATEGORIES.projects.keywords.some(k => normalizedName.includes(normalizeText(k)))) {
                    categorized.projects.push(cert.path);
                    matched = true;
                }

                if (CATEGORIES.appreciation.keywords.some(k => normalizedName.includes(normalizeText(k)))) {
                    categorized.appreciation.push(cert.path);
                    matched = true;
                }

                if (!matched) {
                    categorized.other.push(cert.path);
                }
            });

            // Merge 'other' into 'projects' (or keep separate if desired, but here we fallback to projects)
            categorized.projects.push(...categorized.other);

            return categorized;
        }
    } catch (e) {
        console.error("Error loading certificates:", e);
    }
    return { all: [], registration: [], projects: [], appreciation: [], other: [] };
}

export default function ReferencesPage() {
    const certificates = getCertificates();

    const categoriesList = [
        { ...CATEGORIES.all, images: certificates.all },
        { ...CATEGORIES.registration, images: certificates.registration },
        { ...CATEGORIES.projects, images: certificates.projects },
        { ...CATEGORIES.appreciation, images: certificates.appreciation }
    ].filter(cat => cat.images.length > 0);

    return (
        <ReferencesView categoriesList={categoriesList} />
    );
}
