import express from "express";
import {
  getTopicAnalytics,
} from "../controllers/topicAnalyticsController.js";

const router =
  express.Router();

router.get(
  "/:userId",
  getTopicAnalytics
);

export default router;