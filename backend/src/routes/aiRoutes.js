import express from "express";

import {
  generateInterview,
} from "../controllers/aiController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router = express.Router();



router.post(
  "/generate",
  protect,
  generateInterview
);



export default router;