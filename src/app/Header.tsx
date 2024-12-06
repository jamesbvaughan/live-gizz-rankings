import Image from "next/image";
import Link from "next/link";

import lgrHandwritten from "./lgr-handwritten.png";

function HeaderMenuLink({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} className="no-underline">
      {title}
    </Link>
  );
}

function HeaderMenu() {
  return (
    <div className="flex items-center space-x-4 text-muted">
      <HeaderMenuLink href="/songs" title="Songs" />
      <HeaderMenuLink href="/albums" title="Albums" />
      <HeaderMenuLink href="/shows" title="Shows" />

      <Link
        href="/rank"
        className="border-2 border-muted px-2 py-1 no-underline hover:border-foreground hover:text-foreground"
        // Prefetching this page causes an error on production because the page
        // redirects to the clerk login page.
        prefetch={false}
      >
        Vote
      </Link>
    </div>
  );
}

export function Header() {
  return (
    <header className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between">
      <Link href="/" className="shrink-0 no-underline">
        <Image
          priority
          src={lgrHandwritten}
          alt="Live Gizz Rankings"
          className="h-36 w-auto"
        />
      </Link>

      <HeaderMenu />
    </header>
  );
}
