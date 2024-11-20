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

export const metadata: Metadata = {
  title: "Live Gizz Rankings",
  description: "Find the best live version of King Gizzard songs",
};

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <h1 className="text-4xl">Live Gizz Rankings</h1>
      </Link>

      <div>
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className="bg-gray-800 text-gray-100">
          <div className="mx-auto max-w-[720px] space-y-10 bg-gray-900 px-4 py-6">
            <Header />

            <main>{children}</main>

            <footer>
              Made by <a href="https://jamesbvaughan.com">James Vaughan</a>, no
              affiliation with the band
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
