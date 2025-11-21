# AnnapurnaAI - User Guide
## Complete Guide for Users and Administrators

---

## 📖 Table of Contents

1. [Getting Started](#getting-started)
2. [User Features](#user-features)
3. [Admin Features](#admin-features)
4. [Ayurvedic Concepts](#ayurvedic-concepts)
5. [Troubleshooting](#troubleshooting)
6. [FAQs](#faqs)

---

## 🚀 Getting Started

### Creating Your Account

1. **Visit the Homepage**
   - Navigate to http://localhost:3000 (or the deployed URL)
   - Click on "Get Started" or "Sign Up" button

2. **Fill Registration Form**
   - **Name**: Enter your full name
   - **Email**: Provide a valid email address
   - **Password**: Create a secure password (minimum 6 characters)
   - **Age**: Enter your age
   - **Gender**: Select from Male, Female, or Other

3. **Submit and Verify**
   - Click "Create Account"
   - You'll be automatically logged in
   - Redirected to Profile Setup

### Setting Up Your Health Profile

After registration, complete your health profile:

1. **Physical Metrics**
   - **Height**: Enter in centimeters (e.g., 170)
   - **Weight**: Enter in kilograms (e.g., 70)

2. **Activity Level**
   - **Sedentary**: Little to no exercise
   - **Light**: 1-3 days/week
   - **Moderate**: 3-5 days/week (recommended)
   - **Active**: 6-7 days/week
   - **Very Active**: Intense daily exercise

3. **Health Conditions**
   - Select from common conditions:
     - Diabetes
     - Hypertension
     - Arthritis
     - Asthma
     - Thyroid
     - Obesity
     - Insomnia
     - Acidity
     - Constipation
   - You can select multiple conditions
   - Click on a condition to add/remove it

4. **Complete Profile**
   - Click "Complete Profile"
   - You'll be redirected to your Dashboard

---

## 👤 User Features

### 1. Dashboard

Your personal wellness hub showing:

#### Health Score Card
- **Score Range**: 0-100
- **Calculation**: Based on water intake and sleep
- **Color Coding**:
  - Green (75-100): Excellent
  - Yellow (50-74): Good
  - Red (0-49): Needs Improvement

#### Daily Metrics Cards
1. **Water Intake** (Blue card)
   - Target: 2000ml+ daily
   - Track your hydration

2. **Calories** (Orange card)
   - Monitor daily caloric intake
   - Helps maintain healthy weight

3. **Sleep** (Purple card)
   - Target: 7-8 hours
   - Essential for recovery

4. **Health Score** (Green card)
   - Overall wellness indicator
   - Updates automatically

#### Trend Charts
- **Weight Trend**: 7-day weight tracking
- **Calorie Trend**: 7-day calorie consumption
- Interactive tooltips on hover
- Visual pattern recognition

#### Adding Daily Stats
1. Click "Add Today's Stats" button
2. Fill in the modal form:
   - Weight (kg)
   - Water Intake (ml)
   - Calories
   - Sleep (hours)
3. Click "Save"
4. Dashboard updates automatically

### 2. Remedies Browser

Explore Ayurvedic food remedies:

#### Filtering Remedies
1. **By Condition**: Click filter buttons at top
   - All (shows everything)
   - Diabetes
   - Hypertension
   - Arthritis
   - Cold
   - Immunity
   - Digestion
   - Stress
   - Anxiety

2. **View Results**: Grid updates automatically

#### Viewing Remedy Details
1. Click on any food card
2. Modal opens with:
   - Large food image
   - Complete benefits list
   - All ingredients
   - Preparation instructions
   - Ayurvedic properties
3. Click "Close" or outside modal to exit

### 3. AI Chatbot

Get personalized Ayurvedic guidance:

#### Starting a Conversation
1. Navigate to Chatbot page
2. See welcome message from AI
3. Type your question or use quick questions

#### Quick Questions
Pre-defined queries for common topics:
- "How to improve digestion?"
- "Foods for immunity"
- "Remedies for stress"
- "Better sleep tips"

#### Asking Custom Questions
1. Type in the input box
2. Press Enter or click Send button
3. AI responds with Ayurvedic wisdom
4. Conversation history maintained

#### Best Practices
- Be specific in your questions
- Mention your health conditions
- Ask about natural remedies
- Inquire about herbs and spices
- Request dietary advice

#### Example Questions
- "What foods help with diabetes?"
- "How to reduce stress naturally?"
- "Best herbs for immunity?"
- "Ayurvedic tips for better sleep?"
- "Foods to avoid for acidity?"

### 4. Profile Management

Update your information:

1. Go to Dashboard
2. View your profile summary
3. See current metrics:
   - Height and Weight
   - BMI (auto-calculated)
   - Activity Level
   - Health Conditions

---

## 👨‍💼 Admin Features

### Accessing Admin Panel

1. **Admin Login**
   - Use admin credentials
   - Navigate to /admin

2. **Admin Dashboard**
   - Three main tabs:
     - Statistics
     - Foods
     - Users

### Statistics Tab

View platform metrics:
- **Total Users**: Number of registered users
- **Total Foods**: Number of remedies in database
- **Health Logs**: Total health entries

### Foods Management Tab

#### Viewing Foods
- Grid layout of all food items
- Each card shows:
  - Food image
  - Name and category
  - Edit and Delete buttons

#### Adding New Food
1. Click "Add Food" button
2. Fill comprehensive form:
   - **Basic Info**:
     - Food Name (required)
     - Category (dropdown)
   - **Health Data**:
     - Diseases (comma-separated)
     - Benefits (comma-separated)
   - **Recipe**:
     - Ingredients (comma-separated)
     - Preparation method (text area)
   - **Media**:
     - Image URL (optional)
   - **Ayurvedic Properties**:
     - Rasa/Taste (comma-separated)
     - Guna/Quality (comma-separated)
     - Virya/Potency (dropdown)
     - Vipaka/Effect (dropdown)
   - **Featured**: Checkbox for homepage display

3. Click "Add Food"
4. Success message appears
5. Redirected to admin panel

#### Editing Food
1. Click "Edit" button on food card
2. Form pre-filled with current data
3. Make changes
4. Click "Update"

#### Deleting Food
1. Click "Delete" button
2. Confirm deletion
3. Food removed from database

### Users Management Tab

View all registered users:
- **Table Columns**:
  - Name
  - Email
  - Age
  - Gender
  - Admin Status (Yes/No badge)
- **Sortable**: Click column headers
- **Searchable**: Use browser search (Ctrl+F)

---

## 🌿 Ayurvedic Concepts

### Understanding Doshas

**Three Body Types (Prakriti)**:

1. **Vata** (Air + Space)
   - Characteristics: Thin, energetic, creative
   - Imbalance: Anxiety, dry skin, constipation
   - Balance: Warm, moist, grounding foods

2. **Pitta** (Fire + Water)
   - Characteristics: Medium build, focused, intense
   - Imbalance: Inflammation, acidity, anger
   - Balance: Cooling, sweet, bitter foods

3. **Kapha** (Earth + Water)
   - Characteristics: Sturdy, calm, stable
   - Imbalance: Weight gain, lethargy, congestion
   - Balance: Light, warm, spicy foods

### Ayurvedic Properties

#### Rasa (Taste)
Six tastes affecting body:
1. **Sweet** (Madhura): Nourishing, grounding
2. **Sour** (Amla): Stimulating, warming
3. **Salty** (Lavana): Hydrating, grounding
4. **Pungent** (Katu): Heating, stimulating
5. **Bitter** (Tikta): Cooling, detoxifying
6. **Astringent** (Kashaya): Drying, cooling

#### Guna (Quality)
Physical properties:
- **Heavy/Light**: Affects digestion
- **Oily/Dry**: Affects moisture
- **Hot/Cold**: Affects body temperature
- **Stable/Mobile**: Affects movement

#### Virya (Potency)
Heating or cooling effect:
- **Hot**: Increases metabolism, digestion
- **Cold**: Calms, cools, soothes
- **Neutral**: Balanced effect

#### Vipaka (Post-Digestive Effect)
Effect after digestion:
- **Sweet**: Nourishing, building
- **Sour**: Stimulating
- **Pungent**: Cleansing

### Agni (Digestive Fire)

**Importance**: Central to Ayurvedic health
- Strong Agni = Good health
- Weak Agni = Disease

**Tips to Strengthen Agni**:
1. Eat warm, cooked foods
2. Avoid cold drinks with meals
3. Use digestive spices (ginger, cumin)
4. Maintain regular meal times
5. Don't overeat

---

## 🔧 Troubleshooting

### Login Issues

**Problem**: Cannot log in
**Solutions**:
1. Check email spelling
2. Verify password (case-sensitive)
3. Clear browser cache
4. Try password reset (if available)

**Problem**: "Invalid credentials" error
**Solutions**:
1. Confirm you've registered
2. Check for typos
3. Try signing up again if account doesn't exist

### Dashboard Not Loading

**Problem**: Dashboard shows loading forever
**Solutions**:
1. Check internet connection
2. Refresh the page (F5)
3. Clear browser cache
4. Check if backend is running
5. Verify token in localStorage

### Chatbot Not Responding

**Problem**: AI doesn't respond
**Solutions**:
1. Check internet connection
2. Wait a few seconds (AI processing)
3. Try a simpler question
4. Refresh the page
5. Fallback responses will appear if AI fails

### Charts Not Displaying

**Problem**: Trend charts are empty
**Solutions**:
1. Add health data first
2. Wait for data to load
3. Check if you have 7 days of data
4. Refresh the page

---

## ❓ FAQs

### General Questions

**Q: Is my health data secure?**
A: Yes, all data is encrypted and stored securely. Passwords are hashed using bcrypt.

**Q: Can I delete my account?**
A: Contact admin for account deletion.

**Q: Is the app free?**
A: Yes, currently all features are free.

**Q: Do I need to log health data daily?**
A: No, but regular logging provides better insights.

### Feature Questions

**Q: How accurate is the AI chatbot?**
A: The AI provides general Ayurvedic guidance. Always consult a healthcare professional for medical advice.

**Q: Can I add my own remedies?**
A: Only admins can add remedies currently.

**Q: How is the health score calculated?**
A: Based on water intake (≥2000ml) and sleep (≥7 hours).

**Q: Can I track multiple health conditions?**
A: Yes, select all applicable conditions in your profile.

### Technical Questions

**Q: Which browsers are supported?**
A: Chrome, Firefox, Safari, Edge (latest versions).

**Q: Is there a mobile app?**
A: Not yet, but the website is mobile-responsive.

**Q: Can I export my health data?**
A: Export feature coming soon.

**Q: How often is the database updated?**
A: Real-time updates for your personal data.

---

## 📞 Support

### Getting Help

1. **In-App Chatbot**: Ask the AI assistant
2. **Email**: info@annapurnai.com
3. **Documentation**: Refer to this guide

### Reporting Issues

If you encounter bugs:
1. Note the error message
2. Document steps to reproduce
3. Check browser console (F12)
4. Contact support with details

---

## 🎓 Tips for Best Experience

### For Users
1. **Complete Your Profile**: Better recommendations
2. **Log Daily**: Track progress effectively
3. **Use Chatbot**: Get personalized advice
4. **Explore Remedies**: Learn about Ayurveda
5. **Be Consistent**: Regular tracking shows trends

### For Admins
1. **Verify Food Data**: Ensure accuracy
2. **Use Quality Images**: Enhance user experience
3. **Complete Ayurvedic Properties**: Full information
4. **Monitor User Feedback**: Improve content
5. **Regular Updates**: Keep database current

---

**End of User Guide**

*For additional support or questions, please contact the AnnapurnaAI support team.*
