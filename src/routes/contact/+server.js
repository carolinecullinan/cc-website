// src/routes/api/contact/+server.js
import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS
  }
});

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    const mailOptions = {
      from: GMAIL_USER,
      to: GMAIL_USER, // You'll receive the emails at your Gmail address
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);
    
    return json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return json({ error: 'Failed to send message' }, { status: 500 });
  }
}