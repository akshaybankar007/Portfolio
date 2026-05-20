import fs from 'fs/promises';
import mongoose from 'mongoose';
import path from 'path';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';
import ContactMessage from '../models/ContactMessage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDirectory = path.join(__dirname, '../data');
const messagesFile = path.join(dataDirectory, 'contact-messages.json');

async function saveToFile(message) {
  await fs.mkdir(dataDirectory, { recursive: true });

  let existingMessages = [];
  try {
    const fileContent = await fs.readFile(messagesFile, 'utf8');
    existingMessages = JSON.parse(fileContent);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  const savedMessage = {
    id: randomUUID(),
    ...message,
    createdAt: new Date().toISOString(),
  };

  existingMessages.push(savedMessage);
  await fs.writeFile(messagesFile, JSON.stringify(existingMessages, null, 2));
  return savedMessage;
}

export async function saveContactMessage(message) {
  if (mongoose.connection.readyState === 1) {
    return ContactMessage.create(message);
  }

  return saveToFile(message);
}
