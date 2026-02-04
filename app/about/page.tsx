"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, Award } from "lucide-react";
import { LightboxGallery } from "@/components/ui/LightboxGallery";

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState("overview");
    const { language } = useLanguage();

    const aboutSection = COMPANY_DATA.about.sections.find(s => s.id === "about_company");
    const historySection = COMPANY_DATA.about.sections.find(s => s.id === "company_history");
    const chairmanSection = COMPANY_DATA.about.sections.find(s => s.id === "chairman_word");

    const tabs = [
        { id: "overview", label: language === 'ar' ? "نبذة عامة" : "Overview" },
        { id: "history", label: language === 'ar' ? "التاريخ" : "History" },
        { id: "memberships", label: language === 'ar' ? "العضويات" : "Memberships" },
        { id: "leadership", label: language === 'ar' ? "كلمة الرئيس" : "Leadership" }
    ];

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="pt-32 pb-16 container mx-auto px-4 md:px-8">
                <Reveal>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                        {language === 'ar' ? "من نحن" : "About Us"}
                    </h1>
                </Reveal>

                {/* Tabs */}
                <div className="flex gap-8 border-b border-white/10 mb-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-4 text-sm font-heading font-bold uppercase tracking-widest transition-colors relative ${activeTab === tab.id ? "text-primary" : "text-white/40 hover:text-white"
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            {activeTab === "overview" && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-8"
                                >
                                    <h2 className="text-3xl font-heading font-bold text-white">
                                        {aboutSection?.title[language]}
                                    </h2>
                                    <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
                                        {aboutSection?.content?.[language]}
                                    </p>

                                    <div className="mt-8">
                                        <div className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded font-bold uppercase tracking-widest hover:bg-white transition-colors cursor-pointer">
                                            <Award size={20} />
                                            {language === 'ar' ? "تحميل ملف الشركة" : "Download Company Profile"}
                                        </div>
                                    </div>

                                    {/* 45 Years Badge Display if present */}
                                    <div className="mt-8">
                                        <img src="/images/legacy_45_years.png" alt="45 Years of Excellence" className="max-w-xs rounded-lg border border-white/10" />
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "history" && (
                                <motion.div
                                    key="history"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                        {historySection?.title[language]}
                                    </h2>
                                    <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
                                        {historySection?.description?.[language]}
                                    </p>

                                    <div className="mt-8 border-l border-white/10 pl-8 space-y-8">
                                        <div className="relative">
                                            <span className="absolute -left-[39px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-background" />
                                            <h3 className="text-white font-heading font-bold text-xl mb-2">1981</h3>
                                            <p className="text-white/60">
                                                {language === 'ar' ? "تأسيس الشركة" : "Company Established"}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "leadership" && (
                                <motion.div
                                    key="leadership"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                        {chairmanSection?.title[language]}
                                    </h2>
                                    <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-white/80 text-xl leading-relaxed mb-8">
                                        &quot;{chairmanSection?.content?.[language]}&quot;
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">MK</span>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold font-heading">Marwan Alkurdi</div>
                                            <div className="text-primary text-sm uppercase tracking-widest">Chairman & Founder</div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "memberships" && (
                                <motion.div
                                    key="memberships"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <h2 className="text-3xl font-heading font-bold text-white mb-6">
                                        {COMPANY_DATA.about.sections.find(s => s.id === "memberships")?.title[language]}
                                    </h2>
                                    <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line mb-8">
                                        {COMPANY_DATA.about.sections.find(s => s.id === "memberships")?.content?.[language]}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            { en: "First Grade Contractor (JCA)", ar: "مقاول درجة أولى (نقابة المقاولين)" },
                                            { en: "Arab Contractors Union", ar: "اتحاد المقاولين العرب" },
                                            { en: "Islamic Contractors Union", ar: "اتحاد المقاولين الإسلاميين" },
                                            { en: "Intl Real Estate Valuation (FIABCI)", ar: "الاتحاد العالمي للعقارات (FIABCI)" },
                                            { en: "Aqaba Special Economic Zone (ASEZA)", ar: "سلطة منطقة العقبة الاقتصادية (ASEZA)" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white/5 p-4 rounded border border-white/10 flex items-center gap-3">
                                                <Award className="text-primary shrink-0" size={24} />
                                                <span className="text-white font-medium">
                                                    {language === 'ar' ? item.ar : item.en}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Certificates Gallery */}
                                    <div className="mt-16 pt-16 border-t border-white/10">
                                        <h3 className="text-2xl font-heading font-bold text-white mb-8">
                                            {/* @ts-ignore */}
                                            {COMPANY_DATA.about.certifications.title[language]}
                                        </h3>
                                        <LightboxGallery
                                            /* @ts-ignore */
                                            images={COMPANY_DATA.about.certifications.images}
                                            /* @ts-ignore */
                                            title={COMPANY_DATA.about.certifications.title[language]}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Sidebar Image */}
                    <div className="hidden lg:block h-full min-h-[500px] bg-neutral-800 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/patterns/mesh.png')] opacity-20" />
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/legacy_45_years.png')", opacity: 0.8 }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
