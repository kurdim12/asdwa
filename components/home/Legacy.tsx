"use client";

import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";
import { Trophy, Users, Building, ShieldCheck } from "lucide-react";

export function Legacy() {
    const { language } = useLanguage();

    // Map string icon names to Lucide components
    const iconMap: Record<string, any> = {
        "Trophy": Trophy,
        "Building": Building,
        "Users": Users,
        "ShieldCheck": ShieldCheck
    };

    return (
        <Section className="bg-background relative">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                {/* Text Content */}
                <div className="flex-1">
                    <Reveal>
                        <h4 className="text-primary font-heading uppercase tracking-widest text-sm mb-4">
                            {COMPANY_DATA.legacy.subtitle[language]}
                        </h4>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight whitespace-pre-line">
                            {COMPANY_DATA.legacy.title[language]}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-white/60 text-lg leading-relaxed mb-8 whitespace-pre-line">
                            {COMPANY_DATA.legacy.description[language]}
                        </p>
                    </Reveal>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-2 gap-8 mt-12">
                        {COMPANY_DATA.stats.map((stat, i) => {
                            const IconComponent = iconMap[stat.icon];
                            return (
                                <Reveal key={i} delay={0.5 + (i * 0.1)}>
                                    <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                                        {IconComponent && <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />}
                                        <div>
                                            <div className="text-3xl font-heading font-bold text-white">{stat.value}</div>
                                            <div className="text-sm text-white/50">{stat.label[language]}</div>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>

                {/* Visual / Image */}
                <div className="flex-1 w-full h-[500px] relative">
                    <Reveal width="100%" delay={0.6}>
                        <div className="w-full h-[500px] bg-neutral-800 rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                            <img
                                src={`/${COMPANY_DATA.legacy.image}`}
                                alt="45 Years Experience"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
