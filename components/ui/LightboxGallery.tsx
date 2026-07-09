"use client";

import { useState, useEffect, useCallback } from "react";
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
    const [selected, setSelected] = useState<number | null>(null);
    const { language, t } = useLanguage();

    const normalized = images.map((img) => (typeof img === "string" ? { src: img } : img));

    useEffect(() => {
        if (defaultOpen) setSelected(0);
    }, [defaultOpen]);

    const close = () => setSelected(null);
    const next = useCallback(
        () => setSelected((p) => (p === null ? null : (p + 1) % normalized.length)),
        [normalized.length]
    );
    const prev = useCallback(
        () => setSelected((p) => (p === null ? null : (p - 1 + normalized.length) % normalized.length)),
        [normalized.length]
    );

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (selected === null) return;
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected, next, prev]);

    return (
        <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {normalized.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setSelected(i)}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-panel group"
                    >
                        <img
                            src={`/${img.src}`}
                            alt={`${title} ${i + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-steel/10 rounded-xl" />
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 rounded-full bg-white text-steel flex items-center justify-center shadow-card">
                                <ZoomIn size={18} />
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur flex items-center justify-center p-4"
                        onClick={close}
                    >
                        <button
                            className="absolute top-4 end-4 text-paper/60 hover:text-paper transition-colors p-2"
                            onClick={close}
                            aria-label="Close"
                        >
                            <X size={30} />
                        </button>
                        <button
                            className="absolute start-4 top-1/2 -translate-y-1/2 text-paper/50 hover:text-paper hidden md:block p-3"
                            onClick={(e) => {
                                e.stopPropagation();
                                prev();
                            }}
                            aria-label="Previous"
                        >
                            <ChevronLeft size={44} />
                        </button>

                        <div
                            className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center gap-5"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={`/${normalized[selected].src}`}
                                alt={`${title} ${selected + 1}`}
                                className="max-w-full max-h-[78vh] object-contain shadow-2xl"
                            />
                            <div className="text-center">
                                <span className="text-[13.5px] text-white">
                                    {title}
                                    <span className="text-brass-soft mx-2">/</span>
                                    <span className="text-paper/60">
                                        {selected + 1} — {normalized.length}
                                    </span>
                                </span>
                                {normalized[selected].description && (
                                    <p className="mt-2 text-paper/80 leading-relaxed">
                                        {t(normalized[selected].description!)}
                                    </p>
                                )}
                            </div>
                        </div>

                        <button
                            className="absolute end-4 top-1/2 -translate-y-1/2 text-paper/50 hover:text-paper hidden md:block p-3"
                            onClick={(e) => {
                                e.stopPropagation();
                                next();
                            }}
                            aria-label="Next"
                        >
                            <ChevronRight size={44} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
