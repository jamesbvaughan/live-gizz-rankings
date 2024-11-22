import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import BackgroundCanvas from "./BackgroundCanvas";
import Image from "next/image";

import lgrHandwritten from "./lgr-handwritten.png";

export const metadata: Metadata = {
  title: {
    template: "%s | Live Gizz Rankings",
    default: "Live Gizz Rankings",
  },
  description: "Find the best live version of King Gizzard songs",
};

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="no-underline">
        <Image
          src={lgrHandwritten}
          alt="Live Gizz Rankings"
          className="h-36 w-auto"
        />
      </Link>

      <div className="flex items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
const cloudflareAnalyticsToken = process.env.CLOUDFLARE_ANALYTICS_TOKEN;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className="bg-black text-gray-100">
          <BackgroundCanvas />

          <div className="mx-auto max-w-[720px] space-y-10 px-4 pb-10 pt-6">
            <Header />

            <main>{children}</main>

            <footer>
              <hr className="my-10 border-[#ff0000]" />
              <div className="text-center">
                made by <a href="https://jamesbvaughan.com">james</a>
              </div>
            </footer>
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
