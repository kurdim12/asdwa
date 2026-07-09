"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { COMPANY_DATA } from "@/lib/data";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
    const ref = useRef(null);
    const { language, t, direction } = useLanguage();
    const { hero, stats } = COMPANY_DATA;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

    return (
        <section ref={ref} className="relative bg-navy overflow-hidden" dir={direction}>
            {/* Full-bleed photographic backdrop */}
            <div className="absolute inset-0">
                <motion.img
                    style={{ y: imgY }}
                    src="/images/projects/92b53c01b20a3aaa.jpg"
                    alt="Al Wehda Dam — Marwan Ahmad Alkurdi & Partners"
                    className="absolute inset-0 h-[116%] w-full object-cover photo-navy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-navy/30" />
                <div className="absolute inset-0 grid-overlay-dark opacity-60" />
            </div>

            <div className="relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-40 md:pt-56 pb-0 min-h-screen flex flex-col justify-between">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-3"
                    >
                        <span className="h-px w-10 bg-blue-bright" />
                        <span className="eyebrow-dark">{t(hero.est)}</span>
                    </motion.div>

                    <h1 className="mt-8 display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] text-white">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="block"
                        >
                            {language === "ar" ? "نبني ما" : "We build what"}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="block text-blue-bright"
                        >
                            {language === "ar" ? "يصمد للأجيال" : "outlasts generations."}
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="mt-8 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed text-pretty"
                    >
                        {t(hero.subtitle)}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 h-14 px-9 bg-blue text-white font-mono text-[13px] uppercase tracking-[0.18em] hover:bg-blue-bright transition-colors"
                        >
                            {t(hero.cta.portfolio)}
                            <ArrowUpRight size={16} />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 h-14 px-9 border border-white/30 text-white font-mono text-[13px] uppercase tracking-[0.18em] hover:bg-white hover:text-navy transition-colors"
                        >
                            {t(hero.cta.contact)}
                        </Link>
                    </motion.div>
                </div>

                {/* Stat strip anchored to the bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-white/15 bg-navy/40 backdrop-blur-sm -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="py-7 md:py-9 md:px-6 border-e border-white/10 last:border-e-0 [&:nth-child(2)]:border-e-0 md:[&:nth-child(2)]:border-e"
                        >
                            <div className="display text-4xl md:text-5xl text-white tabular-nums">
                                {stat.value}
                            </div>
                            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-blue-bright">
                                {t(stat.label)}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-36 md:bottom-44 end-6 md:end-16 hidden md:flex items-center gap-2 text-white/50">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                    {language === "ar" ? "تمرير" : "Scroll"}
                </span>
                <ArrowDown size={14} className="animate-bounce" />
            </div>
        </section>
    );
}
