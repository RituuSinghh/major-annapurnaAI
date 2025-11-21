# AnnapurnaAI - List of Figures
## Visual Documentation Index

---

## Table of Figures

| Figure Number | Title | Page Number |
|---------------|-------|-------------|
| Figure 1 | System Architecture Diagram | 5 |
| Figure 2 | Three-Tier Architecture Overview | 6 |
| Figure 3 | User Authentication Flow Diagram | 8 |
| Figure 4 | AI Chatbot Interaction Flow | 9 |
| Figure 5 | Health Tracking Data Flow | 10 |
| Figure 6 | Food Recommendation Flow | 11 |
| Figure 7 | Database Schema - User Collection | 13 |
| Figure 8 | Database Schema - Food Collection | 14 |
| Figure 9 | Database Schema - HealthLog Collection | 15 |
| Figure 10 | Entity Relationship Diagram (ERD) | 16 |
| Figure 11 | Frontend Component Hierarchy | 18 |
| Figure 12 | API Endpoint Architecture | 20 |
| Figure 13 | JWT Authentication Process | 22 |
| Figure 14 | Password Security Flow | 23 |
| Figure 15 | Homepage Screenshot | 25 |
| Figure 16 | User Registration Page | 26 |
| Figure 17 | Login Page Interface | 27 |
| Figure 18 | Profile Setup Page | 28 |
| Figure 19 | Dashboard - Health Metrics View | 30 |
| Figure 20 | Dashboard - Trend Charts | 31 |
| Figure 21 | Add Daily Stats Modal | 32 |
| Figure 22 | AI Chatbot Interface | 34 |
| Figure 23 | Chatbot Conversation Example | 35 |
| Figure 24 | Remedies Browser - Grid View | 37 |
| Figure 25 | Remedy Detail Modal | 38 |
| Figure 26 | Disease Filter Interface | 39 |
| Figure 27 | Admin Panel - Statistics Tab | 41 |
| Figure 28 | Admin Panel - Foods Management | 42 |
| Figure 29 | Admin Panel - Users Table | 43 |
| Figure 30 | Add Food Form - Part 1 | 44 |
| Figure 31 | Add Food Form - Part 2 | 45 |
| Figure 32 | Featured Foods Section | 47 |
| Figure 33 | Remedy of the Day Component | 48 |
| Figure 34 | About Ayurveda Section | 49 |
| Figure 35 | Footer Component | 50 |
| Figure 36 | Mobile Responsive - Homepage | 52 |
| Figure 37 | Mobile Responsive - Dashboard | 53 |
| Figure 38 | Mobile Responsive - Chatbot | 54 |
| Figure 39 | Color Palette Visualization | 56 |
| Figure 40 | Typography and Font Hierarchy | 57 |
| Figure 41 | Ayurvedic Properties Diagram | 59 |
| Figure 42 | Dosha Balance Illustration | 60 |
| Figure 43 | Rasa (Taste) Classification | 61 |
| Figure 44 | Deployment Architecture | 63 |
| Figure 45 | Development Environment Setup | 64 |
| Figure 46 | Production Deployment Flow | 65 |
| Figure 47 | Health Score Calculation Logic | 67 |
| Figure 48 | BMI Calculation Visualization | 68 |
| Figure 49 | 7-Day Trend Chart Example | 69 |
| Figure 50 | User Journey Map | 71 |

---

## Detailed Figure Descriptions

### System Architecture Figures

**Figure 1: System Architecture Diagram**
- Complete system overview showing client, application, and data layers
- Illustrates communication between frontend (Next.js), backend (Express.js), and database (MongoDB)
- Shows external AI service integration (Google Gemini)
- Page: 5

**Figure 2: Three-Tier Architecture Overview**
- Detailed breakdown of presentation, application, and data layers
- Technology stack for each tier
- Data flow between layers
- Page: 6

### Data Flow Diagrams

**Figure 3: User Authentication Flow Diagram**
- Step-by-step authentication process
- From login form to dashboard redirect
- JWT token generation and storage
- Page: 8

**Figure 4: AI Chatbot Interaction Flow**
- User message to AI response flow
- Gemini API integration process
- Fallback mechanism illustration
- Page: 9

**Figure 5: Health Tracking Data Flow**
- Daily metrics logging process
- Database storage workflow
- Dashboard update mechanism
- Page: 10

**Figure 6: Food Recommendation Flow**
- Disease-based filtering logic
- Database query process
- Result display workflow
- Page: 11

### Database Design Figures

**Figure 7: Database Schema - User Collection**
- Complete User schema structure
- Field types and constraints
- Indexes and relationships
- Page: 13

**Figure 8: Database Schema - Food Collection**
- Food document structure
- Ayurvedic properties nested schema
- Array fields and enumerations
- Page: 14

**Figure 9: Database Schema - HealthLog Collection**
- HealthLog document structure
- User reference relationship
- Metric fields and types
- Page: 15

**Figure 10: Entity Relationship Diagram (ERD)**
- Relationships between User, Food, and HealthLog
- One-to-Many relationships
- Primary and foreign keys
- Page: 16

### Frontend Architecture Figures

**Figure 11: Frontend Component Hierarchy**
- Complete component tree structure
- Parent-child relationships
- Reusable components
- Page routing structure
- Page: 18

**Figure 12: API Endpoint Architecture**
- All REST API endpoints
- HTTP methods (GET, POST, PUT, DELETE)
- Protected vs public routes
- Request/response formats
- Page: 20

### Security Figures

**Figure 13: JWT Authentication Process**
- Token generation workflow
- Token structure (header, payload, signature)
- Token verification process
- Page: 22

**Figure 14: Password Security Flow**
- Bcrypt hashing process
- Salt generation (10 rounds)
- Password comparison logic
- Page: 23

### User Interface Screenshots

**Figure 15: Homepage Screenshot**
- Landing page with hero section
- Featured foods display
- Remedy of the day
- Navigation bar
- Page: 25

**Figure 16: User Registration Page**
- Signup form interface
- Input fields and validation
- Ayurvedic theme styling
- Page: 26

**Figure 17: Login Page Interface**
- Login form design
- Email and password fields
- Error message display
- Page: 27

**Figure 18: Profile Setup Page**
- Health profile form
- Activity level selection
- Disease selection interface
- Page: 28

**Figure 19: Dashboard - Health Metrics View**
- Four metric cards (Health Score, Water, Calories, Sleep)
- Color-coded indicators
- Icon representations
- Page: 30

**Figure 20: Dashboard - Trend Charts**
- Weight trend line chart (7 days)
- Calorie trend line chart (7 days)
- Interactive tooltips
- Page: 31

**Figure 21: Add Daily Stats Modal**
- Modal form overlay
- Input fields for daily metrics
- Save and cancel buttons
- Page: 32

**Figure 22: AI Chatbot Interface**
- Chat message layout
- User vs bot message styling
- Quick question buttons
- Input form at bottom
- Page: 34

**Figure 23: Chatbot Conversation Example**
- Sample conversation flow
- AI response formatting
- Timestamp display
- Page: 35

**Figure 24: Remedies Browser - Grid View**
- Food cards in grid layout
- Image, name, category display
- Disease tags
- Hover effects
- Page: 37

**Figure 25: Remedy Detail Modal**
- Full remedy information
- Large image display
- Benefits, ingredients, preparation
- Ayurvedic properties section
- Page: 38

**Figure 26: Disease Filter Interface**
- Filter button row
- Active filter highlighting
- Disease categories
- Page: 39

### Admin Panel Figures

**Figure 27: Admin Panel - Statistics Tab**
- Three metric cards
- Total users, foods, health logs
- Icon representations
- Page: 41

**Figure 28: Admin Panel - Foods Management**
- Food grid with edit/delete buttons
- Add food button
- Food card layout
- Page: 42

**Figure 29: Admin Panel - Users Table**
- User data table
- Columns: name, email, age, gender, admin status
- Sortable headers
- Page: 43

**Figure 30: Add Food Form - Part 1**
- Basic information fields
- Name, category inputs
- Diseases and benefits fields
- Page: 44

**Figure 31: Add Food Form - Part 2**
- Ayurvedic properties section
- Rasa, guna, virya, vipaka inputs
- Featured checkbox
- Submit button
- Page: 45

### Component Screenshots

**Figure 32: Featured Foods Section**
- Homepage featured foods grid
- Star icons for featured items
- Benefits preview
- Page: 47

**Figure 33: Remedy of the Day Component**
- Highlighted remedy display
- Split layout (image + content)
- Heart icon
- Page: 48

**Figure 34: About Ayurveda Section**
- Four principle cards
- Icons and descriptions
- Call-to-action button
- Page: 49

**Figure 35: Footer Component**
- Four-column layout
- Quick links, resources, contact
- Brand logo and tagline
- Page: 50

### Responsive Design Figures

**Figure 36: Mobile Responsive - Homepage**
- Mobile view of landing page
- Hamburger menu
- Stacked layout
- Page: 52

**Figure 37: Mobile Responsive - Dashboard**
- Mobile dashboard layout
- Stacked metric cards
- Responsive charts
- Page: 53

**Figure 38: Mobile Responsive - Chatbot**
- Mobile chat interface
- Full-width messages
- Bottom input bar
- Page: 54

### Design System Figures

**Figure 39: Color Palette Visualization**
- All theme colors with hex codes
- Primary, secondary, accent colors
- Usage examples
- Page: 56

**Figure 40: Typography and Font Hierarchy**
- Font family (Inter)
- Heading sizes (h1-h6)
- Body text styles
- Page: 57

### Ayurvedic Concept Figures

**Figure 41: Ayurvedic Properties Diagram**
- Rasa, guna, virya, vipaka explanation
- Visual representation
- Examples for each property
- Page: 59

**Figure 42: Dosha Balance Illustration**
- Vata, Pitta, Kapha characteristics
- Balance vs imbalance states
- Food recommendations for each
- Page: 60

**Figure 43: Rasa (Taste) Classification**
- Six tastes diagram
- Effects on body
- Food examples
- Page: 61

### Deployment Figures

**Figure 44: Deployment Architecture**
- Production environment setup
- Vercel (frontend), Heroku (backend), MongoDB Atlas
- Connection flow
- Page: 63

**Figure 45: Development Environment Setup**
- Local development architecture
- Localhost ports (3000, 5000)
- Development tools
- Page: 64

**Figure 46: Production Deployment Flow**
- CI/CD pipeline
- Build and deployment steps
- Environment configuration
- Page: 65

### Calculation & Logic Figures

**Figure 47: Health Score Calculation Logic**
- Formula breakdown
- Water intake component (≥2000ml = 25 points)
- Sleep component (≥7 hours = 25 points)
- Base score (50 points)
- Page: 67

**Figure 48: BMI Calculation Visualization**
- BMI formula: weight / (height/100)²
- BMI categories
- Example calculation
- Page: 68

**Figure 49: 7-Day Trend Chart Example**
- Sample data visualization
- X-axis (days), Y-axis (values)
- Line chart with data points
- Page: 69

### User Experience Figures

**Figure 50: User Journey Map**
- Complete user flow from registration to daily use
- Decision points
- Feature interactions
- Success paths
- Page: 71

---

## Figure Usage Guidelines

### In Documentation
When referencing figures in your documentation, use the following format:

**Example 1:**
"The system architecture, as shown in Figure 1, consists of three main layers..."

**Example 2:**
"User authentication follows a secure process (see Figure 3) that includes password hashing and JWT token generation."

**Example 3:**
"The dashboard displays health metrics in an intuitive layout (Figure 19), with color-coded cards for easy visualization."

### Cross-Referencing
- Always reference figures by their number
- Mention the figure before or after the relevant text
- Ensure figure placement is near the referencing text
- Use descriptive captions for each figure

### Figure Quality Standards
- **Screenshots**: Minimum 1920x1080 resolution
- **Diagrams**: Vector format (SVG) preferred
- **Charts**: Clear labels and legends
- **Text**: Readable font size (minimum 12pt)
- **Colors**: Match project color palette

---

## Notes for Report Creation

1. **Placement**: Insert figures immediately after they are first referenced in the text
2. **Numbering**: Maintain sequential numbering throughout the document
3. **Captions**: Each figure should have a descriptive caption below it
4. **Quality**: Ensure all figures are clear and professional
5. **Consistency**: Use consistent styling across all figures
6. **Updates**: Update this list when adding or removing figures

---

## Figure Creation Tools

### Recommended Tools
- **Diagrams**: Draw.io, Lucidchart, Microsoft Visio
- **Screenshots**: Snipping Tool, Lightshot, ShareX
- **Charts**: Excel, Google Sheets, Chart.js
- **Mockups**: Figma, Adobe XD, Sketch
- **Architecture**: PlantUML, Mermaid, Diagrams.net

### Export Formats
- **For Print**: PNG (300 DPI) or PDF
- **For Web**: PNG (72-96 DPI) or SVG
- **For Diagrams**: SVG (scalable)
- **For Screenshots**: PNG (lossless)

---

**Last Updated**: 2025  
**Total Figures**: 50  
**Document Version**: 1.0

---

**End of List of Figures**
