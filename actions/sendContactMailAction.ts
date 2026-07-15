"use server";

import { sendContactMail } from "@/services/mail/contactMail.service";
import { ContactMailPayload } from "@/types/mail";
import { headers } from "next/headers";

export async function sendContactMailAction(data: ContactMailPayload, token: string) {
  // 1. Verify the Turnstile token
  const ip = (await headers()).get("x-forwarded-for") || "unknown";

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}&remoteip=${ip}`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    }
  );

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return {
      success: false,
      message: "Verification failed. Please try again.",
    };
  }

  // 2. Proceed with email logic only if verification passes
  try {
    if (!data.name.trim() || !data.email.trim()) {
      return {
        success: false,
        message: "Name and email are required.",
      };
    }

    await sendContactMail(data);

    return {
      success: true,
      message: "Contact request sent successfully.",
    };
  } catch (error) {
    console.error("Contact mail action error:", error);

    return {
      success: false,
      message: "Unable to send contact request.",
    };
  }
}