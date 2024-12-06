"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { db } from "@/drizzle/db";
import { nominations } from "@/drizzle/schema";

export type SubmitNominationState =
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

  if (message.length === 0) {
    return { success: false, userError: "The message is empty" };
  }

  const { userId } = await auth();

  try {
    await db.insert(nominations).values({
      userId,
      message,
    });
  } catch (error) {
    console.error(`Failed to submit nomination: ${(error as Error).message}`);
    return { success: false, userError: "Failed to submit nomination" };
  }

  revalidatePath("/nominations");

  console.log(`Nomination submitted: ${message}`);
  return { success: true };
}
