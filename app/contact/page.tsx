"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/primitives";
import { COMPANY_DATA } from "@/lib/data";
import { useLanguage } from "@/app/providers";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2 } from "lucide-react";

type FormStatus = "idle" | "sending" | "sent" | "mailto" | "error";

export default function ContactPage() {
    const { contact } = COMPANY_DATA;
    const { language, t, direction } = useLanguage();
    const [status, setStatus] = useState<FormStatus>("idle");

    const whatsapp = (contact as any).whatsapp as string | undefined;

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

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setStatus("sent");
                form.reset();
                return;
            }
            throw new Error(String(res.status));
        } catch {
            // Guaranteed delivery path: open the visitor's mail app prefilled.
            const subject = encodeURIComponent(`${data.subject || "Project inquiry"} — ${data.name}`);
            const bodyText = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
            window.location.href = `mailto:${contact.email}?subject=${subject}&body=${bodyText}`;
            setStatus("mailto");
        }
    }

    const inputCls =
        "w-full rounded-xl bg-white border border-steel/15 px-4 py-3.5 text-steel placeholder:text-steel-faint focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue transition-colors";
    const labelCls = "text-[13px] font-medium text-steel-soft";

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <PageHeader
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
                        {/* Quick actions */}
                        <Reveal width="100%">
                            <div className="flex flex-wrap gap-3 mb-10">
                                <a
                                    href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                                    className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-blue text-white text-[14px] font-medium hover:bg-blue-dim transition-colors"
                                >
                                    <Phone size={16} />
                                    {language === "ar" ? "اتصل الآن" : "Call now"}
                                </a>
                                {whatsapp && (
                                    <a
                                        href={`https://wa.me/${whatsapp.replace(/[^\d]/g, "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#25D366] text-white text-[14px] font-medium hover:opacity-90 transition-opacity"
                                    >
                                        <MessageCircle size={16} />
                                        WhatsApp
                                    </a>
                                )}
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-steel/20 text-steel text-[14px] font-medium hover:border-blue hover:text-blue transition-colors"
                                >
                                    <Mail size={16} />
                                    {language === "ar" ? "راسلنا" : "Email us"}
                                </a>
                            </div>
                        </Reveal>

                        <div className="border-t border-steel/10">
                            {details.map((d, i) => {
                                const Icon = d.icon;
                                return (
                                    <Reveal key={i} width="100%" delay={i * 0.06}>
                                        <div className="flex items-start gap-5 py-7 border-b border-steel/10">
                                            <div className="w-11 h-11 rounded-full bg-sky flex items-center justify-center text-blue shrink-0">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className={labelCls}>{t(d.label)}</h3>
                                                <p
                                                    className="mt-2 text-steel leading-relaxed whitespace-pre-line"
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
                            <div className="rounded-2xl md:rounded-[28px] bg-panel p-8 md:p-12">
                                <h2 className="display text-2xl md:text-3xl text-steel mb-8">
                                    {language === "ar" ? "أرسل رسالة" : "Send a message"}
                                </h2>

                                {status === "sent" ? (
                                    <div className="flex flex-col items-center text-center py-14">
                                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-blue mb-5">
                                            <CheckCircle2 size={28} />
                                        </span>
                                        <p className="text-lg font-semibold text-steel">
                                            {language === "ar" ? "تم إرسال رسالتك" : "Your message has been sent"}
                                        </p>
                                        <p className="mt-2 text-steel-soft">
                                            {language === "ar"
                                                ? "سنعاود التواصل معك في أقرب وقت."
                                                : "We'll get back to you shortly."}
                                        </p>
                                    </div>
                                ) : (
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className={labelCls}>
                                                    {language === "ar" ? "الاسم" : "Name"}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className={inputCls}
                                                    placeholder={language === "ar" ? "الاسم الكامل" : "Full name"}
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
                                                {language === "ar" ? "نوع الاستفسار" : "Inquiry type"}
                                            </label>
                                            <select name="inquiry" className={inputCls} defaultValue="general">
                                                <option value="general">
                                                    {language === "ar" ? "استفسار عام" : "General inquiry"}
                                                </option>
                                                <option value="tender">
                                                    {language === "ar" ? "عطاء / تأهيل مسبق" : "Tender / prequalification"}
                                                </option>
                                                <option value="profile">
                                                    {language === "ar" ? "طلب ملف الشركة" : "Request company profile"}
                                                </option>
                                                <option value="capability">
                                                    {language === "ar" ? "بحث القدرات الفنية" : "Discuss technical capability"}
                                                </option>
                                            </select>
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
                                        <Button type="submit" className="w-full" size="lg" disabled={status === "sending"}>
                                            {status === "sending"
                                                ? language === "ar" ? "جارٍ الإرسال…" : "Sending…"
                                                : language === "ar" ? "إرسال الرسالة" : "Send message"}
                                        </Button>
                                        {status === "mailto" && (
                                            <p className="text-[14px] text-steel-soft text-center">
                                                {language === "ar"
                                                    ? "فتحنا تطبيق البريد لديك لإتمام الإرسال."
                                                    : "We opened your email app to complete sending."}
                                            </p>
                                        )}
                                    </form>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 pb-20 md:pb-28" dir={direction}>
                <div className="flex items-center gap-2.5 mb-6">
                    <span className="h-2 w-2 rounded-full bg-blue" />
                    <span className="eyebrow">
                        {language === "ar" ? "موقعنا" : "Find us"}
                    </span>
                </div>
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl md:rounded-[28px] bg-panel border border-steel/10">
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
