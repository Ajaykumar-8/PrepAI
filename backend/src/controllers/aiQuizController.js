import {
  generateQuizQuestions,
} from "../services/aiQuizService.js";



export const generateAIQuiz =
  async (req, res) => {

    try {

      const {
        topic,
        difficulty,
      } = req.body;



      const quiz =
        await generateQuizQuestions({

          topic,
          difficulty,
        });



      res.json({

        success: true,

        quiz,
      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message,
      });
    }
  };