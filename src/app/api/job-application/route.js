import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const jobTitle = formData.get("jobTitle");
    const cvFile = formData.get("cv");

    // Convert CV to buffer
    const arrayBuffer = await cvFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@mathkathaaa.com",
        pass: "Udup#a@0317", // ⚠️ move to .env
      },
    });

    // Email with attachment
    await transporter.sendMail({
      from: `"Career Application" <contact@mathkathaaa.com>`,
      to: "contact@mathkathaaa.com",
      subject: `📩 New Application for ${jobTitle}`,
      html: `
        <h3>New Job Application Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p>The candidate's CV is attached below.</p>
      `,
      attachments: [
        {
          filename: cvFile.name,
          content: buffer,
        },
      ],
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
