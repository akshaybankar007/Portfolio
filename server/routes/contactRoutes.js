import express from 'express';
import ContactMessage from '../models/ContactMessage.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    await ContactMessage.create({ name, email, message });

    return res.status(201).json({ message: 'Message saved successfully.' });
  } catch (error) {
    return res.status(500).json({
      message: 'Server could not save your message.',
      error: error.message,
    });
  }
});

export default router;
