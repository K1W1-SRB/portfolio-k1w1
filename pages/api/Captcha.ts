import mail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function Mail(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get captcha from request body
    const { recaptcha, ...body } = req.body;

    // Check if recaptcha is completed
    if (!recaptcha) {
      return res.status(400).json({ error: "Please complete the reCAPTCHA." });
    }

    // Construct email message
    const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}
    `;

    // Send email
    const data = {
      to: "softwaredeveloper.k1w1@gmail.com",
      from: "softwaredeveloper.k1w1@gmail.com",
      subject: "Test Email",
      text: message,
    };

    mail
      .send(data)
      .then(() => console.log("Email sent successfully"))
      .catch((error) => console.error("Error sending email:", error));
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
