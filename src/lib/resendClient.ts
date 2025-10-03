/**
 * Get a Resend client instance with lazy loading
 */
export async function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY not configured");
  }

  const { Resend } = await import("resend");
  return new Resend(apiKey);
}
