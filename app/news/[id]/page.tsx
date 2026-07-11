"use client";

import { use, useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Calendar, ArrowLeft, Quote, Clock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { COMPANY_DATA } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { optimizedSrc } from "@/components/ui/Pic";

export default function ParamWrapper({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    return <NewsArticlePage id={resolvedParams.id} />;
}

function NewsArticlePage({ id }: { id: string }) {
    const { language, direction } = useLanguage();
    const [newsItem, setNewsItem] = useState<any>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

    useEffect(() => {
        const item = (COMPANY_DATA.news as any[]).find((n) => n.id.toString() === id);
        if (item) setNewsItem(item);
    }, [id]);

    if (!newsItem) {
        return (
            <div className="min-h-screen bg-paper flex items-center justify-center font-mono text-sm text-ink-soft">
                Loading…
            </div>
        );
    }

    const title = newsItem.title[language];
    const image = `/${newsItem.image}`;
    const content =
        newsItem.fullContent?.[language] || newsItem.summary[language];
    const quote = newsItem.quote?.[language];
    const paragraphs: string[] = content.split("\n\n");

    return (
        <main className="bg-paper min-h-screen" dir={direction}>
            <Navbar />

            {/* Hero */}
            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-concrete">
                <motion.img
                    style={{ y }}
                    src={optimizedSrc(image, 1920)}
                    alt={title}
                    className="absolute inset-0 h-[115%] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/10" />

                <div className="absolute inset-0 z-10 mx-auto max-w-8xl px-6 md:px-10 lg:px-16 flex flex-col justify-end pb-14 md:pb-20">
                    <Reveal width="100%">
                        <div className="max-w-4xl">
                            <div className="flex flex-wrap items-center gap-4 text-[13.5px] font-medium text-white/90 mb-6">
                                <span className="rounded-full bg-white/90 text-steel px-3.5 py-1">{newsItem.category}</span>
                                <span className="flex items-center gap-2">
                                    <Calendar size={13} /> {newsItem.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={13} /> {language === "ar" ? "٣ دقائق" : "3 min read"}
                                </span>
                            </div>
                            <h1 className="display text-4xl md:text-6xl lg:text-7xl leading-[0.98] text-paper text-balance">
                                {title}
                            </h1>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Article */}
            <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-28 border-s border-ink/10 ps-8 space-y-8">
                            <Link
                                href="/news"
                                className="group flex items-center gap-2 text-[14px] font-medium text-steel-soft hover:text-blue transition-colors"
                            >
                                <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                                {language === "ar" ? "العودة للأخبار" : "Back to news"}
                            </Link>
                        </div>
                    </aside>

                    <article className="lg:col-span-8 lg:col-start-4">
                        <Reveal width="100%">
                            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-navy border-s-4 border-blue ps-6 mb-12">
                                {paragraphs[0]}
                            </p>
                            {paragraphs.length > 1 && (
                                <div className="whitespace-pre-line text-lg leading-loose text-ink-soft">
                                    {paragraphs.slice(1).join("\n\n")}
                                </div>
                            )}

                            {quote && (
                                <div className="my-14 relative">
                                    <Quote className="absolute -top-6 -start-4 text-brass/15 w-24 h-24 -z-10" />
                                    <blockquote className="text-2xl md:text-4xl font-medium leading-snug text-navy text-center px-4 md:px-10 border-y-2 border-blue/20 py-12">
                                        {quote}
                                    </blockquote>
                                </div>
                            )}

                            <p className="mt-8 text-lg text-ink-soft leading-loose">
                                {language === "ar"
                                    ? "تواصل شركة مروان الكردي وشركاؤه التزامها بالتميز في كل مشروع، معتمدة على عقود من الخبرة والابتكار."
                                    : "Marwan Alkurdi & Partners continues its dedication to excellence in every project, building on decades of experience and innovation."}
                            </p>
                        </Reveal>

                        <div className="mt-14 lg:hidden border-t border-ink/10 pt-8">
                            <Link
                                href="/news"
                                className="inline-flex items-center gap-2 text-[14px] font-medium text-steel-soft hover:text-blue transition-colors"
                            >
                                <ArrowLeft size={15} />
                                {language === "ar" ? "العودة للأخبار" : "Back to news"}
                            </Link>
                        </div>
                    </article>
                </div>
            </div>

            <Footer />
        </main>
    );
}
