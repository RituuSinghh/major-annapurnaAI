import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import foodRoutes from './routes/food.js';
import healthRoutes from './routes/health.js';
import chatRoutes from './routes/chat.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('✅ MongoDB Atlas Connected Successfully');
    console.log(`📊 Database: ${mongoose.connection.name}`);
    console.log(`🌐 Host: ${mongoose.connection.host}`);
  } catch (err) {
    console.log('❌ MongoDB Connection Error:', err.message);
    console.log('\n💡 To fix this:');
    console.log('   1. Go to https://cloud.mongodb.com/');
    console.log('   2. Select your cluster');
    console.log('   3. Click "Network Access"');
    console.log('   4. Click "Add IP Address"');
    console.log('   5. Click "Allow Access from Anywhere" (0.0.0.0/0)');
    console.log('   6. Save and wait 2-3 minutes\n');
    console.log('⚠️  Using in-memory storage as fallback');
  }
};

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/admin', adminRoutes);

app.get('/api/health-check', (req, res) => {
  res.json({ status: 'ok', message: 'AnnapurnaAI Backend Running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
