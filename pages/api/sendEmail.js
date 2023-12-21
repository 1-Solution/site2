// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  const senderAccount = {
    user: 'olivier@1-solution.ca',
    pass: 'Sebt00t1541'
  }

  const receiverAddress = 'info@1-solution.ca'

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Configure Nodemailer with your email provider's settings
      const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 465,
        secure: true, // use TLS
        auth: {
          user: senderAccount.user,
          pass: senderAccount.pass,
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      });

      // Email data
      const mailOptions = {
        from: senderAccount.user,
        to: receiverAddress,
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end();
  }
};
