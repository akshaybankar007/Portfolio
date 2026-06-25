import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Experience from './models/Experience.js';
import Project from './models/Project.js';
import Skill from './models/Skill.js';

dotenv.config();

const experiences = [
  {
    title: 'Full Stack Web Development Intern',
    company: 'Anishree Technologies LLP',
    date: 'May 2025 - Jun 2025',
    location: 'Nagpur, Maharashtra',
    points: [
      'Developed and validated backend REST API endpoints using Node.js and Express.js.',
      'Debugged and resolved over 15+ frontend functional and UI issues.'
    ],
  },
  {
    title: 'Computer Networking & Web Development Intern',
    company: 'Supersys Services',
    date: 'Jan 2024 - Feb 2024',
    location: 'Nagpur, Maharashtra',
    points: [
      'Gained exposure to networking concepts and web development practices.',
      'Deployed responsive web interfaces to enhance client operational efficiency.'
    ],
  }
];

const projects = [
  {
    title: 'Axara (E-commerce Platform)',
    description: 'Developed a full-stack e-commerce platform with authentication, product catalog, and shopping cart functionality.',
    highlight: 'MERN Stack Application',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'LuminaDx - AI-Assisted Medical Diagnosis',
    description: 'Engineered backend API architecture and a responsive dashboard for real-time reporting of autoimmune hepatitis diagnostics using clinical and histopathology data.',
    highlight: 'Published in IRJET (Oct 2025) & IJRASET (Apr 2026)',
    tags: ['Node.js', 'Express.js', 'JavaScript', 'Deep Learning'],
  },
  {
    title: 'Portfolio Website',
    description: 'Built a high-performance single-page application (SPA) using modular React components and responsive design principles.',
    highlight: 'Modern Web Architecture',
    tags: ['React.js', 'Node.js', 'Express.js'],
  }
];

const skills = [
  { label: 'Languages', items: 'JavaScript, HTML5, CSS3' },
  { label: 'Web Technologies', items: 'React.js, Node.js, Express.js, RESTful APIs' },
  { label: 'Databases', items: 'MongoDB, SQL' },
  { label: 'Core Concepts', items: 'DBMS, Data Structures, Agile Methodology, SDLC, OOP' },
  { label: 'Tools', items: 'Git, GitHub, Postman, VS Code, Render, Chrome DevTools' }
];

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/akshay-portfolio';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB. Nuking old data...');

    await Experience.deleteMany({});
    await Project.deleteMany({});
    await Skill.deleteMany({});

    console.log('Injecting authentic profile data...');
    await Experience.insertMany(experiences);
    await Project.insertMany(projects);
    await Skill.insertMany(skills);

    console.log('Database successfully seeded with current portfolio data.');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
};

seedDB();