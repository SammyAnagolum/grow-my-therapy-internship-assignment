import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "freight-display-pro": ["var(--font-freight-display-pro)", "system-ui", "sans-serif"],
                "freight-display-pro-light": ["var(--font-freight-display-pro-light)", "system-ui", "sans-serif"],
                "freight-display-pro-bold": ["var(--font-freight-display-pro-bold)", "system-ui", "sans-serif"],
                "freight-sans-pro": ["var(--font-freight-sans-pro)", "system-ui", "sans-serif"],
                "freight-sans-pro-light": ["var(--font-freight-sans-pro-light)", "system-ui", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#94b0b0",
                muted: "#7e7e6b",
                dark: "#41413f",
                bg: "#f3f0e8",
                light: "#fefefe",
                black: "#000000",
            },
        },
    },
    plugins: [],
};
export default config;
