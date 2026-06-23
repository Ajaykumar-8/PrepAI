import Groq from "groq-sdk";
import Question from "../models/Question.js";
import dotenv from "dotenv";
dotenv.config();
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// GENERATE QUESTIONS
export const generateQuestions =
  async (req, res) => {
    try {
      const {
        topic,
        category,
        difficulty,
        count,
      } = req.body;

      const prompt = `
Generate ${count} unique multiple-choice questions.

Topic: ${topic}
Category: ${category}
Difficulty: ${difficulty}

Rules:
- Return ONLY JSON
- No explanation outside JSON
- No markdown
- No duplicate questions

Format:
[
 {
   "question": "",
   "options": ["","","",""],
   "correctAnswer": 0,
   "topic": "${topic}",
   "difficulty": "${difficulty}",
   "category": "${category}",
   "explanation": ""
 }
]
`;

      const completion =
        await groq.chat.completions.create({
          model:
            "llama-3.1-8b-instant",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
        });

      const content =
        completion.choices[0]
          .message.content;

      // Extract JSON safely
      const jsonMatch =
        content.match(/\[[\s\S]*\]/);

      if (!jsonMatch) {
        throw new Error(
          "Invalid JSON response from AI"
        );
      }

      const questions =
        JSON.parse(
          jsonMatch[0]
        );

      res.status(200).json({
        success: true,
        questions,
      });

    } catch (error) {
      console.error(
        "Generate Error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// SAVE QUESTIONS
export const saveQuestions =
  async (req, res) => {
    try {
      const { questions } =
        req.body;

      const normalizedQuestions =
        questions.map((q) => ({
          ...q,
          topic:
            q.topic
              .trim()
              .toLowerCase(),
          difficulty:
            q.difficulty
              .trim()
              .toLowerCase(),
        }));

      await Question.insertMany(
        normalizedQuestions
      );

      res.status(201).json({
        success: true,
        message:
          "Questions saved successfully",
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };