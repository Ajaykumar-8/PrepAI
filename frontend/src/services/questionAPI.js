import axios from "axios";

const API_URL = "http://localhost:5000/api/admin/questions";

export const generateQuestions = async (questionData) => {
  console.log("Sending:", questionData);

  const { data } = await axios.post(
    `${API_URL}/generate`,
    questionData
  );

  console.log("Received:", data);

  return data;
};

export const saveQuestions = async (questionData) => {
  const { data } = await axios.post(
    `${API_URL}/save`,
    questionData
  );

  return data;
};