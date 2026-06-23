import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();



// DATABASE
import connectDB from "./config/db.js";

connectDB();



// MIDDLEWARE
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));



// ROUTES

// AUTH
import authRoutes
from "./routes/authRoutes.js";

// USERS
import userRoutes
from "./routes/userRoutes.js";

// INTERVIEW
import interviewRoutes
from "./routes/interviewRoutes.js";

// RESUME
import resumeRoutes
from "./routes/resumeRoutes.js";

// NOTES
import notesRoutes
from "./routes/notesRoutes.js";

// MOCK TESTS
import testRoutes
from "./routes/testRoutes.js";

// RESULTS
import resultRoutes
from "./routes/resultRoutes.js";

// ANALYTICS
import analyticsRoutes from "./routes/analyticsRoutes.js";

// TOPIC ANALYTICS
import topicAnalyticsRoutes from "./routes/topicAnalyticsRoutes.js";

// LEADERBOARD
import leaderboardRoutes
from "./routes/leaderboardRoutes.js";

// AI QUIZ
import aiQuizRoutes
from "./routes/aiQuizRoutes.js";

// CODING
import codingRoutes
from "./routes/codingRoutes.js";

// ADMIN QUESTION MANAGEMENT
//import adminQuestionRoutes
//from "./routes/adminQuestionRoutes.js";

// QUESTION MANAGEMENT
import questionRoutes 
from "./routes/questionRoutes.js";



// API ROUTES

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/interview",
  interviewRoutes
);

app.use(
  "/api/resume",
  resumeRoutes
);

app.use(
  "/api/notes",
  notesRoutes
);

app.use(
  "/api/tests",
  testRoutes
);

app.use(
  "/api/results",
  resultRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
);

app.use(
  "/api/topic-analytics",
  topicAnalyticsRoutes
);

app.use(
  "/api/leaderboard",
  leaderboardRoutes
);

app.use(
  "/api/ai-quiz",
  aiQuizRoutes
);

app.use(
  "/api/coding",
  codingRoutes
);

/*app.use(
  "/api/admin/questions",
  adminQuestionRoutes
);*/

app.use("/api/admin/questions", questionRoutes);


// ROOT ROUTE

app.get("/", (req, res) => {

  res.json({

    success: true,

    message:
      "PrepAI Backend API Running 🚀",
  });
});



// 404 HANDLER

app.use((req, res) => {

  res.status(404).json({

    success: false,

    message: "Route Not Found",
  });
});



// GLOBAL ERROR HANDLER

app.use(
  (
    err,
    req,
    res,
    next
  ) => {

    console.error(err);

    res.status(
      err.status || 500
    ).json({

      success: false,

      message:
        err.message ||
        "Server Error",
    });
  }
);

export default app;