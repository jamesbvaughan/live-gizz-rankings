import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import BackgroundCanvas from "./BackgroundCanvas";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Live Gizz Rankings",
    default: "Live Gizz Rankings",
  },
  description: "Find the best live version of King Gizzard songs",
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
        <body className="overflow-y-scroll bg-background text-foreground">
          <BackgroundCanvas />

          <div className="mx-auto max-w-[720px] space-y-6 px-4 pb-10 pt-6 sm:space-y-10">
            <Header />

            <main>{children}</main>

            <Footer />
          </div>

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
