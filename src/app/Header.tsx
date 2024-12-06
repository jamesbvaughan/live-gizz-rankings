import Link from "next/link";
import Image from "next/image";

import lgrHandwritten from "./lgr-handwritten.png";
import { AccountButtons } from "./AccountButtons";

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
      <HeaderMenuLink href="/rank" title="Vote" />

      <div className="h-6 border-l border-muted-2" />

      <HeaderMenuLink href="/songs" title="Songs" />
      <HeaderMenuLink href="/albums" title="Albums" />
      <HeaderMenuLink href="/shows" title="Shows" />

      <div className="h-6 border-l border-muted-2" />

      <AccountButtons />
    </div>
  );
}

export function Header() {
  return (
    <header className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between">
      <Link href="/" className="shrink-0 no-underline">
        <Image
          src={lgrHandwritten}
          alt="Live Gizz Rankings"
          className="h-36 w-auto"
        />
      </Link>

      <HeaderMenu />
    </header>
  );
}
