import axios from "axios";



export const generateQuizQuestions =
  async ({
    topic,
    difficulty,
  }) => {

    try {

      const prompt = `

You are an expert technical quiz generator.

Generate 5 multiple choice questions.

Topic:
${topic}

Difficulty:
${difficulty}

Rules:
- professional interview level
- realistic technical questions
- provide 4 options
- provide correct answer
- provide explanation

Response format:

[
  {
    "question": "...",
    "options": [
      "...",
      "...",
      "...",
      "..."
    ],
    "correctAnswer": 0,
    "explanation": "..."
  }
]

`;



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



      const aiResponse =
        response.data
          .choices[0]
          .message.content;



      console.log(
        "AI Quiz Response:"
      );

      console.log(aiResponse);



      return aiResponse;

    } catch (error) {

      console.log(
        "AI QUIZ ERROR:"
      );

      console.log(
        error.response?.data ||
        error.message
      );



      throw new Error(
        "AI Quiz Generation Failed"
      );
    }
  };