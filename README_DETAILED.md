# 🌿 AnnapurnaAI - Ancient Indian Food Recommender

<div align="center">

![AnnapurnaAI Logo](https://img.shields.io/badge/AnnapurnaAI-Ayurvedic_Wellness-2D5016?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)

**Discover Ancient Foods for Modern Health**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Documentation](#-documentation) • [Screenshots](#-screenshots)

</div>

---

## 📖 About The Project

AnnapurnaAI is a comprehensive full-stack web application that bridges 5000 years of Ayurvedic wisdom with modern AI technology. The platform provides personalized food recommendations, health tracking, and AI-powered wellness guidance based on traditional Indian healing practices.

### 🎯 Key Highlights

- 🤖 **AI-Powered Chatbot** using Google Gemini 2.0 Flash
- 📊 **Health Tracking Dashboard** with trend visualization
- 🍲 **Ayurvedic Food Database** with 8+ traditional remedies
- 👤 **Personalized Recommendations** based on health profile
- 🔐 **Secure Authentication** with JWT and bcrypt
- 📱 **Responsive Design** for all devices
- 👨‍💼 **Admin Panel** for content management

---

## ✨ Features

### For Users

#### 1. User Management
- Secure registration and login
- Health profile setup (height, weight, activity level)
- Disease/condition tracking
- Personal dashboard

#### 2. Health Tracking
- Log daily metrics:
  - Weight (kg)
  - Water intake (ml)
  - Calories consumed
  - Sleep duration (hours)
  - Steps (optional)
  - Mood
- 7-day trend visualization
- Health score calculation
- BMI tracking

#### 3. Food Remedies Browser
- Browse Ayurvedic remedies
- Filter by health condition
- Detailed remedy information:
  - Benefits
  - Ingredients
  - Preparation instructions
  - Ayurvedic properties (rasa, guna, virya, vipaka)

#### 4. AI Wellness Chatbot
- 24/7 conversational AI assistant
- Personalized Ayurvedic guidance
- Natural remedy suggestions
- Quick question buttons
- Fallback responses for offline mode

### For Administrators

#### 1. Content Management
- Add new food remedies
- Edit existing items
- Delete outdated content
- Manage Ayurvedic properties

#### 2. User Management
- View all registered users
- Monitor user profiles
- Track admin status

#### 3. Analytics Dashboard
- Total users count
- Total foods count
- Health logs statistics

---

## 🛠️ Tech Stack

### Frontend
```
Next.js 14.2.33
React 18.2.0
Tailwind CSS 3.3.6
Recharts 2.10.3
Lucide React 0.294.0
Axios 1.6.2
```

### Backend
```
Node.js (ES6 Modules)
Express.js 4.18.2
MongoDB + Mongoose 8.0.3
JWT (jsonwebtoken 9.0.2)
bcryptjs 2.4.3
express-validator 7.0.1
CORS 2.8.5
```

### AI Integration
```
Google Gemini 2.0 Flash API
OpenAI API (Fallback)
```

### Development Tools
```
Concurrently 8.2.2
Nodemon 3.0.2
dotenv 16.3.1
```

---

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Google Gemini API key

### Step 1: Clone Repository

```bash
git clone <repository-url>
cd agentic-94ceade9-main
```

### Step 2: Install Dependencies

```bash
# Install all dependencies (root, backend, frontend)
npm run install-all
```

### Step 3: Configure Environment Variables

#### Backend (.env)
Create `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-connection-string
JWT_SECRET=your_jwt_secret_key_here
GEMINI_API_KEY=your_gemini_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

#### Frontend (.env.local)
Create `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Step 4: Start Development Servers

```bash
# Start both backend and frontend
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

---

## 📁 Project Structure

```
agentic-94ceade9-main/
├── backend/
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication
│   │   └── adminAuth.js         # Admin authorization
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Food.js              # Food schema
│   │   └── HealthLog.js         # Health log schema
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   ├── user.js              # User profile routes
│   │   ├── food.js              # Food CRUD routes
│   │   ├── health.js            # Health tracking routes
│   │   ├── chat.js              # AI chatbot routes
│   │   └── admin.js             # Admin routes
│   ├── server.js                # Express server
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── FeaturedFoods.js
│   │   │   ├── RemedyOfDay.js
│   │   │   ├── About.js
│   │   │   └── Footer.js
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── signup/
│   │   │   └── page.js
│   │   ├── dashboard/
│   │   │   └── page.js
│   │   ├── chatbot/
│   │   │   └── page.js
│   │   ├── remedies/
│   │   │   └── page.js
│   │   ├── profile-setup/
│   │   │   └── page.js
│   │   ├── admin/
│   │   │   ├── page.js
│   │   │   └── add-food/
│   │   │       └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── tailwind.config.js
│   ├── next.config.js
│   ├── package.json
│   └── .env.local
│
├── package.json                 # Root package
├── vercel.json                  # Vercel deployment config
├── PROJECT_REPORT.md            # Comprehensive report
├── TECHNICAL_DOCUMENTATION.md   # Technical specs
├── USER_GUIDE.md                # User manual
└── README.md                    # This file
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/signup          # User registration
POST   /api/auth/login           # User login
POST   /api/auth/create-admin    # Create admin account
```

### User
```
GET    /api/user/profile         # Get user profile (Protected)
PUT    /api/user/profile         # Update profile (Protected)
```

### Food
```
GET    /api/food/featured        # Get featured foods
GET    /api/food/recommend       # Get recommendations
GET    /api/food/all             # Get all foods
GET    /api/food/remedy-of-day   # Get random remedy
GET    /api/food/seed            # Seed database
POST   /api/food/add             # Add food (Protected)
```

### Health
```
POST   /api/health/log           # Log health metrics (Protected)
GET    /api/health/logs          # Get user logs (Protected)
GET    /api/health/stats         # Get statistics (Protected)
```

### Chat
```
POST   /api/chat/message         # Send message to AI (Protected)
```

### Admin
```
GET    /api/admin/users          # Get all users (Admin)
GET    /api/admin/foods          # Get all foods (Admin)
DELETE /api/admin/foods/:id      # Delete food (Admin)
PUT    /api/admin/foods/:id      # Update food (Admin)
GET    /api/admin/stats          # Get statistics (Admin)
```

---

## 🎨 Color Palette

```css
Primary:   #2D5016  /* Deep Forest Green */
Secondary: #6B8E23  /* Olive Green */
Accent:    #8B7355  /* Earthy Brown */
Light:     #F5F0E8  /* Cream */
Beige:     #E8DCC4  /* Warm Beige */
Brown:     #6B4423  /* Rich Brown */
Green:     #4A6741  /* Sage Green */
```

---

## 📚 Documentation

Comprehensive documentation is available:

- **[PROJECT_REPORT.md](./PROJECT_REPORT.md)** - Complete project report
- **[TECHNICAL_DOCUMENTATION.md](./TECHNICAL_DOCUMENTATION.md)** - Technical specifications
- **[USER_GUIDE.md](./USER_GUIDE.md)** - User manual
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Quick reference

---

## 🖼️ Screenshots

### Homepage
Beautiful landing page with Ayurvedic theme, featured foods, and remedy of the day.

### Dashboard
Comprehensive health tracking with metrics cards, trend charts, and health score.

### Chatbot
AI-powered conversational interface for personalized wellness guidance.

### Remedies Browser
Grid layout of Ayurvedic remedies with filtering and detailed modal views.

### Admin Panel
Content management system with statistics, food management, and user monitoring.

---

## 🔐 Security

- **Authentication**: JWT tokens with 30-day expiration
- **Password Hashing**: bcrypt with 10 salt rounds
- **Protected Routes**: Middleware-based authorization
- **Admin Access**: Role-based access control
- **CORS**: Configured for cross-origin requests
- **Data Privacy**: Passwords excluded from API responses

---

## 🚀 Deployment

### Vercel (Frontend)
```bash
cd frontend
npm run build
vercel deploy
```

### Heroku/Railway (Backend)
```bash
cd backend
git push heroku main
```

### MongoDB Atlas (Database)
- Create cluster
- Configure network access
- Update connection string in .env

---

## 🧪 Testing

### Manual Testing
All features have been manually tested:
- User registration and login
- Profile setup and updates
- Health tracking and visualization
- Food browsing and filtering
- AI chatbot interactions
- Admin panel operations

### Test Files
- `test-gemini.mjs` - Gemini API test
- `test-admin-login.html` - Admin auth test
- `test-signup.js` - Registration test
- `test-openai.js` - OpenAI fallback test

---

## 🔮 Future Enhancements

### Planned Features
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Data export (CSV/PDF)
- [ ] Advanced search
- [ ] Rate limiting
- [ ] Mobile application
- [ ] Voice chatbot
- [ ] Meal planning
- [ ] Social features
- [ ] Gamification
- [ ] Multilingual support

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👥 Contact

**Project**: AnnapurnaAI  
**Email**: info@annapurnai.com  
**Location**: Mumbai, India  

---

## 🙏 Acknowledgments

- Ayurvedic texts and traditional knowledge
- Google Gemini AI team
- Next.js and React communities
- MongoDB and Mongoose teams
- Open source contributors

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/badge/Repo_Size-~50MB-blue)
![Lines of code](https://img.shields.io/badge/Lines_of_Code-5000+-green)
![Files](https://img.shields.io/badge/Files-50+-orange)
![Components](https://img.shields.io/badge/Components-15+-purple)

---

<div align="center">

**Made with ❤️ and ancient wisdom**

[⬆ Back to Top](#-annapurnai---ancient-indian-food-recommender)

</div>
