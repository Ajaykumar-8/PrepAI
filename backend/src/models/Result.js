import mongoose from "mongoose";

const resultSchema =
  new mongoose.Schema(
    {
      userId: {
        type: String,
        required: true,
      },

      userName: {
        type: String,
        required: true,
      },

      topic: {
        type: String,
        required: true,
      },

      difficulty: {
        type: String,
        required: true,
      },

      score: {
        type: Number,
        required: true,
      },

      total: {
        type: Number,
        required: true,
      },

      accuracy: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Result",
  resultSchema
);