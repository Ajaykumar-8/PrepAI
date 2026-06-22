import axios from "axios";



export const generateNotes =
  async (text) => {

    try {

      const prompt = `

You are an expert study assistant.

Generate:

1. Summary
2. Short Notes
3. Flashcards
4. Interview Revision Notes

Content:
${text}

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



      return response.data
        .choices[0]
        .message.content;

    } catch (error) {

      console.log(error);

      throw new Error(
        "AI Notes Generation Failed"
      );
    }
  };