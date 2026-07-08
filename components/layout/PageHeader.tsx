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

export function PageHeader({
    index,
    kicker,
    title,
    subtitle,
    align = "start",
}: PageHeaderProps) {
    const { t, direction } = useLanguage();
    const centered = align === "center";

    return (
        <header
            className="relative bg-paper border-b border-ink/10 overflow-hidden"
            dir={direction}
        >
            <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
            <div
                className={`relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-32 md:pt-44 pb-14 md:pb-20 ${
                    centered ? "text-center" : ""
                }`}
            >
                <Reveal width="100%">
                    <div
                        className={`flex items-center gap-3 ${
                            centered ? "justify-center" : ""
                        }`}
                    >
                        {index && <span className="index-num text-[12px]">{index}</span>}
                        <span className="h-px w-8 bg-brass/50" />
                        <span className="eyebrow">{t(kicker)}</span>
                    </div>
                </Reveal>
                <Reveal width="100%" delay={0.1}>
                    <h1
                        className={`mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-ink ${
                            centered ? "mx-auto" : ""
                        }`}
                    >
                        {t(title)}
                    </h1>
                </Reveal>
                {subtitle && (
                    <Reveal width="100%" delay={0.2}>
                        <p
                            className={`mt-6 text-lg md:text-xl text-ink-soft leading-relaxed text-pretty ${
                                centered ? "mx-auto max-w-2xl" : "max-w-2xl"
                            }`}
                        >
                            {t(subtitle)}
                        </p>
                    </Reveal>
                )}
            </div>
        </header>
    );
}
