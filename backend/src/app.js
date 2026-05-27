import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

const app = express();


// Middleware
app.use(express.json());


// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


// Routes
app.use("/api/auth", authRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("PrepAI API Running...");
});

export default app;