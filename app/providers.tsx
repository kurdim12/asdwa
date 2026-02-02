"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    direction: "ltr" | "rtl";
    t: (obj: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Could persist to localStorage here
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) setLanguage(savedLang);
    }, []);

    const direction = language === "ar" ? "rtl" : "ltr";

    useEffect(() => {
        if (mounted) {
            document.documentElement.lang = language;
            document.documentElement.dir = direction;
            localStorage.setItem("language", language);
        }
    }, [language, direction, mounted]);

    // Helper to get text based on current language
    // Expects objects like { en: "Hello", ar: "مرحبا" }
    // Helper to get text based on current language
    // Expects objects like { en: "Hello", ar: "مرحبا" }
    const t = (obj: any) => {
        if (!obj) return "";
        if (typeof obj === "string") return obj;
        return obj[language] || obj["en"] || "";
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, direction, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
