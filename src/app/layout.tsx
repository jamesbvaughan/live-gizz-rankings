import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

import BackgroundCanvas from "./BackgroundCanvas";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SentryUserManager } from "./SentryUserManager";

const title = "Live Gizz Rankings";
const description =
  "Find the best live version of King Gizzard songs. Vote on your favorites and browse rankings based on the community's votes.";

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description,
  openGraph: {
    siteName: title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  colorScheme: "dark",
};

const cloudflareAnalyticsToken = process.env.CLOUDFLARE_ANALYTICS_TOKEN;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className="bg-background text-foreground overflow-y-scroll">
          <BackgroundCanvas />

          <div className="mx-auto max-w-[720px] space-y-6 px-4 pt-6 pb-10 sm:space-y-10">
            <Header />

            <main>{children}</main>

            <Footer />
          </div>

          <SentryUserManager />

          {/* Vercel analytics */}
          <Analytics />

          {/* Cloudflare analytics */}
          {cloudflareAnalyticsToken ? (
            <Script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon={`{"token": "${cloudflareAnalyticsToken}"}`}
            />
          ) : null}
        </body>
      </html>
    </ClerkProvider>
  );
}
