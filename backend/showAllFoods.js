import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Food from './models/Food.js';

dotenv.config();

const showAllFoods = async () => {
  try {
    console.log('🔄 Connecting to MongoDB Atlas...\n');
    
    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('✅ Connected Successfully!');
    console.log('📊 Database:', mongoose.connection.name);
    console.log('='.repeat(100));

    // Get all foods
    const foods = await Food.find({}).sort({ createdAt: -1 });
    
    console.log(`\n🍽️  TOTAL FOODS IN DATABASE: ${foods.length}\n`);
    console.log('='.repeat(100));
    
    if (foods.length === 0) {
      console.log('\n❌ No foods found in database.\n');
    } else {
      foods.forEach((food, i) => {
        console.log(`\n${i + 1}. ${food.name.toUpperCase()}`);
        console.log('─'.repeat(100));
        console.log(`   📂 Category: ${food.category}`);
        console.log(`   ⭐ Featured: ${food.featured ? 'Yes' : 'No'}`);
        console.log(`   🖼️  Image: ${food.image || 'No image'}`);
        
        console.log(`\n   💚 Benefits (${food.benefits?.length || 0}):`);
        food.benefits?.forEach((benefit, idx) => {
          console.log(`      ${idx + 1}. ${benefit}`);
        });
        
        console.log(`\n   🥘 Ingredients (${food.ingredients?.length || 0}):`);
        food.ingredients?.forEach((ingredient, idx) => {
          console.log(`      ${idx + 1}. ${ingredient}`);
        });
        
        console.log(`\n   📝 Preparation:`);
        console.log(`      ${food.preparation || 'Not specified'}`);
        
        console.log(`\n   🏥 Good for Diseases (${food.diseases?.length || 0}):`);
        console.log(`      ${food.diseases?.join(', ') || 'None specified'}`);
        
        if (food.ayurvedicProperties) {
          console.log(`\n   🌿 Ayurvedic Properties:`);
          console.log(`      Rasa (Taste): ${food.ayurvedicProperties.rasa?.join(', ') || 'N/A'}`);
          console.log(`      Virya (Energy): ${food.ayurvedicProperties.virya || 'N/A'}`);
          console.log(`      Vipaka (Post-digestive effect): ${food.ayurvedicProperties.vipaka || 'N/A'}`);
          console.log(`      Dosha Effect: ${food.ayurvedicProperties.dosha?.join(', ') || 'N/A'}`);
        }
        
        console.log(`\n   📅 Created: ${food.createdAt ? new Date(food.createdAt).toLocaleString() : 'N/A'}`);
        console.log('='.repeat(100));
      });
    }

    // Category breakdown
    console.log('\n\n📊 FOODS BY CATEGORY:');
    console.log('='.repeat(100));
    const categories = {};
    foods.forEach(food => {
      categories[food.category] = (categories[food.category] || 0) + 1;
    });
    
    Object.entries(categories).sort((a, b) => b[1] - a[1]).forEach(([category, count]) => {
      console.log(`   ${category}: ${count} food(s)`);
    });

    // Featured foods
    const featuredFoods = foods.filter(f => f.featured);
    console.log('\n\n⭐ FEATURED FOODS:');
    console.log('='.repeat(100));
    if (featuredFoods.length > 0) {
      featuredFoods.forEach((food, i) => {
        console.log(`   ${i + 1}. ${food.name} (${food.category})`);
      });
    } else {
      console.log('   No featured foods');
    }

    // Disease coverage
    console.log('\n\n🏥 DISEASES COVERED:');
    console.log('='.repeat(100));
    const allDiseases = new Set();
    foods.forEach(food => {
      food.diseases?.forEach(disease => allDiseases.add(disease));
    });
    
    const diseaseArray = Array.from(allDiseases).sort();
    diseaseArray.forEach((disease, i) => {
      const foodsForDisease = foods.filter(f => f.diseases?.includes(disease));
      console.log(`   ${i + 1}. ${disease}: ${foodsForDisease.length} food(s)`);
    });

    console.log('\n' + '='.repeat(100));
    console.log(`\n✅ Total: ${foods.length} foods | ${Object.keys(categories).length} categories | ${diseaseArray.length} diseases covered\n`);

    await mongoose.connection.close();
    console.log('🔌 Connection closed.\n');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

showAllFoods();
