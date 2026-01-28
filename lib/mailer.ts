import nodemailer from "nodemailer";

export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  role: string;
  areaOfInterest: string;
  message: string;
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP configuration is missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD.");
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

export async function sendContactNotification(payload: ContactPayload): Promise<void> {
  const to = process.env.CONTACT_NOTIFICATIONS_TO;
  const from = process.env.CONTACT_NOTIFICATIONS_FROM || process.env.SMTP_USER;

  if (!to || !from) {
    throw new Error("Contact notification addresses are not configured. Set CONTACT_NOTIFICATIONS_TO and CONTACT_NOTIFICATIONS_FROM.");
  }

  const t = getTransporter();

  const subject = `New contact enquiry: ${payload.areaOfInterest || "General"}`;

  const lines = [
    `Name: ${payload.name}`,
    `Company: ${payload.company || "-"}`,
    `Email: ${payload.email}`,
    `Role: ${payload.role || "-"}`,
    `Area of interest: ${payload.areaOfInterest || "-"}`,
    "",
    "Message:",
    payload.message,
  ];

  await t.sendMail({
    to,
    from,
    subject,
    text: lines.join("\n"),
  });
}
