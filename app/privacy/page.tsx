"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useLanguage } from "@/app/providers";

const SECTIONS = [
    {
        title: { en: "Information we collect", ar: "المعلومات التي نجمعها" },
        body: {
            en: "When you use the contact form, we receive the name, email address, subject, and message you provide. We do not collect any other personal information, and the site does not use tracking cookies.",
            ar: "عند استخدام نموذج التواصل، نستلم الاسم والبريد الإلكتروني والموضوع والرسالة التي تقدمها. لا نجمع أي معلومات شخصية أخرى، ولا يستخدم الموقع ملفات تعريف ارتباط للتتبع.",
        },
    },
    {
        title: { en: "How we use it", ar: "كيف نستخدمها" },
        body: {
            en: "Contact details are used solely to respond to your inquiry. We do not sell, share, or use your information for marketing purposes.",
            ar: "تُستخدم بيانات التواصل فقط للرد على استفسارك. لا نبيع معلوماتك ولا نشاركها ولا نستخدمها لأغراض تسويقية.",
        },
    },
    {
        title: { en: "Third-party services", ar: "خدمات الطرف الثالث" },
        body: {
            en: "The site is hosted on Cloudflare, and the contact map is provided by Google Maps. These providers may process technical data such as IP addresses as part of delivering the service.",
            ar: "يُستضاف الموقع على Cloudflare، وتُعرض خريطة الموقع عبر خرائط Google. قد تعالج هذه الجهات بيانات تقنية مثل عناوين IP كجزء من تقديم الخدمة.",
        },
    },
    {
        title: { en: "Contact", ar: "التواصل" },
        body: {
            en: "For any privacy question or to request deletion of your inquiry, email info@mkurdi.com.",
            ar: "لأي سؤال يتعلق بالخصوصية أو لطلب حذف استفسارك، راسلنا على info@mkurdi.com.",
        },
    },
];

export default function PrivacyPage() {
    const { t, direction } = useLanguage();

    return (
        <main className="bg-white min-h-screen" dir={direction}>
            <Navbar />
            <PageHeader
                kicker={{ en: "Legal", ar: "قانوني" }}
                title={{ en: "Privacy policy", ar: "سياسة الخصوصية" }}
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
