import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Normalizes source text that contains literal escape sequences (e.g. the
 * project descriptions store "\r\n\r\n" as literal characters) into real
 * line breaks, so `whitespace-pre-line` renders proper paragraphs instead of
 * showing raw "\r\n" on screen.
 */
export function clean(text?: string): string {
    if (!text) return "";
    return text
        .replace(/\\r\\n|\\n|\\r/g, "\n") // literal backslash sequences
        .replace(/\r\n|\r/g, "\n") // real carriage returns
        .replace(/\n{3,}/g, "\n\n") // collapse excessive blank lines
        .trim();
}
