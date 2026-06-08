import dotenv from "dotenv";

import connectDB
from "./config/db.js";

import Question
from "./models/Question.js";

import {
  questions,
} from "./data/questions.js";

dotenv.config();

connectDB();



const seedData =
  async () => {

    try {

      await Question.deleteMany();

      await Question.insertMany(
        questions
      );

      console.log(
        "Questions Seeded"
      );

      process.exit();

    } catch (error) {

      console.log(error);

      process.exit(1);
    }
  };

seedData();