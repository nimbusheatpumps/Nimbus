import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, postcode, range, message, website } = body;

    if (website && website.trim() !== '') {
      return Response.json({ success: true });
    }

    const subject = `New Boiler Quote – ${postcode}`;
    const emailBody = `Name: ${name}
Phone: ${phone}
Email: ${email}
Postcode: ${postcode}
Range: ${range}
Message: ${message}

Call them on ${phone}`;

    await resend.emails.send({
      from: 'noreply@nimbusheatpumps.co.uk',
      to: 'info@nimbusheatpumps.co.uk',
      subject,
      text: emailBody,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}