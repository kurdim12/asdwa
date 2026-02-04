"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/providers";

import { COMPANY_DATA } from "@/lib/data";

export default function NewsPage() {
    const { language, t } = useLanguage();

    // Static translations for headings
    const text = {
        title: { en: "Latest News", ar: "آخر الأخبار" },
        subtitle: { en: "Updates from our projects, safety milestones, and company announcements.", ar: "تحديثات مشاريعنا، إنجازات السلامة، وإعلانات الشركة." },
        readMore: { en: "Read Full Story", ar: "اقرأ القصة الكاملة" }
    };

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-8">
                <Reveal>
                    <header className="mb-16">
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">{t(text.title)}</h1>
                        <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
                            {t(text.subtitle)}
                        </p>
                    </header>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* @ts-ignore */}
                    {COMPANY_DATA.news.map((item, index) => (
                        <Reveal key={item.id} delay={index * 0.1}>
                            <article className="group relative bg-neutral-900 border border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                                {/* Image Container */}
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img
                                        src={`/${item.image}`}
                                        /* @ts-ignore */
                                        alt={item.title[language]}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-background text-xs font-bold uppercase tracking-widest px-3 py-1 z-20">
                                        {item.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-white/40 text-sm mb-4 font-heading tracking-wide">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {/* @ts-ignore */}
                                        {item.title[language]}
                                    </h2>

                                    <p className="text-white/60 mb-6 flex-1 line-clamp-3">
                                        {/* @ts-ignore */}
                                        {item.summary[language]}
                                    </p>

                                    <Link href={`/news/${item.id}`} className="inline-flex items-center gap-2 text-white/50 hover:text-white uppercase text-xs font-bold tracking-widest transition-colors mt-auto">
                                        {t(text.readMore)} <ArrowUpRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
