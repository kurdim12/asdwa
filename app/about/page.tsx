"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import { LightboxGallery } from "@/components/ui/LightboxGallery";

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState("overview");
    const { language, t, direction } = useLanguage();

    const aboutSection = COMPANY_DATA.about.sections.find((s) => s.id === "about_company");
    const historySection = COMPANY_DATA.about.sections.find((s) => s.id === "company_history");
    const chairmanSection = COMPANY_DATA.about.sections.find((s) => s.id === "chairman_word");
    const membershipsSection = COMPANY_DATA.about.sections.find((s) => s.id === "memberships");

    const tabs = [
        { id: "overview", label: { en: "Overview", ar: "نبذة عامة" } },
        { id: "history", label: { en: "History", ar: "التاريخ" } },
        { id: "memberships", label: { en: "Memberships", ar: "العضويات" } },
        { id: "leadership", label: { en: "Leadership", ar: "كلمة الرئيس" } },
    ];

    return (
        <main className="bg-paper min-h-screen">
            <Navbar />

            <PageHeader
                index="A / 01"
                kicker={{ en: "Who We Are", ar: "من نحن" }}
                title={{ en: "About the firm", ar: "من نحن" }}
                subtitle={{
                    en: "Four and a half decades of shaping Jordan's infrastructure — from private buildings in Zarqa to national dams, highways, and bridges.",
                    ar: "أربعة عقود ونصف من تشكيل البنية التحتية في الأردن — من الأبنية الخاصة في الزرقاء إلى السدود والطرق والجسور الوطنية.",
                }}
            />

            <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-16 md:py-24" dir={direction}>
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-ink/10 mb-14">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-5 py-4 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors ${
                                activeTab === tab.id ? "text-ink" : "text-ink-faint hover:text-ink-soft"
                            }`}
                        >
                            {t(tab.label)}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="aboutTab"
                                    className="absolute -bottom-px inset-x-0 h-0.5 bg-brass"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            {activeTab === "overview" && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    className="space-y-8"
                                >
                                    <h2 className="display text-3xl md:text-4xl text-ink">
                                        {t(aboutSection?.title)}
                                    </h2>
                                    <p className="text-lg text-ink-soft leading-relaxed whitespace-pre-line text-pretty">
                                        {aboutSection?.content?.[language]}
                                    </p>
                                    <a
                                        href="/documents/company_profile.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="inline-flex items-center gap-2 bg-charcoal text-paper px-6 h-12 font-mono text-[12px] uppercase tracking-[0.16em] hover:bg-brass hover:text-white transition-colors"
                                    >
                                        <Award size={16} />
                                        {language === "ar" ? "تحميل ملف الشركة" : "Download Company Profile"}
                                    </a>
                                </motion.div>
                            )}

                            {activeTab === "history" && (
                                <motion.div
                                    key="history"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                >
                                    <h2 className="display text-3xl md:text-4xl text-ink mb-6">
                                        {t(historySection?.title)}
                                    </h2>
                                    <p className="text-lg text-ink-soft leading-relaxed whitespace-pre-line text-pretty">
                                        {historySection?.description?.[language]}
                                    </p>

                                    <div className="mt-12 border-s-2 border-brass/40 ps-8 space-y-10">
                                        {[
                                            { year: "1981", en: "Founded in Zarqa as Modern Zarqa Establishment", ar: "التأسيس في الزرقاء" },
                                            { year: "1990s", en: "Expansion into dams, bridges & highways", ar: "التوسع في السدود والجسور والطرق" },
                                            { year: "2000s", en: "Regional reach — bridge construction in Saudi Arabia", ar: "توسع إقليمي — جسور في السعودية" },
                                            { year: "Today", en: "First-grade contractor, 45+ years strong", ar: "مقاول درجة أولى، أكثر من ٤٥ عاماً" },
                                        ].map((m, i) => (
                                            <div key={i} className="relative">
                                                <span className="absolute -start-[41px] top-1.5 w-4 h-4 bg-brass rounded-full ring-4 ring-paper" />
                                                <h3 className="display text-2xl text-ink mb-1">{m.year}</h3>
                                                <p className="text-ink-soft">{language === "ar" ? m.ar : m.en}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "leadership" && (
                                <motion.div
                                    key="leadership"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                >
                                    <h2 className="display text-3xl md:text-4xl text-ink mb-8">
                                        {t(chairmanSection?.title)}
                                    </h2>
                                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-navy border-s-4 border-blue ps-6">
                                        {chairmanSection?.content?.[language]}
                                    </blockquote>
                                    <div className="flex items-center gap-4 mt-10">
                                        <div className="w-14 h-14 bg-charcoal text-paper flex items-center justify-center display text-xl">
                                            MK
                                        </div>
                                        <div>
                                            <div className="text-ink font-medium">
                                                {language === "ar" ? "مروان الكردي" : "Marwan Alkurdi"}
                                            </div>
                                            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass mt-1">
                                                {language === "ar" ? "رئيس مجلس الإدارة والمؤسس" : "Chairman & Founder"}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "memberships" && (
                                <motion.div
                                    key="memberships"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                >
                                    <h2 className="display text-3xl md:text-4xl text-ink mb-6">
                                        {t(membershipsSection?.title)}
                                    </h2>
                                    <p className="text-lg text-ink-soft leading-relaxed whitespace-pre-line mb-10 text-pretty">
                                        {membershipsSection?.content?.[language]}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
                                        {[
                                            { en: "First Grade Contractor (JCA)", ar: "مقاول درجة أولى (نقابة المقاولين)" },
                                            { en: "Arab Contractors Union", ar: "اتحاد المقاولين العرب" },
                                            { en: "Islamic Contractors Union", ar: "اتحاد المقاولين الإسلاميين" },
                                            { en: "Intl Real Estate Valuation (FIABCI)", ar: "الاتحاد العالمي للعقارات (FIABCI)" },
                                            { en: "Aqaba Special Economic Zone (ASEZA)", ar: "سلطة منطقة العقبة الاقتصادية (ASEZA)" },
                                        ].map((item, i) => (
                                            <div key={i} className="bg-paper p-5 flex items-center gap-3">
                                                <Award className="text-brass shrink-0" size={20} />
                                                <span className="text-ink text-sm">
                                                    {language === "ar" ? item.ar : item.en}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {COMPANY_DATA.about.certifications.images.length > 0 && (
                                        <div className="mt-16 pt-12 border-t border-ink/10">
                                            <h3 className="display text-2xl text-ink mb-6">
                                                {t(COMPANY_DATA.about.certifications.title)}
                                            </h3>
                                            <LightboxGallery
                                                images={COMPANY_DATA.about.certifications.images as any}
                                                title={t(COMPANY_DATA.about.certifications.title)}
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Sidebar image */}
                    <div className="lg:col-span-5">
                        <Reveal width="100%">
                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-concrete lg:sticky lg:top-28">
                                <img
                                    src="/images/projects/Quds Swiemeh Road/DSC00508.JPG"
                                    alt="Marwan Ahmad Alkurdi & Partners"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
                                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass-soft">
                                        {language === "ar" ? "منذ ١٩٨١" : "Since 1981"}
                                    </div>
                                    <div className="mt-1 display text-2xl text-paper">
                                        {language === "ar" ? "خبرة تبني الثقة" : "Experience that builds trust"}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
