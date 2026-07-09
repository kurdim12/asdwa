"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "@/components/ui/primitives";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";

const PRINCIPLES = [
    { en: "Engineering precision", ar: "الدقة الهندسية" },
    { en: "Safety & environment", ar: "السلامة والبيئة" },
    { en: "ISO 9001 quality", ar: "جودة الآيزو 9001" },
    { en: "Delivered on time", ar: "التسليم في الوقت" },
];

export function TheCore() {
    const { t, direction } = useLanguage();
    const { label, title, description } = COMPANY_DATA.homeComponents.theCore;

    return (
        <section className="relative bg-base border-b border-steel/10 overflow-hidden" dir={direction}>
            <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />

            <div className="relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-7">
                        <Reveal>
                            <SectionKicker index="01" label={t(label)} />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-8 display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-navy">
                                {t(title)}
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-steel-soft text-pretty">
                                {t(description)}
                            </p>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-5 lg:pt-4">
                        <div className="border-t-2 border-navy">
                            {PRINCIPLES.map((p, i) => (
                                <Reveal key={i} delay={0.15 + i * 0.08} width="100%">
                                    <motion.div
                                        whileHover={{ x: direction === "rtl" ? -6 : 6 }}
                                        className="flex items-center justify-between gap-4 py-5 border-b border-steel/15 group"
                                    >
                                        <div className="flex items-center gap-5">
                                            <span className="font-mono text-sm text-blue tabular-nums">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-lg md:text-xl font-medium text-steel group-hover:text-blue transition-colors">
                                                {t(p)}
                                            </span>
                                        </div>
                                        <span className="font-mono text-blue/40 group-hover:text-blue transition-colors select-none">
                                            +
                                        </span>
                                    </motion.div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
