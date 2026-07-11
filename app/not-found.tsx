"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/app/providers";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
    const { language, direction } = useLanguage();

    return (
        <main className="bg-white min-h-screen flex flex-col" dir={direction}>
            <Navbar />
            <div className="flex-1 flex items-center">
                <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-40 text-center w-full">
                    <div className="display text-[7rem] md:text-[9rem] leading-none text-sky select-none">
                        404
                    </div>
                    <h1 className="mt-2 display text-3xl md:text-4xl text-steel">
                        {language === "ar" ? "الصفحة غير موجودة" : "Page not found"}
                    </h1>
                    <p className="mt-4 text-lg text-steel-soft max-w-md mx-auto">
                        {language === "ar"
                            ? "الصفحة التي تبحث عنها غير متوفرة أو تم نقلها."
                            : "The page you're looking for doesn't exist or has been moved."}
                    </p>
                    <div className="mt-9 flex flex-wrap justify-center gap-3.5">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-blue text-white text-[15px] font-medium hover:bg-blue-dim transition-colors"
                        >
                            {language === "ar" ? "الصفحة الرئيسية" : "Back to home"}
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-steel/20 text-steel text-[15px] font-medium hover:border-blue hover:text-blue transition-colors"
                        >
                            {language === "ar" ? "تصفح المشاريع" : "Browse projects"}
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
