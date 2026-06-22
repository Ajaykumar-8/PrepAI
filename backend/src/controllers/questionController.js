import axios from "axios";
import Question from "../models/Question.js";

export const generateQuestions = async (req, res) => {
  try {
    const { topic, category, difficulty, count } = req.body;

    const prompt = `
        Generate exactly ${count} MCQ questions on "${topic}".

        Rules:
        - Keep each question short.
        - Keep options short.
        - Return ONLY valid JSON.
        - No markdown.
        - No explanation outside JSON.
        - correctAnswer must be option index (0-3).

        JSON format:
        [
        {
        "question":"Question here",
        "options":["A","B","C","D"],
        "correctAnswer":0,
        "explanation":"Short explanation"
        }
        ]
        `;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 3000,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content =
      response.data.choices[0].message.content;

    let questions;

    try {
    const cleaned = content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    questions = JSON.parse(cleaned);
    } catch (err) {
    console.log("JSON Parse Error:", content);

    return res.status(500).json({
        success: false,
        message: "Invalid AI response format",
    });
    }

    const formattedQuestions = questions.map((q) => ({
      ...q,
      topic,
      category,
      difficulty,
    }));

    res.status(200).json({
      success: true,
      questions: formattedQuestions,
    });
  } catch (error) {
    console.log("AI Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "AI generation failed",
    });
  }
};

export const saveQuestions = async (req, res) => {
  try {
    const { questions } = req.body;

    const savedQuestions = await Question.insertMany(
      questions
    );

    res.status(201).json({
      success: true,
      savedQuestions,
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};