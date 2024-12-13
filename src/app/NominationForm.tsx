"use client";

import Form from "next/form";
import { useActionState } from "react";

import { submitNomination } from "@/actions/submitNomination";

export function NominationForm() {
  const [state, formAction, isPending] = useActionState(submitNomination, null);

  return (
    <div className="space-y-2">
      <Form action={formAction}>
        <div className="flex space-x-2">
          <input
            type="text"
            minLength={4}
            required
            disabled={isPending}
            className="peer border-muted placeholder:text-muted-2 focus:border-foreground disabled:text-muted grow border-2 bg-transparent p-2 text-base focus:ring-0"
            name="message"
            placeholder="ex: Magma at The Gorge, The River at Red Rocks '22, etc."
          />

          <button
            type="submit"
            className="border-foreground disabled:border-muted disabled:text-muted enabled:peer-valid:hover:bg-foreground enabled:peer-valid:hover:text-background peer-invalid:border-muted peer-invalid:text-muted block w-[114px] shrink-0 border-2 p-2 text-base select-none"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>

      {state && !isPending ? (
        <p className="text-sm">
          {state.success ? (
            <span className="text-muted">
              Submitted succesfully. Thanks for the nomination!
            </span>
          ) : (
            <span className="text-red">{state.userError}</span>
          )}
        </p>
      ) : null}
    </div>
  );
}
