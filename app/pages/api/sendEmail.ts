// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, mobile, jobTitle, company, companyType, location, country, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLUC_EMAIL, // your SMTP username
        pass: process.env.NEXT_PUBLUC_PASS, // your SMTP password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER, // sender address
      to: 'prawalsinghbaghel@gmail.com', // recipient address
      subject: 'New Contact Form Submission', // subject line
      text: `You have a new contact form submission:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Mobile: ${mobile}
        Job Title: ${jobTitle}
        Company: ${company}
        Company Type: ${companyType}
        Location: ${location}
        Country: ${country}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default sendEmail;
