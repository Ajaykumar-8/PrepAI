import Result
from "../models/Result.js";

export const getLeaderboard =
  async (
    req,
    res
  ) => {

    const leaderboard =
      await Result.find()
      .sort({
        percentage: -1,
      })
      .limit(10)
      .populate("user");

    res.json({
      success: true,
      leaderboard,
    });
};