import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { instituteName, city, mode, email, ageGroup, query } = body;

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@mathkathaaa.com",
        pass: "Udup#a@0317", // Ideally store in process.env
      },
    });

    // Prepare a beautiful, brand-themed HTML email
    const mailOptions = {
      from: '"Mathkathaaa Workshops" <contact@mathkathaaa.com>',
      to: "contact@mathkathaaa.com",
      subject: `📚 New Workshop Request from ${instituteName}`,
      html: `
        <div style="background-color:#f5f5f5; padding:30px; font-family:'Poppins', Arial, sans-serif;">
          <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); overflow:hidden;">
            
            <!-- Header -->
            <div style="background:#0F3D3E; color:#ffffff; text-align:center; padding:30px 20px;">
              <img src="https://www.mathkathaaa.com/_next/image?url=%2FHome%2Flogo.png&w=256&q=75" alt="Mathkathaaa Logo" width="80" style="margin-bottom:10px;" />
              <h2 style="margin:0; font-size:22px;">New Workshop Request</h2>
              <p style="margin:5px 0 0; font-size:14px; color:#fece11;">Igniting Mathematical Curiosity ✨</p>
            </div>

            <!-- Content -->
            <div style="padding:25px 30px; color:#333;">
              <p style="font-size:16px; margin-bottom:10px;">Dear Mathkathaaa Team,</p>
              <p style="font-size:15px; margin-bottom:25px;">You’ve received a new workshop request from <strong>${instituteName}</strong>.</p>

              <table width="100%" cellspacing="0" cellpadding="8" style="border-collapse:collapse; background:#fdfdfd;">
                <tr style="border-bottom:1px solid #eee;">
                  <td width="40%" style="font-weight:600;">🏫 Institute Name</td>
                  <td>${instituteName}</td>
                </tr>
                <tr style="border-bottom:1px solid #eee;">
                  <td style="font-weight:600;">📍 City</td>
                  <td>${city}</td>
                </tr>
                <tr style="border-bottom:1px solid #eee;">
                  <td style="font-weight:600;">🎓 Mode</td>
                  <td>${mode}</td>
                </tr>
                <tr style="border-bottom:1px solid #eee;">
                  <td style="font-weight:600;">📧 Email</td>
                  <td><a href="mailto:${email}" style="color:#0F3D3E;">${email}</a></td>
                </tr>
                <tr style="border-bottom:1px solid #eee;">
                  <td style="font-weight:600;">👶 Expected Age Group</td>
                  <td>${ageGroup}</td>
                </tr>
                <tr>
                  <td style="font-weight:600;">💬 Query</td>
                  <td>${query || "None"}</td>
                </tr>
              </table>

              <p style="margin-top:25px; font-size:14px; color:#555;">
                Please reach out to the contact above to confirm details.
              </p>
            </div>

            <!-- Footer -->
            <div style="background:#fece11; text-align:center; padding:15px;">
              <p style="margin:0; color:#0F3D3E; font-weight:600;">Mathkathaaa Workshops</p>
              <p style="margin:5px 0 0; font-size:13px; color:#0F3D3E;">Inspiring the next generation of problem solvers 🧮</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
