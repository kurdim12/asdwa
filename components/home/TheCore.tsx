"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "@/components/ui/primitives";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";
import { ShieldCheck, Ruler, Leaf, Clock } from "lucide-react";

const PRINCIPLES = [
    {
        icon: Ruler,
        title: { en: "Engineering precision", ar: "الدقة الهندسية" },
        text: {
            en: "Complex structural work executed to exact tolerances, from dam foundations to bridge decks.",
            ar: "أعمال إنشائية معقدة تُنفذ بأدق المعايير، من أساسات السدود إلى أسطح الجسور.",
        },
    },
    {
        icon: Leaf,
        title: { en: "Safety & environment", ar: "السلامة والبيئة" },
        text: {
            en: "The highest standards for site safety and environmental protection on every project.",
            ar: "أعلى معايير السلامة العامة وحماية البيئة في كل مشروع.",
        },
    },
    {
        icon: ShieldCheck,
        title: { en: "ISO 9001 quality", ar: "جودة الآيزو 9001" },
        text: {
            en: "Certified quality management applied across planning, execution, and handover.",
            ar: "إدارة جودة معتمدة تُطبق في التخطيط والتنفيذ والتسليم.",
        },
    },
    {
        icon: Clock,
        title: { en: "Delivered on time", ar: "التسليم في الوقت" },
        text: {
            en: "Four decades of projects delivered on schedule and within budget.",
            ar: "أربعة عقود من المشاريع المنجزة في موعدها وضمن الميزانية.",
        },
    },
];

export function TheCore() {
    const { t, direction } = useLanguage();
    const { label, description } = COMPANY_DATA.homeComponents.theCore;

    return (
        <section className="relative bg-panel" dir={direction}>
            <div className="relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-20 md:py-28">
                <div className="max-w-2xl">
                    <Reveal>
                        <SectionKicker label={t(label)} />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-5 display text-3xl md:text-[2.75rem] leading-[1.1] text-steel text-balance">
                            {t(description)}
                        </h2>
                    </Reveal>
                </div>

                <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {PRINCIPLES.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <Reveal key={i} delay={0.1 + i * 0.07} width="100%">
                                <div className="h-full rounded-2xl bg-white p-6 md:p-7 shadow-card hover:shadow-card-hover transition-shadow">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky text-blue">
                                        <Icon size={20} />
                                    </span>
                                    <h3 className="mt-5 text-[17px] font-semibold text-steel">
                                        {t(p.title)}
                                    </h3>
                                    <p className="mt-2 text-[14.5px] leading-relaxed text-steel-soft">
                                        {t(p.text)}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
