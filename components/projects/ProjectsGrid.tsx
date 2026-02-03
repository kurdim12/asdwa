"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
    name: string; // Used for ID/Slug (English)
    title: { ar: string; en: string } | string;
    description: { ar: string; en: string } | string;
    folder?: string;
    featured?: boolean;
    categoryIds: string[];
    categoryNames: string[];
    thumbnail?: string;
}

interface Category {
    id: string;
    name: { ar: string; en: string };
}

interface ProjectsGridProps {
    categories: Category[];
    allProjects: Project[];
}

import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";

export function ProjectsGrid({ categories, allProjects }: ProjectsGridProps) {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const { language, t } = useLanguage();
    const { filterAll, title, description, viewProject } = COMPANY_DATA.homeComponents.portfolio;

    const [filter, setFilter] = useState("all");

    // If URL param exists, sync it
    if (categoryParam && filter === "all" && categoryParam !== filter) {
        setFilter(categoryParam);
    }

    const filteredProjects = filter === "all"
        ? allProjects
        : allProjects.filter(p => p.categoryIds.includes(filter));

    return (
        <Section className="min-h-screen pt-32">
            {/* Header */}
            <div className="mb-16">
                <Reveal>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                        {t(title)}
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-white/60 max-w-2xl text-lg">
                        {t(description)}
                    </p>
                </Reveal>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-16 border-b border-white/10 pb-8">
                <button
                    onClick={() => setFilter("all")}
                    className={`text-sm font-heading font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all ${filter === "all" ? "bg-primary text-background" : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                >
                    {t(filterAll)}
                </button>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={`text-sm font-heading font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all ${filter === cat.id ? "bg-primary text-background" : "bg-white/5 text-white hover:bg-white/10"
                            }`}
                    >
                        {t(cat.name)}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href={`/projects/${encodeURIComponent(project.name)}`} className="group block bg-neutral-900 border border-white/5 hover:border-primary/50 transition-colors h-full flex flex-col">
                                {/* Image Placeholder */}
                                <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 scale-100 group-hover:scale-110"
                                        style={{
                                            backgroundImage: project.thumbnail
                                                ? `url('${project.thumbnail}')`
                                                : `url('/patterns/mesh.png'), linear-gradient(45deg, #222, #111)`
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                        <span className="bg-primary text-background px-4 py-2 font-bold font-heading uppercase text-sm flex items-center gap-2">
                                            {t(viewProject)} <ArrowUpRight size={16} />
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs text-primary font-heading uppercase tracking-widest mb-2">
                                        {project.categoryNames && project.categoryNames.filter(Boolean).join(', ')}
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {t(project.title)}
                                    </h3>
                                    <p className="text-white/50 text-sm line-clamp-3 mb-4 flex-grow">
                                        {t(project.description)}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </Section>
    )
}
