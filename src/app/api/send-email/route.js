import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { countryCode, phone, email, childName, grade, query } = body;

    // 1️⃣ Configure transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@mathkathaaa.com",
        pass: "Udup#a@0317", // move to .env later for safety
      },
    });

    // 2️⃣ Prepare beautiful HTML email
    const mailOptions = {
      from: '"Mathkathaaa Enquiry" <contact@mathkathaaa.com>',
      to: "contact@mathkathaaa.com",
      subject: `📚 New Free Class Booking from ${childName}`,
      replyTo: email,
      html: `
        <div style="background-color:#f6f8fa;padding:30px 0;font-family:Arial, sans-serif;">
          <div style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 8px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background-color:#0F3D3E;color:#ffffff;padding:20px;text-align:center;">
              <h2 style="margin:0;font-size:22px;letter-spacing:0.5px;">Mathkathaaa</h2>
              <p style="margin:5px 0 0;font-size:14px;">Inspiring Young Minds with the Magic of Math</p>
            </div>

            <!-- Body -->
            <div style="padding:25px 30px;color:#333333;">
              <h3 style="margin-bottom:20px;color:#0F3D3E;">📩 New Free Math Class Request</h3>
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;width:40%;font-weight:bold;">Parent Email:</td>
                  <td style="padding:8px 0;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:bold;">Country Code:</td>
                  <td style="padding:8px 0;">${countryCode}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:bold;">Parent Phone:</td>
                  <td style="padding:8px 0;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:bold;">Child Name:</td>
                  <td style="padding:8px 0;">${childName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:bold;">Grade:</td>
                  <td style="padding:8px 0;">${grade}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:bold;">Query:</td>
                  <td style="padding:8px 0;">${query || "None"}</td>
                </tr>
              </table>

              <div style="margin-top:25px;padding:15px;background-color:#f0f8f8;border-left:5px solid #0F3D3E;border-radius:5px;">
                <p style="margin:0;font-size:14px;color:#0F3D3E;">
                  A new parent has requested a free trial math class for their child.  
                  Please review and reach out to them soon!
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color:#0F3D3E;color:#ffffff;text-align:center;padding:15px;font-size:12px;">
              <p style="margin:0;">&copy; ${new Date().getFullYear()} Mathkathaaa. All rights reserved.</p>
              <p style="margin:5px 0 0;">📧 contact@mathkathaaa.com | 🌐 www.mathkathaaa.com</p>
            </div>

          </div>
        </div>
      `,
    };

    // 3️⃣ Send mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
