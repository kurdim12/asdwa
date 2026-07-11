import { COMPANY_DATA } from "@/lib/data";
import Link from "next/link";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps) {
    const params = await props.params;
    const projectName = decodeURIComponent(params.slug);
    const project = COMPANY_DATA.projects.all.find(p => p.title.en === projectName);
    if (!project) return { title: "Project not found" };
    return {
        title: project.title.en,
        description: (project.description.en || "").replace(/\\r\\n|\s+/g, " ").slice(0, 155),
    };
}

export async function generateStaticParams() {
    return COMPANY_DATA.projects.all.map((project) => ({
        slug: project.title.en, // Assuming slug is the English title
    }));
}

export default async function ProjectDetail(props: PageProps) {
    const params = await props.params;
    const projectName = decodeURIComponent(params.slug);

    // Find project in the flat list by English title (slug)
    const project = COMPANY_DATA.projects.all.find(p => p.title.en === projectName);

    if (!project) {
        return (
            <main className="bg-background min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
                    <Link href="/projects" className="text-primary hover:underline">Return to Portfolio</Link>
                </div>
            </main>
        )
    }

    // Resolve category name (taking the first one for now)
    const categoryId = project.categories[0];
    const categoryObj = COMPANY_DATA.projects.categories.find(c => c.id === String(categoryId));
    const categoryName = categoryObj ? categoryObj.name.en : "Portfolio"; // This might need strictly a string or object depending on View. View accepts string.
    // Wait, ProjectDetailView expects `categoryName: string`. But we can pass {ar, en} if we change View?
    // Let's pass the object via "any" or just assume ProjectDetailView will be updated to handle it.
    // Actually, I made ProjectDetailView accept `categoryName: string`.
    // I should probably update ProjectDetailView to accept {ar, en} too.
    // For now, let's keep it simple or fix it.
    // Let's look at ProjectDetailView again. It renders `{t(categoryName)}`. So it EXPECTS a localizable object or string.
    // So passing `categoryObj.name` (which is {ar, en}) is better.

    // Dynamic Image Loading
    let images: string[] = [];
    if (project.images && project.images.length > 0) {
        images = project.images.map(img => `/images/projects/${img}`);
    } else {
        images.push('/images/logo.jpg');
    }

    if (images.length === 0) {
        images.push('/images/logo.jpg');
    }

    // Related projects: same primary category, excluding this one
    const related = COMPANY_DATA.projects.all
        .filter(p => p.title.en !== project.title.en && p.categories.some(c => project.categories.includes(c)))
        .slice(0, 3)
        .map(p => ({
            name: p.title.en,
            title: p.title,
            thumbnail: p.images && p.images.length > 0 ? `/images/projects/${p.images[0]}` : "/images/logo.jpg",
        }));

    return (
        <ProjectDetailView
            project={project}
            categoryName={categoryObj ? categoryObj.name : { en: "Portfolio", ar: "معرض الأعمال" }}
            images={images}
            related={related}
        />
    );
}
