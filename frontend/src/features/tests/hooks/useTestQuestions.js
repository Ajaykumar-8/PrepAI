import { useEffect, useState } from "react";
import { fetchQuestions } from "../services/testAPI";

const useTestQuestions = (
  topic,
  difficulty,
  count
) => {
  const [questions, setQuestions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadQuestions =
      async () => {
        try {
          const data =
            await fetchQuestions(
              topic,
              difficulty,
              count
            );

          setQuestions(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    loadQuestions();
  }, [topic, difficulty, count]);

  return {
    questions,
    loading,
  };
};

export default useTestQuestions;