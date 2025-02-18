import { EmailTemplate } from "@/components/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type ResponseData = {
  message: string;
  data?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY as string);

  try {
    const emailContent = await EmailTemplate({ name: `${name}`, email: `${email}`, message: `${message}` });

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['sharmadibyansu1501@gmail.com'],
      subject: 'Hello world',
      react: emailContent,
    });

    if (error) {
      return res.status(400).json(error);
    }
    
    return res.status(200).json({ message: "Message sent successfully!", data: `${data}` });
  } catch (error) {
    return res.status(500).json({ message: `Failed to send message! ${error}` });
  }
}
