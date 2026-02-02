"use client";

import { useState } from "react";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/app/providers";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const currentProject = projects[activeIndex || 0];
    if (!currentProject) return null;

    const title = currentProject.title[language] || currentProject.title['en'];
    const description = currentProject.description[language] || currentProject.description['en'];
    const image = currentProject.images && currentProject.images.length > 0
        ? `/images/projects/${currentProject.images[0]}`
        : null;

    return (
        <Section className="bg-background overflow-hidden p-0 md:p-0 max-w-none">
            <div className="flex flex-col lg:flex-row h-[80vh] md:h-screen w-full">

                {/* Content Side */}
                <div className={cn(
                    "w-full lg:w-1/3 bg-background border-r border-white/10 p-8 md:p-16 flex flex-col justify-center relative z-10",
                    direction === 'rtl' ? "lg:order-2 border-l border-r-0" : ""
                )}>
                    <Reveal>
                        <h4 className="text-primary font-heading uppercase tracking-widest text-sm mb-6">
                            {language === 'ar' ? 'أعمال مميزة' : 'Featured Works'}
                        </h4>
                    </Reveal>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                {title}
                            </h2>
                            <p className="text-white/60 mb-8 leading-relaxed max-w-sm line-clamp-4">
                                {description}
                            </p>

                            <Link href={`/projects`} className="inline-flex items-center gap-2 bg-white/5 hover:bg-primary hover:text-background text-white px-6 py-3 rounded-none border border-white/10 hover:border-transparent transition-all duration-300 font-heading tracking-wide uppercase text-sm">
                                {language === 'ar' ? 'عرض التفاصيل' : 'View Case Study'} <ArrowUpRight size={18} />
                            </Link>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 flex gap-4" dir="ltr">
                        <button onClick={prevSlide} className="w-12 h-12 border border-white/20 hover:border-primary hover:text-primary text-white flex items-center justify-center transition-colors">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={nextSlide} className="w-12 h-12 border border-white/20 hover:border-primary hover:text-primary text-white flex items-center justify-center transition-colors">
                            <ArrowRight size={20} />
                        </button>
                        <div className="flex items-center gap-2 ml-4 text-sm font-heading tracking-widest text-white/40">
                            <span className="text-primary">0{activeIndex + 1}</span> / 0{projects.length}
                        </div>
                    </div>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-2/3 relative bg-neutral-900 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className={cn(
                                "w-full h-full bg-cover bg-center",
                                "grayscale hover:grayscale-0 transition-all duration-700"
                            )}
                                style={{
                                    backgroundImage: image
                                        ? `url('${image}')`
                                        : `url('/patterns/mesh.png'), linear-gradient(to bottom right, #1a1a1a, #0a0a0a)`
                                }}
                            >
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 lg:opacity-40" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </Section>
    );
}
