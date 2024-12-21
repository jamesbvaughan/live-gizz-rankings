import Link from "next/link";
import { Suspense } from "react";

import { RecentVotes } from "./RecentVotes";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4 text-lg">
        <p>
          The purpose of this site is to identify what the fan community
          believes to be King Gizzard &amp; The Lizard Wizard&apos;s best live
          performances of their songs.
        </p>

        <p>
          Use the links at the top of this page to browse the ranked
          performances by song, album, or show.
        </p>

        <p>
          This is still a work-in-progress! If you&apos;d like to help out, the
          most helpful thing you can do is to vote on some performances or{" "}
          <Link href="/nominate">nominate your favorite performances</Link>.
        </p>
      </div>

      <div className="flex justify-around">
        <Link
          prefetch={false}
          href="/rank"
          className="block border-2 border-foreground px-6 py-6 text-2xl no-underline hover:bg-foreground hover:text-background"
        >
          vote on some performances
        </Link>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl">Recent votes</h2>

        <Suspense fallback={<div>Loading...</div>}>
          <RecentVotes />
        </Suspense>
      </div>
    </div>
  );
}
