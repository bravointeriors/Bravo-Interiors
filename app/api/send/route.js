import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {

    const body = await req.json();

    const {
      name,
      phone,
      email,
      address,
      message,
    } = body;

    const data = await resend.emails.send({
      from: "Bravo Interiors <onboarding@resend.dev>",

      to: ["bravo.interiors.au@gmail.com"],

      subject: "New Bravo Interiors Quote Request",

      html: `
        <h1>New Website Lead</h1>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Address:</strong> ${address}</p>

        <p><strong>Project Details:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json(data);

  } catch (error) {

    return Response.json({
      error,
    });
  }
}