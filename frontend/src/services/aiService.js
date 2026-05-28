import axios from "axios";



const API =
  axios.create({

    baseURL:
      "http://localhost:5000/api",

  });



export const generateAIInterview =
  async (
    formData,
    token
  ) => {

    try {

      console.log(
        "Sending Request To Backend"
      );



      const config = {

        headers: {

          Authorization:
            `Bearer ${token}`,

          "Content-Type":
            "application/json",
        },
      };



      const response =
        await API.post(

          "/ai/generate",

          formData,

          config
        );



      console.log(
        response.data
      );



      return response.data;

    } catch (error) {

      console.log(error);

      throw error;
    }
  };