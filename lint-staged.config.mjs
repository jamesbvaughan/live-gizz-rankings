const lintStagedConfig = {
  "*.ts,*.tsx,*.mjs": ["bun next lint --fix", `bun prettier --write`],
  "*.md,*.css,*.json": [`bun prettier --write`],
  "src/drizzle/seeds.ts": "bun tsx src/drizzle/validateSeeds.ts",
};

export default lintStagedConfig;
