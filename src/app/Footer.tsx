import Link from "next/link";

import { AccountButtons } from "./AccountButtons";

export function Footer() {
  return (
    <footer className="mt-10 space-y-10">
      <hr className="border-red" />

      <div className="my-10 flex items-start justify-between text-muted">
        <div className="space-y-2">
          <div>
            made by <a href="https://jamesbvaughan.com">james</a>
          </div>

          <hr className="border-muted-2" />

          <div className="flex flex-col">
            <Link href="/blog" className="inline-block">
              blog
            </Link>

            <a
              href="https://github.com/jamesbvaughan/live-gizz-rankings"
              className="inline-block"
            >
              source code
            </a>
          </div>
        </div>

        <div>
          <AccountButtons />
        </div>
      </div>
    </footer>
  );
}
