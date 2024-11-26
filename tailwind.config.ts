import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0a09",
        foreground: "#f5f4f4",
        muted: "#a8a29e",
        "muted-2": "#44403c",
        "muted-3": "#1c1917",
        red: "#ff0000",
      },
    },
  },
  plugins: [],
} satisfies Config;
