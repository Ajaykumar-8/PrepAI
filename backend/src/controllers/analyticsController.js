import Result from "../models/Result.js";

export const getAnalytics =
  async (req, res) => {
    try {
      const { userId } = req.params;

      const results =
        await Result.find({
          userId,
        });

      if (!results.length) {
        return res.json({
          success: true,
          analytics: {
            testsTaken: 0,
            averageScore: 0,
            averageAccuracy: 0,
          },
        });
      }

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

      res.json({
        success: true,
        analytics: {
          testsTaken:
            totalTests,
          averageScore:
            Math.round(
              totalScore /
                totalTests
            ),
          averageAccuracy:
            Math.round(
              totalAccuracy /
                totalTests
            ),
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };