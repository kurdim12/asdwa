"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/primitives";
import { useLanguage } from "@/app/providers";
import { COMPANY_DATA } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export function Hero() {
    const ref = useRef(null);
    const { language, t, direction } = useLanguage();
    const { hero, stats } = COMPANY_DATA;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen bg-paper overflow-hidden"
            dir={direction}
        >
            <div className="absolute inset-0 grid-overlay opacity-[0.5] pointer-events-none" />

            <div className="relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
                    {/* Left — editorial statement */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3"
                        >
                            <span className="h-px w-10 bg-brass" />
                            <span className="eyebrow">{t(hero.est)}</span>
                        </motion.div>

                        <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] tracking-tight text-ink">
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="block"
                            >
                                {language === "ar" ? hero.title.ar.split(" ")[0] : "Building"}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="block italic text-brass"
                            >
                                {language === "ar"
                                    ? hero.title.ar.split(" ").slice(1).join(" ")
                                    : "Legacy."}
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.35 }}
                            className="mt-8 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed text-pretty"
                        >
                            {t(hero.subtitle)}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.45 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <Link href="/projects">
                                <Button size="lg" variant="primary">
                                    {t(hero.cta.portfolio)}
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline">
                                    {t(hero.cta.contact)}
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right — photographic block */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-[4/5] w-full overflow-hidden bg-concrete"
                        >
                            <motion.img
                                style={{ y: imgY }}
                                src="/images/projects/92b53c01b20a3aaa.jpg"
                                alt="Al Wehda Dam — Marwan Ahmad Alkurdi & Partners"
                                className="absolute inset-0 h-[120%] w-full object-cover"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
                            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-charcoal/70 to-transparent">
                                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-paper">
                                    <span>{language === "ar" ? "سد الوحدة" : "Al Wehda Dam"}</span>
                                    <span className="text-brass-soft">01 / 04</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stat band */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-ink/10"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="py-6 md:py-8 md:px-6 border-b md:border-b-0 border-e border-ink/10 last:border-e-0 [&:nth-child(2)]:border-e-0 md:[&:nth-child(2)]:border-e"
                        >
                            <div className="font-display text-4xl md:text-5xl text-ink">
                                {stat.value}
                            </div>
                            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                                {t(stat.label)}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-6 end-6 md:end-16 flex items-center gap-2 text-ink-faint">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                    {language === "ar" ? "تمرير" : "Scroll"}
                </span>
                <ArrowDown size={14} className="animate-bounce" />
            </div>
        </section>
    );
}
