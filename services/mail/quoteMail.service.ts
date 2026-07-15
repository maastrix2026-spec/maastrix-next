import { sendMail } from "@/lib/mail";

export async function sendQuoteMail(data: {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  country?: string;
  message?: string;
  preferredContact?: string;
}) {
  // 1. Send internal notification
  await sendMail({
    to: process.env.QUOTE_EMAIL_TO!,
    replyTo: data.email,
    subject: `[Project Quote] ${data.name}`,
    html: `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 500px; margin: 20px auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px; color: #333;">
    <h2 style="font-size: 18px; margin-bottom: 20px; color: #000;">Project Inquiry</h2>
    
    <div style="margin-bottom: 20px;">
      <p style="margin: 5px 0; font-size: 14px;"><strong>Name:</strong> ${data.name}</p>
      <p style="margin: 5px 0; font-size: 14px;"><strong>Email:</strong> ${data.email}</p>
      <p style="margin: 5px 0; font-size: 14px;"><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p style="margin: 5px 0; font-size: 14px;"><strong>Country:</strong> ${data.country || "N/A"}</p>
      <p style="margin: 5px 0; font-size: 14px;"><strong>Preference:</strong> ${data.preferredContact || "Email"}</p>
    </div>

    <div style="border-top: 1px solid #f0f0f0; padding-top: 15px;">
      <p style="font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">Message</p>
      <p style="font-size: 14px; line-height: 1.5; color: #555;">${data.message || "No message provided"}</p>
    </div>
  </div>
`,
  });

  // 2. Send automated consultation receipt to the client
  return sendMail({
    to: data.email,
    subject: "Project Inquiry Received - Maastrix Solutions",
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
        <h2 style="color: #2563eb;">We have received your project brief!</h2>
        <p>Hi ${data.name},</p>
        <p>Thank you for considering Maastrix Solutions for your project. We have successfully received your request.</p>
        <p>Our technical leads are currently reviewing your project details, budget, and timeline. We aim to analyze your requirements and will contact you via your preferred method (${data.preferredContact || "email"}) within 24-48 hours to discuss next steps.</p>
        <br/>
        <p>We look forward to the possibility of building something great together.</p>
        <p>Best regards,<br/><b>The Maastrix Solutions Team</b></p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #888;">This is an automated receipt of your project inquiry. Please do not reply directly to this email.</p>
      </div>
    `,
  });
}
