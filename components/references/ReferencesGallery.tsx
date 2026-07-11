"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Award, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/app/providers";
import { optimizedSrc } from "@/components/ui/Pic";

const ITEMS_PER_PAGE = 9;

interface Category {
    id: string;
    label: { en: string; ar: string };
    images: string[];
}

export function ReferencesGallery({ categories }: { categories: Category[] }) {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState(categories[0]?.id || "all");
    const [selected, setSelected] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];
    const certificates = activeCategory?.images || [];

    const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const paginated = certificates.slice(start, start + ITEMS_PER_PAGE);

    const changeTab = (id: string) => {
        setActiveTab(id);
        setPage(1);
    };

    const formatTitle = (path: string) => {
        const filename = path.split("/").pop() || "";
        return filename
            .replace(/\.[^/.]+$/, "")
            .replace(/^Copy of\s+/i, "")
            .replace(/[_-]/g, " ")
            .trim();
    };

    if (categories.length === 0) {
        return (
            <div className="h-64 flex items-center justify-center border border-dashed border-ink/15 bg-concrete">
                <p className="font-mono text-sm uppercase tracking-[0.16em] text-ink-faint">
                    No certificates found.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-12">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2.5" dir={language === "ar" ? "rtl" : "ltr"}>
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => changeTab(cat.id)}
                        className={cn(
                            "text-[13.5px] font-medium px-5 py-2 rounded-full border transition-all",
                            activeTab === cat.id
                                ? "bg-blue text-white border-blue"
                                : "bg-white text-steel-soft border-steel/15 hover:border-blue/50 hover:text-blue"
                        )}
                    >
                        {cat.label[language]}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                <AnimatePresence mode="popLayout" initial={false}>
                    {paginated.map((cert, index) => {
                        const title = formatTitle(cert);
                        return (
                            <motion.button
                                key={`${activeTab}-${cert}`}
                                layout
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.3, delay: index * 0.04 }}
                                onClick={() => setSelected(cert)}
                                className="group text-start"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white border border-steel/10 shadow-card group-hover:shadow-card-hover transition-shadow">
                                    <div className="absolute inset-3 overflow-hidden rounded-xl bg-panel">
                                        <img
                                            src={optimizedSrc(cert, 640)}
                                            alt={title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute top-3 end-3 text-ink/20 group-hover:text-brass transition-colors">
                                        {activeTab === "registration" ? <FileCheck size={20} /> : <Award size={20} />}
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="h-px w-8 bg-brass mb-3" />
                                        <h3 className="text-paper text-sm leading-tight mb-2 line-clamp-2" dir="auto">
                                            {title}
                                        </h3>
                                        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/90">
                                            <ZoomIn size={13} /> View
                                        </span>
                                    </div>
                                </div>
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-5 pt-4">
                    <button
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        disabled={page === 1}
                        className="w-11 h-11 rounded-full border border-steel/15 flex items-center justify-center text-steel hover:bg-blue hover:border-blue hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-steel"
                        aria-label="Previous page"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-300",
                                    page === i + 1 ? "bg-brass w-8" : "bg-ink/20 w-1.5 hover:bg-ink/40"
                                )}
                                aria-label={`Page ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        disabled={page === totalPages}
                        className="w-11 h-11 rounded-full border border-steel/15 flex items-center justify-center text-steel hover:bg-blue hover:border-blue hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-steel"
                        aria-label="Next page"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur flex items-center justify-center p-4"
                        onClick={() => setSelected(null)}
                    >
                        <button
                            className="absolute top-5 end-5 text-paper/60 hover:text-paper transition-colors p-2 z-50"
                            onClick={() => setSelected(null)}
                            aria-label="Close"
                        >
                            <X size={30} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95, y: 16 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 16 }}
                            className="relative max-w-4xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selected}
                                alt="Certificate"
                                className="max-w-full max-h-[84vh] object-contain shadow-2xl bg-paper"
                            />
                            <div className="mt-4 text-center">
                                <span className="text-[13px] text-white/60">
                                    {language === "ar" ? "وثيقة موثّقة" : "Verified document"}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
