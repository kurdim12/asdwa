"use client";

import Link from "next/link";
import { COMPANY_DATA } from "@/lib/data";
import { Facebook, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/providers";

export function Footer() {
    const { company, contact, social, footer } = COMPANY_DATA;
    const { t, language, direction } = useLanguage();
    const currentYear = new Date().getFullYear();

    const linkFor = (id: string) =>
        COMPANY_DATA.navigation.mainMenu.find((i) => i.id === id);

    return (
        <footer className="relative bg-navy-deep text-white overflow-hidden" dir={direction}>
            {/* Blueprint bridge backdrop */}
            <img
                src="/illustrations/blueprint-bridge.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute top-0 end-0 h-[420px] w-auto max-w-none opacity-50"
            />
            <div className="relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-20 md:pt-24 pb-10">
                {/* Top: CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
                    <div className="lg:col-span-8">
                        <span className="eyebrow-dark">
                            {language === "ar" ? "لنبنِ معاً" : "Let's build together"}
                        </span>
                        <h2 className="mt-5 display text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-white text-balance">
                            {language === "ar"
                                ? "لنتحدث عن مشروعكم القادم."
                                : "Let's talk about your next project."}
                        </h2>
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-full text-[15px] font-medium text-navy bg-white px-7 h-12 hover:bg-sky transition-colors"
                        >
                            {language === "ar" ? "ابدأ محادثة" : "Start a conversation"}
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            {t(footer?.description)}
                        </p>
                    </div>
                </div>

                {/* Middle: link columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
                    <div className="col-span-2 md:col-span-1">
                        <img
                            src="/images/logo-white.png"
                            alt={t(company.name)}
                            className="w-full max-w-[220px] h-auto object-contain"
                        />
                        <a
                            href={social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex w-10 h-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:bg-white hover:text-navy hover:border-white transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={17} />
                        </a>
                    </div>

                    <div>
                        <h3 className="text-[13px] font-semibold text-white/40 mb-5">
                            {t(footer?.navigation)}
                        </h3>
                        <ul className="space-y-3 text-[14.5px] text-white/70">
                            {["about", "services", "projects", "references", "news", "contact"].map(
                                (id) => (
                                    <li key={id}>
                                        <Link
                                            href={linkFor(id)?.url || "/"}
                                            className="hover:text-white transition-colors"
                                        >
                                            {t(linkFor(id)?.label)}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[13px] font-semibold text-white/40 mb-5">
                            {t(footer?.services)}
                        </h3>
                        <ul className="space-y-3 text-[14.5px] text-white/70">
                            {COMPANY_DATA.services.mainServices.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="hover:text-white transition-colors"
                                    >
                                        {t(service.title)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[13px] font-semibold text-white/40 mb-5">
                            {t(footer?.contact)}
                        </h3>
                        <ul className="space-y-4 text-[14.5px] text-white/70">
                            <li className="leading-relaxed">{t(contact.address)}</li>
                            <li>
                                <a
                                    href={`tel:${contact.phone}`}
                                    className="hover:text-white transition-colors"
                                    dir="ltr"
                                >
                                    {contact.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12.5px] text-white/40">
                    <p>
                        &copy; {currentYear} {t(company.name)}. {t(footer?.rights)}
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            {t(footer?.privacy)}
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            {t(footer?.terms)}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
