// This file defines the Content Security Policy (CSP) header for the app.
//
// Docs:
//   - Next.js: https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
//   - MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

const scriptSources = [
  // For the YouTube embed
  "https://cdn.jsdelivr.net",

  // Prod auth
  "https://clerk.livegizzrankings.com",

  // Dev auth
  "https://related-molly-28.clerk.accounts.dev",

  // Vercel Analytics
  "https://va.vercel-scripts.com",
];

const connectSources = ["https://related-molly-28.clerk.accounts.dev"];

const frameSources = ["https://bandcamp.com", "https://open.spotify.com"];

const imageSources = [
  // For the YouTube embed
  "https://i.ytimg.com",

  // Avatar images
  "https://img.clerk.com",

  // Bandcamp album images
  "https://f4.bcbits.com",
];

const styleSources = [
  // For the YouTube embed
  "https://cdn.jsdelivr.net",
];

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: ${scriptSources.join(" ")};
  connect-src 'self' ${connectSources.join(" ")};
  style-src 'self' 'unsafe-inline' ${styleSources.join(" ")};
  frame-src 'self' ${frameSources.join(" ")};
  img-src 'self' data: ${imageSources.join(" ")};
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

export const cspHeaderValue = cspHeader.replace(/\n/g, "");
