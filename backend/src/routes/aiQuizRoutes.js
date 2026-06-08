import express from "express";

import {
  generateAIQuiz,
} from "../controllers/aiQuizController.js";



const router =
  express.Router();



router.post(
  "/generate",
  generateAIQuiz
);

export default router;