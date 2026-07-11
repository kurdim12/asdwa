import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "The story of Marwan Ahmad Alkurdi & Partners \u2014 a first-grade Jordanian contractor since 1981.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
