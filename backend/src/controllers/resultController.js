import Result from "../models/Result.js";


// SAVE RESULT
export const saveResult =
  async (req, res) => {
    try {
      const {
        userId,
        userName,
        topic,
        difficulty,
        score,
        total,
        accuracy,
      } = req.body;

      const result =
        await Result.create({
          userId,
          userName,
          topic,
          difficulty,
          score,
          total,
          accuracy,
        });

      res.status(201).json({
        success: true,
        result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// GET HISTORY
export const getHistory =
  async (req, res) => {
    try {
      const { userId } =
        req.params;

      const history =
        await Result.find({
          userId,
        }).sort({
          createdAt: -1,
        });

      res.json({
        success: true,
        history,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// GET ANALYTICS
export const getAnalytics =
  async (req, res) => {
    try {
      const { userId } =
        req.params;

      const results =
        await Result.find({
          userId,
        });

      const totalTests =
        results.length;

      const totalScore =
        results.reduce(
          (acc, item) =>
            acc + item.score,
          0
        );

      const totalAccuracy =
        results.reduce(
          (acc, item) =>
            acc + item.accuracy,
          0
        );

      const avgScore =
        totalTests > 0
          ? (
              totalScore /
              totalTests
            ).toFixed(1)
          : 0;

      const avgAccuracy =
        totalTests > 0
          ? (
              totalAccuracy /
              totalTests
            ).toFixed(1)
          : 0;

      const topicStats = {};

      results.forEach((test) => {
        if (
          !topicStats[test.topic]
        ) {
          topicStats[test.topic] =
            0;
        }

        topicStats[test.topic] +=
          test.score;
      });

      res.json({
        success: true,
        totalTests,
        avgScore,
        avgAccuracy,
        topicStats,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };


// GET LEADERBOARD
export const getLeaderboard =
  async (req, res) => {
    try {
      const leaderboard =
        await Result.aggregate([
          {
            $group: {
              _id: "$userId",

              userName: {
                $first:
                  "$userName",
              },

              totalScore: {
                $sum: "$score",
              },

              testsTaken: {
                $sum: 1,
              },
            },
          },

          {
            $sort: {
              totalScore: -1,
            },
          },
        ]);

      res.json({
        success: true,
        leaderboard,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };