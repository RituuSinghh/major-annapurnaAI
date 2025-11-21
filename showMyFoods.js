import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: './backend/.env' });

// Define Food schema
const foodSchema = new mongoose.Schema({
  name: String,
  category: String,
  benefits: [String],
  ingredients: [String],
  preparation: String,
  diseases: [String],
  ayurvedicProperties: {
    rasa: [String],
    virya: String,
    vipaka: String,
    dosha: [String]
  },
  featured: Boolean,
  image: String,
  createdAt: Date
});

const Food = mongoose.model('Food', foodSchema);

const showFoods = async () => {
  try {
    console.log('\n🔄 Connecting to MongoDB Atlas...\n');
    
    const uri = process.env.MONGODB_URI;
    console.log('Connection String:', uri.substring(0, 30) + '...');
    
    await mongoose.connect(uri);
    
    console.log('✅ CONNECTED TO MONGODB ATLAS!');
    console.log('📊 Database:', mongoose.connection.name);
    console.log('🌐 Host:', mongoose.connection.host);
    console.log('\n' + '='.repeat(100) + '\n');

    // Get all foods
    const foods = await Food.find({}).sort({ createdAt: -1 });
    
    console.log(`🍽️  TOTAL FOODS IN YOUR DATABASE: ${foods.length}\n`);
    console.log('='.repeat(100));
    
    if (foods.length === 0) {
      console.log('\n❌ No foods found in database.');
      console.log('💡 Add foods through: http://localhost:3000/admin/add-food\n');
    } else {
      foods.forEach((food, i) => {
        console.log(`\n${i + 1}. 🍽️  ${food.name.toUpperCase()}`);
        console.log('─'.repeat(100));
        console.log(`   Category: ${food.category}`);
        console.log(`   Featured: ${food.featured ? '⭐ Yes' : 'No'}`);
        
        if (food.benefits && food.benefits.length > 0) {
          console.log(`\n   Benefits:`);
          food.benefits.slice(0, 5).forEach((benefit, idx) => {
            console.log(`      ✓ ${benefit}`);
          });
          if (food.benefits.length > 5) {
            console.log(`      ... and ${food.benefits.length - 5} more`);
          }
        }
        
        if (food.ingredients && food.ingredients.length > 0) {
          console.log(`\n   Ingredients: ${food.ingredients.slice(0, 5).join(', ')}${food.ingredients.length > 5 ? '...' : ''}`);
        }
        
        if (food.diseases && food.diseases.length > 0) {
          console.log(`   Good for: ${food.diseases.join(', ')}`);
        }
        
        if (food.image) {
          console.log(`   Image: ${food.image.substring(0, 60)}...`);
        }
        
        console.log(`   Created: ${food.createdAt ? new Date(food.createdAt).toLocaleString() : 'N/A'}`);
      });
      
      console.log('\n' + '='.repeat(100));
      
      // Summary
      const categories = {};
      foods.forEach(food => {
        categories[food.category] = (categories[food.category] || 0) + 1;
      });
      
      console.log('\n📊 SUMMARY:');
      console.log('─'.repeat(100));
      console.log(`Total Foods: ${foods.length}`);
      console.log(`Featured Foods: ${foods.filter(f => f.featured).length}`);
      console.log('\nBy Category:');
      Object.entries(categories).forEach(([cat, count]) => {
        console.log(`   - ${cat}: ${count}`);
      });
      
      const allDiseases = new Set();
      foods.forEach(food => {
        food.diseases?.forEach(d => allDiseases.add(d));
      });
      console.log(`\nDiseases Covered: ${allDiseases.size}`);
      console.log('='.repeat(100));
    }

    await mongoose.connection.close();
    console.log('\n✅ Done! Connection closed.\n');
    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error('\n💡 Make sure:');
    console.error('   1. Backend server is running');
    console.error('   2. MongoDB Atlas IP whitelist is configured');
    console.error('   3. .env file has correct MONGODB_URI\n');
    process.exit(1);
  }
};

showFoods();
