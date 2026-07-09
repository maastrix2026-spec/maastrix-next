import { sendMail } from "@/lib/mail";

export async function sendCareerMail(data: {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  message?: string;
  position?: string;
  experience?: string;
  portfolio?: string;
}) {
  return sendMail({
    to: process.env.CAREER_EMAIL_TO!,
    replyTo: data.email,
    subject: `[Career Application] ${data.name}`,
    html: `
      <h2>Career Application</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "Not provided"}</p>
      <p><b>Address:</b> ${data.address || "Not provided"}</p>
       <p><b>Message:</b></p>
      <p>${data.message || "No message provided"}</p>
      <hr />
      
    `,
  });
}
