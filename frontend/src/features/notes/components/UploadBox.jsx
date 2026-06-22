import { useState } from "react";



const UploadBox = ({

  onGenerate,
  loading,

}) => {

  const [file, setFile] =
    useState(null);

  const [text, setText] =
    useState("");



  const submitHandler =
    () => {

      onGenerate(
        file,
        text
      );
    };



  return (

    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-7
        space-y-5
      "
    >

      {/* FILE */}
      <input

        type="file"

        accept=".pdf"

        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }

        className="
          w-full
        "
      />



      {/* TEXT */}
      <textarea

        rows="8"

        placeholder="Paste notes or content..."

        value={text}

        onChange={(e) =>
          setText(
            e.target.value
          )
        }

        className="
          w-full
          p-5
          rounded-2xl
          bg-black
          border
          border-white/10
        "
      />



      {/* BUTTON */}
      <button

        onClick={submitHandler}

        className="
          w-full
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-purple-600
          to-blue-500
        "
      >

        {
          loading

            ? "Generating..."

            : "Generate Notes"
        }

      </button>

    </div>
  );
};

export default UploadBox;