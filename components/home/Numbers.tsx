"use client";

import Link from "next/link";
import { Section, SectionKicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/app/providers";

/**
 * Verified engineering quantities — every figure comes from the project
 * descriptions in the archive and links to its source project.
 */
const FIGURES = [
    {
        value: "110M m³",
        label: { en: "Reservoir storage capacity", ar: "سعة تخزين الخزان" },
        source: { en: "Al Wehda Dam", ar: "سد الوحدة" },
        href: "/projects/Al%20Wehda%20Dam",
    },
    {
        value: "1.4M m³",
        label: { en: "Roller-compacted concrete placed", ar: "خرسانة مدحولة منفذة" },
        source: { en: "Al Wehda Dam", ar: "سد الوحدة" },
        href: "/projects/Al%20Wehda%20Dam",
    },
    {
        value: "96 m",
        label: { en: "Dam height", ar: "ارتفاع السد" },
        source: { en: "Al Wehda Dam", ar: "سد الوحدة" },
        href: "/projects/Al%20Wehda%20Dam",
    },
    {
        value: "240 m",
        label: { en: "Bridge over eight continuous spans", ar: "جسر بثمانية باعات متصلة" },
        source: { en: "Wadi Al Yutum Bridge", ar: "جسر وادي اليتم" },
        href: "/projects/Wadi%20Al%20Yutum%20Bridge",
    },
    {
        value: "52 m",
        label: { en: "Maximum span, cable-stay works", ar: "أطول باع في أعمال الجسر المعلق" },
        source: { en: "King Hussein Bridge", ar: "جسر الملك حسين" },
        href: "/projects/King%20Hussein%20Bridge",
    },
    {
        value: "4",
        label: { en: "Levels of pilgrim bridge works", ar: "طوابق جسر الحجاج" },
        source: { en: "Jamarat Bridges, 2009", ar: "جسر الجمرات، ٢٠٠٩" },
        href: "/projects/Jamarat%20Bridges",
    },
];

export function Numbers() {
    const { t, language, direction } = useLanguage();

    return (
        <Section className="bg-panel">
            <div dir={direction}>
                <div className="max-w-2xl mb-12">
                    <Reveal>
                        <SectionKicker label={language === "ar" ? "بالأرقام" : "By the numbers"} />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-5 display text-3xl md:text-[2.75rem] leading-[1.08] text-steel text-balance">
                            {language === "ar"
                                ? "تُقاس بالخرسانة والماء والمسافة."
                                : "Measured in concrete, water and distance."}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-5 text-lg text-steel-soft leading-relaxed">
                            {language === "ar"
                                ? "كل رقم أدناه من سجل مشروع موثق — اضغط عليه لترى العمل نفسه."
                                : "Every figure below comes from a documented project record — select one to see the work itself."}
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {FIGURES.map((f, i) => (
                        <Reveal key={i} delay={0.08 + i * 0.05} width="100%">
                            <Link
                                href={f.href}
                                className="group flex h-full flex-col rounded-2xl bg-white p-6 md:p-7 shadow-card hover:shadow-card-hover transition-shadow"
                            >
                                <div className="display text-3xl md:text-[2.6rem] leading-none text-steel tabular-nums group-hover:text-blue transition-colors" dir="ltr">
                                    {f.value}
                                </div>
                                <div className="mt-3 text-[14.5px] font-medium text-steel leading-snug">
                                    {t(f.label)}
                                </div>
                                <div className="mt-auto pt-3 text-[12.5px] text-steel-faint">
                                    {t(f.source)}
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
