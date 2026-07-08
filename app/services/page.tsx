"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/providers";

function ServicesContent() {
    const { mainServices } = COMPANY_DATA.services;
    const { language, t, direction } = useLanguage();

    const searchParams = useSearchParams();
    const targetGalleryId = searchParams.get("gallery");

    useEffect(() => {
        if (targetGalleryId) {
            setTimeout(() => {
                const el = document.getElementById(targetGalleryId);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 400);
        }
    }, [targetGalleryId]);

    return (
        <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-16 md:py-24" dir={direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                {mainServices.map((service, index) => {
                    const gallery = (service as any).gallery as string[] | undefined;
                    const thumb = gallery && gallery.length > 0 ? `/${gallery[0]}` : "/images/logo.jpg";
                    const isTarget = service.id === targetGalleryId;

                    return (
                        <Reveal key={service.id} width="100%" delay={(index % 2) * 0.1}>
                            <Link
                                href={`/services/${service.id}`}
                                id={service.id}
                                className={`group block ${isTarget ? "ring-1 ring-brass" : ""}`}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-concrete">
                                    <img
                                        src={thumb}
                                        alt={t(service.title)}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
                                    <div className="absolute top-4 start-4 font-mono text-[12px] tracking-[0.16em] text-paper bg-charcoal/70 backdrop-blur px-2.5 py-1">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>
                                <div className="mt-6 flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="font-display text-2xl md:text-3xl text-ink group-hover:text-brass transition-colors">
                                            {t(service.title)}
                                        </h2>
                                        <p className="mt-3 text-ink-soft leading-relaxed line-clamp-3 max-w-md">
                                            {t(service.description)}
                                        </p>
                                    </div>
                                    <ArrowUpRight
                                        size={24}
                                        className="shrink-0 mt-1 text-ink/30 group-hover:text-brass group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                                    />
                                </div>
                            </Link>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}

export default function ServicesPage() {
    return (
        <main className="bg-paper min-h-screen">
            <Navbar />
            <PageHeader
                index="S / 01"
                kicker={{ en: "Our Expertise", ar: "خبراتنا" }}
                title={{ en: "Services", ar: "خدماتنا" }}
                subtitle={{
                    en: "Delivering specialized engineering and construction solutions across the Kingdom.",
                    ar: "تقديم حلول هندسية وإنشائية متخصصة في جميع أنحاء المملكة.",
                }}
            />
            <Suspense
                fallback={
                    <div className="min-h-[40vh] flex items-center justify-center font-mono text-sm text-ink-soft">
                        Loading…
                    </div>
                }
            >
                <ServicesContent />
            </Suspense>
            <Footer />
        </main>
    );
}
