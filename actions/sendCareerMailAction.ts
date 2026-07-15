"use server";

import { CareerMailPayload } from "@/types/mail";
import { sendCareerMail } from "@/services/mail/careerMail.service";

export async function sendCareerMailAction(data: CareerMailPayload) {
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
