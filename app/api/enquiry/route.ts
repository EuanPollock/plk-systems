import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, business_name, email, phone, problem } = body;

    await resend.emails.send({
      from: "PLK Systems <enquiries@plksystems.co.uk>",
      to: "contact@plksystems.co.uk",
      replyTo: email,
      subject: `New PLK Systems enquiry from ${name}`,
      html: `
        <h2>New PLK Systems enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business_name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <hr />
        <p><strong>Problem:</strong></p>
        <p>${problem}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}