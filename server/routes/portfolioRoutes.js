import express from 'express';
import Experience from '../models/Experience.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';

const router = express.Router();

// Fetch all the things you claim to know how to do
router.get('/experiences', async (req, res) => {
  try {
    const data = await Experience.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch experiences." });
  }
});

router.get('/projects', async (req, res) => {
  try {
    const data = await Project.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects." });
  }
});

router.get('/skills', async (req, res) => {
  try {
    const data = await Skill.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch skills." });
  }
});

export default router;