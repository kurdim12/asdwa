"use client";

import Link from "next/link";
import { Section, SectionKicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/app/providers";
import { ArrowUpRight } from "lucide-react";

/**
 * The 45-year record — every entry is drawn from the company's documented
 * history and project descriptions; nothing here is invented.
 */
const ERAS = [
    {
        marker: "1981",
        title: { en: "Founded in Zarqa", ar: "التأسيس في الزرقاء" },
        text: {
            en: "Established by Eng. Marwan Alkurdi as 'Modern Zarqa Establishment for Construction'.",
            ar: "أسسها المهندس مروان الكردي تحت اسم «مؤسسة الزرقاء الحديثة للإنشاءات».",
        },
    },
    {
        marker: "1980s",
        title: { en: "Buildings & general contracting", ar: "الأبنية والمقاولات العامة" },
        text: {
            en: "Private and public building construction and general contracting works across Jordan.",
            ar: "تنفيذ المباني الخاصة والعامة وأعمال المقاولات العامة في الأردن.",
        },
    },
    {
        marker: "1990s",
        title: { en: "Into special works", ar: "نحو الأعمال المتخصصة" },
        text: {
            en: "Growth into dams, bridges, highways, piling and post-tensioning works.",
            ar: "التوسع في السدود والجسور والطرق السريعة وأعمال الخوازيق والشد اللاحق.",
        },
    },
    {
        marker: "2000s",
        title: { en: "Regional reach", ar: "امتداد إقليمي" },
        text: {
            en: "Bridge construction in Saudi Arabia — including work on the four-level Jamarat Bridge in Mecca, completed 2009.",
            ar: "إنشاء الجسور في السعودية — ومنها المشاركة في جسر الجمرات ذي الطوابق الأربعة بمكة، المنجز عام 2009.",
        },
        href: "/projects/Jamarat%20Bridges",
    },
    {
        marker: "2010s",
        title: { en: "The water decade", ar: "عقد المياه" },
        text: {
            en: "The 96 m Al Wehda RCC dam and works on the Disi conveyance securing Amman's water supply.",
            ar: "سد الوحدة بالخرسانة المدحولة بارتفاع ٩٦ م وأعمال ناقل الديسي لتأمين مياه عمّان.",
        },
        href: "/projects/Al%20Wehda%20Dam",
    },
    {
        marker: { en: "Today", ar: "اليوم" },
        title: { en: "Still building", ar: "ما زلنا نبني" },
        text: {
            en: "A first-grade classified contractor with projects in progress across the Kingdom.",
            ar: "مقاول مصنف درجة أولى ومشاريع قيد التنفيذ في مختلف أنحاء المملكة.",
        },
        href: "/projects?category=9",
    },
];

export function Record() {
    const { t, language, direction } = useLanguage();

    return (
        <Section className="bg-white">
            <div dir={direction}>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <Reveal>
                            <SectionKicker label={language === "ar" ? "السجل" : "The record"} />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-5 display text-3xl md:text-[2.75rem] leading-[1.08] text-steel text-balance max-w-xl">
                                {language === "ar"
                                    ? "خمسة وأربعون عاماً، سجل هندسي واحد."
                                    : "45 years. One engineering record."}
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <Link href="/projects" className="link-arrow shrink-0">
                            {language === "ar" ? "تصفح الأرشيف الكامل" : "Browse the full archive"}
                            <ArrowUpRight size={16} />
                        </Link>
                    </Reveal>
                </div>

                {/* Datum line + era cards */}
                <Reveal width="100%" delay={0.15}>
                    <div className="relative">
                        <div
                            className="hidden md:block absolute top-[13px] inset-x-0 h-px bg-steel/15"
                            aria-hidden="true"
                        />
                        <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
                            {ERAS.map((era, i) => {
                                const inner = (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <span className="relative z-10 h-[9px] w-[9px] rounded-full bg-blue ring-4 ring-white shrink-0" />
                                            <span className="font-mono text-[13px] font-medium text-blue tabular-nums">
                                                {typeof era.marker === "string" ? era.marker : t(era.marker)}
                                            </span>
                                        </div>
                                        <h3 className="mt-4 text-[16px] font-semibold text-steel leading-snug group-hover:text-blue transition-colors">
                                            {t(era.title)}
                                        </h3>
                                        <p className="mt-2 text-[13.5px] leading-relaxed text-steel-soft">
                                            {t(era.text)}
                                        </p>
                                    </>
                                );
                                return (
                                    <li key={i}>
                                        {era.href ? (
                                            <Link href={era.href} className="group block">
                                                {inner}
                                            </Link>
                                        ) : (
                                            <div>{inner}</div>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
