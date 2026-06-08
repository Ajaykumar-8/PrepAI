import axios from "axios";



export const fetchQuestions =
  async (
    topic,
    difficulty
  ) => {

    const response =
      await axios.get(

        `http://localhost:5000/api/tests/questions?topic=${topic}&difficulty=${difficulty}`
      );

    return response.data.questions;
  };