"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/app/providers";

interface PageHeaderProps {
    index?: string;
    kicker: { en: string; ar: string } | string;
    title: { en: string; ar: string } | string;
    subtitle?: { en: string; ar: string } | string;
    align?: "start" | "center";
}

/** Light editorial page opener used at the top of every inner page. */
export function PageHeader({
    kicker,
    title,
    subtitle,
    align = "start",
}: PageHeaderProps) {
    const { t, direction } = useLanguage();
    const centered = align === "center";

    return (
        <header className="relative bg-white" dir={direction}>
            <div
                className={`relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-36 md:pt-44 pb-12 md:pb-16 ${
                    centered ? "text-center" : ""
                }`}
            >
                <Reveal width="100%">
                    <div
                        className={`flex items-center gap-2.5 ${
                            centered ? "justify-center" : ""
                        }`}
                    >
                        <span className="h-2 w-2 rounded-full bg-blue" />
                        <span className="eyebrow">{t(kicker)}</span>
                    </div>
                </Reveal>
                <Reveal width="100%" delay={0.1}>
                    <h1
                        className={`mt-5 display text-4xl md:text-6xl lg:text-[4.25rem] leading-[1.02] text-steel text-balance ${
                            centered ? "mx-auto" : ""
                        }`}
                    >
                        {t(title)}
                    </h1>
                </Reveal>
                {subtitle && (
                    <Reveal width="100%" delay={0.2}>
                        <p
                            className={`mt-6 text-lg md:text-xl text-steel-soft leading-relaxed text-pretty ${
                                centered ? "mx-auto max-w-2xl" : "max-w-2xl"
                            }`}
                        >
                            {t(subtitle)}
                        </p>
                    </Reveal>
                )}
            </div>
            <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16">
                <div className="hairline" />
            </div>
        </header>
    );
}
