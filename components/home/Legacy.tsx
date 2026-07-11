"use client";

import { Section, SectionKicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pic } from "@/components/ui/Pic";

const FACTS = [
    { label: { en: "Founded", ar: "التأسيس" }, value: { en: "1981 · Zarqa", ar: "١٩٨١ · الزرقاء" } },
    { label: { en: "Headquarters", ar: "المقر" }, value: { en: "Amman, Jordan", ar: "عمّان، الأردن" } },
    { label: { en: "Classification", ar: "التصنيف" }, value: { en: "First Grade (JCA)", ar: "درجة أولى" } },
    { label: { en: "Reach", ar: "النطاق" }, value: { en: "Regional", ar: "إقليمي" } },
];

export function Legacy() {
    const { t, language, direction } = useLanguage();

    return (
        <Section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" dir={direction}>
                {/* Image */}
                <div className="lg:col-span-6">
                    <Reveal width="100%">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:rounded-[28px] bg-panel group">
                            <Pic
                                src="/images/projects/c7d5b45beb78e164.jpg"
                                alt={t(COMPANY_DATA.legacy.title)}
                                className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-steel/10 rounded-2xl md:rounded-[28px]" />
                            {/* Anniversary chip */}
                            <div className="absolute top-4 start-4 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-card">
                                <span className="text-[13.5px] font-semibold text-steel">
                                    {language === "ar" ? "٤٥ عاماً من الخبرة" : "45 years of experience"}
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Text */}
                <div className="lg:col-span-6">
                    <Reveal>
                        <SectionKicker label={t(COMPANY_DATA.legacy.subtitle)} />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-5 display text-3xl md:text-[2.75rem] leading-[1.08] text-steel text-balance">
                            {t(COMPANY_DATA.legacy.title)}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-6 text-lg text-steel-soft leading-relaxed text-pretty">
                            {t(COMPANY_DATA.legacy.description)}
                        </p>
                    </Reveal>

                    <Reveal delay={0.3} width="100%">
                        <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-steel/10 pt-8">
                            {FACTS.map((f, i) => (
                                <div key={i}>
                                    <dt className="text-[13px] font-medium text-steel-faint">
                                        {t(f.label)}
                                    </dt>
                                    <dd className="mt-1 text-[16px] font-semibold text-steel">
                                        {t(f.value)}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <Link href="/about" className="link-arrow mt-9">
                            {language === "ar" ? "قصتنا الكاملة" : "Read our full story"}
                            <ArrowUpRight size={16} />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
