import mongoose from "mongoose";

const testResultSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      testName: String,

      topic: String,

      score: Number,

      totalQuestions: Number,

      correctAnswers: Number,

      accuracy: Number,

      timeTaken: Number,
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "TestResult",
  testResultSchema
);