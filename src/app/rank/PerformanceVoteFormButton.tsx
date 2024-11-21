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
              className="block aspect-square w-full border-2 border-black bg-cover text-2xl hover:bg-gray-700 hover:invert sm:text-4xl"
              style={{
                backgroundImage: `url(${performance.show.imageUrl})`,
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
