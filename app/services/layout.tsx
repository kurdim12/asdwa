import type { Metadata } from "next";

export const metadata: Metadata = {
    title: { default: "Services", template: "%s — Marwan Ahmad Alkurdi & Partners" },
    description: "Civil works, specialized injection, heavy equipment, and deep water wells across Jordan.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
