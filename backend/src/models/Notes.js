import mongoose from "mongoose";

const notesSchema =
  new mongoose.Schema({

    title: String,

    originalText: String,

    summary: String,

    shortNotes: String,

    flashcards: [String],

    revisionNotes: String,

  },

  {
    timestamps: true,
  });

export default mongoose.model(
  "Notes",
  notesSchema
);