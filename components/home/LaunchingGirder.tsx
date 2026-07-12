"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, SectionKicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/app/providers";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { optimizedSrc } from "@/components/ui/Pic";

const STEPS = [
    {
        photo: "/images/projects/b32049486bf559b5.jpg",
        title: { en: "Piers are cast and surveyed", ar: "صب الركائز ومسحها" },
        text: {
            en: "Reinforced-concrete piers are constructed along the alignment and surveyed to precise levels.",
            ar: "تُنشأ الركائز الخرسانية المسلحة على طول المحور وتُضبط مناسيبها بدقة مساحية.",
        },
    },
    {
        photo: "/images/projects/a74c26b8298b9c58.jpg",
        title: { en: "The launching girder advances", ar: "تتقدم عارضة الإطلاق" },
        text: {
            en: "The steel truss machine positions itself over the next span, supported by the completed deck and the pier ahead.",
            ar: "تتمركز الجملة الفولاذية فوق الباع التالي، مستندة إلى السطح المنجز والركيزة الأمامية.",
        },
    },
    {
        photo: "/images/projects/1452e54ddc3e12a5.jpg",
        title: { en: "A precast segment is lifted", ar: "رفع القطعة مسبقة الصب" },
        text: {
            en: "Precast prestressed girder segments are hoisted from below — no scaffolding on the ground beneath.",
            ar: "تُرفع القطع مسبقة الصب والإجهاد من الأسفل — دون سقالات على الأرض تحت الجسر.",
        },
    },
    {
        photo: "/images/projects/7aa7d308670e0142.jpg",
        title: { en: "Placed and stressed", ar: "التركيب والشد" },
        text: {
            en: "The segment is set on its bearings and post-tensioned using the BBR prestressing system.",
            ar: "تُثبت القطعة على مساندها وتُشد لاحقاً باستخدام نظام BBR للإجهاد المسبق.",
        },
    },
    {
        photo: "/images/projects/512a01b833173ee1.jpg",
        title: { en: "The machine launches forward", ar: "تنطلق الآلة إلى الأمام" },
        text: {
            en: "With the span complete, the girder launches itself to the next span and the sequence repeats.",
            ar: "بعد اكتمال الباع تدفع العارضة نفسها إلى الباع التالي وتتكرر الدورة.",
        },
    },
];

/**
 * Signature capability section. Anchored in documented work: the Dead Sea
 * Parkway bridges were erected with precast prestressed girders using the
 * BBR system and launching-girder technology.
 */
export function LaunchingGirder() {
    const { t, language, direction } = useLanguage();
    const [step, setStep] = useState(0);

    const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
    const prev = () => setStep((s) => Math.max(s - 1, 0));

    return (
        <Section className="bg-panel">
            <div dir={direction}>
                <div className="max-w-2xl mb-12">
                    <Reveal>
                        <SectionKicker
                            label={language === "ar" ? "قدرة مميزة" : "Signature capability"}
                        />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-5 display text-3xl md:text-[2.75rem] leading-[1.08] text-steel text-balance">
                            {language === "ar" ? "الآلة خلف الباع." : "The machine behind the span."}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-5 text-lg text-steel-soft leading-relaxed text-pretty">
                            {language === "ar"
                                ? "على طريق البحر الميت (الباركواي) أُنشئ جسران بقطع مسبقة الصب والإجهاد باستخدام نظام BBR وتقنية عارضة الإطلاق — نهج حاز جائزة التميز في الحفاظ على البيئة لأنه يبني الجسر من الأعلى دون المساس بالأرض تحته."
                                : "On the Dead Sea Parkway, two bridges were erected with precast prestressed girders using the BBR system and launching-girder technology — an approach that builds the bridge from above, leaving the terrain below untouched, and earned the project an Award of Excellence for preserving the environment."}
                        </p>
                    </Reveal>
                </div>

                <Reveal width="100%" delay={0.15}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch rounded-2xl md:rounded-[28px] bg-white shadow-card p-6 md:p-10">
                        {/* Real machine photography + drawing inset */}
                        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-panel min-h-[280px] md:min-h-[420px]">
                            <img
                                key={step}
                                src={optimizedSrc(STEPS[step].photo, 1080)}
                                alt={t(STEPS[step].title)}
                                className="absolute inset-0 h-full w-full object-cover animate-fade-up"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-steel/10 rounded-2xl" />
                            <span className="absolute top-4 start-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 font-mono text-[12px] text-blue tabular-nums shadow-card" dir="ltr">
                                {String(step + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
                            </span>
                            <span className="absolute top-4 end-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11.5px] font-medium text-steel-soft shadow-card">
                                {language === "ar" ? "طريق البحر الميت — صور المشروع" : "Dead Sea Parkway — project record"}
                            </span>
                        </div>

                        {/* Step controls */}
                        <div className="lg:col-span-5 flex flex-col">
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-semibold text-steel">
                                    {t(STEPS[step].title)}
                                </h3>
                                <p className="mt-3 text-[15.5px] text-steel-soft leading-relaxed">
                                    {t(STEPS[step].text)}
                                </p>
                            </div>

                            {/* Step list */}
                            <ol className="mt-6 space-y-1.5">
                                {STEPS.map((s, i) => (
                                    <li key={i}>
                                        <button
                                            onClick={() => setStep(i)}
                                            className={`w-full text-start flex items-center gap-3 rounded-xl px-3 py-2 text-[14px] transition-colors ${
                                                i === step
                                                    ? "bg-sky text-steel font-medium"
                                                    : "text-steel-soft hover:bg-panel"
                                            }`}
                                        >
                                            <span className="font-mono text-[11px] text-blue tabular-nums">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            {t(s.title)}
                                        </button>
                                    </li>
                                ))}
                            </ol>

                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex gap-2.5" dir="ltr">
                                    <button
                                        onClick={prev}
                                        disabled={step === 0}
                                        className="h-11 w-11 rounded-full border border-steel/15 flex items-center justify-center text-steel hover:bg-blue hover:border-blue hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-steel"
                                        aria-label="Previous step"
                                    >
                                        <ArrowLeft size={17} />
                                    </button>
                                    <button
                                        onClick={next}
                                        disabled={step === STEPS.length - 1}
                                        className="h-11 w-11 rounded-full border border-steel/15 flex items-center justify-center text-steel hover:bg-blue hover:border-blue hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-steel"
                                        aria-label="Next step"
                                    >
                                        <ArrowRight size={17} />
                                    </button>
                                </div>
                                <Link href="/engineering" className="link-arrow text-[14px]">
                                    {language === "ar" ? "لوحات الأسلوب الهندسي" : "Full method sheets"}
                                    <ArrowUpRight size={15} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
