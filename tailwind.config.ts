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
                // --- Structural Blueprint system (brand blue derived from logo) ---
                base: "#F4F6F8",        // cool off-white canvas
                surface: "#FFFFFF",     // raised cards
                panel: "#E8EDF2",       // recessed panels
                "panel-dark": "#D8DFE7",
                navy: {
                    DEFAULT: "#0B2138", // deep structural navy (dark blocks)
                    deep: "#071827",    // darkest — footer base
                    soft: "#12314F",    // raised dark surfaces
                },
                blue: {
                    DEFAULT: "#245A96", // brand blue (logo)
                    bright: "#3B7BC4",  // hover / links on dark
                    dim: "#1A4472",
                },
                sky: "#DCE8F5",         // light blue tint fills
                steel: {
                    DEFAULT: "#152232", // primary text (cool near-black)
                    soft: "#5A6B7E",    // secondary text
                    faint: "#8B99A9",   // tertiary / captions
                },
                amber: "#E9A13B",       // micro-accent: numerals, markers

                // --- Legacy aliases mapped onto the new system ---
                paper: "#F4F6F8",
                concrete: "#E8EDF2",
                "concrete-dark": "#D8DFE7",
                ink: {
                    DEFAULT: "#152232",
                    soft: "#5A6B7E",
                    faint: "#8B99A9",
                },
                brass: {
                    DEFAULT: "#245A96",
                    soft: "#3B7BC4",
                    bright: "#3B7BC4",
                },
                charcoal: "#0B2138",
                background: "#F4F6F8",
                foreground: "#152232",
                primary: {
                    DEFAULT: "#245A96",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#0B2138",
                    foreground: "#F4F6F8",
                },
                industrial: {
                    DEFAULT: "#3B7BC4",
                    blue: "#245A96",
                },
                muted: {
                    DEFAULT: "#E8EDF2",
                    foreground: "#5A6B7E",
                },
            },
            fontFamily: {
                display: ["var(--font-archivo)", "system-ui", "sans-serif"],
                heading: ["var(--font-archivo)", "system-ui", "sans-serif"],
                body: ["var(--font-inter)", "system-ui", "sans-serif"],
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
                arabic: ["var(--font-noto-kufi)", "sans-serif"],
            },
            letterSpacing: {
                label: "0.22em",
            },
            maxWidth: {
                "8xl": "88rem",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
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
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
                "ken-burns": "ken-burns 16s ease-out forwards",
                marquee: "marquee 36s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
