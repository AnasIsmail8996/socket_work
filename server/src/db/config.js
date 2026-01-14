import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

export const dbConnect = async () => {
  if (!MONGO_URI)
    return console.error('❌ MONGO_URI undefined! Check your .env file');

  try {
    await mongoose.connect(MONGO_URI); // options hataye
    console.log('💜 DB connected successfully');
  } catch (err) {
    console.error('😅 DB connection error:', err.message);
  }
};
