"use client";

import { vote } from "@/actions";
import { Performance, Show } from "@/drizzle/schema";
import { getShowTitle } from "@/utils";
import clsx from "clsx";
import { useActionState } from "react";

export function PerformanceFormButtons({
  performanceA,
  performanceB,
}: {
  performanceA: Performance & { show: Show };
  performanceB: Performance & { show: Show };
}) {
  const [_state, submitVote, isPending] = useActionState(vote, null);

  return (
    <div
      className={clsx(
        "grid grid-cols-2 gap-2",
        isPending && "pointer-events-none opacity-50",
      )}
    >
      {[performanceA, performanceB].map((performance) => {
        const performanceTitle = getShowTitle(performance.show);
        const coverImageUrl = performance.show.imageUrl;
        return (
          <form key={performance.id} action={submitVote}>
            <input
              type="hidden"
              name="performanceIdA"
              value={performanceA.id}
            />
            <input
              type="hidden"
              name="performanceIdB"
              value={performanceB.id}
            />
            <input type="hidden" name="winnerId" value={performance.id} />

            <button
              type="submit"
              className="block aspect-square w-full bg-stone-900 bg-cover text-2xl hover:invert sm:text-4xl"
              style={{
                backgroundImage: coverImageUrl
                  ? `url(${coverImageUrl})`
                  : undefined,
                textShadow: "1px 1px 10px black",
              }}
            >
              {performanceTitle}
              <br />
              is better
            </button>
          </form>
        );
      })}
    </div>
  );
}
