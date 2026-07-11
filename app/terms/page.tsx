"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useLanguage } from "@/app/providers";

const SECTIONS = [
    {
        title: { en: "Use of this website", ar: "استخدام هذا الموقع" },
        body: {
            en: "This website presents the work and services of Marwan Ahmad Alkurdi & Partners Co. Ltd. Its content is provided for general information and does not constitute a contractual offer.",
            ar: "يعرض هذا الموقع أعمال وخدمات شركة مروان أحمد الكردي وشركاؤه المحدودة. محتواه مقدم للمعلومات العامة ولا يشكل عرضاً تعاقدياً.",
        },
    },
    {
        title: { en: "Intellectual property", ar: "الملكية الفكرية" },
        body: {
            en: "All photographs, texts, logos, and illustrations on this site are the property of Marwan Ahmad Alkurdi & Partners Co. Ltd and may not be reproduced without written permission.",
            ar: "جميع الصور والنصوص والشعارات والرسوم في هذا الموقع ملك لشركة مروان أحمد الكردي وشركاؤه المحدودة ولا يجوز إعادة استخدامها دون إذن خطي.",
        },
    },
    {
        title: { en: "Liability", ar: "المسؤولية" },
        body: {
            en: "While we strive for accuracy, project details are provided as a portfolio record and may be summarized. For formal references or tender documentation, contact us directly.",
            ar: "مع حرصنا على الدقة، تُعرض تفاصيل المشاريع كسجل أعمال وقد تكون مختصرة. للمراجع الرسمية أو وثائق العطاءات، يرجى التواصل معنا مباشرة.",
        },
    },
    {
        title: { en: "Governing law", ar: "القانون الواجب التطبيق" },
        body: {
            en: "These terms are governed by the laws of the Hashemite Kingdom of Jordan.",
            ar: "تخضع هذه الشروط لقوانين المملكة الأردنية الهاشمية.",
        },
    },
];

export default function TermsPage() {
    const { t, direction } = useLanguage();

    return (
        <main className="bg-white min-h-screen" dir={direction}>
            <Navbar />
            <PageHeader
                kicker={{ en: "Legal", ar: "قانوني" }}
                title={{ en: "Terms of use", ar: "شروط الاستخدام" }}
            />
            <section className="mx-auto max-w-3xl px-6 md:px-10 py-16 md:py-20 space-y-10">
                {SECTIONS.map((s, i) => (
                    <div key={i}>
                        <h2 className="text-xl font-semibold text-steel mb-3">{t(s.title)}</h2>
                        <p className="text-steel-soft leading-relaxed">{t(s.body)}</p>
                    </div>
                ))}
            </section>
            <Footer />
        </main>
    );
}
