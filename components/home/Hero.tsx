"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { COMPANY_DATA } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { Pic } from "@/components/ui/Pic";

export function Hero() {
    const { language, t, direction } = useLanguage();
    const { hero, stats } = COMPANY_DATA;

    return (
        <section className="relative bg-white overflow-hidden" dir={direction}>
            <div className="relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-36 md:pt-48">
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
                                نبني البنية التحتية التي{" "}
                                <span className="text-blue">يعتمد عليها الأردن.</span>
                            </>
                        ) : (
                            <>
                                Building the infrastructure{" "}
                                <span className="text-blue">Jordan relies on.</span>
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
                            {t(hero.cta.portfolio)}
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

                {/* Photography */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mt-14 md:mt-16"
                >
                    <div className="relative aspect-[16/9] md:aspect-[21/10] w-full overflow-hidden rounded-2xl md:rounded-[28px] bg-panel">
                        <Pic
                            src="/images/projects/92b53c01b20a3aaa.jpg"
                            alt="Al Wehda Dam — Marwan Ahmad Alkurdi & Partners"
                            sizes="100vw"
                            priority
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-steel/10 rounded-2xl md:rounded-[28px]" />

                        {/* Floating caption card */}
                        <Link
                            href="/projects/Al%20Wehda%20Dam"
                            className="group absolute bottom-4 start-4 md:bottom-6 md:start-6 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md ps-4 pe-3 py-3 shadow-card hover:shadow-card-hover transition-shadow"
                        >
                            <div>
                                <div className="text-[13px] font-semibold text-steel">
                                    {language === "ar" ? "سد الوحدة" : "Al Wehda Dam"}
                                </div>
                                <div className="text-[12px] text-steel-soft">
                                    {language === "ar"
                                        ? "نهر اليرموك — مشروع وطني"
                                        : "Yarmouk River — national project"}
                                </div>
                            </div>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue text-white group-hover:bg-blue-dim transition-colors">
                                <ArrowUpRight size={15} />
                            </span>
                        </Link>
                    </div>
                </motion.div>

                {/* Stats */}
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
