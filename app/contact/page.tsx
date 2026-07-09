"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/primitives";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    const { contact } = COMPANY_DATA;
    const { language, t, direction } = useLanguage();

    const details = [
        {
            icon: MapPin,
            label: { en: "Headquarters", ar: "المقر الرئيسي" },
            value: t(contact.address),
        },
        {
            icon: Phone,
            label: { en: "Phone", ar: "الهاتف" },
            value: `${contact.phone}  ·  ${language === "ar" ? "فاكس" : "Fax"} ${contact.fax}`,
            ltr: true,
        },
        {
            icon: Mail,
            label: { en: "Email", ar: "البريد الإلكتروني" },
            value: contact.email,
            ltr: true,
        },
        {
            icon: Clock,
            label: { en: "Working Hours", ar: "ساعات العمل" },
            value: t(contact.hours),
        },
    ];

    const inputCls =
        "w-full bg-paper border border-ink/15 px-4 py-3.5 text-ink placeholder:text-ink-faint focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-colors";
    const labelCls = "font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft";

    return (
        <main className="bg-paper min-h-screen">
            <Navbar />

            <PageHeader
                index="C / 01"
                kicker={{ en: "Get in Touch", ar: "تواصل معنا" }}
                title={{ en: "Contact us", ar: "اتصل بنا" }}
                subtitle={{
                    en: "Interested in partnering with us? Reach out to discuss your infrastructure needs.",
                    ar: "هل أنت مهتم بالشراكة معنا؟ تواصل مع فريقنا لمناقشة احتياجاتك في البنية التحتية.",
                }}
            />

            <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 py-16 md:py-24" dir={direction}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Details */}
                    <div className="lg:col-span-5">
                        <div className="border-t border-ink/10">
                            {details.map((d, i) => {
                                const Icon = d.icon;
                                return (
                                    <Reveal key={i} width="100%" delay={i * 0.06}>
                                        <div className="flex items-start gap-5 py-7 border-b border-ink/10">
                                            <div className="w-11 h-11 border border-ink/15 flex items-center justify-center text-brass shrink-0">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className={labelCls}>{t(d.label)}</h3>
                                                <p
                                                    className="mt-2 text-ink leading-relaxed whitespace-pre-line"
                                                    dir={d.ltr ? "ltr" : undefined}
                                                >
                                                    {d.value}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-7">
                        <Reveal width="100%" delay={0.15}>
                            <div className="bg-surface border border-ink/10 p-8 md:p-12">
                                <h2 className="display text-3xl text-ink mb-8">
                                    {language === "ar" ? "أرسل رسالة" : "Send a message"}
                                </h2>
                                <form className="space-y-6" name="contact" method="POST" data-netlify="true">
                                    <input type="hidden" name="form-name" value="contact" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className={labelCls}>
                                                {language === "ar" ? "الاسم" : "Name"}
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className={inputCls}
                                                placeholder={language === "ar" ? "الاسم الكامل" : "John Doe"}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className={labelCls}>
                                                {language === "ar" ? "البريد الإلكتروني" : "Email"}
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className={inputCls}
                                                placeholder="email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className={labelCls}>
                                            {language === "ar" ? "الموضوع" : "Subject"}
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className={inputCls}
                                            placeholder={language === "ar" ? "استفسار عن مشروع" : "Project inquiry"}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className={labelCls}>
                                            {language === "ar" ? "الرسالة" : "Message"}
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            className={inputCls}
                                            placeholder={
                                                language === "ar" ? "تفاصيل رسالتك..." : "Tell us about your project..."
                                            }
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" size="lg">
                                        {language === "ar" ? "إرسال الرسالة" : "Send message"}
                                    </Button>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pb-20 md:pb-28" dir={direction}>
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-8 bg-brass/50" />
                    <span className="eyebrow">
                        {language === "ar" ? "موقعنا" : "Find us"}
                    </span>
                </div>
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-concrete border border-ink/10">
                    <iframe
                        src="https://maps.google.com/maps?q=Abdullah%20Ghosheh%20Street%2C%207th%20Circle%2C%20Amman%2C%20Jordan&z=15&output=embed"
                        title={language === "ar" ? "خريطة الموقع" : "Office location map"}
                        className="absolute inset-0 h-full w-full grayscale-[0.2]"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
}
