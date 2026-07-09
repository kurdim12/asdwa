"use client";

import { Section, SectionKicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FACTS = [
    { label: { en: "Founded", ar: "التأسيس" }, value: { en: "1981 · Zarqa", ar: "١٩٨١ · الزرقاء" } },
    { label: { en: "Headquarters", ar: "المقر" }, value: { en: "Amman, Jordan", ar: "عمّان، الأردن" } },
    { label: { en: "Classification", ar: "التصنيف" }, value: { en: "First Grade (JCA)", ar: "درجة أولى" } },
    { label: { en: "Reach", ar: "النطاق" }, value: { en: "Regional", ar: "إقليمي" } },
];

export function Legacy() {
    const { t, language, direction } = useLanguage();

    return (
        <Section className="bg-white border-b border-steel/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" dir={direction}>
                {/* Image */}
                <div className="lg:col-span-6">
                    <Reveal width="100%">
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-panel group tick-frame">
                            <img
                                src="/images/projects/c7d5b45beb78e164.jpg"
                                alt={t(COMPANY_DATA.legacy.title)}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-navy/10" />
                            {/* Anniversary tag */}
                            <div className="absolute top-0 start-0 bg-blue text-white px-5 py-4">
                                <div className="display text-3xl md:text-4xl leading-none tabular-nums">45</div>
                                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/80 mt-1">
                                    {language === "ar" ? "عاماً" : "Years"}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Text */}
                <div className="lg:col-span-6">
                    <Reveal>
                        <SectionKicker index="02" label={t(COMPANY_DATA.legacy.subtitle)} />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-8 display text-3xl md:text-5xl leading-[1.02] text-navy text-balance">
                            {t(COMPANY_DATA.legacy.title)}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-6 text-lg text-steel-soft leading-relaxed text-pretty">
                            {t(COMPANY_DATA.legacy.description)}
                        </p>
                    </Reveal>

                    <Reveal delay={0.3} width="100%">
                        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t-2 border-navy pt-8">
                            {FACTS.map((f, i) => (
                                <div key={i}>
                                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-blue">
                                        {t(f.label)}
                                    </dt>
                                    <dd className="mt-1 text-base font-medium text-steel">{t(f.value)}</dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <Link href="/about" className="link-arrow mt-10">
                            {language === "ar" ? "قصتنا الكاملة" : "Our full story"}
                            <ArrowUpRight size={15} />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
