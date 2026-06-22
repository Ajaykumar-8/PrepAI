import axios from "axios";

export const generateQuestions =
  async (data) => {

    const response =
      await axios.post(

        "http://localhost:5000/api/admin/questions/generate",

        data
      );

    return response.data;
  };

export const saveQuestions =
  async (questions) => {

    const response =
      await axios.post(

        "http://localhost:5000/api/admin/questions/save",

        {
          questions,
        }
      );

    return response.data;
  };