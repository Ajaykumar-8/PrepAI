import Question from "../models/Question.js";


// GET ALL TESTS (UNIQUE TOPIC WISE)
export const getTests = async (req, res) => {
  try {
    const tests = await Question.aggregate([
      {
        $group: {
          _id: {
            topic: {
              $toLower: "$topic",
            },
          },
          totalQuestions: {
            $sum: 1,
          },
          difficulties: {
            $addToSet: {
              $toLower: "$difficulty",
            },
          },
          categories: {
            $addToSet: {
              $toLower: "$category",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          topic: "$_id.topic",
          totalQuestions: 1,
          difficulties: 1,
          categories: 1,
        },
      },
      {
        $sort: {
          topic: 1,
        },
      },
    ]);

    res.json({
      success: true,
      tests,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET RANDOM QUESTIONS
export const getQuestions = async (req, res) => {
  try {
    const topic =
      req.query.topic?.trim().toLowerCase();

    const difficulty =
      req.query.difficulty?.trim().toLowerCase();

    const count =
      Number(req.query.count) || 10;

    const questions =
      await Question.aggregate([
        {
          $addFields: {
            normalizedTopic: {
              $toLower: "$topic",
            },
            normalizedDifficulty: {
              $toLower: "$difficulty",
            },
          },
        },
        {
          $match: {
            normalizedTopic: topic,
            normalizedDifficulty: difficulty,
          },
        },
        {
          $sample: {
            size: count,
          },
        },
      ]);

    res.json({
      success: true,
      questions,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};