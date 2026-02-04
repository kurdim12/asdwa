"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useLanguage } from "@/app/providers";

interface GalleryImage {
    src: string;
    description?: { en: string; ar: string };
}

interface LightboxGalleryProps {
    images: (string | GalleryImage)[];
    title: string;
    defaultOpen?: boolean;
}

export function LightboxGallery({ images, title, defaultOpen = false }: LightboxGalleryProps) {
    const [selectedindex, setSelectedIndex] = useState<number | null>(null);
    const { language, t } = useLanguage();

    useEffect(() => {
        if (defaultOpen) {
            setSelectedIndex(0);
        }
    }, [defaultOpen]);

    const normalizedImages = images.map(img =>
        typeof img === 'string' ? { src: img } : img
    );

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const showNext = () => {
        if (selectedindex === null) return;
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % normalizedImages.length));
    };

    const showPrev = () => {
        if (selectedindex === null) return;
        setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + normalizedImages.length) % normalizedImages.length));
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedindex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedindex]);

    return (
        <div className="mt-8">
            <h4 className="text-white/80 font-heading font-bold mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
                <ZoomIn size={16} className="text-primary" />
                {language === 'ar' ? "معرض الصور" : "Project Gallery"}
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {normalizedImages.map((img, i) => (
                    <motion.div
                        key={i}
                        className="relative aspect-video overflow-hidden rounded-lg border border-white/10 group cursor-pointer bg-neutral-900"
                        whileHover={{ scale: 1.02 }}
                        onClick={(e) => { e.stopPropagation(); openLightbox(i); }}
                    >
                        <img
                            src={`/${img.src}`}
                            alt={`${title} ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background shadow-lg shadow-primary/20">
                                <ZoomIn size={20} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedindex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            onClick={closeLightbox}
                        >
                            <X size={32} />
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors hidden md:flex p-4 hover:bg-white/5 rounded-full"
                            onClick={(e) => { e.stopPropagation(); showPrev(); }}
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center gap-6" onClick={(e) => e.stopPropagation()}>
                            <div className="relative flex-1 min-h-0 w-full flex items-center justify-center">
                                <img
                                    src={`/${normalizedImages[selectedindex].src}`}
                                    alt={`${title} ${selectedindex + 1}`}
                                    className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                                />
                            </div>

                            {/* Caption Section */}
                            <div className="w-full max-w-3xl text-center space-y-2">
                                <h3 className="text-white font-heading text-xl font-bold">
                                    {title} <span className="text-primary mx-2">|</span> <span className="text-white/60 text-base font-sans">{selectedindex + 1} of {normalizedImages.length}</span>
                                </h3>
                                {normalizedImages[selectedindex].description && (
                                    <p className="text-white/80 text-lg leading-relaxed">
                                        {t(normalizedImages[selectedindex].description!)}
                                    </p>
                                )}
                            </div>
                        </div>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors hidden md:flex p-4 hover:bg-white/5 rounded-full"
                            onClick={(e) => { e.stopPropagation(); showNext(); }}
                        >
                            <ChevronRight size={48} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
