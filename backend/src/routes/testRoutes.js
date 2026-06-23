import express from "express";

import {
  getQuestions,
  getTests,
} from "../controllers/testController.js";

const router =
  express.Router();

router.get(
  "/",
  getTests
);

router.get(
  "/questions",
  getQuestions
);

export default router;