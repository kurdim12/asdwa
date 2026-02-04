"use client";

import { use, useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Calendar, ArrowLeft, Quote, Share2, Clock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { COMPANY_DATA } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

export default function paramWrapper({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    return <NewsArticlePage id={resolvedParams.id} />;
}

function NewsArticlePage({ id }: { id: string }) {
    const { language, t } = useLanguage();
    const [newsItem, setNewsItem] = useState<any>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    useEffect(() => {
        // @ts-ignore
        const item = COMPANY_DATA.news.find((n) => n.id.toString() === id);
        if (item) {
            setNewsItem(item);
        }
    }, [id]);

    if (!newsItem) {
        return <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">Loading...</div>;
    }

    // Safely access properties
    const title = newsItem.title[language as keyof typeof newsItem.title];
    const category = newsItem.category;
    const date = newsItem.date;
    const image = `/${newsItem.image}`;
    // Fallback to summary if fullContent isn't defined yet (though we just added it)
    const content = newsItem.fullContent?.[language as keyof typeof newsItem.fullContent] || newsItem.summary[language as keyof typeof newsItem.summary];
    const quote = newsItem.quote?.[language as keyof typeof newsItem.quote];

    return (
        <main className="bg-neutral-950 min-h-screen selection:bg-primary/30">
            <Navbar />

            {/* Cinematic Hero Section */}
            <div className="relative h-[85vh] w-full overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-neutral-950 z-10" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="absolute inset-0 z-20 container mx-auto px-4 md:px-8 flex flex-col justify-end pb-24">
                    <Reveal width="100%">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 text-white/80 mb-6 font-heading tracking-widest text-sm uppercase">
                                <span className="bg-primary px-3 py-1 text-black font-bold">{category}</span>
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} />
                                    <span>{date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={14} />
                                    <span>{language === 'ar' ? '٣ دقائق قراءة' : '3 MIN READ'}</span>
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.9] mb-8">
                                {title}
                            </h1>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Editorial Content */}
            <div className="container mx-auto px-4 md:px-8 py-20 relative z-30 -mt-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Sidebar / Metadata */}
                    <aside className="lg:w-1/4 hidden lg:block pt-4">
                        <div className="sticky top-32 border-l border-white/10 pl-8 space-y-8">
                            <div>
                                <h3 className="text-white/40 uppercase text-xs font-bold tracking-widest mb-2">
                                    {language === 'ar' ? 'مشاركة' : 'Share'}
                                </h3>
                                <div className="flex gap-4 text-white/80">
                                    <button className="hover:text-primary transition-colors"><Share2 size={20} /></button>
                                </div>
                            </div>
                            <div>
                                <Link href="/news" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm uppercase font-bold tracking-widest">
                                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                    {language === 'ar' ? 'العودة للأخبار' : 'Back to News'}
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Article */}
                    <article className="lg:w-2/3">
                        <Reveal delay={0.2}>
                            <div className="prose prose-xl prose-invert prose-p:text-white/80 prose-p:font-light prose-headings:font-heading prose-headings:font-bold max-w-none">
                                {/* First paragraph as lead */}
                                <p className="text-2xl md:text-3xl text-white font-heading font-medium leading-relaxed mb-12 border-l-4 border-primary pl-6">
                                    {content.split('\n\n')[0]}
                                </p>

                                {/* Rest of the content */}
                                <div className="whitespace-pre-line text-lg leading-loose text-white/70">
                                    {content.split('\n\n').slice(1).join('\n\n')}
                                </div>

                                {/* Pull Quote "Twist" */}
                                {quote && (
                                    <div className="my-16 relative">
                                        <Quote className="absolute -top-8 -left-8 text-primary/10 w-32 h-32 -z-10" />
                                        <blockquote className="text-3xl md:text-5xl font-heading font-bold text-white/90 leading-tight text-center px-4 md:px-12 border-y border-white/10 py-12">
                                            "{quote}"
                                        </blockquote>
                                    </div>
                                )}

                                <p className="mt-8 text-white/70">
                                    {language === 'ar'
                                        ? "تواصل شركة مروان الكردي وشركاؤه التزامها بالتميز في كل مشروع، معتمدة على عقود من الخبرة والابتكار."
                                        : "Marwan Alkurdi & Partners continues its dedication to excellence in every project, building on decades of experience and innovation."}
                                </p>
                            </div>
                        </Reveal>

                        {/* Mobile Back Button */}
                        <div className="mt-16 lg:hidden border-t border-white/10 pt-8">
                            <Link href="/news" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm uppercase font-bold tracking-widest">
                                <ArrowLeft size={16} />
                                {language === 'ar' ? 'العودة للأخبار' : 'Back to News'}
                            </Link>
                        </div>
                    </article>

                </div>
            </div>

            <Footer />
        </main>
    );
}
