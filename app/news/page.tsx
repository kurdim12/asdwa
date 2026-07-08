"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { COMPANY_DATA } from "@/lib/data";

export default function NewsPage() {
    const { language, t, direction } = useLanguage();
    const news = COMPANY_DATA.news as any[];
    const [featured, ...rest] = news;

    return (
        <main className="bg-paper min-h-screen">
            <Navbar />

            <PageHeader
                index="N / 01"
                kicker={{ en: "Newsroom", ar: "غرفة الأخبار" }}
                title={{ en: "Latest news", ar: "آخر الأخبار" }}
                subtitle={{
                    en: "Updates from our projects, safety milestones, and company announcements.",
                    ar: "تحديثات مشاريعنا، إنجازات السلامة، وإعلانات الشركة.",
                }}
            />

            <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-16 md:py-20" dir={direction}>
                {/* Featured */}
                {featured && (
                    <Reveal width="100%">
                        <Link
                            href={`/news/${featured.id}`}
                            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 mb-16 border-b border-ink/10"
                        >
                            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-concrete">
                                <img
                                    src={`/${featured.image}`}
                                    alt={featured.title[language]}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
                                <div className="absolute top-4 start-4 bg-charcoal text-paper font-mono text-[10px] uppercase tracking-[0.16em] px-3 py-1.5">
                                    {featured.category}
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint mb-4">
                                    <Calendar size={13} />
                                    <span>{featured.date}</span>
                                </div>
                                <h2 className="font-display text-3xl md:text-5xl leading-[1.02] text-ink group-hover:text-brass transition-colors text-balance">
                                    {featured.title[language]}
                                </h2>
                                <p className="mt-5 text-ink-soft leading-relaxed line-clamp-3">
                                    {featured.summary[language]}
                                </p>
                                <span className="link-arrow mt-8">
                                    {language === "ar" ? "اقرأ القصة" : "Read the story"}
                                    <ArrowUpRight size={15} />
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                    {rest.map((item, index) => (
                        <Reveal key={item.id} width="100%" delay={(index % 3) * 0.08}>
                            <Link href={`/news/${item.id}`} className="group block h-full">
                                <div className="relative aspect-[16/11] overflow-hidden bg-concrete">
                                    <img
                                        src={`/${item.image}`}
                                        alt={item.title[language]}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
                                    <div className="absolute top-3 start-3 bg-paper/90 backdrop-blur text-ink font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint mb-3">
                                        <Calendar size={12} />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="font-display text-xl md:text-2xl leading-snug text-ink group-hover:text-brass transition-colors">
                                        {item.title[language]}
                                    </h3>
                                    <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-2">
                                        {item.summary[language]}
                                    </p>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
