import axios from "axios";

const API =
  "http://localhost:5000/api/interview/generate";



export const generateInterview =
  async (data) => {

    try {

      const response =
        await axios.post(
          API,
          data
        );

      return response.data;

    } catch (error) {

      console.log(error);

      throw error;
    }
  };