"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";
import { cn, clean } from "@/lib/utils";

interface Project {
    name: string;
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

export function ProjectsGrid({ categories, allProjects }: ProjectsGridProps) {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const { language, t, direction } = useLanguage();
    const { filterAll } = COMPANY_DATA.homeComponents.portfolio;

    const [filter, setFilter] = useState("all");

    useEffect(() => {
        if (categoryParam) setFilter(categoryParam);
    }, [categoryParam]);

    const filtered =
        filter === "all"
            ? allProjects
            : allProjects.filter((p) => p.categoryIds.includes(filter));

    const chipCls = (active: boolean) =>
        cn(
            "font-mono text-[11px] uppercase tracking-[0.14em] px-4 py-2 border transition-all",
            active
                ? "bg-charcoal text-paper border-charcoal"
                : "bg-transparent text-ink-soft border-ink/20 hover:border-ink hover:text-ink"
        );

    return (
        <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-14 md:py-20" dir={direction}>
            {/* Filters */}
            <div className="flex flex-wrap gap-2.5 mb-12 pb-8 border-b border-ink/10">
                <button onClick={() => setFilter("all")} className={chipCls(filter === "all")}>
                    {t(filterAll)}
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={chipCls(filter === cat.id)}
                    >
                        {t(cat.name)}
                    </button>
                ))}
                <span className="ms-auto self-center font-mono text-[11px] tracking-[0.14em] text-ink-faint">
                    {String(filtered.length).padStart(2, "0")} {language === "ar" ? "مشروع" : "projects"}
                </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                <AnimatePresence mode="popLayout">
                    {filtered.map((project) => (
                        <motion.div
                            layout
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link href={`/projects/${encodeURIComponent(project.name)}`} className="group block">
                                <div className="relative aspect-[4/3] overflow-hidden bg-concrete">
                                    {project.thumbnail && (
                                        <img
                                            src={project.thumbnail}
                                            alt={t(project.title)}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
                                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                                        <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-paper text-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] inline-flex items-center gap-2">
                                            {language === "ar" ? "عرض" : "View"}
                                            <ArrowUpRight size={14} />
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-brass mb-2">
                                        {project.categoryNames?.filter(Boolean).join(" · ")}
                                    </div>
                                    <h3 className="display text-xl md:text-2xl text-ink group-hover:text-brass transition-colors leading-snug">
                                        {t(project.title)}
                                    </h3>
                                    <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-2">
                                        {clean(t(project.description))}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
