import { NextResponse } from "next/server";

const MAX_LEN = 5000;

function clean(value: unknown, max = 200): string {
    if (typeof value !== "string") return "";
    return value.trim().slice(0, max);
}

/**
 * Contact form endpoint. Sends the inquiry by email through Resend when a
 * RESEND_API_KEY is configured on the Worker (Settings → Variables). Returns
 * 503 when unconfigured so the client can fall back to a prefilled mailto.
 */
export async function POST(request: Request) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
    }

    const name = clean(body.name);
    const email = clean(body.email);
    const subject = clean(body.subject);
    const inquiry = clean(body.inquiry, 40);
    const message = clean(body.message, MAX_LEN);

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
    }

    const to = process.env.CONTACT_TO || "info@mkurdi.com";
    const from = process.env.CONTACT_FROM || "MK Website <onboarding@resend.dev>";

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from,
            to: [to],
            reply_to: email,
            subject: `[mkurdi.com] ${subject || "New inquiry"} — ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nInquiry type: ${inquiry || "general"}\nSubject: ${subject}\n\n${message}`,
        }),
    });

    if (!res.ok) {
        return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
}
