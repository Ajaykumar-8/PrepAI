import mongoose from "mongoose";

const questionSchema =
  new mongoose.Schema(
    {
      question: {
        type: String,
        required: true,
      },

      options: {
        type: [String],
        required: true,
      },

      correctAnswer: {
        type: Number,
        required: true,
      },

      topic: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },

      difficulty: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },

      category: {
        type: String,
        required: true,
      },

      explanation: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Question",
  questionSchema
);