import { COMPANY_DATA } from "@/lib/data";
import { NewsArticle } from "@/components/news/NewsArticle";
import Link from "next/link";

interface PageProps {
    params: Promise<{ id: string }>;
}

// Pre-render every news article at build time so the route works on a fully
// static export (Cloudflare Pages / Workers static assets).
export function generateStaticParams() {
    return (COMPANY_DATA.news as any[]).map((n) => ({ id: String(n.id) }));
}

export const dynamicParams = false;

export default async function NewsArticlePage({ params }: PageProps) {
    const { id } = await params;
    const item = (COMPANY_DATA.news as any[]).find((n) => String(n.id) === id);

    if (!item) {
        return (
            <main className="bg-paper min-h-screen flex items-center justify-center text-ink">
                <div className="text-center">
                    <h1 className="font-display text-4xl mb-4">Article Not Found</h1>
                    <Link href="/news" className="text-brass hover:underline">
                        Return to Newsroom
                    </Link>
                </div>
            </main>
        );
    }

    return <NewsArticle item={item} />;
}
