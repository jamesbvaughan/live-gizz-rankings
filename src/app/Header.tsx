import Image from "next/image";
import Link from "next/link";

import lgrHandwritten from "./lgr-handwritten.png";

function HeaderMenu() {
  return (
    <div className="flex items-center space-x-4 text-muted">
      <Link href="/songs" className="no-underline">
        Songs
      </Link>
      <Link href="/albums" className="no-underline">
        Albums
      </Link>
      <Link href="/shows" className="no-underline">
        Shows
      </Link>

      <Link
        href="/rank"
        className="border-2 border-muted px-2 py-1 no-underline hover:border-foreground hover:text-foreground"
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
