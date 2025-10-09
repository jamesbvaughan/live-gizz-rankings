"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/drizzle/db";
import { nominations } from "@/drizzle/schema";
import { authWithSentry } from "@/auth/utils";

type SubmitNominationState =
  | {
      success: true;
    }
  | {
      success: false;
      userError: string;
    }
  | null;

export async function submitNomination(
  _state: SubmitNominationState,
  formData: FormData,
): Promise<SubmitNominationState> {
  const message = formData.get("message");
  if (typeof message !== "string") {
    return { success: false, userError: "The message is invalid" };
  }

  const trimmedMessage = message.trim();

  if (trimmedMessage.length === 0) {
    return { success: false, userError: "The message is empty" };
  }

  const { userId } = await authWithSentry();

  try {
    await db.insert(nominations).values({
      userId,
      message: trimmedMessage,
    });
  } catch (error) {
    console.error("Failed to submit nomination:", error);
    return { success: false, userError: "Failed to submit nomination" };
  }

  revalidatePath("/nominations");

  console.log(`Nomination submitted: ${trimmedMessage}`);
  return { success: true };
}
