import { useState } from "react";

import UploadBox
from "../components/UploadBox";

import SummarySection
from "../components/SummarySection";

import FlashcardsSection
from "../components/FlashcardsSection";

import RevisionSection
from "../components/RevisionSection";

import {
  uploadNotes,
} from "../services/notesAPI";



const NotesPage = () => {

  const [loading, setLoading] =
    useState(false);

  const [summary, setSummary] =
    useState("");

  const [flashcards, setFlashcards] =
    useState([]);

  const [revisionNotes,
  setRevisionNotes]
  = useState("");



  const handleGenerate =
    async (
      file,
      text
    ) => {

      try {

        setLoading(true);



        const formData =
          new FormData();



        if (file) {

          formData.append(
            "pdf",
            file
          );
        }

        formData.append(
          "text",
          text
        );



        const data =
          await uploadNotes(
            formData
          );



        setSummary(
          data.notes.summary
        );

        setRevisionNotes(
          data.notes.revisionNotes
        );

        setFlashcards(
          data.notes.flashcards ||
          []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };



  return (

    <div
      className="
        w-full
        max-w-6xl
      "
    >

      {/* HEADING */}
      <h1
        className="
          text-5xl
          font-bold
          mb-8
        "
      >

        AI Notes Generator 📘

      </h1>



      {/* UPLOAD */}
      <UploadBox
        loading={loading}
        onGenerate={
          handleGenerate
        }
      />



      {/* SUMMARY */}
      {
        summary && (

          <SummarySection
            summary={summary}
          />
        )
      }



      {/* FLASHCARDS */}
      {
        flashcards.length > 0 && (

          <FlashcardsSection
            flashcards={flashcards}
          />
        )
      }



      {/* REVISION */}
      {
        revisionNotes && (

          <RevisionSection
            revisionNotes={
              revisionNotes
            }
          />
        )
      }

    </div>
  );
};

export default NotesPage;