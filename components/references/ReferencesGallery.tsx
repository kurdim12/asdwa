"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Award, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/app/providers";

const ITEMS_PER_PAGE = 9;

interface Category {
    id: string;
    label: { en: string; ar: string };
    images: string[];
}

export function ReferencesGallery({ categories }: { categories: Category[] }) {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState(categories[0]?.id || "all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const activeCategory = categories.find(c => c.id === activeTab) || categories[0];
    const certificates = activeCategory?.images || [];

    // Pagination Logic (Reset on tab change)
    const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = certificates.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    // Reset pagination when tab changes
    const handleTabChange = (id: string) => {
        setActiveTab(id);
        setCurrentPage(1);
    };

    // Helper to format filename into a title
    const formatTitle = (path: string) => {
        const filename = path.split('/').pop() || "";
        return filename
            .replace(/\.[^/.]+$/, "") // remove extension
            .replace(/^Copy of\s+/i, "") // remove Copy of prefix
            .replace(/_/g, " ")       // underscores to spaces
            .replace(/-/g, " ")       // dashes to spaces
            .trim();
    };

    if (categories.length === 0) {
        return (
            <div className="h-64 flex items-center justify-center border border-dashed border-white/10 rounded-lg bg-white/5 mt-8">
                <p className="text-white/40 font-heading uppercase tracking-widest">No certificates found.</p>
            </div>
        );
    }

    return (
        <div className="space-y-12">

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => handleTabChange(cat.id)}
                        className={cn(
                            "px-6 py-3 rounded-full text-sm font-heading font-bold uppercase tracking-widest transition-all border",
                            activeTab === cat.id
                                ? "bg-primary text-background border-primary"
                                : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
                        )}
                    >
                        {cat.label[language]}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout" initial={false}>
                    {paginatedItems.map((cert, index) => {
                        const title = formatTitle(cert);
                        return (
                            <motion.div
                                key={`${activeTab}-${cert}`} // Re-key on tab change for animation
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedImage(cert)}
                            >
                                <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden relative aspect-[3/4] shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.3)] group-hover:border-primary/50">

                                    {/* Image as Background with treatment */}
                                    <div className="absolute inset-0 p-4">
                                        <div className="w-full h-full relative overflow-hidden rounded-lg">
                                            <img
                                                src={cert}
                                                alt={title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                                            />
                                        </div>
                                    </div>

                                    {/* Glass Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="w-10 h-1 bg-primary mb-4" />
                                            <h3 className="text-white font-bold text-lg leading-tight mb-2" dir="auto">
                                                {title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-primary text-sm font-heading uppercase tracking-widest">
                                                <ZoomIn size={16} />
                                                <span>View Document</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-4 right-4 text-white/20 group-hover:text-primary transition-colors">
                                        {activeTab === 'registration' ? <FileCheck size={24} /> : <Award size={24} />}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-6 mt-16">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white/60"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={cn(
                                    "w-3 h-3 rounded-full transition-all duration-300",
                                    currentPage === i + 1
                                        ? "bg-primary w-8"
                                        : "bg-white/20 hover:bg-white/50"
                                )}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white/60"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-4xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Certificate"
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                            />
                            <div className="mt-4 text-center">
                                <span className="text-white/60 font-heading tracking-widest text-sm uppercase">Verified Document</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
