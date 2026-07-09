"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plus, ArrowUpRight } from "lucide-react";
import { COMPANY_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/app/providers";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t, direction } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = COMPANY_DATA.navigation.mainMenu;
    const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md border-b border-steel/10 shadow-sm shadow-navy/5"
                        : "bg-white/80 backdrop-blur-sm border-b border-steel/5"
                )}
                dir={direction}
            >
                {/* Top utility strip */}
                <div className="hidden md:block bg-navy text-white/70">
                    <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 flex items-center justify-between h-8 font-mono text-[10px] uppercase tracking-[0.18em]">
                        <span>
                            {language === "ar"
                                ? "مقاول درجة أولى — منذ ١٩٨١"
                                : "First Grade Contractor — Est. 1981"}
                        </span>
                        <div className="flex items-center gap-6" dir="ltr">
                            <a
                                href={`tel:${COMPANY_DATA.contact.phone}`}
                                className="hover:text-white transition-colors"
                            >
                                {COMPANY_DATA.contact.phone}
                            </a>
                            <a
                                href={`mailto:${COMPANY_DATA.contact.email}`}
                                className="hover:text-white transition-colors"
                            >
                                {COMPANY_DATA.contact.email}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16">
                    <div className="flex items-center justify-between h-16 md:h-[76px]">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center shrink-0"
                            aria-label={t(COMPANY_DATA.company.name)}
                        >
                            <img
                                src="/images/logo.png"
                                alt={t(COMPANY_DATA.company.name)}
                                className="h-11 md:h-[52px] w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden lg:flex items-center gap-7">
                            {navItems.map((item) => (
                                <div key={item.id} className="relative group">
                                    <Link
                                        href={item.url}
                                        className="font-mono text-[12px] uppercase tracking-[0.14em] text-steel-soft hover:text-blue transition-colors py-2 flex items-center gap-1"
                                    >
                                        {t(item.label)}
                                        {item.submenu && <Plus className="w-3 h-3 opacity-50" />}
                                    </Link>

                                    {item.submenu && (
                                        <div className="absolute top-full start-0 pt-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                                            <div className="bg-white border border-steel/10 border-t-2 border-t-blue shadow-xl shadow-navy/10 overflow-hidden">
                                                {item.submenu.map((sub, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={sub.url || "/projects"}
                                                        className="block px-4 py-3 text-[13px] text-steel-soft hover:bg-sky hover:text-navy transition-colors border-b border-steel/5 last:border-0"
                                                    >
                                                        {t(sub.label)}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-4 md:gap-5">
                            <button
                                onClick={toggleLanguage}
                                className="font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-steel border border-steel/20 px-2.5 py-1 hover:border-blue hover:text-blue transition-colors"
                                aria-label="Toggle language"
                            >
                                {language === "en" ? "عربي" : "EN"}
                            </button>

                            <Link
                                href="/contact"
                                className="hidden md:inline-flex items-center gap-2 h-10 px-5 bg-blue text-white font-mono text-[12px] uppercase tracking-[0.16em] hover:bg-navy transition-colors"
                            >
                                {language === "en" ? "Get in Touch" : "تواصل معنا"}
                                <ArrowUpRight size={14} />
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-1 text-steel hover:text-blue transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 bg-navy lg:hidden pt-24 px-6 grid-overlay-dark"
                        dir={direction}
                    >
                        <div className="flex flex-col divide-y divide-white/10">
                            {navItems.map((item, i) => (
                                <Link
                                    key={item.id}
                                    href={item.url}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-5 flex items-baseline gap-4 group"
                                >
                                    <span className="font-mono text-xs text-blue-bright tabular-nums">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="display text-2xl text-white group-hover:text-blue-bright transition-colors">
                                        {t(item.label)}
                                    </span>
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="py-6 text-start font-mono text-sm uppercase tracking-[0.18em] text-white/60 hover:text-blue-bright transition-colors"
                            >
                                {language === "en" ? "التبديل إلى العربية" : "Switch to English"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
