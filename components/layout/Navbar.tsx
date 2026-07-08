"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plus } from "lucide-react";
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
                    "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-paper/90 backdrop-blur-md border-ink/10"
                        : "bg-paper/60 backdrop-blur-sm border-transparent"
                )}
                dir={direction}
            >
                <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Wordmark */}
                        <Link href="/" className="flex items-center gap-3 group shrink-0">
                            <span className="flex flex-col leading-none">
                                <span className="font-display text-xl md:text-2xl text-ink tracking-tight">
                                    Alkurdi
                                </span>
                                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-ink-soft mt-1">
                                    &amp; Partners · Est. 1981
                                </span>
                            </span>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <div key={item.id} className="relative group">
                                    <Link
                                        href={item.url}
                                        className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-soft hover:text-ink transition-colors py-2 flex items-center gap-1"
                                    >
                                        {t(item.label)}
                                        {item.submenu && <Plus className="w-3 h-3 opacity-50" />}
                                    </Link>

                                    {item.submenu && (
                                        <div className="absolute top-full start-0 pt-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                                            <div className="bg-surface border border-ink/10 shadow-xl shadow-ink/5 overflow-hidden">
                                                {item.submenu.map((sub, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={sub.url || "/projects"}
                                                        className="block px-4 py-3 text-[13px] text-ink-soft hover:bg-concrete hover:text-ink transition-colors border-b border-ink/5 last:border-0"
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
                        <div className="flex items-center gap-4 md:gap-6">
                            <button
                                onClick={toggleLanguage}
                                className="font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-ink hover:text-brass transition-colors"
                                aria-label="Toggle language"
                            >
                                {language === "en" ? "AR" : "EN"}
                            </button>

                            <Link
                                href="/contact"
                                className="hidden md:inline-flex items-center h-10 px-5 bg-charcoal text-paper font-mono text-[12px] uppercase tracking-[0.16em] hover:bg-brass hover:text-white transition-colors"
                            >
                                {language === "en" ? "Get in Touch" : "تواصل معنا"}
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-1 text-ink hover:text-brass transition-colors"
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
                        className="fixed inset-0 z-40 bg-paper lg:hidden pt-24 px-6 grid-overlay"
                        dir={direction}
                    >
                        <div className="flex flex-col divide-y divide-ink/10">
                            {navItems.map((item, i) => (
                                <Link
                                    key={item.id}
                                    href={item.url}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-5 flex items-baseline gap-4 group"
                                >
                                    <span className="index-num text-xs">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="font-display text-3xl text-ink group-hover:text-brass transition-colors">
                                        {t(item.label)}
                                    </span>
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="py-6 text-start font-mono text-sm uppercase tracking-[0.18em] text-ink-soft hover:text-brass transition-colors"
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
