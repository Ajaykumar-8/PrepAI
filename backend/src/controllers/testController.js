import Question from "../models/Question.js";

export const getQuestions = async (req, res) => {
  try {
    const { topic, difficulty } = req.query;

    // Count matching questions
    const totalQuestions =
      await Question.countDocuments({
        topic,
        difficulty,
      });

    console.log(
      `Topic: ${topic}, Difficulty: ${difficulty}`
    );

    console.log(
      `Matching Questions: ${totalQuestions}`
    );

    // Get random questions
    const questions =
      await Question.aggregate([
        {
          $match: {
            topic,
            difficulty,
          },
        },
        {
          $sample: {
            size: Math.min(
              totalQuestions,
              10
            ),
          },
        },
      ]);

    res.status(200).json({
      success: true,
      totalQuestions,
      returnedQuestions:
        questions.length,
      questions,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};