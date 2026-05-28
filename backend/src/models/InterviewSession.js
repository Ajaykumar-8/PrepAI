import mongoose from "mongoose";

const interviewSchema =
  mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",
      },

      role: String,

      difficulty: String,

      topic: String,

      response: String,
    },

    {
      timestamps: true,
    }
  );

const InterviewSession =
  mongoose.model(
    "InterviewSession",
    interviewSchema
  );

export default InterviewSession;