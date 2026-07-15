"use server";

import { CareerMailPayload } from "@/types/mail";
import { sendCareerMail } from "@/services/mail/careerMail.service";

export async function sendCareerMailAction(
  data: CareerMailPayload,
  token: string,
) {
  // 1. Verify the Turnstile token
  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    },
  );

  const verifyData = await verifyRes.json();

  // 2. Check if the verification was successful
  if (!verifyData.success) {
    return {
      success: false,
      message: "Verification failed. Please try again.",
    };
  }

  // 3. Proceed with existing form validation and email logic
  try {
    if (!data.name.trim() || !data.email.trim()) {
      return {
        success: false,
        message: "Name and email are required.",
      };
    }
    await sendCareerMail(data);
    return {
      success: true,
      message: "Career application sent successfully.",
    };
  } catch (error) {
    console.error("Career mail action error:", error);

    return {
      success: false,
      message: "Unable to send career application.",
    };
  }
}