const calculateScore = (
  questions,
  answers
) => {

  let score = 0;

  questions.forEach(
    (
      question,
      index
    ) => {

      if (
        answers[index] ===
        question.answer
      ) {

        score++;
      }
    }
  );

  return score;
};

export default calculateScore;