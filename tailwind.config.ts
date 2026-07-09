import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // --- Light premium system (brand blue from the MK logo) ---
                base: "#FFFFFF",        // primary canvas
                surface: "#FFFFFF",
                panel: "#F5F7FA",       // soft alternating band
                "panel-dark": "#EAEEF3",
                navy: {
                    DEFAULT: "#0E2440", // reserved for the footer + small chips
                    deep: "#0A1B31",
                    soft: "#173456",
                },
                blue: {
                    DEFAULT: "#2160A8", // brand accent
                    bright: "#3A7CC7",
                    dim: "#194E8C",
                },
                sky: "#EAF1F8",         // pale tint fills
                steel: {
                    DEFAULT: "#101D2C", // headings / primary text
                    soft: "#51637A",    // secondary text
                    faint: "#8595A8",   // captions
                },
                amber: "#E9A13B",

                // --- Legacy aliases mapped onto the light system ---
                paper: "#FFFFFF",
                concrete: "#F5F7FA",
                "concrete-dark": "#EAEEF3",
                ink: {
                    DEFAULT: "#101D2C",
                    soft: "#51637A",
                    faint: "#8595A8",
                },
                brass: {
                    DEFAULT: "#2160A8",
                    soft: "#3A7CC7",
                    bright: "#3A7CC7",
                },
                charcoal: "#0E2440",
                background: "#FFFFFF",
                foreground: "#101D2C",
                primary: {
                    DEFAULT: "#2160A8",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#0E2440",
                    foreground: "#FFFFFF",
                },
                industrial: {
                    DEFAULT: "#3A7CC7",
                    blue: "#2160A8",
                },
                muted: {
                    DEFAULT: "#F5F7FA",
                    foreground: "#51637A",
                },
            },
            fontFamily: {
                display: ["var(--font-display)", "system-ui", "sans-serif"],
                heading: ["var(--font-display)", "system-ui", "sans-serif"],
                body: ["var(--font-inter)", "system-ui", "sans-serif"],
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
                arabic: ["var(--font-noto-kufi)", "sans-serif"],
            },
            letterSpacing: {
                label: "0.02em",
            },
            maxWidth: {
                "8xl": "84rem",
            },
            boxShadow: {
                card: "0 1px 2px rgba(16,29,44,0.04), 0 8px 24px rgba(16,29,44,0.06)",
                "card-hover": "0 2px 4px rgba(16,29,44,0.05), 0 16px 40px rgba(16,29,44,0.10)",
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(24px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "ken-burns": {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.08)" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
                "ken-burns": "ken-burns 16s ease-out forwards",
            },
        },
    },
    plugins: [],
};
export default config;
