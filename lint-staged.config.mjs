const lintStagedConfig = {
  "*.{ts,tsx,mjs}": ["bun lint --fix --file", `bun prettier --write`],
  "*.{md,mdx,css,json}": [`bun prettier --write`],
  "*.{md,mdx,tsx}": [`vale`],
  "src/drizzle/data/*.ts": "bun tsx src/drizzle/validateSeeds.ts",
};

export default lintStagedConfig;
