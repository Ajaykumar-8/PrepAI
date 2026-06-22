import express from "express";
import {
  generateQuestions,
  saveQuestions,
} from "../controllers/questionController.js";

const router = express.Router();

router.post("/generate", generateQuestions);
router.post("/save", saveQuestions);

export default router;