import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Jason <544803526tianxi@gmail.com>',
      to: ['544803526tianxi@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <p>hello jason</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

