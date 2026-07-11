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
        if (!categoryParam) return;
        // Only accept known category ids; legacy values (e.g. "ongoing")
        // map to their real category or fall back to showing everything.
        const legacy: Record<string, string> = { ongoing: "9", completed: "all" };
        const target = legacy[categoryParam] ?? categoryParam;
        setFilter(categories.some((c) => c.id === target) ? target : "all");
    }, [categoryParam, categories]);

    const matches =
        filter === "all"
            ? allProjects
            : allProjects.filter((p) => p.categoryIds.includes(filter));
    // Never present an empty page: if a filter has no projects, show all.
    const filtered = matches.length > 0 ? matches : allProjects;

    const chipCls = (active: boolean) =>
        cn(
            "text-[13.5px] font-medium px-5 py-2 rounded-full border transition-all",
            active
                ? "bg-blue text-white border-blue"
                : "bg-white text-steel-soft border-steel/15 hover:border-blue/50 hover:text-blue"
        );

    return (
        <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-12 md:py-16" dir={direction}>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2.5 mb-12">
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
                <span className="ms-auto text-[13.5px] text-steel-faint tabular-nums">
                    {filtered.length} {language === "ar" ? "مشروع" : "projects"}
                </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
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
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-panel">
                                    {project.thumbnail && (
                                        <img
                                            src={project.thumbnail}
                                            alt={t(project.title)}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                                        />
                                    )}
                                    <div className="absolute inset-0 ring-1 ring-inset ring-steel/10 rounded-2xl" />
                                    <span className="absolute top-3.5 end-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur text-steel opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-card">
                                        <ArrowUpRight size={16} />
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <div className="text-[12.5px] font-medium text-blue mb-1.5">
                                        {project.categoryNames?.filter(Boolean).join(" · ")}
                                    </div>
                                    <h3 className="text-[19px] font-semibold leading-snug text-steel group-hover:text-blue transition-colors">
                                        {t(project.title)}
                                    </h3>
                                    <p className="mt-2 text-[14px] text-steel-soft leading-relaxed line-clamp-2">
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
