export const evaluateTest = (
  questions,
  answers
) => {
  let correct = 0;

  questions.forEach((q) => {
    if (
      answers[q._id] === q.correctAnswer
    ) {
      correct++;
    }
  });

  const total = questions.length;
  const wrong = total - correct;
  const percentage =
    (correct / total) * 100;

  return {
    correct,
    wrong,
    total,
    percentage,
  };
};