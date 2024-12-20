// pages/api/send-email.js
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    console.log("idhar aaya");
    console.log("reqiest: ", req);
  if (req.method === 'POST') {
    const { work, budget, name, email, mobile, image, country, details } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.SMTP_GMAIL_USER, 
        pass: process.env.SMTP_GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_GMAIL_USER, 
      to: process.env.SMTP_GMAIL_USER, 
      subject: `${name}: Project Details Request`,
      html: `
        <h1>Project Details</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Work Type:</strong> ${work}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Project Details:</strong> ${details}</p>
        <h2>Uploaded Image</h2>
        <img src="${image}" alt="Uploaded Image" width="300" />
      `,
      attachments: [
        {
          filename: 'uploaded-image.png',
          content: image.split('base64,')[1], // Extract the Base64 string
          encoding: 'base64',
          contentType: 'image/png',
        },
      ],
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: "Request Sent Successfully. Wait for a day for a response or feel free to call us!"});
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ success: false, message: 'Error sending request' });
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' });
  }
}
