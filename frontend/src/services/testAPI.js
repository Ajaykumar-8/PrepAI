import axios from "axios";

export const fetchQuestions = async (
  topic,
  difficulty,
  count = 10
) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/tests/questions?topic=${topic}&difficulty=${difficulty}&count=${count}`
  );

  return data.questions;
};