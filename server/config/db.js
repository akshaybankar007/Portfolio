import mongoose from 'mongoose';

export async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.warn('MONGO_URI is missing. Contact messages will use local JSON storage.');
    return false;
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log('MongoDB connected');
    return true;
  } catch (error) {
    if (process.env.REQUIRE_MONGO === 'true') {
      throw error;
    }

    console.warn(`MongoDB unavailable: ${error.message}`);
    console.warn('Contact messages will use local JSON storage for this run.');
    return false;
  }
}
