"use server";

import { auth } from "@clerk/nextjs/server";
import { and, eq, or } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { unauthorized } from "next/navigation";
import { zfd } from "zod-form-data";

import { db } from "../drizzle/db";
import { skippedPairs } from "../drizzle/schema";

const skipPairSchema = zfd.formData({
  performanceIdA: zfd.text(),
  performanceIdB: zfd.text(),
});

export async function skipPair(
  _initialState: unknown,
  formData: FormData,
): Promise<void> {
  const { userId } = await auth();
  if (!userId) {
    unauthorized();
  }

  revalidatePath("/rank");

  const { performanceIdA, performanceIdB } = skipPairSchema.parse(formData);

  const existingSkip = await db.query.skippedPairs.findFirst({
    where: and(
      eq(skippedPairs.userId, userId),
      or(
        and(
          eq(skippedPairs.performanceAId, performanceIdA),
          eq(skippedPairs.performanceBId, performanceIdB),
        ),
        and(
          eq(skippedPairs.performanceAId, performanceIdB),
          eq(skippedPairs.performanceBId, performanceIdA),
        ),
      ),
    ),
  });

  if (existingSkip) {
    console.log(
      `Skipping skip from user ${userId} because they've already skipped this pair`,
    );
    return;
  }

  await db.insert(skippedPairs).values({
    userId,
    performanceAId: performanceIdA,
    performanceBId: performanceIdB,
  });

  console.log(
    `User ${userId} skipped pair ${performanceIdA} vs ${performanceIdB}`,
  );
}
