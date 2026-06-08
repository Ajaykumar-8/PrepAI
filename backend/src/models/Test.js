import mongoose
from "mongoose";

const testSchema =
  new mongoose.Schema({

    title: String,

    description: String,

    difficulty: String,

    topic: String,

    duration: Number,

    questions: [

      {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Question",
      },
    ],

  });

const Test =
  mongoose.model(
    "Test",
    testSchema
  );

export default Test;