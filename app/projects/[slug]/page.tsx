import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Camera } from "lucide-react";


interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return COMPANY_DATA.projects.all.map((project) => ({
        slug: project.title.en, // Assuming slug is the English title
    }));
}

export default async function ProjectDetail(props: PageProps) {
    const params = await props.params;
    const projectName = decodeURIComponent(params.slug);

    // Find project in the flat list
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
    const categoryName = categoryObj ? categoryObj.name.en : "Portfolio";

    // Dynamic Image Loading
    let images: string[] = [];
    // If project has explicit images array (from extraction)
    if (project.images && project.images.length > 0) {
        images = project.images.map(img => `/images/projects/${img}`);
    } else {
        // Fallback or legacy folder check if needed
        images.push('/images/logo.jpg');
    }

    // Ensure we have at least one image
    if (images.length === 0) {
        images.push('/images/logo.jpg');
    }
    const heroImage = images[0];

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            {/* Hero Banner */}
            <div className="h-[60vh] relative overflow-hidden bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />

                {/* Hero Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 grayscale"
                    style={{ backgroundImage: `url('${heroImage}')` }}
                />

                <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-20">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} /> Back to Projects
                    </Link>

                    <Reveal>
                        <div className="text-primary font-heading uppercase tracking-widest text-sm mb-4">
                            {categoryName}
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white max-w-4xl">
                            {project.title.en}
                        </h1>
                    </Reveal>
                </div>
            </div>

            <Section className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Project Info Sidebar */}
                    <div className="space-y-8">
                        <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                            <h3 className="text-xl font-heading font-bold text-white mb-6 border-b border-white/10 pb-4">Project Details</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-white/70">
                                    <MapPin className="text-primary" size={20} />
                                    <span>Jordan</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <Calendar className="text-primary" size={20} />
                                    <span>Completed</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <Camera className="text-primary" size={20} />
                                    <span>{images.length} Photos Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <Reveal>
                            <h2 className="text-3xl font-heading font-bold text-white mb-6">About the Project</h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-8">
                                {project.description.en}
                                <br /><br />
                                This project represents a significant milestone in Jordan&apos;s infrastructure development.
                                Utilizing state-of-the-art engineering techniques and adhering to the highest safety and quality standards (ISO 9001),
                                {COMPANY_DATA.company.name.en} successfully delivered this project on time and within budget.
                            </p>
                        </Reveal>

                        {/* Gallery */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-heading font-bold text-white mb-8">Project Gallery</h3>
                            {images.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {images.map((img, i) => (
                                        <div key={i} className="aspect-video bg-neutral-800 rounded-lg border border-white/5 hover:border-primary/50 transition-colors relative group overflow-hidden">
                                            <img
                                                src={img}
                                                alt={`${project.title.en} photo ${i + 1}`}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-white/40 italic p-8 border border-white/10 rounded-lg text-center">
                                    No photos available for this project.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
