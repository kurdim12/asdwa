"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, MapPin, CheckCircle2, Camera } from "lucide-react";
import { useLanguage } from "@/app/providers";
import { clean } from "@/lib/utils";
import { LightboxGallery } from "@/components/ui/LightboxGallery";
import { optimizedSrc } from "@/components/ui/Pic";

interface RelatedProject {
    name: string;
    title: { en: string; ar: string };
    thumbnail: string;
}

interface ProjectDetailViewProps {
    project: typeof COMPANY_DATA.projects.all[0];
    categoryName: any;
    images: string[];
    related?: RelatedProject[];
}

export function ProjectDetailView({ project, categoryName, images, related }: ProjectDetailViewProps) {
    const { t, language, direction } = useLanguage();
    const heroImage = images[0];

    const labels = {
        back: { en: "Back to Projects", ar: "العودة إلى المشاريع" },
        details: { en: "Project Details", ar: "تفاصيل المشروع" },
        location: { en: "Jordan", ar: "الأردن" },
        completed: { en: "Completed", ar: "مكتمل" },
        photos: { en: "photographs", ar: "صورة" },
        about: { en: "About the project", ar: "عن المشروع" },
        gallery: { en: "Project gallery", ar: "معرض الصور" },
        noPhotos: { en: "No photos available for this project.", ar: "لا توجد صور متاحة لهذا المشروع." },
        related: { en: "Related projects", ar: "مشاريع ذات صلة" },
        techData: { en: "Technical data", ar: "البيانات الفنية" },
        techNote: {
            en: "Figures as recorded in the project documentation.",
            ar: "الأرقام كما وردت في وثائق المشروع.",
        },
    };

    const metrics = (project as any).metrics as
        | { value: string; label: { en: string; ar: string } }[]
        | undefined;
    const year = (project as any).year as string | undefined;

    const milestone = {
        en: `This project represents a significant milestone in Jordan's infrastructure development. Utilizing state-of-the-art engineering techniques and adhering to the highest safety and quality standards (ISO 9001), ${t(
            COMPANY_DATA.company.name
        )} successfully delivered this project on time and within budget.`,
        ar: `يمثل هذا المشروع علامة فارقة في تطوير البنية التحتية في الأردن. باستخدام أحدث التقنيات الهندسية والالتزام بأعلى معايير السلامة والجودة (ISO 9001)، نجحت ${t(
            COMPANY_DATA.company.name
        )} في تسليم هذا المشروع في الوقت المحدد وضمن الميزانية.`,
    };

    const galleryImages = images.map((src) => (src.startsWith("/") ? src.slice(1) : src));

    return (
        <main className="bg-paper min-h-screen" dir={direction}>
            <Navbar />

            {/* Hero banner */}
            <div className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-concrete">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${optimizedSrc(heroImage, 1920)}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/10" />

                <div className="absolute inset-0 z-10 mx-auto max-w-8xl px-6 md:px-10 lg:px-16 flex flex-col justify-end pb-14 md:pb-16">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 hover:text-white mb-6 transition-colors w-fit"
                    >
                        <ArrowLeft size={16} /> {t(labels.back)}
                    </Link>
                    <Reveal width="100%">
                        <div className="text-[13.5px] font-medium text-white/80 mb-3">
                            {t(categoryName)}
                        </div>
                        <h1 className="display text-4xl md:text-6xl lg:text-7xl leading-[0.98] text-paper max-w-4xl text-balance">
                            {t(project.title)}
                        </h1>
                    </Reveal>
                </div>
            </div>

            {/* Body */}
            <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28 rounded-2xl bg-panel p-7">
                            <h3 className="text-[13px] font-semibold text-steel-soft pb-5 mb-5 border-b border-steel/10">
                                {t(labels.details)}
                            </h3>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-3 text-ink">
                                    <MapPin className="text-brass shrink-0" size={18} />
                                    <span>{t(labels.location)}</span>
                                </li>
                                <li className="flex items-center gap-3 text-ink">
                                    <CheckCircle2 className="text-brass shrink-0" size={18} />
                                    <span>
                                        {t(labels.completed)}
                                        {year ? ` · ${year}` : ""}
                                    </span>
                                </li>
                                <li className="flex items-center gap-3 text-ink">
                                    <Camera className="text-brass shrink-0" size={18} />
                                    <span>
                                        {images.length} {t(labels.photos)}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Main */}
                    <div className="lg:col-span-8">
                        <Reveal width="100%">
                            <h2 className="display text-3xl md:text-4xl text-ink mb-6">
                                {t(labels.about)}
                            </h2>
                            <p className="text-lg text-ink-soft leading-relaxed whitespace-pre-line text-pretty">
                                {clean(t(project.description))}
                            </p>
                            <p className="mt-6 text-lg text-ink-soft leading-relaxed text-pretty">
                                {t(milestone)}
                            </p>
                        </Reveal>

                        {metrics && metrics.length > 0 && (
                            <div className="mt-14">
                                <div className="flex items-baseline justify-between gap-4 mb-6">
                                    <h3 className="display text-2xl text-ink">{t(labels.techData)}</h3>
                                    <span className="font-mono text-[11px] text-steel-faint" dir="ltr">
                                        MK / TECHNICAL SHEET
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {metrics.map((m, i) => (
                                        <div key={i} className="rounded-2xl bg-panel p-5">
                                            <div className="display text-2xl md:text-3xl text-steel tabular-nums" dir="ltr">
                                                {m.value}
                                            </div>
                                            <div className="mt-1.5 text-[13px] text-steel-soft leading-snug">
                                                {t(m.label)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-3 text-[12.5px] text-steel-faint">{t(labels.techNote)}</p>
                            </div>
                        )}

                        <div className="mt-14">
                            <h3 className="display text-2xl text-ink mb-2">{t(labels.gallery)}</h3>
                            {galleryImages.length > 0 ? (
                                <LightboxGallery images={galleryImages} title={t(project.title)} />
                            ) : (
                                <div className="mt-6 text-ink-faint italic p-8 border border-dashed border-ink/15 text-center">
                                    {t(labels.noPhotos)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {related && related.length > 0 && (
                <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pb-20 md:pb-28">
                    <h2 className="display text-2xl md:text-3xl text-steel mb-8">{t(labels.related)}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {related.map((r) => (
                            <Link
                                key={r.name}
                                href={`/projects/${encodeURIComponent(r.name)}`}
                                className="group block"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-panel">
                                    <img
                                        src={optimizedSrc(r.thumbnail, 640)}
                                        alt={t(r.title)}
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-steel/10 rounded-2xl" />
                                </div>
                                <h3 className="mt-4 text-[17px] font-semibold text-steel group-hover:text-blue transition-colors leading-snug">
                                    {t(r.title)}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
