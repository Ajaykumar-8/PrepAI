import Result
from "../models/Result.js";

export const submitResult =
  async (
    req,
    res
  ) => {

    const result =
      await Result.create(
        req.body
      );

    res.json({
      success: true,
      result,
    });
};

export const getResults =
  async (
    req,
    res
  ) => {

    const results =
      await Result.find()
      .populate("user")
      .populate("test");

    res.json({
      success: true,
      results,
    });
};