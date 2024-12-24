import { Metadata } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { PageContent, PageTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
};

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
  return <div className="space-y-2 text-muted">{children}</div>;
}

export default function NominatePage() {
  return (
    <>
      <PageTitle>About this site</PageTitle>

      <PageContent className="space-y-8">
        <div>
          <p>
            The purpose of this site is to identify what the fan community
            believes to be King Gizzard &amp; The Lizard Wizard&apos;s best live
            performances of their songs.
          </p>
        </div>

        <div className="space-y-4 text-lg">
          <h2 className="text-3xl">FAQ</h2>

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
                the database, I don&apos;t think I&apos;d want to. There are
                some songs{" "}
                <span className="text-sm text-muted-2">
                  (<i>*cough* *cough* work this time</i>)
                </span>{" "}
                where lots of us have strong opinons about what the <i>best</i>{" "}
                performance is{" "}
                <span className="text-sm text-muted-2">
                  (<i>*cough* *cough* work this time atlanta &apos;24</i>)
                </span>{" "}
                and I want to make sure that people who take the time to vote
                end up spending that time on performances that we&apos;re all
                most interested in.
              </p>
              <p>
                If there&apos;s a specific song or performance that you&apos;d
                like included,{" "}
                <Link href="/nominate">nominate it for inclusion here</Link> or{" "}
                <a href="mailto:james@jamesbvaughan.com">email me</a> and
                I&apos;ll add it!
              </p>
            </A>
          </QnA>
        </div>

        <div className="space-y-4 text-lg">
          <h2 className="text-3xl">Related projects</h2>

          <div>
            <a
              className="font-bold no-underline"
              href="https://kglw.net/jams/artist/1"
              target="_blank"
              rel="noopener"
            >
              KGLW.net Notable Versions
            </a>{" "}
            <span className="text-muted">
              - A list of particularly notable live versions of songs, curated
              by the{" "}
              <a href="https://kglw.net" target="_blank" rel="noopener">
                KGLW.net
              </a>{" "}
              team.
            </span>
          </div>

          <div>
            <a
              className="font-bold no-underline"
              href="https://tapes.kglw.net/notables/curated/"
              target="_blank"
              rel="noopener"
            >
              Gizz Tapes Curated Notable Versions
            </a>{" "}
            <span className="text-muted">
              - A curated subset of the above list, only containing versions
              with recordings available to listen to on{" "}
              <a href="https://tapes.kglw.net/" target="blank" rel="noopener">
                Gizz Tapes
              </a>
              .
            </span>
          </div>
        </div>
      </PageContent>
    </>
  );
}