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
            className="peer flex-grow border-2 border-muted bg-transparent p-2 text-base focus:border-foreground"
            name="message"
            placeholder="ex: Magma at The Gorge, The River at Red Rocks '22, etc."
          />

          <button
            type="submit"
            className="border-2 border-foreground p-2 text-base hover:enabled:bg-foreground hover:enabled:text-background disabled:border-muted peer-invalid:pointer-events-none peer-invalid:border-muted"
            disabled={isPending}
          >
            Submit
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
