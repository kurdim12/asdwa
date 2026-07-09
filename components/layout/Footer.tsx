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
        <footer
            className="relative bg-navy-deep text-white overflow-hidden"
            dir={direction}
        >
            <div className="absolute inset-0 grid-overlay-dark opacity-50 pointer-events-none" />
            {/* Blue keyline at the very top */}
            <div className="relative h-1 bg-blue" />

            <div className="relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-10">
                {/* Top: CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
                    <div className="lg:col-span-8">
                        <span className="eyebrow-dark">
                            {language === "ar" ? "لنبنِ معاً" : "Let's build together"}
                        </span>
                        <h2 className="mt-6 display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-white text-balance">
                            {language === "ar"
                                ? "هندسة المشروع القادم في الأردن."
                                : "Engineering Jordan's next landmark."}
                        </h2>
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.18em] text-white bg-blue px-6 h-12 hover:bg-blue-bright transition-colors"
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
                    <div className="col-span-2 md:col-span-1">
                        <img
                            src="/images/logo-white.png"
                            alt={t(company.name)}
                            className="w-full max-w-[240px] h-auto object-contain"
                        />
                        <a
                            href={social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex w-10 h-10 items-center justify-center border border-white/15 text-white/70 hover:bg-blue hover:text-white hover:border-blue transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={18} />
                        </a>
                    </div>

                    <div>
                        <h3 className="font-mono text-[11px] uppercase tracking-label text-white/40 mb-5">
                            {t(footer?.navigation)}
                        </h3>
                        <ul className="space-y-3 text-sm text-white/70">
                            {["about", "services", "projects", "references", "news", "contact"].map(
                                (id) => (
                                    <li key={id}>
                                        <Link
                                            href={linkFor(id)?.url || "/"}
                                            className="hover:text-blue-bright transition-colors"
                                        >
                                            {t(linkFor(id)?.label)}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-mono text-[11px] uppercase tracking-label text-white/40 mb-5">
                            {t(footer?.services)}
                        </h3>
                        <ul className="space-y-3 text-sm text-white/70">
                            {COMPANY_DATA.services.mainServices.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="hover:text-blue-bright transition-colors"
                                    >
                                        {t(service.title)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-mono text-[11px] uppercase tracking-label text-white/40 mb-5">
                            {t(footer?.contact)}
                        </h3>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="leading-relaxed">{t(contact.address)}</li>
                            <li>
                                <a
                                    href={`tel:${contact.phone}`}
                                    className="hover:text-blue-bright transition-colors"
                                    dir="ltr"
                                >
                                    {contact.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="hover:text-blue-bright transition-colors"
                                >
                                    {contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
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
