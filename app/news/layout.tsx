import type { Metadata } from "next";

export const metadata: Metadata = {
    title: { default: "News", template: "%s — Marwan Ahmad Alkurdi & Partners" },
    description: "Project updates and company announcements from Marwan Ahmad Alkurdi & Partners.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
