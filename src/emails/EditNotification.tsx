import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Heading,
} from "@react-email/components";

interface EditNotificationProps {
  entityType: string;
  action: "create" | "update" | "delete";
  entityId?: string;
  details?: string;
  userInfo: string;
  timestamp: string;
  environment: string;
}

export default function EditNotification({
  entityType,
  action,
  entityId,
  details,
  userInfo,
  timestamp,
  environment,
}: EditNotificationProps) {
  const previewText = `${entityType.charAt(0).toUpperCase() + entityType.slice(1)} ${details ? details.split(":")[1]?.trim() || entityType : entityType} ${action}d`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🎸 Live Gizz Rankings Edit</Heading>

          <Section style={infoBox}>
            <Heading as="h3" style={h3}>
              {action.toUpperCase()} {entityType}
            </Heading>
            <Text style={text}>
              <strong>User:</strong> {userInfo}
            </Text>
            {details && (
              <Text style={text}>
                <strong>Details:</strong> {details}
              </Text>
            )}
            {entityId && (
              <Text style={text}>
                <strong>ID:</strong> <code style={code}>{entityId}</code>
              </Text>
            )}
            <Text style={text}>
              <strong>Time:</strong> {timestamp}
            </Text>
            <Text style={text}>
              <strong>Environment:</strong>{" "}
              <span style={environmentBadge(environment)}>
                {environment.toUpperCase()}
              </span>
            </Text>
          </Section>

          <Section style={buttonSection}>
            <Button style={button} href="https://livegizzrankings.com/activity">
              View Activity Log
            </Button>
          </Section>

          <Text style={footer}>
            This notification was sent from Live Gizz Rankings when data was
            modified.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
};

const h1 = {
  color: "#e32c14",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px 0",
};

const h3 = {
  margin: "0 0 10px 0",
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
};

const infoBox = {
  background: "#f5f5f5",
  padding: "20px",
  borderLeft: "4px solid #e32c14",
  margin: "20px 0",
};

const text = {
  margin: "5px 0",
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#333",
};

const code = {
  background: "#fff",
  padding: "2px 4px",
  borderRadius: "3px",
  fontFamily: "monospace",
  fontSize: "13px",
};

const buttonSection = {
  margin: "20px 0",
  textAlign: "center" as const,
};

const button = {
  display: "inline-block",
  background: "#e32c14",
  color: "white",
  padding: "12px 24px",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "14px",
};

const footer = {
  color: "#666",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "20px 0 0 0",
};

const environmentBadge = (env: string) => ({
  backgroundColor: env === "production" ? "#22c55e" : "#f59e0b",
  color: "white",
  padding: "2px 6px",
  borderRadius: "4px",
  fontSize: "11px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
});
