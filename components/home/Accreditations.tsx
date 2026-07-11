"use client";

import { Award, ShieldCheck, Landmark, Globe2, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/app/providers";

const ITEMS = [
    {
        icon: ShieldCheck,
        label: { en: "First Grade Contractor — JCA", ar: "مقاول درجة أولى — نقابة المقاولين" },
    },
    {
        icon: Landmark,
        label: { en: "Arab Contractors Union", ar: "اتحاد المقاولين العرب" },
    },
    {
        icon: Award,
        label: { en: "Islamic Contractors Union", ar: "اتحاد المقاولين الإسلاميين" },
    },
    {
        icon: Globe2,
        label: { en: "FIABCI Member", ar: "عضو FIABCI" },
    },
    {
        icon: BadgeCheck,
        label: { en: "ASEZA Registered", ar: "مسجلون لدى سلطة العقبة" },
    },
];

/** Slim accreditation strip — documented memberships, shown as trust badges. */
export function Accreditations() {
    const { t, language, direction } = useLanguage();

    return (
        <section className="bg-white border-y border-steel/10" dir={direction}>
            <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-8 md:py-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                    <span className="text-[13px] font-semibold text-steel-faint shrink-0">
                        {language === "ar" ? "اعتمادات وعضويات" : "Accredited & classified"}
                    </span>
                    <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
                        {ITEMS.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <li key={i} className="flex items-center gap-2.5 text-[14px] font-medium text-steel-soft">
                                    <Icon size={18} className="text-blue shrink-0" />
                                    {t(item.label)}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
