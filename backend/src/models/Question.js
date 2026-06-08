import mongoose
from "mongoose";

const questionSchema =
  new mongoose.Schema({

    question: String,

    options: [String],

    correctAnswer: Number,

    topic: String,

    difficulty: String,

    category: String,

    explanation: String,

  });

export default mongoose.model(
  "Question",
  questionSchema
);