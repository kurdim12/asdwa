"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Camera } from "lucide-react";
import { useLanguage } from "@/app/providers";

interface ProjectDetailViewProps {
    project: typeof COMPANY_DATA.projects.all[0];
    categoryName: any;
    images: string[];
}

export function ProjectDetailView({ project, categoryName, images }: ProjectDetailViewProps) {
    const { t, language } = useLanguage();
    const heroImage = images[0];

    const labels = {
        back: { en: "Back to Projects", ar: "العودة إلى المشاريع" },
        details: { en: "Project Details", ar: "تفاصيل المشروع" },
        location: { en: "Jordan", ar: "الأردن" },
        completed: { en: "Completed", ar: "مكتمل" },
        photos: { en: "Photos Available", ar: "صور متاحة" },
        about: { en: "About the Project", ar: "عن المشروع" },
        gallery: { en: "Project Gallery", ar: "معرض الصور" },
        noPhotos: { en: "No photos available for this project.", ar: "لا توجد صور متاحة لهذا المشروع." },
        milestone: {
            en: `This project represents a significant milestone in Jordan's infrastructure development. Utilizing state-of-the-art engineering techniques and adhering to the highest safety and quality standards (ISO 9001), ${t(COMPANY_DATA.company.name)} successfully delivered this project on time and within budget.`,
            ar: `يمثل هذا المشروع علامة فارقة في تطوير البنية التحتية في الأردن. باستخدام أحدث التقنيات الهندسية والالتزام بأعلى معايير السلامة والجودة (ISO 9001)، نجحت ${t(COMPANY_DATA.company.name)} في تسليم هذا المشروع في الوقت المحدد وضمن الميزانية.`
        }
    };

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            {/* Hero Banner */}
            <div className="h-[60vh] relative overflow-hidden bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />

                {/* Hero Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 grayscale"
                    style={{ backgroundImage: `url('${heroImage}')` }}
                />

                <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-20">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors" dir="ltr">
                        <ArrowLeft size={20} /> {t(labels.back)}
                    </Link>

                    <Reveal>
                        <div className="text-primary font-heading uppercase tracking-widest text-sm mb-4">
                            {t(categoryName)}
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white max-w-4xl">
                            {t(project.title)}
                        </h1>
                    </Reveal>
                </div>
            </div>

            <Section className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Project Info Sidebar */}
                    <div className="space-y-8">
                        <div className="p-6 border border-white/10 rounded-lg bg-white/5">
                            <h3 className="text-xl font-heading font-bold text-white mb-6 border-b border-white/10 pb-4">
                                {t(labels.details)}
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-white/70">
                                    <MapPin className="text-primary" size={20} />
                                    <span>{t(labels.location)}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <Calendar className="text-primary" size={20} />
                                    <span>{t(labels.completed)}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <Camera className="text-primary" size={20} />
                                    <span>{images.length} {t(labels.photos)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <Reveal>
                            <h2 className="text-3xl font-heading font-bold text-white mb-6">{t(labels.about)}</h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-8 whitespace-pre-line">
                                {t(project.description)}
                                <br /><br />
                                {t(labels.milestone)}
                            </p>
                        </Reveal>

                        {/* Gallery */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-heading font-bold text-white mb-8">{t(labels.gallery)}</h3>
                            {images.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {images.map((img, i) => (
                                        <div key={i} className="aspect-video bg-neutral-800 rounded-lg border border-white/5 hover:border-primary/50 transition-colors relative group overflow-hidden">
                                            <img
                                                src={img}
                                                alt={`${t(project.title)} photo ${i + 1}`}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-white/40 italic p-8 border border-white/10 rounded-lg text-center">
                                    {t(labels.noPhotos)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
