import express from "express";

const router =
  express.Router();



// GET NOTES
router.get(
  "/",

  async (
    req,
    res
  ) => {

    res.json({

      success: true,

      notes: [

        {
          title:
            "React Notes",

          content:
            "Hooks, Props, State",
        },

        {
          title:
            "Node.js Notes",

          content:
            "Express, APIs, Middleware",
        },
      ],
    });
  }
);



// CREATE NOTE
router.post(
  "/create",

  async (
    req,
    res
  ) => {

    try {

      const note =
        req.body;

      res.json({

        success: true,

        message:
          "Note created",

        note,
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