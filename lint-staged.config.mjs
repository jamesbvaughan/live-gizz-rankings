const lintStagedConfig = {
  "*.{ts,tsx,mjs}": ["bun lint --fix --file", `bun prettier --write`],
  "*.{md,mdx,css,json}": [`bun prettier --write`],
  "src/drizzle/seeds.ts": "bun tsx src/drizzle/validateSeeds.ts",
};

export default lintStagedConfig;
