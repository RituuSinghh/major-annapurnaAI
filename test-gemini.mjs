import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config({ path: './backend/.env' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

async function testGemini() {
  try {
    console.log('Testing Gemini 2.0 Flash API...');
    console.log('API Key:', process.env.GEMINI_API_KEY?.substring(0, 15) + '...\n');
    
    const prompt = "Write a short haiku about Ayurveda and AI working together";
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    console.log('✅ Success!\n');
    console.log('Response:', text);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testGemini();
