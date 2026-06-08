import {
  generateAIInterview,
} from "../services/interviewService.js";



export const generateInterview =
  async (
    req,
    res
  ) => {

    try {

      const {
        role,
        topic,
        difficulty,
      } = req.body;



      const aiResponse =
        await generateAIInterview(

          role,
          topic,
          difficulty
        );



      res.json({

        success: true,

        data: aiResponse,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };