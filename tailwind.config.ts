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
                // --- New light architectural / editorial system ---
                paper: "#F3F1EC",       // warm off-white canvas
                surface: "#FFFFFF",     // cards / raised surfaces
                concrete: "#E7E3DB",    // muted panel fill
                "concrete-dark": "#DAD5CB",
                ink: {
                    DEFAULT: "#18160F", // near-black warm charcoal (text)
                    soft: "#6E6A61",    // secondary text
                    faint: "#9C978C",   // tertiary / captions
                },
                brass: {
                    DEFAULT: "#9A7B2F", // refined architectural gold (accessible on paper)
                    soft: "#B7935A",
                    bright: "#C8A24A",
                },
                charcoal: "#141209",    // dark contrast blocks / footer

                // --- Legacy token aliases (mapped to light system for safety) ---
                background: "#F3F1EC",
                foreground: "#18160F",
                primary: {
                    DEFAULT: "#9A7B2F",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#141209",
                    foreground: "#F3F1EC",
                },
                industrial: {
                    DEFAULT: "#C8A24A",
                    blue: "#4A6E8A",
                },
                muted: {
                    DEFAULT: "#E7E3DB",
                    foreground: "#6E6A61",
                },
            },
            fontFamily: {
                display: ["var(--font-fraunces)", "Georgia", "serif"],
                heading: ["var(--font-fraunces)", "Georgia", "serif"],
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
                "grid-lines":
                    "linear-gradient(to right, rgba(24,22,15,0.06) 1px, transparent 1px)",
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
