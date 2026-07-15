import { sendMail } from "@/lib/mail";

export async function sendContactMail(data: {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  message?: string;
  preferredContact?: string;
}) {
  // 1. Send internal notification
  await sendMail({
    to: process.env.CONTACT_EMAIL_TO!,
    replyTo: data.email,
    subject: `[Contact Inquiry] ${data.name}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "Not provided"}</p>
      <p><b>Preferred Contact:</b> ${data.preferredContact || "email"}</p>
      <p><b>Message:</b></p>
      <p>${data.message || "No message provided"}</p>
    `,
  });

  // 2. Send automated response to the client
  return sendMail({
    to: data.email,
    subject: "We’ve received your inquiry - Maastrix Solutions",
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
        <h2 style="color: #2563eb;">Thanks for reaching out!</h2>
        <p>Hi ${data.name},</p>
        <p>We have successfully received your inquiry regarding our services. Our team is currently reviewing your message and will get back to you shortly.</p>
        <p>If your matter is urgent, please feel free to call us directly at <b>+91-674-2540245</b>.</p>
        <br/>
        <p>Best regards,<br/><b>The Maastrix Solutions Team</b></p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #888;">This is an automated message. Please do not reply directly to this email.</p>
      </div>
    `,
  });
}