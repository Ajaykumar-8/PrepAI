import Question
from "../models/Question.js";

export const evaluateTest =
  async (answers) => {

    let score = 0;

    let correctAnswers = 0;

    let wrongAnswers = 0;



    for (const answer of answers) {

      const question =
        await Question.findById(
          answer.questionId
        );



      if (
        question.correctAnswer ===
        answer.selectedOption
      ) {

        score += question.marks;

        correctAnswers++;

      } else {

        wrongAnswers++;
      }
    }



    const totalQuestions =
      answers.length;



    const percentage =
      (
        score / totalQuestions
      ) * 100;



    return {

      score,

      correctAnswers,

      wrongAnswers,

      totalQuestions,

      percentage,
    };
  };