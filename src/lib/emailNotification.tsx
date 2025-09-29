import { auth } from "@clerk/nextjs/server";
import EditNotification from "../emails/EditNotification";

interface EditNotificationData {
  entityType: string;
  action: "create" | "update" | "delete";
  entityId?: string;
  details?: string;
}

export async function sendEditNotification(data: EditNotificationData) {
  // Skip if no Resend credentials configured
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFICATION_EMAIL) {
    console.log("Email notification skipped - Resend not configured");
    return;
  }

  try {
    const { userId } = await auth();
    const userInfo = userId || "Unknown user";

    const subject = `🎸 Live Gizz Edit: ${data.action.toUpperCase()} ${data.entityType}`;

    const resend = await getResendClient();
    await resend.emails.send({
      from: "Live Gizz Rankings <notifications@livegizzrankings.com>",
      to: [process.env.NOTIFICATION_EMAIL],
      subject,
      react: (
        <EditNotification
          entityType={data.entityType}
          action={data.action}
          entityId={data.entityId}
          details={data.details}
          userInfo={userInfo}
          timestamp={new Date().toLocaleString()}
          environment={process.env.NODE_ENV || "development"}
        />
      ),
    });

    console.log("Email notification sent successfully");
  } catch (error) {
    // Don't throw errors for notification failures
    console.error("Failed to send email notification:", error);
  }
}

// Lazy load Resend client
async function getResendClient() {
  const { Resend } = await import("resend");
  return new Resend(process.env.RESEND_API_KEY);
}
