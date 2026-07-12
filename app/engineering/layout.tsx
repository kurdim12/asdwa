import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Engineering Behind It",
    description:
        "How launching girders, post-tensioning, roller-compacted concrete dams and deep water-well drilling actually work — method sheets from Marwan Ahmad Alkurdi & Partners.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
