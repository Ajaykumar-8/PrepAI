import Result from "../models/Result.js";

export const getLeaderboard =
  async (req, res) => {
    try {
      const leaderboard =
        await Result.aggregate([
          {
            $group: {
              _id: "$userId",
              totalScore: {
                $sum: "$score",
              },
              testsTaken: {
                $sum: 1,
              },
              avgAccuracy: {
                $avg:
                  "$accuracy",
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