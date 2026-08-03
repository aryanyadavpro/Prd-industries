import "server-only";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // SSL for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_APP_PASSWORD,
  },
});

interface EnquiryEmailPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  product?: string;
  message: string;
}

/** Send enquiry notification email to the business inbox. */
export async function sendEnquiryNotification(data: EnquiryEmailPayload) {
  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0f172a; padding: 24px; border-radius: 8px 8px 0 0;">
        <h2 style="color: #f59e0b; margin: 0;">New Enquiry Received</h2>
      </div>
      <div style="background: #1e293b; padding: 24px; color: #e2e8f0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #94a3b8; width: 120px;">Name</td>
            <td style="padding: 8px 12px; color: #f1f5f9;">${escapeHtml(data.name)}</td>
          </tr>
          <tr style="background: #0f172a33;">
            <td style="padding: 8px 12px; font-weight: bold; color: #94a3b8;">Company</td>
            <td style="padding: 8px 12px; color: #f1f5f9;">${escapeHtml(data.company ?? "N/A")}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #94a3b8;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(data.email)}" style="color: #f59e0b;">${escapeHtml(data.email)}</a></td>
          </tr>
          <tr style="background: #0f172a33;">
            <td style="padding: 8px 12px; font-weight: bold; color: #94a3b8;">Phone</td>
            <td style="padding: 8px 12px; color: #f1f5f9;">${escapeHtml(data.phone)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #94a3b8;">Product</td>
            <td style="padding: 8px 12px; color: #f1f5f9;">${escapeHtml(data.product ?? "General Enquiry")}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #0f172a; border-radius: 6px; border-left: 3px solid #f59e0b;">
          <p style="color: #94a3b8; margin: 0 0 8px; font-weight: bold;">Message</p>
          <p style="color: #f1f5f9; margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
        </div>
      </div>
      <div style="background: #0f172a; padding: 16px; border-radius: 0 0 8px 8px; text-align: center;">
        <p style="color: #64748b; margin: 0; font-size: 12px;">PRD Industries — Enquiry System</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"PRD Industries Website" <${process.env.SMTP_USER}>`,
    to: process.env.BUSINESS_NOTIFY_EMAIL,
    replyTo: data.email,
    subject: `New Enquiry: ${data.product ?? "General"} — ${data.name}`,
    html,
  });
}

/** Escape HTML to prevent injection in email body. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
