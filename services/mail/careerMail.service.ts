import { sendMail } from "@/lib/mail";

export async function sendCareerMail(data: {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  message?: string;
}) {
  // 1. Send internal notification (Original)
  const internalMail = await sendMail({
    to: process.env.CAREER_EMAIL_TO!,
    replyTo: data.email,
    subject: `[Career Application] ${data.name}`,
    html: `
      <h2>New Career Application</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "N/A"}</p>
      <p><b>Message:</b> ${data.message || "N/A"}</p>
    `,
  });

  // 2. Send automated confirmation to the applicant
  const applicantMail = await sendMail({
    to: data.email, // Send to the applicant's email
    subject: "Application Received - Maastrix Solutions",
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2563eb;">Application Received!</h2>
        <p>Hi ${data.name},</p>
        <p>Thank you for reaching out to Maastrix Solutions. We have successfully received your application for a career opportunity.</p>
        <p>Our HR team is currently reviewing your profile. If your skills align with our current requirements, we will reach out to you shortly via this email address or your provided phone number.</p>
        <br/>
        <p>Best Regards,<br/><b>The HR Team @ Maastrix Solutions</b></p>
      </div>
    `,
  });

  return { internalMail, applicantMail };
}