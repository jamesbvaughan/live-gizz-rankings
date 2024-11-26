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

function QnA({ children }: PropsWithChildren) {
  return <div className="space-y-2">{children}</div>;
}

function Q({ children }: PropsWithChildren) {
  return (
    <p>
      <b>{children}</b>
    </p>
  );
}

function A({ children }: PropsWithChildren) {
  return <div className="space-y-2 text-gray-400">{children}</div>;
}

export default function Home() {
  return (
    <div className="space-y-16 text-xl">
      <div className="space-y-8">
        <p>
          The purpose of this site is to identify what the fan community
          believes to be King Gizzard &amp; The Lizard Wizard&apos;s best live
          performances of their songs.
        </p>

        <div className="flex flex-col items-center justify-around gap-4 sm:flex-row">
          <LinkButton href="/rank">rank some performances</LinkButton>
          <LinkButton href="/albums">browse rankings by album</LinkButton>
        </div>
      </div>

      <div className="space-y-4 text-lg">
        <h2 className="text-2xl">Related projects</h2>

        <div>
          <a
            className="font-bold hover:text-red"
            href="https://kglw.net/jams/artist/1"
            target="_blank"
            rel="noopener"
          >
            KGLW.net Notable Versions
          </a>{" "}
          <span className="text-gray-400">
            - A list of particularly notable live versions of songs, curated by
            the{" "}
            <a
              href="https://kglw.net"
              target="_blank"
              rel="noopener"
              className="underline hover:text-red"
            >
              KGLW.net
            </a>{" "}
            team.
          </span>
        </div>

        <div>
          <a
            className="font-bold hover:text-red"
            href="https://tapes.kglw.net/notables/curated/"
            target="_blank"
            rel="noopener"
          >
            Gizz Tapes Curated Notable Versions
          </a>{" "}
          <span className="text-gray-400">
            - A curated subset of the above list, only containing versions with
            recordings available to listen to on{" "}
            <a
              className="underline hover:text-red"
              href="https://tapes.kglw.net/"
              target="blank"
              rel="noopener"
            >
              Gizz Tapes
            </a>
            .
          </span>
        </div>
      </div>

      <div className="space-y-4 text-lg">
        <h2 className="text-2xl">FAQ</h2>

        <QnA>
          <Q>How does the ranking system work?</Q>
          <A>
            It uses the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Elo_rating_system"
              target="_blank"
              rel="noopener"
            >
              Elo rating system
            </a>{" "}
            to calculate a score for each performance based on our votes.
          </A>
        </QnA>

        <QnA>
          <Q>Why is it missing my favorite song/performance?</Q>
          <A>
            <p>
              I currently maintain the song data manually, which is a bit
              tedious.
            </p>
            <p>
              Even if I easily could add <i>every</i> song and performance to
              the database, I don&apos;t think I&apos;d want to. There are some
              songs{" "}
              <span className="text-sm opacity-50">
                (<i>*cough* *cough* work this time</i>)
              </span>{" "}
              where lots of us have strong opinons about what the <i>best</i>{" "}
              performance is{" "}
              <span className="text-sm opacity-50">
                (<i>*cough* *cough* work this time atlanta &apos;24</i>)
              </span>{" "}
              and I want to make sure that people who take the time to vote end
              up spending that time on songs that we&apos;re all most interested
              in.
            </p>
            <p>
              If there&apos;s a specific song or performance that you&apos;d
              like to nominate, please{" "}
              <a href="mailto:james@jamesbvaughan.com" className="underline">
                let me know
              </a>{" "}
              and I&apos;ll add it!
            </p>
          </A>
        </QnA>
      </div>
    </div>
  );
}
