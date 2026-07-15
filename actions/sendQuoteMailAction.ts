"use server";

import { sendQuoteMail } from "@/services/mail/quoteMail.service";
import { QuoteMailPayload } from "@/types/mail";
import { headers } from "next/headers";

export async function sendQuoteMailAction(data: QuoteMailPayload, token: string) {
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

  // 2. Proceed with business logic
  try {
    if (!data.name.trim() || !data.email.trim()) {
      return {
        success: false,
        message: "Name and email are required.",
      };
    }

    await sendQuoteMail(data);

    return {
      success: true,
      message: "Quote request sent successfully.",
    };
  } catch (error) {
    console.error("Quote mail action error:", error);

    return {
      success: false,
      message: "Unable to send quote request.",
    };
  }
}