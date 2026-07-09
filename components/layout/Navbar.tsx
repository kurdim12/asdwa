"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
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
                        ? "bg-white/90 backdrop-blur-xl border-b border-steel/10"
                        : "bg-white/70 backdrop-blur-md border-b border-transparent"
                )}
                dir={direction}
            >
                <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16">
                    <div className="flex items-center justify-between h-[72px] md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center shrink-0"
                            aria-label={t(COMPANY_DATA.company.name)}
                        >
                            <img
                                src="/images/logo.png"
                                alt={t(COMPANY_DATA.company.name)}
                                className="h-11 md:h-14 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div key={item.id} className="relative group">
                                    <Link
                                        href={item.url}
                                        className="text-[14.5px] font-medium text-steel-soft hover:text-steel px-3.5 py-2 rounded-full hover:bg-panel transition-colors flex items-center gap-1"
                                    >
                                        {t(item.label)}
                                        {item.submenu && (
                                            <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                                        )}
                                    </Link>

                                    {item.submenu && (
                                        <div className="absolute top-full start-0 pt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                                            <div className="bg-white rounded-2xl border border-steel/10 shadow-card-hover overflow-hidden p-2">
                                                {item.submenu.map((sub, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={sub.url || "/projects"}
                                                        className="block px-4 py-2.5 rounded-xl text-[14px] text-steel-soft hover:bg-panel hover:text-steel transition-colors"
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
                        <div className="flex items-center gap-2.5 md:gap-3">
                            <button
                                onClick={toggleLanguage}
                                className="text-[13.5px] font-medium text-steel-soft hover:text-steel border border-steel/15 hover:border-steel/30 rounded-full px-3.5 h-9 transition-colors"
                                aria-label="Toggle language"
                            >
                                {language === "en" ? "عربي" : "English"}
                            </button>

                            <Link
                                href="/contact"
                                className="hidden md:inline-flex items-center gap-1.5 h-10 px-5 rounded-full bg-blue text-white text-[14px] font-medium hover:bg-blue-dim transition-colors"
                            >
                                {language === "en" ? "Get in touch" : "تواصل معنا"}
                                <ArrowUpRight size={15} />
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-1.5 text-steel hover:text-blue transition-colors"
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
                        className="fixed inset-0 z-40 bg-white lg:hidden pt-28 px-6"
                        dir={direction}
                    >
                        <div className="flex flex-col divide-y divide-steel/10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.url}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-5 flex items-center justify-between group"
                                >
                                    <span className="display text-2xl text-steel group-hover:text-blue transition-colors">
                                        {t(item.label)}
                                    </span>
                                    <ArrowUpRight
                                        size={20}
                                        className="text-steel-faint group-hover:text-blue transition-colors"
                                    />
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="py-6 text-start text-[15px] font-medium text-steel-soft hover:text-blue transition-colors"
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
