const lintStagedConfig = {
  "*.ts,*.tsx,*.mjs": [
    "node_modules/.bin/next lint --fix",
    `node_modules/.bin/prettier --write`,
  ],
  "*.md,*.css,*.json": [`node_modules/.bin/prettier --write`],
  "src/drizzle/seeds.ts": "node_modules/.bin/tsx src/drizzle/validateSeeds.ts",
};

export default lintStagedConfig;
