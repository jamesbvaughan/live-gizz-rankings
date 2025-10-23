import type { KnipConfig } from "knip";

const knipConfig: KnipConfig = {
  entry: [
    "bin/*",
    "src/proxy.ts",
    "src/app/**/*.mdx",
    "src/app/forbidden.tsx",
    "src/app/unauthorized.tsx",
  ],
  ignoreDependencies: [
    // These are used in globals.css
    "tailwindcss",
    "@tailwindcss/forms",
    "@tailwindcss/typography",
  ],
  ignoreBinaries: [
    // This is installed outside of npm
    "vale",
  ],
};

export default knipConfig;
