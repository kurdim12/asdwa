"use client";

import Link from "next/link";
import { COMPANY_DATA } from "@/lib/data";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/app/providers";

export function Footer() {
    const { company, contact, social, footer } = COMPANY_DATA;
    const { t, language, direction } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 border-t border-white/10" dir={direction}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-heading font-bold text-primary">MKURDI.</h2>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            {t(footer?.description || `Building the foundation of modern infrastructure with over ${company.established} of excellence.`)}
                        </p>
                        <div className="flex gap-4">
                            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-heading font-bold mb-6 text-white">{t(footer?.navigation || "Navigation")}</h3>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/about" className="hover:text-primary transition-colors">{t(COMPANY_DATA.navigation.mainMenu.find(i => i.id === 'about')?.label)}</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">{t(COMPANY_DATA.navigation.mainMenu.find(i => i.id === 'services')?.label)}</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">{t(COMPANY_DATA.navigation.mainMenu.find(i => i.id === 'projects')?.label)}</Link></li>
                            <li><Link href="/news" className="hover:text-primary transition-colors">{t(COMPANY_DATA.navigation.mainMenu.find(i => i.id === 'news')?.label)}</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">{t(COMPANY_DATA.navigation.mainMenu.find(i => i.id === 'contact')?.label)}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-heading font-bold mb-6 text-white">{t(footer?.services || "Services")}</h3>
                        <ul className="space-y-3 text-sm text-white/60">
                            {COMPANY_DATA.services.mainServices.map(service => (
                                <li key={service.id}>{t(service.title)}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-heading font-bold mb-6 text-white">{t(footer?.contact || "Contact")}</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>{t(contact.address)}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors" dir="ltr">{contact.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>&copy; {currentYear} {t(company.name)}. {t(footer?.rights || "All Rights Reserved.")}</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t(footer?.privacy || "Privacy Policy")}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t(footer?.terms || "Terms of Service")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
