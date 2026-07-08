import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { COMPANY_DATA } from "@/lib/data";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";


export const dynamic = "force-static";

export default function ProjectsPage() {
    const { all, categories } = COMPANY_DATA.projects;

    // Enrich projects with thumbnails utilizing server-side fs
    // Enrich projects
    const allProjects = all.map(p => {
        let thumbnail = '/images/logo.jpg';

        if (p.images && p.images.length > 0) {
            thumbnail = `/images/projects/${p.images[0]}`;
        }

        // Map category IDs to names
        const categoryNames = p.categories.map(catId => {
            const cat = categories.find(c => c.id === String(catId));
            return cat ? cat.name.en : '';
        }).filter(n => n !== '');

        return {
            name: p.title.en, // Use English title for routing/keys
            title: p.title,   // Pass full object
            description: p.description, // Pass full object
            folder: '', // Legacy support
            categoryIds: p.categories.map(id => String(id)),
            categoryNames,
            thumbnail
        };
    });

    return (
        <main className="bg-paper min-h-screen">
            <Navbar />
            <PageHeader
                index="P / 01"
                kicker={{ en: "Our Portfolio", ar: "محفظة أعمالنا" }}
                title={{ en: "Projects", ar: "المشاريع" }}
                subtitle={{
                    en: "A collection of infrastructure landmarks shaping the future of Jordan.",
                    ar: "مجموعة من المعالم الهندسية التي تُشكل مستقبل الأردن.",
                }}
            />
            <ProjectsGrid categories={categories} allProjects={allProjects} />
            <Footer />
        </main>
    );
}
