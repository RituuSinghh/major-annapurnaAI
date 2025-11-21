import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Food from './models/Food.js';
import HealthLog from './models/HealthLog.js';

dotenv.config();

const showData = async () => {
  try {
    console.log('🔄 Connecting to MongoDB Atlas...\n');
    
    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('✅ Connected Successfully!');
    console.log('📊 Database:', mongoose.connection.name);
    console.log('🌐 Host:', mongoose.connection.host);
    console.log('='.repeat(80));

    // Get Users
    console.log('\n👥 USERS DATA');
    console.log('='.repeat(80));
    const users = await User.find({}).select('-password');
    console.log(`Total Users: ${users.length}\n`);
    
    users.forEach((user, i) => {
      console.log(`${i + 1}. ${user.name} (${user.email})`);
      console.log(`   Admin: ${user.isAdmin ? 'Yes' : 'No'}`);
      console.log(`   Age: ${user.age || 'N/A'}, Gender: ${user.gender || 'N/A'}`);
      console.log(`   Height: ${user.height || 'N/A'}, Weight: ${user.weight || 'N/A'}`);
      console.log(`   Activity: ${user.activityLevel || 'N/A'}`);
      console.log(`   Diseases: ${user.diseases?.join(', ') || 'None'}`);
      console.log(`   Created: ${user.createdAt || 'N/A'}`);
      console.log('');
    });

    // Get Foods
    console.log('='.repeat(80));
    console.log('\n🍽️  FOODS DATA');
    console.log('='.repeat(80));
    const foods = await Food.find({});
    console.log(`Total Foods: ${foods.length}\n`);
    
    foods.forEach((food, i) => {
      console.log(`${i + 1}. ${food.name} (${food.category})`);
      console.log(`   Benefits: ${food.benefits?.slice(0, 2).join(', ')}...`);
      console.log(`   Ingredients: ${food.ingredients?.slice(0, 3).join(', ')}...`);
      console.log(`   Good for: ${food.diseases?.join(', ')}`);
      console.log(`   Featured: ${food.featured ? 'Yes' : 'No'}`);
      console.log('');
    });

    // Get Health Logs
    console.log('='.repeat(80));
    console.log('\n📋 HEALTH LOGS DATA');
    console.log('='.repeat(80));
    const logs = await HealthLog.find({}).populate('userId', 'name email');
    console.log(`Total Health Logs: ${logs.length}\n`);
    
    logs.forEach((log, i) => {
      console.log(`${i + 1}. ${log.userId?.name || 'Unknown User'}`);
      console.log(`   Date: ${log.date}`);
      console.log(`   Weight: ${log.weight || 'N/A'}`);
      console.log(`   Symptoms: ${log.symptoms?.join(', ') || 'None'}`);
      console.log(`   Mood: ${log.mood || 'N/A'}, Energy: ${log.energyLevel || 'N/A'}`);
      console.log('');
    });

    // Summary
    console.log('='.repeat(80));
    console.log('\n📊 SUMMARY');
    console.log('='.repeat(80));
    console.log(`👥 Users: ${users.length} (${users.filter(u => u.isAdmin).length} admins)`);
    console.log(`🍽️  Foods: ${foods.length} (${foods.filter(f => f.featured).length} featured)`);
    console.log(`📋 Health Logs: ${logs.length}`);
    console.log('='.repeat(80));

    await mongoose.connection.close();
    console.log('\n✅ Done!\n');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

showData();
