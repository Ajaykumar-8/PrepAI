import axios from "axios";

export const generateQuestionsAI =
  async (
    topic,
    difficulty,
    count,
    category
  ) => {

    const prompt = `
Generate ${count} MCQ questions on ${topic}.

Difficulty: ${difficulty}
Category: ${category}

Return ONLY JSON array.

Format:

[
 {
   "question":"",
   "options":["","","",""],
   "correctAnswer":0,
   "topic":"${topic}",
   "difficulty":"${difficulty}",
   "category":"${category}",
   "explanation":""
 }
]
`;

    const response =
      await axios.post(

        "https://openrouter.ai/api/v1/chat/completions",

        {
          model:
            "openai/gpt-4o-mini",

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
          },
        }
      );

    const content =
      response.data.choices[0]
        .message.content;

    return JSON.parse(content);
  };