import axios from "axios";

import { languageMap }
from "../utils/languageMap.js";

export const runCode =
  async (req, res) => {

    try {

      const {
        source_code,
        language,
      } = req.body;

      // CREATE SUBMISSION
      const submission =
        await axios.post(

          "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",

          {
            source_code,

            language_id:
              languageMap[language],
          },

          {
            headers: {
              "Content-Type":
                "application/json",
            },
          }
        );

      res.json(
        submission.data
      );

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };