import { sendMail } from "@/lib/mail";

export type JobApplicationMailPayload = {
  fullName: string;
  email: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  coverLetter?: string;
  position: string;
  department: string;
  location: string;
  experience: string;
  employmentType: string;
};

export async function sendJobApplicationMail(data: JobApplicationMailPayload) {
  // 1. Send internal notification to HR/Hiring team
  await sendMail({
    to: process.env.CAREER_EMAIL_TO!,
    replyTo: data.email,
    subject: `[Job Application] ${data.fullName} - ${data.position}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2>New Job Application</h2>
        <h3>Candidate Information</h3>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Portfolio / GitHub:</strong> ${data.portfolioUrl || "Not provided"}</p>
        <p><strong>Resume URL:</strong> ${data.resumeUrl || "Not provided"}</p>
        <h3>Cover Note</h3>
        <p>${data.coverLetter || "No cover note provided."}</p>
        <hr />
        <h3>Applied Position</h3>
        <p><strong>Position:</strong> ${data.position}</p>
        <p><strong>Department:</strong> ${data.department}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Employment Type:</strong> ${data.employmentType}</p>
      </div>
    `,
  });

  // 2. Send automated confirmation to the applicant
  return sendMail({
    to: data.email,
    subject: "Application Received - Maastrix Solutions",
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
        <h2 style="color: #2563eb;">Application Received!</h2>
        <p>Hi ${data.fullName},</p>
        <p>Thank you for applying for the <b>${data.position}</b> role at Maastrix Solutions. We have successfully received your application.</p>
        <p>Our hiring team will review your application. If your qualifications match what we are looking for, we will reach out to you directly to discuss the next steps in our recruitment process.</p>
        <br/>
        <p>Best of luck with your application!</p>
        <p>Best regards,<br/><b>The Recruitment Team @ Maastrix Solutions</b></p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #888;">This is an automated acknowledgment. Please do not reply directly to this email.</p>
      </div>
    `,
  });
}