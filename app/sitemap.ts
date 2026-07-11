import type { MetadataRoute } from "next";
import { COMPANY_DATA } from "@/lib/data";

const BASE = "https://mkurdi.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticPages = ["", "/about", "/services", "/projects", "/references", "/news", "/contact"].map(
        (path) => ({
            url: `${BASE}${path}`,
            lastModified: now,
            priority: path === "" ? 1 : 0.7,
        })
    );

    const projects = COMPANY_DATA.projects.all.map((p) => ({
        url: `${BASE}/projects/${encodeURIComponent(p.title.en)}`,
        lastModified: now,
        priority: 0.6,
    }));

    const services = COMPANY_DATA.services.mainServices.map((s) => ({
        url: `${BASE}/services/${s.id}`,
        lastModified: now,
        priority: 0.6,
    }));

    const news = (COMPANY_DATA.news as { id: number }[]).map((n) => ({
        url: `${BASE}/news/${n.id}`,
        lastModified: now,
        priority: 0.5,
    }));

    return [...staticPages, ...projects, ...services, ...news];
}
