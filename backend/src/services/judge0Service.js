import axios from "axios";



export const executeCode =
  async (

    source_code,
    language_id

  ) => {

    try {

      const response =
        await axios.post(

          "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",

          {

            source_code,
            language_id,
          },

          {

            headers: {

              "Content-Type":
                "application/json",

              "X-RapidAPI-Key":
                process.env.RAPIDAPI_KEY,

              "X-RapidAPI-Host":
                "judge0-ce.p.rapidapi.com",
            },
          }
        );



      return response.data;

    } catch (error) {

      console.log(error);

      throw new Error(
        "Code Execution Failed"
      );
    }
  };