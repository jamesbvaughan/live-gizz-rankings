import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const evt = await verifyWebhook(req);

  // Handle the webhook
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, first_name, last_name } = evt.data;

    // Get the primary email
    const primaryEmail = email_addresses.find(
      (email) => email.id === evt.data.primary_email_address_id,
    );

    if (!primaryEmail?.email_address) {
      console.error("No primary email found for user:", id);
      return new Response("Error: No primary email found", { status: 400 });
    }

    // Add to Resend audience
    await addToResendAudience({
      email: primaryEmail.email_address,
      firstName: first_name || undefined,
      lastName: last_name || undefined,
    });

    console.log(`Added user ${id} to Resend audience`);
  }

  return new Response("Webhook processed", { status: 200 });
}

async function addToResendAudience(data: {
  email: string;
  firstName?: string;
  lastName?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // Skip if not configured
  if (!apiKey || !audienceId) {
    console.log("Resend audience not configured - skipping");
    return;
  }

  try {
    const response = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          unsubscribed: false,
        }),
      },
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Failed to add contact to Resend:", error);
      return;
    }

    const result = (await response.json()) as { object: string; id: string };
    console.log("Successfully added contact to Resend:", result);
  } catch (error) {
    console.error("Error adding contact to Resend:", error);
  }
}
