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

/** Dark navy blueprint band used at the top of every inner page. */
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
            className="relative bg-navy text-white overflow-hidden"
            dir={direction}
        >
            <div className="absolute inset-0 grid-overlay-dark opacity-70 pointer-events-none" />
            {/* corner crosshairs */}
            <span className="absolute top-24 start-6 md:start-10 lg:start-16 font-mono text-blue-bright/40 select-none hidden md:block">
                +
            </span>
            <span className="absolute bottom-8 end-6 md:end-10 lg:end-16 font-mono text-blue-bright/40 select-none hidden md:block">
                +
            </span>

            <div
                className={`relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-36 md:pt-48 pb-14 md:pb-20 ${
                    centered ? "text-center" : ""
                }`}
            >
                <Reveal width="100%">
                    <div
                        className={`flex items-center gap-3 ${
                            centered ? "justify-center" : ""
                        }`}
                    >
                        {index && (
                            <span className="font-mono text-[12px] text-blue-bright tabular-nums">
                                {index}
                            </span>
                        )}
                        <span className="h-px w-10 bg-blue-bright/50" />
                        <span className="eyebrow-dark">{t(kicker)}</span>
                    </div>
                </Reveal>
                <Reveal width="100%" delay={0.1}>
                    <h1
                        className={`mt-6 display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-white ${
                            centered ? "mx-auto" : ""
                        }`}
                    >
                        {t(title)}
                    </h1>
                </Reveal>
                {subtitle && (
                    <Reveal width="100%" delay={0.2}>
                        <p
                            className={`mt-6 text-lg md:text-xl text-white/60 leading-relaxed text-pretty ${
                                centered ? "mx-auto max-w-2xl" : "max-w-2xl"
                            }`}
                        >
                            {t(subtitle)}
                        </p>
                    </Reveal>
                )}
            </div>

            {/* Bottom keyline */}
            <div className="relative h-1 bg-blue" />
        </header>
    );
}
