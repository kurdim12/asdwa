"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { ReferencesGallery } from "@/components/references/ReferencesGallery";
import { useLanguage } from "@/app/providers";

interface ReferencesViewProps {
    categoriesList: any[];
}

export function ReferencesView({ categoriesList }: ReferencesViewProps) {
    const { t } = useLanguage();

    // Add translations for the header
    const text = {
        title: { en: "References & Certifications", ar: "المراجع والشهادات" },
        subtitle: {
            en: "Our commitment to excellence is validated by recognized industry bodies and a history of successful partnerships.",
            ar: "شهادات عالمية ومحلية تؤكد التزامنا بالتميز وقصص نجاح شركائنا."
        }
    };

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-8">
                <Reveal>
                    <header className="mb-16 text-center">
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
                            {t(text.title).split('&')[0]} <span className="text-primary">&</span> {t(text.title).split('&')[1] || ""}
                        </h1>
                        <div className="h-1 w-24 bg-primary mx-auto mb-8" />
                        <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                            {t(text.subtitle)}
                        </p>
                    </header>
                </Reveal>

                <ReferencesGallery categories={categoriesList} />
            </div>

            <Footer />
        </main>
    );
}
