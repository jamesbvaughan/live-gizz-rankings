import Link from "next/link";
import { PropsWithChildren } from "react";

function LinkButton({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="block h-24 w-64 content-center border-2 border-gray-100 text-center text-xl hover:bg-gray-100 hover:text-black"
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-8 text-xl">
      <p>
        The purpose of this site is to identify what the fan community believes
        to be King Gizzard &amp; The Lizard Wizard&apos;s best live performances
        of their songs.
      </p>

      <div className="flex flex-col items-center justify-around gap-4 sm:flex-row">
        <LinkButton href="/rank">rank some performances</LinkButton>
        <LinkButton href="/albums">browse rankings by album</LinkButton>
      </div>

      <div className="space-y-4 text-lg">
        <h2 className="text-2xl">FAQ</h2>

        <div className="space-y-2">
          <p>
            <b>How does the ranking system work?</b>
          </p>
          <p>
            It uses the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Elo_rating_system"
              target="_blank"
              rel="noopener"
            >
              Elo rating system
            </a>{" "}
            to calculate a score for each performance based on our votes.
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <b>Why is it missing my favorite song/performance?</b>
          </p>
          <p>
            I currently maintain the song data manually, which is a bit tedious.
            If there&apos;s a specific song or performance that you&apos;d like
            added, please{" "}
            <a href="mailto:james@jamesbvaughan.com" className="underline">
              let me know
            </a>
            !
          </p>
          <p>
            Even if I easily could, I don&apos;t think I&apos;d want to add{" "}
            <i>every</i> song and performance to the database. There are some
            songs{" "}
            <span className="text-sm opacity-50">
              (<i>*cough* *cough* work this time</i>)
            </span>{" "}
            where lots of us have strong opinons about what the <i>best</i>{" "}
            performance is{" "}
            <span className="text-sm opacity-50">
              (<i>*cough* *cough* work this time atlanta &apos;24</i>)
            </span>{" "}
            and I want to make sure that people who take the time to vote end up
            spending that time on songs that we&apos;re all most interested in.
          </p>
        </div>
      </div>
    </div>
  );
}
