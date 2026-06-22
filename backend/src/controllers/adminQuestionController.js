import Question
from "../models/Question.js";

import {
  generateQuestionsAI,
} from "../services/questionGeneratorService.js";

export const generateQuestions =
  async (req, res) => {

    try {

      const {
        topic,
        difficulty,
        count,
        category,
      } = req.body;

      const generatedQuestions =
        await generateQuestionsAI(
          topic,
          difficulty,
          count,
          category
        );

      res.status(200).json({
        success: true,
        questions:
          generatedQuestions,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const saveQuestions =
  async (req, res) => {

    try {

      const { questions } =
        req.body;

      const saved =
        await Question.insertMany(
          questions
        );

      res.status(201).json({
        success: true,
        saved,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };