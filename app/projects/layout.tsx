import type { Metadata } from "next";

export const metadata: Metadata = {
    title: { default: "Projects", template: "%s — Marwan Ahmad Alkurdi & Partners" },
    description: "Dams, bridges, highways, and infrastructure landmarks delivered across Jordan since 1981.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
