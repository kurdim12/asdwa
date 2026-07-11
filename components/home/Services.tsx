"use client";

import { Section, SectionKicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { Pic } from "@/components/ui/Pic";

export function Services() {
    const { mainServices } = COMPANY_DATA.services;
    const { label, title } = COMPANY_DATA.homeComponents.services;
    const { t, language, direction } = useLanguage();

    return (
        <Section className="bg-panel">
            <div dir={direction}>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <Reveal>
                            <SectionKicker label={t(label)} />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-5 display text-3xl md:text-[2.75rem] leading-[1.08] text-steel text-balance max-w-xl">
                                {t(title)}
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <Link href="/services" className="link-arrow shrink-0">
                            {language === "ar" ? "كل الخدمات" : "View all services"}
                            <ArrowUpRight size={16} />
                        </Link>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {mainServices.map((service, index) => {
                        const illustration = (service as any).illustration as string | undefined;
                        const thumb = `/${(service as any).gallery?.[0] || "images/logo.jpg"}`;
                        return (
                            <Reveal key={service.id} delay={0.1 + index * 0.07} width="100%">
                                <Link
                                    href={`/services/${service.id}`}
                                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-shadow"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        {illustration ? (
                                            <div className="absolute inset-0 bg-sky flex items-center justify-center p-6 transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]">
                                                <img
                                                    src={illustration}
                                                    alt={t(service.title)}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <Pic
                                                src={thumb}
                                                alt={t(service.title)}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-1 flex-col p-5 md:p-6">
                                        <h3 className="text-[17px] font-semibold text-steel group-hover:text-blue transition-colors">
                                            {t(service.title)}
                                        </h3>
                                        <p className="mt-2 text-[14px] leading-relaxed text-steel-soft line-clamp-3">
                                            {t(service.description)}
                                        </p>
                                        <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-blue">
                                            {language === "ar" ? "اكتشف المزيد" : "Explore"}
                                            <ArrowUpRight
                                                size={15}
                                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
