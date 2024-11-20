"use server";

import { auth } from "@clerk/nextjs/server";

export async function vote(formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error("User not found");

  const location = formData.get("location");

  console.log(`${userId} voted for ${location}`);
}
