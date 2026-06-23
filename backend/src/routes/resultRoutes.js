import express from "express";

import {
  saveResult,
  getHistory,
  getAnalytics,
  getLeaderboard,
} from "../controllers/resultController.js";

const router =
  express.Router();

router.post(
  "/save",
  saveResult
);

router.get(
  "/history/:userId",
  getHistory
);

router.get(
  "/analytics/:userId",
  getAnalytics
);

router.get(
  "/leaderboard",
  getLeaderboard
);

export default router;