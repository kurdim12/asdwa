"use client";

import { useState } from "react";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { AnimatePresence, motion } from "framer-motion";

export function Services() {
    const { mainServices } = COMPANY_DATA.services;
    const { label, title } = COMPANY_DATA.homeComponents.services;
    const { t, language, direction } = useLanguage();
    const [active, setActive] = useState(0);

    const activeImg = `/${(mainServices[active] as any).gallery?.[0] || "images/logo.jpg"}`;

    return (
        <Section className="bg-navy text-white overflow-hidden">
            <div className="absolute inset-0 grid-overlay-dark opacity-50 pointer-events-none" />
            <div dir={direction} className="relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
                    <div>
                        <Reveal>
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-[12px] text-blue-bright tabular-nums">03</span>
                                <span className="h-px w-10 bg-blue-bright/50" />
                                <span className="eyebrow-dark">{t(label)}</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-6 display text-3xl md:text-5xl leading-[1.0] text-white text-balance max-w-2xl">
                                {t(title)}
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-white border-b-2 border-blue-bright pb-1 hover:text-blue-bright transition-colors shrink-0"
                        >
                            {language === "ar" ? "كل الخدمات" : "All services"}
                            <ArrowUpRight size={15} />
                        </Link>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* List */}
                    <div className="lg:col-span-7 border-t border-white/15">
                        {mainServices.map((service, index) => (
                            <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                onMouseEnter={() => setActive(index)}
                                className="group block border-b border-white/15 py-7 md:py-8"
                            >
                                <div className="flex items-start gap-5 md:gap-8">
                                    <span className="font-mono text-sm text-blue-bright tabular-nums pt-2">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className="display text-xl md:text-3xl text-white group-hover:text-blue-bright transition-colors">
                                                {t(service.title)}
                                            </h3>
                                            <ArrowUpRight
                                                size={22}
                                                className="shrink-0 text-white/30 group-hover:text-blue-bright group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                                            />
                                        </div>
                                        <p className="mt-3 text-white/50 leading-relaxed max-w-xl line-clamp-2">
                                            {t(service.description)}
                                        </p>
                                        {/* Mobile thumbnail */}
                                        <div className="lg:hidden mt-5 aspect-video overflow-hidden bg-white/5">
                                            <img
                                                src={`/${(service as any).gallery?.[0] || "images/logo.jpg"}`}
                                                alt={t(service.title)}
                                                className="h-full w-full object-cover photo-navy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Sticky preview (desktop) */}
                    <div className="hidden lg:block lg:col-span-5">
                        <div className="sticky top-32 aspect-[4/5] w-full overflow-hidden bg-white/5 border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeImg}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    src={activeImg}
                                    alt={t(mainServices[active].title)}
                                    className="absolute inset-0 h-full w-full object-cover photo-navy"
                                />
                            </AnimatePresence>
                            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-navy to-transparent">
                                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-bright">
                                    {t(mainServices[active].title)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
