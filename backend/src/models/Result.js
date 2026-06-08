import mongoose
from "mongoose";

const resultSchema =
  new mongoose.Schema({

    user: {

      type:
        mongoose.Schema.Types.ObjectId,

      ref: "User",
    },

    test: {

      type:
        mongoose.Schema.Types.ObjectId,

      ref: "Test",
    },

    score: Number,

    totalQuestions: Number,

    correctAnswers: Number,

    percentage: Number,

    submittedAt: {

      type: Date,

      default: Date.now,
    },

  });

const Result =
  mongoose.model(
    "Result",
    resultSchema
  );

export default Result;