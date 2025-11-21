# AnnapurnaAI - Technical Documentation
## Detailed Technical Specifications & Architecture

---

## 📐 System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Next.js Frontend (Port 3000)                  │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │
│  │  │   Pages    │  │ Components │  │   Styles   │    │  │
│  │  │  (Routes)  │  │  (Reusable)│  │ (Tailwind) │    │  │
│  │  └────────────┘  └────────────┘  └────────────┘    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/HTTPS (Axios)
┌─────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │       Express.js Backend (Port 5000)                  │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │
│  │  │   Routes   │  │ Middleware │  │Controllers │    │  │
│  │  │  (API)     │  │  (Auth)    │  │  (Logic)   │    │  │
│  │  └────────────┘  └────────────┘  └────────────┘    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕ Mongoose ODM
┌─────────────────────────────────────────────────────────────┐
│                        DATA LAYER                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         MongoDB Atlas (Cloud Database)                │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │
│  │  │   Users    │  │   Foods    │  │HealthLogs  │    │  │
│  │  │Collection  │  │Collection  │  │Collection  │    │  │
│  │  └────────────┘  └────────────┘  └────────────┘    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │      In-Memory Fallback (Map & Arrays)                │  │
│  │  (Activated when MongoDB is unavailable)              │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕ API Calls
┌─────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Google Gemini 2.0 Flash API                   │  │
│  │         (AI Chatbot & Recommendations)                │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow Diagrams

### 1. User Authentication Flow
```
User → Login Form → Frontend Validation
                         ↓
                    POST /api/auth/login
                         ↓
                    Backend Validation
                         ↓
                    Find User in DB
                         ↓
                    Compare Password (bcrypt)
                         ↓
                    Generate JWT Token
                         ↓
                    Return Token + User Data
                         ↓
                    Store in LocalStorage
                         ↓
                    Redirect to Dashboard
```

### 2. AI Chatbot Interaction Flow
```
User Types Message → Frontend State Update
                         ↓
                    POST /api/chat/message
                         ↓
                    Auth Middleware Check
                         ↓
                    Gemini API Call
                         ↓
                    Process AI Response
                         ↓
                    Return Formatted Response
                         ↓
                    Display in Chat UI
                         ↓
                    Scroll to Bottom
```


### 3. Health Tracking Flow
```
User Fills Form → Frontend Validation
                         ↓
                    POST /api/health/log
                         ↓
                    Auth Middleware
                         ↓
                    Create HealthLog Document
                         ↓
                    Save to Database
                         ↓
                    Return Success
                         ↓
                    Refresh Dashboard
                         ↓
                    Update Charts & Metrics
```

### 4. Food Recommendation Flow
```
User Selects Disease → Frontend Filter
                         ↓
                    GET /api/food/recommend?disease=X
                         ↓
                    Query Database
                         ↓
                    Filter by Disease Array
                         ↓
                    Return Matching Foods
                         ↓
                    Display in Grid Layout
                         ↓
                    User Clicks for Details
```

---

## 🗄️ Database Schema Details

### User Schema (Detailed)
```javascript
{
  _id: ObjectId,                    // Auto-generated MongoDB ID
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 60                   // Bcrypt hash length
  },
  age: {
    type: Number,
    min: 1,
    max: 120
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  height: {
    type: Number,                   // in centimeters
    min: 50,
    max: 300
  },
  weight: {
    type: Number,                   // in kilograms
    min: 20,
    max: 500
  },
  activityLevel: {
    type: String,
    enum: ['sedentary', 'light', 'moderate', 'active', 'very_active'],
    default: 'moderate'
  },
  diseases: [{
    type: String,
    lowercase: true
  }],
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  }
}

// Indexes
Index: { email: 1 } (unique)
```

### Food Schema (Detailed)
```javascript
{
  _id: ObjectId,
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Beverage',
      'Sweet',
      'Main Dish',
      'Herbal Supplement',
      'Herbal Ghee',
      'Preserve',
      'Herbal Jam'
    ]
  },
  diseases: [{
    type: String,
    lowercase: true
  }],
  benefits: [{
    type: String,
    trim: true
  }],
  ayurvedicProperties: {
    rasa: [{                        // Taste
      type: String,
      enum: ['sweet', 'sour', 'salty', 'pungent', 'bitter', 'astringent']
    }],
    guna: [{                        // Quality
      type: String,
      enum: ['heavy', 'light', 'oily', 'dry', 'hot', 'cold', 'stable', 'mobile']
    }],
    virya: {                        // Potency
      type: String,
      enum: ['hot', 'cold', 'neutral']
    },
    vipaka: {                       // Post-digestive effect
      type: String,
      enum: ['sweet', 'sour', 'pungent']
    }
  },
  ingredients: [{
    type: String,
    trim: true
  }],
  preparation: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
  },
  featured: {
    type: Boolean,
    default: false
  }
}

// Indexes
Index: { diseases: 1 }
Index: { featured: 1 }
Index: { category: 1 }
```


### HealthLog Schema (Detailed)
```javascript
{
  _id: ObjectId,
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  date: {
    type: Date,
    default: Date.now,
    index: true
  },
  weight: {
    type: Number,
    min: 20,
    max: 500
  },
  waterIntake: {
    type: Number,                   // in milliliters
    min: 0,
    max: 10000
  },
  caloriesConsumed: {
    type: Number,
    min: 0,
    max: 10000
  },
  sleep: {
    type: Number,                   // in hours
    min: 0,
    max: 24,
    step: 0.5
  },
  steps: {
    type: Number,
    min: 0,
    max: 100000
  },
  mood: {
    type: String,
    enum: ['excellent', 'good', 'okay', 'poor', 'bad']
  }
}

// Indexes
Index: { userId: 1, date: -1 }
```

---

## 🔐 Security Architecture

### Authentication Flow
```
1. User Registration
   ├─ Input Validation (express-validator)
   ├─ Email Uniqueness Check
   ├─ Password Hashing (bcrypt, 10 rounds)
   ├─ User Document Creation
   └─ JWT Token Generation (30-day expiry)

2. User Login
   ├─ Email Lookup
   ├─ Password Verification (bcrypt.compare)
   ├─ JWT Token Generation
   └─ User Data Return (password excluded)

3. Protected Route Access
   ├─ Extract Bearer Token from Header
   ├─ Verify Token (jwt.verify)
   ├─ Decode User ID
   ├─ Attach to Request Object
   └─ Proceed to Route Handler
```

### JWT Token Structure
```javascript
{
  header: {
    alg: "HS256",
    typ: "JWT"
  },
  payload: {
    userId: "507f1f77bcf86cd799439011",
    iat: 1640000000,
    exp: 1642592000
  },
  signature: "HMACSHA256(...)"
}
```

### Password Security
```javascript
// Hashing Process
plainPassword → bcrypt.hash(password, 10) → $2b$10$...

// Verification Process
plainPassword + storedHash → bcrypt.compare() → true/false
```

---

## 🎨 Frontend Component Hierarchy

```
App (layout.js)
│
├─ Navbar
│  ├─ Logo
│  ├─ Navigation Links
│  ├─ Auth Buttons
│  └─ Mobile Menu
│
├─ Home Page (page.js)
│  ├─ Hero
│  ├─ FeaturedFoods
│  ├─ RemedyOfDay
│  ├─ About
│  └─ Footer
│
├─ Login Page
│  ├─ Navbar
│  ├─ Login Form
│  └─ Validation Messages
│
├─ Signup Page
│  ├─ Navbar
│  ├─ Registration Form
│  └─ Validation Messages
│
├─ Profile Setup Page
│  ├─ Navbar
│  ├─ Health Profile Form
│  └─ Disease Selection
│
├─ Dashboard Page
│  ├─ Navbar
│  ├─ Welcome Header
│  ├─ Metric Cards (4)
│  ├─ Trend Charts (2)
│  ├─ Profile Summary
│  └─ Add Stats Modal
│
├─ Chatbot Page
│  ├─ Navbar
│  ├─ Chat Header
│  ├─ Message List
│  │  ├─ Bot Messages
│  │  └─ User Messages
│  ├─ Quick Questions
│  └─ Input Form
│
├─ Remedies Page
│  ├─ Navbar
│  ├─ Filter Buttons
│  ├─ Food Grid
│  │  └─ Food Cards
│  └─ Detail Modal
│
└─ Admin Panel
   ├─ Navbar
   ├─ Tab Navigation
   ├─ Stats Tab
   │  └─ Metric Cards
   ├─ Foods Tab
   │  ├─ Add Button
   │  └─ Food Grid
   └─ Users Tab
      └─ User Table
```

---

## 🔌 API Endpoint Specifications

### Authentication Endpoints

#### POST /api/auth/signup
```javascript
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepass123",
  "age": 30,
  "gender": "male"
}

Response (201):
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "gender": "male",
    "isAdmin": false
  }
}

Errors:
400 - User already exists
500 - Server error
```


#### POST /api/auth/login
```javascript
Request Body:
{
  "email": "john@example.com",
  "password": "securepass123"
}

Response (200):
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "gender": "male",
    "isAdmin": false,
    "hasProfile": true
  }
}

Errors:
400 - Invalid credentials
500 - Server error
```

### Food Endpoints

#### GET /api/food/recommend?disease=diabetes
```javascript
Query Parameters:
- disease: string (optional, default: 'all')

Response (200):
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Turmeric Golden Milk",
    "category": "Beverage",
    "diseases": ["inflammation", "diabetes", "immunity"],
    "benefits": ["Anti-inflammatory", "Boosts immunity"],
    "ayurvedicProperties": {
      "rasa": ["bitter", "pungent"],
      "guna": ["light", "dry"],
      "virya": "hot",
      "vipaka": "pungent"
    },
    "ingredients": ["Turmeric", "Milk", "Honey"],
    "preparation": "Heat milk, add turmeric...",
    "image": "https://...",
    "featured": true
  }
]

Errors:
500 - Server error
```

### Health Endpoints

#### POST /api/health/log
```javascript
Headers:
Authorization: Bearer <token>

Request Body:
{
  "weight": 75,
  "waterIntake": 2000,
  "caloriesConsumed": 1800,
  "sleep": 7.5,
  "steps": 8000,
  "mood": "good"
}

Response (201):
{
  "_id": "507f1f77bcf86cd799439011",
  "userId": "507f1f77bcf86cd799439012",
  "date": "2025-01-15T10:30:00.000Z",
  "weight": 75,
  "waterIntake": 2000,
  "caloriesConsumed": 1800,
  "sleep": 7.5,
  "steps": 8000,
  "mood": "good"
}

Errors:
401 - Unauthorized
500 - Server error
```

### Chat Endpoint

#### POST /api/chat/message
```javascript
Headers:
Authorization: Bearer <token>

Request Body:
{
  "message": "How to improve digestion?"
}

Response (200):
{
  "message": "In Ayurveda, digestion is governed by Agni...",
  "timestamp": "2025-01-15T10:30:00.000Z",
  "source": "gemini-2.0-flash"
}

Errors:
401 - Unauthorized
500 - Server error (falls back to predefined responses)
```

---

## 🧩 Component Props & State

### Dashboard Component
```javascript
// State
const [user, setUser] = useState(null);
const [stats, setStats] = useState(null);
const [showModal, setShowModal] = useState(false);
const [todayStats, setTodayStats] = useState({
  weight: '',
  waterIntake: '',
  caloriesConsumed: '',
  sleep: ''
});

// Functions
fetchUserData()      // GET /api/user/profile
fetchHealthStats()   // GET /api/health/stats
handleAddStats()     // POST /api/health/log
calculateHealthScore() // Local calculation

// Computed Values
healthScore = calculateHealthScore(stats.today)
bmi = weight / (height/100)^2
chartData = stats.week.map(...)
```

### Chatbot Component
```javascript
// State
const [messages, setMessages] = useState([initialMessage]);
const [input, setInput] = useState('');
const [loading, setLoading] = useState(false);

// Refs
const messagesEndRef = useRef(null);

// Functions
handleSend()         // POST /api/chat/message
scrollToBottom()     // Scroll to latest message

// Effects
useEffect(() => {
  scrollToBottom();
}, [messages]);
```

### FeaturedFoods Component
```javascript
// State
const [foods, setFoods] = useState([]);
const [loading, setLoading] = useState(true);

// Functions
fetchFoods()         // GET /api/food/featured

// Effects
useEffect(() => {
  fetchFoods();
}, []);

// Render
foods.map(food => <FoodCard key={food._id} {...food} />)
```

---

## 🎯 State Management Strategy

### Local Storage Usage
```javascript
// Authentication
localStorage.setItem('token', jwtToken);
localStorage.setItem('user', JSON.stringify(userData));

// Retrieval
const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

// Logout
localStorage.removeItem('token');
localStorage.removeItem('user');
```

### Component State Patterns
```javascript
// Loading State
const [loading, setLoading] = useState(false);

// Error State
const [error, setError] = useState('');

// Data State
const [data, setData] = useState(null);

// Form State
const [formData, setFormData] = useState({
  field1: '',
  field2: ''
});
```

---

## 🔄 Async Operations & Error Handling

### API Call Pattern
```javascript
const fetchData = async () => {
  try {
    setLoading(true);
    setError('');
    
    const response = await axios.get(url, config);
    setData(response.data);
    
  } catch (error) {
    console.error('Error:', error);
    setError(error.response?.data?.message || 'An error occurred');
    
  } finally {
    setLoading(false);
  }
};
```

### Form Submission Pattern
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    const response = await axios.post(url, formData, config);
    
    // Success handling
    alert('Success!');
    router.push('/next-page');
    
  } catch (error) {
    // Error handling
    setError(error.response?.data?.message || 'Failed');
    
  } finally {
    setLoading(false);
  }
};
```

---

## 📊 Performance Metrics

### Load Times (Development)
- Initial Page Load: ~2-3 seconds
- Dashboard Load: ~1-2 seconds
- API Response Time: ~200-500ms
- Chart Rendering: ~100-200ms

### Bundle Sizes
- Frontend JS Bundle: ~500KB (gzipped)
- CSS Bundle: ~50KB (gzipped)
- Images: Lazy loaded from CDN

### Database Query Performance
- User Lookup (indexed): ~5-10ms
- Food Query: ~10-20ms
- Health Log Insertion: ~15-25ms
- Aggregation Queries: ~50-100ms

---

## 🔧 Environment Configuration

### Development Environment
```bash
# Backend
PORT=5000
MONGODB_URI=mongodb://localhost:27017/annapurnai
JWT_SECRET=dev_secret_key
GEMINI_API_KEY=your_gemini_key
NODE_ENV=development

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Production Environment
```bash
# Backend
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/annapurnai
JWT_SECRET=production_secret_key_very_secure
GEMINI_API_KEY=production_gemini_key
NODE_ENV=production

# Frontend
NEXT_PUBLIC_API_URL=https://api.annapurnai.com/api
```

---

**End of Technical Documentation**
