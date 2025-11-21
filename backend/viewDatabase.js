import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import User from './models/User.js';
import Food from './models/Food.js';
import HealthLog from './models/HealthLog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const viewDatabase = async () => {
  try {
    console.log('🔄 Connecting to MongoDB Atlas...\n');

    if (!process.env.MONGODB_URI) {
      console.log('❌ MONGODB_URI not found in .env file');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('✅ MongoDB Atlas Connected Successfully!\n');
    console.log('📊 Database Name:', mongoose.connection.name);
    console.log('🌐 Host:', mongoose.connection.host);
    console.log('=' .repeat(80));

    // Get all collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\n📚 Collections in database:', collections.length);
    collections.forEach(col => {
      console.log(`   - ${col.name}`);
    });
    console.log('=' .repeat(80));

    // Users Collection
    console.log('\n👥 USERS COLLECTION');
    console.log('=' .repeat(80));
    const users = await User.find({}).select('-password');
    console.log(`Total Users: ${users.length}\n`);
    
    if (users.length > 0) {
      users.forEach((user, index) => {
        console.log(`User ${index + 1}:`);
        console.log(`  ID: ${user._id}`);
        console.log(`  Name: ${user.name}`);
        console.log(`  Email: ${user.email}`);
        console.log(`  Admin: ${user.isAdmin ? 'Yes' : 'No'}`);
        console.log(`  Age: ${user.age || 'Not set'}`);
        console.log(`  Gender: ${user.gender || 'Not set'}`);
        console.log(`  Height: ${user.height || 'Not set'}`);
        console.log(`  Weight: ${user.weight || 'Not set'}`);
        console.log(`  Activity Level: ${user.activityLevel || 'Not set'}`);
        console.log(`  Diseases: ${user.diseases?.length > 0 ? user.diseases.join(', ') : 'None'}`);
        console.log(`  Created: ${user.createdAt}`);
        console.log('');
      });
    } else {
      console.log('  No users found in database.\n');
    }

    // Foods Collection
    console.log('=' .repeat(80));
    console.log('\n🍽️  FOODS COLLECTION');
    console.log('=' .repeat(80));
    const foods = await Food.find({});
    console.log(`Total Foods: ${foods.length}\n`);
    
    if (foods.length > 0) {
      foods.forEach((food, index) => {
        console.log(`Food ${index + 1}:`);
        console.log(`  ID: ${food._id}`);
        console.log(`  Name: ${food.name}`);
        console.log(`  Category: ${food.category}`);
        console.log(`  Benefits: ${food.benefits?.slice(0, 3).join(', ')}...`);
        console.log(`  Ingredients: ${food.ingredients?.slice(0, 5).join(', ')}...`);
        console.log(`  Diseases: ${food.diseases?.join(', ')}`);
        console.log(`  Ayurvedic Properties:`);
        console.log(`    - Rasa: ${food.ayurvedicProperties?.rasa?.join(', ')}`);
        console.log(`    - Virya: ${food.ayurvedicProperties?.virya}`);
        console.log(`    - Vipaka: ${food.ayurvedicProperties?.vipaka}`);
        console.log(`  Featured: ${food.featured ? 'Yes' : 'No'}`);
        console.log(`  Created: ${food.createdAt}`);
        console.log('');
      });
    } else {
      console.log('  No foods found in database.\n');
    }

    // Health Logs Collection
    console.log('=' .repeat(80));
    console.log('\n📋 HEALTH LOGS COLLECTION');
    console.log('=' .repeat(80));
    const healthLogs = await HealthLog.find({}).populate('userId', 'name email');
    console.log(`Total Health Logs: ${healthLogs.length}\n`);
    
    if (healthLogs.length > 0) {
      healthLogs.forEach((log, index) => {
        console.log(`Health Log ${index + 1}:`);
        console.log(`  ID: ${log._id}`);
        console.log(`  User: ${log.userId?.name || 'Unknown'} (${log.userId?.email || 'N/A'})`);
        console.log(`  Date: ${log.date}`);
        console.log(`  Weight: ${log.weight || 'Not recorded'}`);
        console.log(`  Symptoms: ${log.symptoms?.join(', ') || 'None'}`);
        console.log(`  Mood: ${log.mood || 'Not recorded'}`);
        console.log(`  Energy Level: ${log.energyLevel || 'Not recorded'}`);
        console.log(`  Notes: ${log.notes || 'No notes'}`);
        console.log('');
      });
    } else {
      console.log('  No health logs found in database.\n');
    }

    // Summary Statistics
    console.log('=' .repeat(80));
    console.log('\n📊 DATABASE SUMMARY');
    console.log('=' .repeat(80));
    console.log(`Total Users: ${users.length}`);
    console.log(`  - Admin Users: ${users.filter(u => u.isAdmin).length}`);
    console.log(`  - Regular Users: ${users.filter(u => !u.isAdmin).length}`);
    console.log(`Total Foods: ${foods.length}`);
    console.log(`  - Featured Foods: ${foods.filter(f => f.featured).length}`);
    console.log(`Total Health Logs: ${healthLogs.length}`);
    console.log('=' .repeat(80));

    await mongoose.connection.close();
    console.log('\n🔌 Connection closed.');
    process.exit(0);

  } catch (error) {
    console.log('\n❌ Error:', error.message);
    
    if (error.message.includes('IP')) {
      console.log('\n💡 Solution:');
      console.log('   1. Go to MongoDB Atlas: https://cloud.mongodb.com/');
      console.log('   2. Select your cluster');
      console.log('   3. Click "Network Access" in the left sidebar');
      console.log('   4. Click "Add IP Address"');
      console.log('   5. Click "Allow Access from Anywhere" (0.0.0.0/0)');
      console.log('   6. Or add your current IP address');
      console.log('   7. Wait a few minutes for changes to take effect');
      console.log('   8. Run this script again\n');
    }
    
    process.exit(1);
  }
};

viewDatabase();
