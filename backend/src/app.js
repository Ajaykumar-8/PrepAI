import express from "express";

import cors from "cors";



/* =========================
   Route Imports
========================= */

import authRoutes
from "./routes/authRoutes.js";

import aiRoutes
from "./routes/aiRoutes.js";



/* =========================
   Middleware Imports
========================= */

import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";



const app = express();



/* =========================
   Core Middlewares
========================= */

/* Enable CORS */
app.use(cors());



/* Parse JSON */
app.use(express.json());



/* Parse Form Data */
app.use(
  express.urlencoded({
    extended: true,
  })
);



/* =========================
   Health Check Route
========================= */

app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message:
      "PrepAI Backend API Running 🚀",

  });

});



/* =========================
   API Routes
========================= */

/* Authentication APIs */
app.use(
  "/api/auth",
  authRoutes
);



/* AI Interview APIs */
app.use(
  "/api/ai",
  aiRoutes
);



/* =========================
   404 Middleware
========================= */

app.use(notFound);



/* =========================
   Global Error Middleware
========================= */

app.use(errorHandler);



export default app;