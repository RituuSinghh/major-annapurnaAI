import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    console.log('🔄 Testing MongoDB Atlas Connection...\n');

    if (!process.env.MONGODB_URI) {
      console.log('❌ MONGODB_URI not found in .env file');
      process.exit(1);
    }

    console.log('📝 Connection String:', process.env.MONGODB_URI.replace(/:[^:@]+@/, ':****@'));

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log('\n✅ MongoDB Atlas Connected Successfully!');
    console.log('📊 Database Name:', mongoose.connection.name);
    console.log('🌐 Host:', mongoose.connection.host);
    console.log('📡 Connection State:', mongoose.connection.readyState === 1 ? 'Connected' : 'Not Connected');

    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\n📚 Collections in database:');
    if (collections.length === 0) {
      console.log('   (No collections yet - database is empty)');
    } else {
      collections.forEach(col => {
        console.log(`   - ${col.name}`);
      });
    }

    // Test a simple query
    console.log('\n🔍 Testing database operations...');
    const User = mongoose.model('User', new mongoose.Schema({
      name: String,
      email: String,
    }));

    const userCount = await User.countDocuments();
    console.log(`   Users in database: ${userCount}`);

    console.log('\n✅ All tests passed! MongoDB Atlas is working correctly.\n');
    
    await mongoose.connection.close();
    console.log('🔌 Connection closed.');
    process.exit(0);

  } catch (error) {
    console.log('\n❌ Connection Test Failed!');
    console.log('Error:', error.message);
    
    if (error.message.includes('authentication')) {
      console.log('\n💡 Possible issues:');
      console.log('   - Check username and password in connection string');
      console.log('   - Verify database user exists in MongoDB Atlas');
      console.log('   - Ensure password is URL-encoded if it contains special characters');
    } else if (error.message.includes('network') || error.message.includes('ENOTFOUND')) {
      console.log('\n💡 Possible issues:');
      console.log('   - Check your internet connection');
      console.log('   - Verify cluster URL is correct');
      console.log('   - Check if IP address is whitelisted in MongoDB Atlas');
    }
    
    process.exit(1);
  }
};

testConnection();
