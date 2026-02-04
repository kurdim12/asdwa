"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { Hammer, Cog, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/providers";
import { LightboxGallery } from "@/components/ui/LightboxGallery";

function ServicesContent() {
    const { mainServices } = COMPANY_DATA.services;
    const { language, t } = useLanguage();

    // Header height state removed as it wasn't used effectively in previous code or can be handled globally
    // const [headerHeight, setHeaderHeight] = useState(0);

    const searchParams = useSearchParams();
    const targetGalleryId = searchParams.get('gallery');

    useEffect(() => {
        if (targetGalleryId) {
            // Small delay to ensure rendering matches
            setTimeout(() => {
                const element = document.getElementById(targetGalleryId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 500);
        }
    }, [targetGalleryId]);

    const text = {
        title: { en: "Our Services", ar: "خدماتنا" },
        subtitle: {
            en: "Delivering specialized engineering and construction solutions across the Kingdom.",
            ar: "تقديم حلول هندسية وإنشائية متخصصة في جميع أنحاء المملكة."
        },
        features: [
            { en: "Specialized Equipment", ar: "معدات متخصصة" },
            { en: "Certified Operators", ar: "مشغلين معتمدين" },
            { en: "24/7 Support", ar: "دعم فني على مدار الساعة" },
            { en: "ISO Standards", ar: "معايير الجودة ISO" }
        ]
    };

    return (
        <div className="pt-32 pb-16 container mx-auto px-4 md:px-8">
            <Reveal>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                    {t(text.title)}
                </h1>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="text-white/60 text-lg max-w-2xl mb-16">
                    {t(text.subtitle)}
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {mainServices.map((service, index) => {
                    // Use first gallery image as thumbnail or fallback
                    // @ts-ignore
                    const gallery = service.gallery as any[];
                    const firstImage = gallery && gallery.length > 0 ? gallery[0] : null;
                    const thumbnailSrc = firstImage ? (typeof firstImage === 'string' ? firstImage : firstImage.src) : 'images/logo.jpg';
                    const thumbnail = `/${thumbnailSrc}`;

                    const isTarget = service.id === targetGalleryId;

                    return (
                        <Reveal key={service.id} delay={index * 0.1} width="100%">
                            <div id={service.id} className={`group block bg-neutral-900 border ${isTarget ? 'border-primary' : 'border-white/5'} hover:border-primary/50 transition-colors h-full flex flex-col relative rounded-lg overflow-hidden`}>
                                {/* Image Placeholder */}
                                <div className="aspect-video bg-neutral-800 relative overflow-hidden">

                                    <div className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-100 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url('${thumbnail}')`
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                    {/* Central Button Overlay - EXACTLY MATCHING PROJECT GRID */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                        <Link href={`/services/${service.id}`} className="bg-primary text-background px-4 py-2 font-bold font-heading uppercase text-sm flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                                            {language === 'ar' ? 'عرض التفاصيل' : 'View Details'} <ArrowUpRight size={16} />
                                        </Link>
                                    </div>

                                </div>

                                <div className="p-6 flex flex-col flex-grow bg-neutral-900">
                                    <div className="text-xs text-primary font-heading uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Hammer size={12} />
                                        <span>{t(text.features[0])}</span>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {t(service.title)}
                                    </h3>
                                    <p className="text-white/50 text-sm line-clamp-3 mb-4 flex-grow">
                                        {t(service.description)}
                                    </p>

                                </div>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                <ServicesContent />
            </Suspense>
            <Footer />
        </main>
    );
}
