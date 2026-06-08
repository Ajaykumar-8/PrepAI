import Question
from "../models/Question.js";



export const getQuestions =
  async (
    req,
    res
  ) => {

    try {

      const {
        topic,
        difficulty,
      } = req.query;



      const questions =
        await Question.aggregate([

          {
            $match: {

              topic,

              difficulty,
            },
          },

          {
            $sample: {
              size: 10,
            },
          },
        ]);



      res.json({

        success: true,

        questions,
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };