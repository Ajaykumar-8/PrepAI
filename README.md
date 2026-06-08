# 🚀 PrepAI — AI-Powered Interview Preparation Platform

````md
# 🚀 PrepAI — AI-Powered Interview Preparation Platform

PrepAI is a production-level AI-powered interview preparation platform built using the MERN stack.  
The platform helps students and developers prepare for technical interviews through AI-driven learning tools, mock tests, coding practice, analytics, resume analysis, and personalized career roadmaps.

---

# 🌟 Features

## 🔐 Authentication System
- JWT Authentication
- User Signup/Login
- Password Hashing using bcrypt
- Protected Routes
- Persistent Login
- Role-Based Authorization

---

## 🧠 AI Interview Preparation
- AI-generated interview questions
- AI-generated answers & explanations
- Difficulty-based questions
- Role-based preparation
- AI-powered interview guidance

---

## 📝 AI Notes Generator
- PDF Upload
- Text Upload
- AI Summarization
- Flashcards Generation
- Interview Revision Notes

---

## 🧪 Mock Test Platform
- MCQ-based Tests
- Topic-wise Quizzes
- Timers
- Auto Evaluation
- Score Calculation
- Leaderboards
- Test History

---

## 💻 Coding Practice Platform
- Monaco Code Editor
- Multi-language Support
- Judge0 API Integration
- Code Execution
- Submission History

Supported Languages:
- Java
- Python
- C++
- JavaScript

---

## 📊 Analytics Dashboard
- Performance Tracking
- Weak Topic Analysis
- Coding Analytics
- Test Analytics
- Streak Tracking
- Progress Charts

---

## 📄 AI Resume Analyzer
- Resume PDF Upload
- ATS Score
- Skill Extraction
- Resume-Job Matching
- Missing Skills Detection

---

## 🚀 AI Roadmap Generator
- Personalized Career Roadmaps
- Learning Paths
- Recommended Projects
- Resources & Interview Guidance

Supported Roles:
- MERN Stack Developer
- Java Developer
- AI Engineer
- Backend Developer

---

## 🛠️ Admin Panel
- User Management
- Test Management
- Content Moderation
- Analytics Overview
- Question Upload System

---

# 🏗️ System Architecture

```bash
                ┌─────────────────┐
                │     Frontend     │
                │ React + Redux    │
                └────────┬────────┘
                         │
                    Axios API Calls
                         │
                ┌────────▼────────┐
                │     Backend      │
                │ Node + Express   │
                └────────┬────────┘
                         │
              ┌──────────▼──────────┐
              │      MongoDB         │
              │    Database Layer    │
              └─────────────────────┘
````

---

# 🧩 Project Modules

| Module            | Description                     |
| ----------------- | ------------------------------- |
| Authentication    | JWT-based secure authentication |
| Mock Tests        | MCQ test platform               |
| AI Notes          | AI-powered summarization        |
| Coding Platform   | Online compiler environment     |
| Resume Analyzer   | ATS scoring & skill analysis    |
| Analytics         | User performance insights       |
| Roadmap Generator | AI-generated learning paths     |
| Admin Panel       | Platform management             |

---

# ⚙️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Redux Toolkit
* React Router DOM
* Axios
* Chart.js / Recharts
* Monaco Editor

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

---

## AI & APIs

* OpenAI API / Gemini API
* Judge0 API

---

# 🛠️ Technologies Used & Why

| Technology    | Purpose                          |
| ------------- | -------------------------------- |
| React.js      | Frontend UI development          |
| Vite          | Fast frontend build tool         |
| Tailwind CSS  | Utility-first responsive styling |
| Redux Toolkit | Global state management          |
| Axios         | API communication                |
| Node.js       | Backend runtime                  |
| Express.js    | API development                  |
| MongoDB       | NoSQL database                   |
| Mongoose      | MongoDB object modeling          |
| JWT           | Authentication                   |
| bcryptjs      | Password hashing                 |
| OpenAI/Gemini | AI functionalities               |
| Judge0 API    | Code execution                   |

---

# 📁 Production-Level Folder Structure

## Frontend Structure

```bash
frontend/
│
├── public/
│
├── src/
│
│   ├── api/
│   │   └── axios.js
│   │
│   ├── app/
│   │   └── store.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── animations/
│   │
│   ├── components/
│   │
│   │   ├── common/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Timer.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   └── EmptyState.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DashboardCards.jsx
│   │   │   ├── DashboardStats.jsx
│   │   │   ├── ProfileDropdown.jsx
│   │   │   ├── RecentActivity.jsx
│   │   │   └── QuickActions.jsx
│   │   │
│   │   ├── landing/
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── AICapabilities.jsx
│   │   │   ├── DashboardPreview.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── CTASection.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── GlassCard.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       ├── Select.jsx
│   │       └── Badge.jsx
│   │
│   ├── features/
│   │
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   ├── authService.js
│   │   │   └── authAPI.js
│   │   │
│   │   ├── dashboard/
│   │   │   ├── dashboardSlice.js
│   │   │   ├── dashboardService.js
│   │   │   └── dashboardAPI.js
│   │   │
│   │   ├── interview/
│   │   │   ├── InterviewForm.jsx
│   │   │   ├── AIResponseCard.jsx
│   │   │   ├── InterviewChat.jsx
│   │   │   ├── interviewService.js
│   │   │   ├── interviewSlice.js
│   │   │   └── interviewAPI.js
│   │   │
│   │   ├── tests/
│   │   │   ├── TestInterface.jsx
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   ├── Timer.jsx
│   │   │   ├── testService.js
│   │   │   ├── testSlice.js
│   │   │   └── testAPI.js
│   │   │
│   │   ├── results/
│   │   │   ├── ResultAnalytics.jsx
│   │   │   ├── ScoreChart.jsx
│   │   │   ├── WeakAreas.jsx
│   │   │   └── resultsService.js
│   │   │
│   │   ├── resume/
│   │   │   ├── ResumeUpload.jsx
│   │   │   ├── ResumeScore.jsx
│   │   │   ├── ResumeSuggestions.jsx
│   │   │   ├── resumeService.js
│   │   │   └── resumeSlice.js
│   │   │
│   │   └── notes/
│   │       ├── NotesEditor.jsx
│   │       ├── NotesList.jsx
│   │       └── notesService.js
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useTimer.js
│   │   ├── useTheme.js
│   │   └── useApi.js
│   │
│   ├── layouts/
│   │   ├── DashboardLayout.jsx
│   │   ├── AuthLayout.jsx
│   │   └── LandingLayout.jsx
│   │
│   ├── lib/
│   │   └── utils.js
│   │
│   ├── pages/
│   │
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── InterviewPage.jsx
│   │   ├── TestsPage.jsx
│   │   ├── AnalyticsPage.jsx
│   │   ├── LeaderboardPage.jsx
│   │   ├── ResultPage.jsx
│   │   ├── HistoryPage.jsx
│   │   │
│   │   └── auth/
│   │       ├── Login.jsx
│   │       ├── Signup.jsx
│   │       └── ForgotPassword.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   ├── aiService.js
│   │   ├── analyticsService.js
│   │   └── leaderboardService.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── formatters.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## Backend Structure

```bash
backend
│
├── src
│
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── interviewController.js
│   │   ├── resumeController.js
│   │   └── notesController.js
│   │
│   ├── services
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── interviewService.js
│   │   └── resumeService.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Interview.js
│   │   ├── Resume.js
│   │   └── Notes.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── interviewRoutes.js
│   │   ├── resumeRoutes.js
│   │   └── notesRoutes.js
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── validateMiddleware.js
│   │
│   ├── validations
│   │   ├── authValidation.js
│   │   └── interviewValidation.js
│   │
│   ├── utils
│   │   ├── generateToken.js
│   │   ├── asyncHandler.js
│   │   └── ApiError.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

# 🔐 JWT Authentication Flow

```bash
User Login
    ↓
Password Verification (bcrypt)
    ↓
JWT Token Generation
    ↓
Frontend Stores Token
    ↓
Protected Routes Access
    ↓
Middleware Verifies Token
```

---

# 🧠 AI Workflow

```bash
User Prompt/Input
       ↓
Backend AI Service
       ↓
Prompt Engineering
       ↓
OpenAI / Gemini API
       ↓
AI Response Processing
       ↓
Frontend Rendering
```

---

# 🧪 Mock Test Flow

```bash
User Starts Test
      ↓
Questions Loaded
      ↓
Timer Starts
      ↓
User Submits Answers
      ↓
Backend Evaluation Logic
      ↓
Score Calculation
      ↓
Analytics Updated
```

---

# 💻 Coding Platform Flow

```bash
User Writes Code
       ↓
Frontend Monaco Editor
       ↓
Backend Submission API
       ↓
Judge0 API Execution
       ↓
Execution Result Returned
```

---

# 📊 Analytics Flow

```bash
User Activity
      ↓
MongoDB Aggregation Queries
      ↓
Analytics APIs
      ↓
Frontend Charts
      ↓
Dashboard Insights
```

---

# 📦 Installed Dependencies

## Frontend Dependencies

```bash
npm install react-router-dom
npm install axios
npm install @reduxjs/toolkit
npm install react-redux
npm install tailwindcss @tailwindcss/vite
npm install recharts
npm install chart.js react-chartjs-2
npm install @monaco-editor/react
```

---

## Backend Dependencies

```bash
npm install express
npm install mongoose
npm install cors
npm install dotenv
npm install bcryptjs
npm install jsonwebtoken
npm install multer
npm install pdf-parse
npm install express-validator
npm install nodemon
```

---

# 🚀 Environment Variables

## Backend `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

OPENAI_API_KEY=your_api_key

CLIENT_URL=http://localhost:5173
```

---

# 🎨 Frontend Features

* Responsive SaaS UI
* Dark/Light Theme
* Sidebar Navigation
* Dashboard Cards
* Reusable Components
* Loading Skeletons
* Error Handling
* Toast Notifications

---

# 🔥 API Best Practices

* RESTful APIs
* Centralized Error Handling
* Middleware-based Authentication
* Validation Layer
* Modular Architecture
* Service-based Logic
* Environment Variable Security

---

# 🛡️ Security Features

* JWT Authentication
* Password Hashing
* Protected APIs
* Role-Based Access
* Environment Variable Protection
* CORS Configuration

---

# 🌐 Deployment

## Frontend

* Vercel

## Backend

* Render / Railway

## Database

* MongoDB Atlas

---

# 📈 Future Improvements

* Real-time Interview Simulation
* AI Voice Interviews
* WebSocket Collaboration
* Video Interview Recording
* AI Resume Optimization
* Gamification System

---

# 👨‍💻 Author

Ajay

---

# ⭐ If You Like This Project

Give this repository a ⭐ on GitHub!

---

```
```
