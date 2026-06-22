import mongoose from "mongoose";



const submissionSchema =
  new mongoose.Schema({

    user: String,

    language: String,

    sourceCode: String,

    output: String,

    status: String,

  },

  {
    timestamps: true,
  });



export default mongoose.model(
  "Submission",
  submissionSchema
);