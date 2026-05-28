import asyncHandler
from "../utils/asyncHandler.js";

import {
  generateInterviewContent,
} from "../services/aiService.js";



const generateInterview =
  asyncHandler(
    async (req, res) => {

      const {
        role,
        difficulty,
        topic,
      } = req.body;



      if (
        !role ||
        !difficulty ||
        !topic
      ) {

        res.status(400);

        throw new Error(
          "All fields are required"
        );
      }



      const aiResponse =
        await generateInterviewContent({
          role,
          difficulty,
          topic,
        });



      res.status(200).json({

        success: true,

        data: aiResponse,
      });
    }
  );



export {
  generateInterview,
};