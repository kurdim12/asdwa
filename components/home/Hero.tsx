"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { COMPANY_DATA } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { optimizedSrc } from "@/components/ui/Pic";

/** Landmark works cycled in the hero — all real, documented projects. */
const SLIDES = [
    {
        src: "/images/projects/92b53c01b20a3aaa.jpg",
        name: { en: "Al Wehda Dam", ar: "سد الوحدة" },
        meta: { en: "RCC dam · 96 m · Yarmouk River", ar: "سد خرسانة مدحولة · ٩٦ م · نهر اليرموك" },
        href: "/projects/Al%20Wehda%20Dam",
    },
    {
        src: "/images/projects/Dissi Pipeline/DSC01339.JPG",
        name: { en: "Disi Water Conveyance", ar: "ناقل مياه الديسي" },
        meta: { en: "Strategic water pipeline works", ar: "أعمال خط المياه الاستراتيجي" },
        href: "/projects/Disi%20Water%20Conveyance%20Project",
    },
    {
        src: "/images/projects/Aqaba Entrance/DSC03386.jpg",
        name: { en: "Aqaba Entrance", ar: "مدخل العقبة" },
        meta: { en: "Gateway road & infrastructure", ar: "طريق البوابة والبنية التحتية" },
        href: "/projects/Aqaba%20Entrance",
    },
];

export function Hero() {
    const { language, t, direction } = useLanguage();
    const { hero, stats } = COMPANY_DATA;
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6500);
        return () => clearInterval(id);
    }, []);

    const current = SLIDES[slide];

    return (
        <section className="relative bg-white overflow-hidden" dir={direction}>
            <div className="relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-36 md:pt-48">
                {/* Archive metadata (drawing-set corner block) */}
                <div
                    className={`hidden lg:block absolute top-32 font-mono text-[11px] leading-relaxed text-steel-faint select-none ${
                        direction === "rtl" ? "left-16 text-left" : "right-16 text-right"
                    }`}
                    dir="ltr"
                    aria-hidden="true"
                >
                    <div>MK / ENGINEERING RECORD</div>
                    <div>EST. 1981 — AMMAN, JORDAN</div>
                    <div>31.9539° N / 35.9106° E</div>
                    <div className="text-blue">HEAVY CIVIL INFRASTRUCTURE</div>
                </div>

                {/* Headline block */}
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-2.5"
                    >
                        <span className="h-2 w-2 rounded-full bg-blue" />
                        <span className="eyebrow">{t(hero.est)}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 display text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.04] text-steel text-balance"
                    >
                        {language === "ar" ? (
                            <>
                                ٤٥ عاماً في هندسة{" "}
                                <span className="text-blue">البنية التحتية للأردن.</span>
                            </>
                        ) : (
                            <>
                                45 years of engineering{" "}
                                <span className="text-blue">Jordan's infrastructure.</span>
                            </>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-6 max-w-xl text-lg md:text-xl text-steel-soft leading-relaxed text-pretty"
                    >
                        {t(hero.subtitle)}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-9 flex flex-wrap items-center gap-3.5"
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 h-12 md:h-14 px-8 rounded-full bg-blue text-white text-[15px] font-medium hover:bg-blue-dim transition-colors"
                        >
                            {language === "ar" ? "استكشف الأرشيف" : "Explore the archive"}
                            <ArrowUpRight size={17} />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center h-12 md:h-14 px-8 rounded-full border border-steel/20 text-steel text-[15px] font-medium hover:border-blue hover:text-blue transition-colors"
                        >
                            {t(hero.cta.contact)}
                        </Link>
                    </motion.div>
                </div>

                {/* Rotating landmark photography */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mt-14 md:mt-16"
                >
                    <div className="relative aspect-[16/9] md:aspect-[21/10] w-full overflow-hidden rounded-2xl md:rounded-[28px] bg-panel">
                        <AnimatePresence mode="sync">
                            <motion.img
                                key={current.src}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.1, ease: "easeInOut" }}
                                src={optimizedSrc(current.src, 1920)}
                                alt={t(current.name)}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 ring-1 ring-inset ring-steel/10 rounded-2xl md:rounded-[28px]" />

                        {/* Archival caption card */}
                        <Link
                            href={current.href}
                            className="group absolute bottom-4 start-4 md:bottom-6 md:start-6 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md ps-4 pe-3 py-3 shadow-card hover:shadow-card-hover transition-shadow"
                        >
                            <div>
                                <div className="text-[13px] font-semibold text-steel">
                                    {t(current.name)}
                                </div>
                                <div className="text-[12px] text-steel-soft">{t(current.meta)}</div>
                            </div>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue text-white group-hover:bg-blue-dim transition-colors">
                                <ArrowUpRight size={15} />
                            </span>
                        </Link>

                        {/* Slide index */}
                        <div className="absolute bottom-5 end-5 md:bottom-7 md:end-7 flex items-center gap-1.5" dir="ltr">
                            {SLIDES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSlide(i)}
                                    aria-label={`Slide ${i + 1}`}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        i === slide ? "w-7 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Verified figures */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 py-12 md:py-16"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className={i > 0 ? "md:border-s md:border-steel/10 md:ps-8" : ""}>
                            <div className="display text-4xl md:text-5xl text-steel tabular-nums">
                                {stat.value}
                            </div>
                            <div className="mt-2 text-[14px] text-steel-soft">
                                {t(stat.label)}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16">
                <div className="hairline" />
            </div>
        </section>
    );
}
