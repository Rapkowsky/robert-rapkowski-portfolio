"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (FormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
      to: ["robertrapkowski19@gmail.com"],
      subject: `Contact form - message from ${FormData.firstName} ${FormData.lastName} (${FormData.email})`,
      react: await EmailTemplate({ message: FormData.message }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
