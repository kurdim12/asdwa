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
            className="relative bg-charcoal text-paper overflow-hidden"
            dir={direction}
        >
            <div className="absolute inset-0 grid-overlay-dark opacity-60 pointer-events-none" />

            <div className="relative mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-10">
                {/* Top: giant editorial CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
                    <div className="lg:col-span-8">
                        <span className="font-mono text-[11px] uppercase tracking-label text-brass-soft">
                            {language === "ar" ? "لنبنِ معاً" : "Let's build together"}
                        </span>
                        <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-paper text-balance">
                            {language === "ar"
                                ? "هندسة المشروع القادم في الأردن."
                                : "Engineering Jordan's next landmark."}
                        </h2>
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.18em] text-paper border-b border-brass pb-1 hover:text-brass-soft transition-colors"
                        >
                            {language === "ar" ? "ابدأ محادثة" : "Start a conversation"}
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <p className="text-paper/50 text-sm leading-relaxed max-w-xs">
                            {t(footer?.description)}
                        </p>
                    </div>
                </div>

                {/* Middle: link columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
                    <div className="col-span-2 md:col-span-1">
                        {/* White knockout of the brand logo for the dark footer */}
                        <img
                            src="/images/logo.png"
                            alt={t(company.name)}
                            className="h-16 w-auto object-contain [filter:brightness(0)_invert(1)] opacity-90"
                        />
                        <a
                            href={social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex w-10 h-10 items-center justify-center border border-white/15 text-paper/70 hover:bg-brass hover:text-white hover:border-brass transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={18} />
                        </a>
                    </div>

                    <div>
                        <h3 className="font-mono text-[11px] uppercase tracking-label text-paper/40 mb-5">
                            {t(footer?.navigation)}
                        </h3>
                        <ul className="space-y-3 text-sm text-paper/70">
                            {["about", "services", "projects", "references", "news", "contact"].map(
                                (id) => (
                                    <li key={id}>
                                        <Link
                                            href={linkFor(id)?.url || "/"}
                                            className="hover:text-brass-soft transition-colors"
                                        >
                                            {t(linkFor(id)?.label)}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-mono text-[11px] uppercase tracking-label text-paper/40 mb-5">
                            {t(footer?.services)}
                        </h3>
                        <ul className="space-y-3 text-sm text-paper/70">
                            {COMPANY_DATA.services.mainServices.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="hover:text-brass-soft transition-colors"
                                    >
                                        {t(service.title)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-mono text-[11px] uppercase tracking-label text-paper/40 mb-5">
                            {t(footer?.contact)}
                        </h3>
                        <ul className="space-y-4 text-sm text-paper/70">
                            <li className="leading-relaxed">{t(contact.address)}</li>
                            <li>
                                <a
                                    href={`tel:${contact.phone}`}
                                    className="hover:text-brass-soft transition-colors"
                                    dir="ltr"
                                >
                                    {contact.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="hover:text-brass-soft transition-colors"
                                >
                                    {contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/40">
                    <p>
                        &copy; {currentYear} {t(company.name)}. {t(footer?.rights)}
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-paper transition-colors">
                            {t(footer?.privacy)}
                        </Link>
                        <Link href="/terms" className="hover:text-paper transition-colors">
                            {t(footer?.terms)}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
