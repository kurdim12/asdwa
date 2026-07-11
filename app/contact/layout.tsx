import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Marwan Ahmad Alkurdi & Partners \u2014 Amman, Jordan.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
