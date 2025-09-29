/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*.{ts,tsx}": () => "bun tsc",
  "*.{ts,tsx,mjs}": ["bun format"],
  "*.{md,mdx,css,json}": [`bun prettier --write`],
  "*.{md,mdx,tsx}": () => "bun vale",
  "*.{ts,tsx,mjs,mdx}": () => "bun knip",
};

export default lintStagedConfig;
