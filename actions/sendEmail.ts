"use server";

import { EmailTemplate } from "../components/email-template";
import { getErrorMessage, validateString } from "../lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("Name");
  const senderEmail = formData.get("Email");
  const senderSubject = formData.get("Subject");
  const message = formData.get("Message");

  if (!validateString(senderName, 50)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(senderEmail, 50)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(senderSubject, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ahmaram172777@gmail.com",
      subject: "Message from Pestico",
      replyTo: senderEmail as string,
      react: await EmailTemplate({
        name: String(senderName || "") as string, 
        subject: String(senderSubject || "") as string,
        text: String(message || "") as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
