import express from 'express';
import nodemailer from 'nodemailer';
import { saveContactMessage } from '../storage/contactStore.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    // 1. Persist to storage
    await saveContactMessage({ name, email, message });

    // 2. Initialize SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Construct and send payload to your inbox
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'akshaybankar076@gmail.com',
      subject: `[UPLINK] Portfolio Contact from ${name}`,
      text: `System alert. New payload received from portfolio UI.\n\nSender Name: ${name}\nSender Email: ${email}\n\nMessage Data:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({ message: 'Payload secured and transmission routed to admin.' });
  } catch (error) {
    console.error('SMTP/Storage Fault:', error);
    return res.status(500).json({
      message: 'Server fault. Transmission failed.',
      error: error.message,
    });
  }
});

export default router;