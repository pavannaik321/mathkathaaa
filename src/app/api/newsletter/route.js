import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return new Response(JSON.stringify({ success: false, message: "Invalid email address." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@mathkathaaa.com",
        pass: "Udup#a@0317", // 🔒 Use environment variable
      },
    });

    await transporter.sendMail({
      from: '"Mathkathaaa Newsletter" <contact@mathkathaaa.com>',
      to: "contact@mathkathaaa.com",
      subject: "📬 New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h3>New Newsletter Subscription</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p>Subscribed via website footer form.</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Newsletter error:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message || "Server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
