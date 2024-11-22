"use client";

import { vote } from "@/actions";
import { Performance, Show } from "@/drizzle/schema";
import { getShowTitle } from "@/utils";
import clsx from "clsx";
import Form from "next/form";
import { useActionState, useState } from "react";

export function PerformanceFormButtons({
  performanceA,
  performanceB,
}: {
  performanceA: Performance & { show: Show };
  performanceB: Performance & { show: Show };
}) {
  const [canSubmit, setCanSubmit] = useState(false);
  const [_state, submitVote, isPending] = useActionState(vote, null);

  return (
    <Form
      action={submitVote}
      className={clsx(isPending && "pointer-events-none opacity-50")}
    >
      <fieldset className="grid grid-cols-2 gap-2">
        {[performanceA, performanceB].map((performance) => {
          const performanceTitle = getShowTitle(performance.show);
          const coverImageUrl = performance.show.imageUrl;
          return (
            <div key={performance.id}>
              <input
                hidden
                required
                className="peer"
                type="radio"
                name="winnerId"
                id={performance.id}
                value={performance.id}
                onChange={() => {
                  setCanSubmit(true);
                }}
              />
              <div className="border-8 border-transparent peer-checked:border-[#ff0000]">
                <label
                  htmlFor={performance.id}
                  className="flex aspect-square w-full cursor-pointer items-center justify-center bg-stone-900 bg-cover text-center text-2xl hover:invert sm:text-4xl"
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
                </label>
              </div>
            </div>
          );
        })}
      </fieldset>

      <input type="hidden" name="performanceIdA" value={performanceA.id} />
      <input type="hidden" name="performanceIdB" value={performanceB.id} />

      <div className="flex h-24 items-center justify-center">
        {canSubmit ? (
          <button
            type="submit"
            className="h-16 w-48 border-2 border-gray-100 hover:bg-gray-100 hover:text-black"
          >
            Submit vote
          </button>
        ) : (
          <div>Choose a performance to vote for</div>
        )}
      </div>
    </Form>
  );
}
