import express from "express";

const router =
  express.Router();



// RESUME ANALYSIS
router.post(
  "/analyze",

  async (
    req,
    res
  ) => {

    try {

      const {
        resumeText,
      } = req.body;



      res.json({

        success: true,

        score: 85,

        suggestions: [

          "Add more projects",

          "Improve technical skills section",

          "Add measurable achievements",
        ],

        resumeText,
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  }
);



export default router;