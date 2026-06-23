import Result from "../models/Result.js";

export const getTopicAnalytics =
  async (req, res) => {
    try {
      const { userId } =
        req.params;

      const topics =
        await Result.aggregate([
          {
            $match: {
              userId:
                req.params.userId,
            },
          },
          {
            $group: {
              _id: "$topic",
              tests: {
                $sum: 1,
              },
              avgScore: {
                $avg: "$score",
              },
            },
          },
        ]);

      res.json({
        success: true,
        topics,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
      });
    }
  };