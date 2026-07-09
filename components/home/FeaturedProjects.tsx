"use client";

import { useState } from "react";
import { Section, SectionKicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/app/providers";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { COMPANY_DATA } from "@/lib/data";
import { clean } from "@/lib/utils";

interface Project {
    id: string;
    title: { ar: string; en: string };
    description: { ar: string; en: string };
    images: string[];
}

interface FeaturedProjectsProps {
    projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { language, t, direction } = useLanguage();
    const { title, description, viewProject } = COMPANY_DATA.homeComponents.portfolio;

    const next = () => setActiveIndex((p) => (p + 1) % projects.length);
    const prev = () => setActiveIndex((p) => (p - 1 + projects.length) % projects.length);

    const current = projects[activeIndex];
    if (!current) return null;

    const image =
        current.images && current.images.length > 0
            ? `/images/projects/${current.images[0]}`
            : "/images/logo.jpg";

    return (
        <Section className="bg-white">
            <div dir={direction}>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <Reveal>
                            <SectionKicker label={language === "ar" ? "أعمال مختارة" : "Selected work"} />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-5 display text-3xl md:text-[2.75rem] leading-[1.08] text-steel max-w-xl text-balance">
                                {t(title)}
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <p className="text-steel-soft max-w-sm leading-relaxed">{t(description)}</p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                    {/* Image */}
                    <div className="lg:col-span-8 order-1">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:rounded-[28px] bg-panel">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={image}
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    src={image}
                                    alt={t(current.title)}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 ring-1 ring-inset ring-steel/10 rounded-2xl md:rounded-[28px]" />
                            <div className="absolute top-4 end-4 rounded-full bg-white/90 backdrop-blur px-3.5 py-1.5 text-[13px] font-medium text-steel shadow-card tabular-nums">
                                {activeIndex + 1} / {projects.length}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-4 order-2 flex flex-col justify-between pt-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="display text-2xl md:text-3xl leading-tight text-steel text-balance">
                                    {t(current.title)}
                                </h3>
                                <p className="mt-4 text-[15.5px] text-steel-soft leading-relaxed line-clamp-5">
                                    {clean(t(current.description))}
                                </p>
                                <Link
                                    href={`/projects/${encodeURIComponent(current.title.en)}`}
                                    className="link-arrow mt-7"
                                >
                                    {t(viewProject)}
                                    <ArrowUpRight size={16} />
                                </Link>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex items-center gap-3 mt-10" dir="ltr">
                            <button
                                onClick={prev}
                                className="h-12 w-12 rounded-full border border-steel/15 flex items-center justify-center text-steel hover:bg-blue hover:border-blue hover:text-white transition-colors"
                                aria-label="Previous"
                            >
                                <ArrowLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                className="h-12 w-12 rounded-full border border-steel/15 flex items-center justify-center text-steel hover:bg-blue hover:border-blue hover:text-white transition-colors"
                                aria-label="Next"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
