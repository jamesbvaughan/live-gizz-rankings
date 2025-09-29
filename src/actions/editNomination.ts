"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

import { ensureAdmin } from "../auth/utils";
import { db } from "../drizzle/db";
import { nominations } from "../drizzle/schema";
import type { ActionState } from "@/lib/actionState";

const editNominationSchema = zfd.formData({
  nominationId: zfd.text(),
  performanceId: zfd.text().optional(),
  willNotAdd: zfd.checkbox(),
});

export async function editNomination(
  _initialState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await ensureAdmin();

  const { nominationId, performanceId, willNotAdd } =
    editNominationSchema.parse(formData);

  await db
    .update(nominations)
    .set({
      performanceId: performanceId || null,
      willNotAdd,
    })
    .where(eq(nominations.id, nominationId));

  console.log(`Nomination updated: ${nominationId}`);

  revalidatePath("/nominations");
  redirect("/nominations");
}
