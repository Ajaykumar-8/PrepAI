import fs from "fs";

import * as pdfjsLib
from "pdfjs-dist/legacy/build/pdf.mjs";



import Notes
from "../models/Notes.js";

import {
  generateNotes,
} from "../services/notesService.js";



const extractTextFromPDF =
  async (filePath) => {

    const data =
      new Uint8Array(

        fs.readFileSync(
          filePath
        )
      );



    const pdf =
      await pdfjsLib.getDocument({
        data,
      }).promise;



    let text = "";



    for (
      let i = 1;
      i <= pdf.numPages;
      i++
    ) {

      const page =
        await pdf.getPage(i);



      const content =
        await page.getTextContent();



      const strings =
        content.items.map(
          (item) => item.str
        );



      text +=
        strings.join(" ") + "\n";
    }



    return text;
  };



export const uploadNotes =
  async (
    req,
    res
  ) => {

    try {

      let extractedText =
        "";



      /* PDF */
      if (req.file) {

        extractedText =
          await extractTextFromPDF(
            req.file.path
          );
      }



      /* TEXT INPUT */
      if (req.body.text) {

        extractedText =
          req.body.text;
      }



      /* AI GENERATION */
      const aiResponse =
        await generateNotes(
          extractedText
        );



      /* SAVE TO DB */
      const notes =
        await Notes.create({

          title:
            req.body.title ||
            "AI Notes",

          originalText:
            extractedText,

          summary:
            aiResponse,
        });



      res.json({

        success: true,

        notes,
      });

    } catch (error) {

      console.log(error);



      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };