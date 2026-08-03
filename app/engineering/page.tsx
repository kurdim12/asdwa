"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/app/providers";
import { optimizedSrc } from "@/components/ui/Pic";
import { X, ZoomIn, ArrowUpRight } from "lucide-react";

const SHEETS = [
    {
        src: "/images/engineering/launching-girder-plant.jpg",
        ref: "LG-10",
        title: {
            en: "Self-launching bridge girder plant",
            ar: "الرافعة الانسحابية",
        },
        text: {
            en: "The company's owned launching-girder plant erects prestressed box-girder bridges by segmental balanced cantilever — building the deck from above, with no falsework on the ground below.",
            ar: "الرافعة الانسحابية المملوكة للشركة تنشئ جسور العوارض الصندوقية مسبقة الإجهاد بأسلوب الكابولي المتوازن — يُبنى السطح من الأعلى دون سقالات على الأرض.",
        },
        related: { href: "/projects/Dead%20Sea%20Parkway", label: { en: "Used on the Dead Sea Parkway, Wadi Hamara Bridge, Abu Al-Asal Bridge, Karak Bridge, the Jamarat Bridges and the Irbid Ring Road", ar: "استُخدمت في طريق البحر الميت، جسر وادي حمارة، جسر أبو العسل، جسر الكرك، جسور الجمرات وطريق اربد الدائري" } },
        wide: true,
    },
    {
        src: "/images/engineering/launching-girder-operation.jpg",
        ref: "LG-09",
        title: { en: "The launching cycle", ar: "دورة الإطلاق" },
        text: {
            en: "Cast, stress, prepare, launch, advance, lock and reset — the typical cycle repeats span after span until the alignment is complete.",
            ar: "صب، شد، تجهيز، إطلاق، تقدم، تثبيت وإعادة ضبط — تتكرر الدورة باعاً بعد باع حتى اكتمال الفتحة.",
        },
        wide: true,
    },
    {
        src: "/images/engineering/prestressed-concrete.jpg",
        ref: "PC-06",
        title: { en: "Post-tensioned box girders", ar: "العوارض الصندوقية بالشد اللاحق" },
        text: {
            en: "High-strength steel strands are tensioned inside the concrete section, compressing it so long spans can carry traffic with slender profiles.",
            ar: "تُشد جدائل فولاذية عالية المقاومة داخل المقطع الخرساني فتضغطه، ليحمل الباع الطويل حركة المرور بمقاطع نحيفة.",
        },
        related: { href: "/projects?category=4", label: { en: "Prestress projects", ar: "مشاريع الشد اللاحق" } },
        wide: true,
    },
    {
        src: "/images/engineering/rcc-dam-construction.jpg",
        ref: "DAM-07",
        title: { en: "Roller-compacted concrete dams", ar: "سدود الخرسانة المدحولة" },
        text: {
            en: "The method behind Al Wehda: low-slump concrete placed in thin lifts and compacted by vibratory rollers — fast, dense, and suited to wide valleys.",
            ar: "الأسلوب المستخدم في سد الوحدة: خرسانة منخفضة الهطول تُفرش بطبقات رقيقة وتُدحل بالهزازات — سرعة وكثافة وملاءمة للوديان الواسعة.",
        },
        related: { href: "/projects/Al%20Wehda%20Dam", label: { en: "Al Wehda Dam project", ar: "مشروع سد الوحدة" } },
        wide: true,
    },
    {
        src: "/images/engineering/deep-well-drilling.jpg",
        ref: "WW-04",
        title: { en: "Deep water-well drilling", ar: "حفر آبار المياه العميقة" },
        text: {
            en: "From rotary drilling and mud circulation to casing, screens, gravel pack and development — how a production well reaches deep aquifers.",
            ar: "من الحفر الدوراني ودورة الطين إلى التغليف والمصافي والحصوة والتطوير — هكذا يصل بئر الإنتاج إلى الطبقات الجوفية العميقة.",
        },
        related: { href: "/services/water_wells", label: { en: "Water wells service", ar: "خدمة آبار المياه" } },
        wide: false,
    },
];

export default function EngineeringPage() {
    const { t, language, direction } = useLanguage();
    const [open, setOpen] = useState<number | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <main className="bg-white min-h-screen" dir={direction}>
            <Navbar />

            <PageHeader
                kicker={{ en: "The engineering behind it", ar: "الهندسة خلف العمل" }}
                title={{ en: "How complex infrastructure gets built", ar: "كيف تُبنى البنية التحتية المعقدة" }}
                subtitle={{
                    en: "Method sheets from our engineering practice — how launching girders, prestressing, roller-compacted concrete and deep drilling actually work.",
                    ar: "لوحات توضح أساليب عملنا الهندسي — كيف تعمل عوارض الإطلاق والشد اللاحق والخرسانة المدحولة والحفر العميق.",
                }}
            />

            <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-14 md:py-20 space-y-16 md:space-y-24">
                {SHEETS.map((sheet, i) => (
                    <Reveal key={i} width="100%">
                        <figure className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                            <button
                                onClick={() => setOpen(i)}
                                className={`group relative block w-full overflow-hidden rounded-2xl md:rounded-[28px] bg-panel ring-1 ring-steel/10 ${
                                    sheet.wide ? "lg:col-span-8" : "lg:col-span-5"
                                }`}
                                aria-label={t(sheet.title)}
                            >
                                <img
                                    src={optimizedSrc(sheet.src, 1080)}
                                    alt={t(sheet.title)}
                                    loading={i > 0 ? "lazy" : undefined}
                                    className="w-full h-auto"
                                />
                                <span className="absolute top-3.5 end-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur text-steel opacity-0 group-hover:opacity-100 transition-opacity shadow-card">
                                    <ZoomIn size={16} />
                                </span>
                            </button>
                            <figcaption className={sheet.wide ? "lg:col-span-4" : "lg:col-span-7"}>
                                <div className="font-mono text-[11px] text-steel-faint" dir="ltr">
                                    MK / METHOD SHEET {sheet.ref}
                                </div>
                                <h2 className="mt-3 display text-2xl md:text-3xl text-steel text-balance">
                                    {t(sheet.title)}
                                </h2>
                                <p className="mt-4 text-[15.5px] text-steel-soft leading-relaxed">
                                    {t(sheet.text)}
                                </p>
                                {sheet.related && (
                                    <Link href={sheet.related.href} className="link-arrow mt-6 text-[14.5px]">
                                        {t(sheet.related.label)}
                                        <ArrowUpRight size={15} />
                                    </Link>
                                )}
                                <p className="mt-6 text-[12.5px] text-steel-faint leading-relaxed">
                                    {language === "ar"
                                        ? "لوحة توضيحية للأسلوب — قيم نموذجية، وليست مخطط مشروع."
                                        : "Illustrative method sheet — typical values, not a project drawing."}
                                </p>
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </section>

            {/* Zoom overlay */}
            <AnimatePresence>
                {open !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur flex items-center justify-center p-4 md:p-8"
                        onClick={() => setOpen(null)}
                    >
                        <button
                            className="absolute top-5 end-5 text-white/70 hover:text-white transition-colors p-2 z-10"
                            onClick={() => setOpen(null)}
                            aria-label="Close"
                        >
                            <X size={30} />
                        </button>
                        <img
                            src={SHEETS[open].src}
                            alt={t(SHEETS[open].title)}
                            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
