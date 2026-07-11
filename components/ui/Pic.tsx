"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PicProps {
    src: string;
    alt: string;
    className?: string;
    sizes?: string;
    priority?: boolean;
}

/**
 * Optimized fill-mode image for the site's aspect-ratio containers.
 * Routes through the Next image optimizer (Cloudflare Images binding in
 * production) so multi-MB originals are served as sized WebP/AVIF.
 */
export function Pic({
    src,
    alt,
    className,
    sizes = "(max-width: 768px) 100vw, 50vw",
    priority,
}: PicProps) {
    return (
        <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", className)}
        />
    );
}

/**
 * Optimizer URL for places that can't use next/image directly
 * (framer-motion img elements, CSS backgrounds). Widths must be from the
 * default device-size list.
 */
export function optimizedSrc(src: string, width: 640 | 1080 | 1920 = 1080): string {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}
