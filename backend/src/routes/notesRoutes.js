import express from "express";

import upload
from "../middleware/uploadMiddleware.js";

import {
  uploadNotes,
} from "../controllers/notesController.js";



const router =
  express.Router();



router.post(

  "/upload",

  upload.single("pdf"),

  uploadNotes
);



export default router;