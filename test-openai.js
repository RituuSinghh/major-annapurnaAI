import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config({ path: './backend/.env' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function testOpenAI() {
  try {
    console.log('Testing OpenAI API...');
    console.log('API Key:', process.env.OPENAI_API_KEY?.substring(0, 20) + '...');
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful Ayurvedic advisor."
        },
        {
          role: "user",
          content: "Write a haiku about AI and Ayurveda"
        }
      ],
      max_tokens: 100
    });

    console.log('\n✅ Success!');
    console.log('Response:', completion.choices[0].message.content);
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

testOpenAI();
