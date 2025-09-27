/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*.{ts,tsx}": () => "bun tsc",
  "*.{ts,tsx,mjs}": ["bun lint --fix", `bun prettier --write`],
  "*.{md,mdx,css,json}": [`bun prettier --write`],
  "*.{md,mdx,tsx}": [`vale`],
  "*.{ts,tsx,mjs,mdx}": () => "bun knip",
  "src/drizzle/data/*.ts": "bun tsx src/drizzle/validateSeeds.ts",
};

export default lintStagedConfig;
