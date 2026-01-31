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

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    throw new Error("Gmail configuration is missing. Please set SMTP_USER and SMTP_PASSWORD.");
  }

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
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
