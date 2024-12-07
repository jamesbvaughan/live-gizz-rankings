"use client";

import clsx from "clsx";
import Form from "next/form";
import { useActionState, useState } from "react";

import { vote } from "@/actions/vote";
import { Performance, Show } from "@/drizzle/schema";
import { getShowById, getShowTitle } from "@/utils";

export function PerformanceFormButtons({
  performanceA,
  performanceB,
}: {
  performanceA: Performance;
  performanceB: Performance;
}) {
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [_state, submitVote, isPending] = useActionState(vote, null);

  return (
    <Form
      action={submitVote}
      className={clsx(isPending && "pointer-events-none opacity-50")}
    >
      <fieldset className="grid grid-cols-2 gap-2">
        {[performanceA, performanceB].map((performance) => {
          const show = getShowById(performance.showId)!;
          const performanceTitle = getShowTitle(show);

          return (
            <div key={performance.id}>
              <input
                hidden
                required
                className="peer hidden"
                type="radio"
                name="winnerId"
                id={performance.id}
                value={performance.id}
                checked={selectedShow === show}
                onChange={() => {
                  setSelectedShow(show);
                }}
              />
              <div className="border-8 border-transparent peer-checked:border-red">
                <label
                  htmlFor={performance.id}
                  className="flex aspect-square w-full cursor-pointer items-center justify-center bg-muted-2 bg-cover text-center text-2xl hover:invert sm:text-4xl"
                  style={{
                    backgroundImage: show.imageUrl
                      ? `url(${show.imageUrl})`
                      : undefined,
                    textShadow: "1px 1px 10px black",
                  }}
                >
                  {performanceTitle}
                  <br />
                  is better
                </label>
              </div>
            </div>
          );
        })}
      </fieldset>

      <input type="hidden" name="performanceIdA" value={performanceA.id} />
      <input type="hidden" name="performanceIdB" value={performanceB.id} />

      <div className="flex h-24 items-center justify-center">
        {selectedShow ? (
          <button
            type="submit"
            className="border-2 border-foreground px-6 py-4 hover:bg-foreground hover:text-background"
          >
            {isPending ? (
              "submitting vote..."
            ) : (
              <>submit vote for {getShowTitle(selectedShow)}</>
            )}
          </button>
        ) : (
          <div>
            choose a performance above to vote for, or refresh the page to skip
            this pair
          </div>
        )}
      </div>
    </Form>
  );
}
