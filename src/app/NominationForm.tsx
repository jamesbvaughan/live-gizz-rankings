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
            className="peer form-input flex-grow border-2 border-muted bg-transparent p-2 text-base placeholder:text-muted-2 focus:border-foreground focus:ring-0 disabled:text-muted"
            name="message"
            placeholder="ex: Magma at The Gorge, The River at Red Rocks '22, etc."
          />

          <button
            type="submit"
            className="block w-[114px] shrink-0 select-none border-2 border-foreground p-2 text-base disabled:border-muted disabled:text-muted hover:peer-valid:enabled:bg-foreground hover:peer-valid:enabled:text-background peer-invalid:border-muted peer-invalid:text-muted"
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
