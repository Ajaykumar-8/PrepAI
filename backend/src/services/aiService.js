import axios from "axios";

import {
  generateInterviewPrompt,
} from "../prompts/interviewPrompts.js";



export const generateInterviewContent =
  async ({
    role,
    difficulty,
    topic,
  }) => {

    try {

      const prompt =
        generateInterviewPrompt({
          role,
          difficulty,
          topic,
        });



      const response =
        await axios.post(

          "https://openrouter.ai/api/v1/chat/completions",

          {
            model:
              "openai/gpt-3.5-turbo",

            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
          },

          {
            headers: {

              Authorization:
                `Bearer ${process.env.OPENROUTER_API_KEY}`,

              "Content-Type":
                "application/json",
            },
          }
        );



      return response.data
        .choices[0]
        .message.content;

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

      throw new Error(
        "AI Generation Failed"
      );
    }
  };