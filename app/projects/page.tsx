import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
            name: p.title.en, // Use English title for now, or adapt for bilingual
            description: p.description.en,
            folder: '', // Legacy support
            categoryIds: p.categories.map(id => String(id)),
            categoryNames,
            thumbnail
        };
    });

    return (
        <main className="bg-background min-h-screen">
            <Navbar />
            <ProjectsGrid categories={categories} allProjects={allProjects} />
            <Footer />
        </main>
    );
}
