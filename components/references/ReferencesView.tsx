"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ReferencesGallery } from "@/components/references/ReferencesGallery";
import { useLanguage } from "@/app/providers";

interface ReferencesViewProps {
    categoriesList: any[];
}

export function ReferencesView({ categoriesList }: ReferencesViewProps) {
    const { direction } = useLanguage();

    return (
        <main className="bg-paper min-h-screen" dir={direction}>
            <Navbar />

            <PageHeader
                index="R / 01"
                kicker={{ en: "Credentials", ar: "الاعتمادات" }}
                title={{ en: "References & certifications", ar: "المراجع والشهادات" }}
                subtitle={{
                    en: "Our commitment to excellence is validated by recognized industry bodies and a history of successful partnerships.",
                    ar: "شهادات عالمية ومحلية تؤكد التزامنا بالتميز وقصص نجاح شركائنا.",
                }}
            />

            <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
                <ReferencesGallery categories={categoriesList} />
            </section>

            <Footer />
        </main>
    );
}
