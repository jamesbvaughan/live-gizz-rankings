import Link from "next/link";

import { AccountButtons } from "./AccountButtons";

function SiteButtons() {
  return (
    <div className="space-y-2">
      <div>
        made by <a href="https://jamesbvaughan.com">james</a>
      </div>

      <hr className="border-muted-2" />

      <div className="flex flex-col space-y-1">
        <Link href="/about" className="inline-block">
          about
        </Link>

        <Link href="/blog" className="inline-block">
          blog
        </Link>

        <Link href="/changelog" className="inline-block">
          changelog
        </Link>

        <Link href="/privacy" className="inline-block">
          privacy
        </Link>

        <a
          href="https://github.com/jamesbvaughan/live-gizz-rankings"
          className="inline-block"
        >
          source code
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="space-y-10">
      <hr className="border-red" />

      <div className="text-muted flex items-start justify-between space-x-2 leading-5">
        <SiteButtons />

        <AccountButtons />
      </div>
    </footer>
  );
}
