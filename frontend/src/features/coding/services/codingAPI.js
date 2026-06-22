import axios from "axios";



export const runCode =
  async (data) => {

    const response =
      await axios.post(

        "http://localhost:5000/api/coding/run",

        data
      );



    return response.data;
  };