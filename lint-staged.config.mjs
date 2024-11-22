const lintStagedConfig = {
  // TODO: Target specific files here so that these can run faster
  "*": [
    "node_modules/.bin/next lint .",
    `node_modules/.bin/prettier --write .`,
  ],
  "src/drizzle/seeds.ts": "node_modules/.bin/tsx src/drizzle/validateSeeds.ts",
};

export default lintStagedConfig;
