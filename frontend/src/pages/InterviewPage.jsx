import { useState } from "react";

import ReactMarkdown
from "react-markdown";

import {
  generateAIInterview,
} from "../services/aiService";



const InterviewPage = () => {

  const [role, setRole] =
    useState("MERN Stack Developer");

  const [difficulty, setDifficulty] =
    useState("Beginner");

  const [topic, setTopic] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [response, setResponse] =
    useState("");



  const submitHandler =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);



        const userInfo =
          JSON.parse(
            localStorage.getItem("userInfo")
          );



        console.log(
          "Generate Button Clicked"
        );



        const data =
          await generateAIInterview(

            {
              role,
              difficulty,
              topic,
            },

            userInfo.token
          );



        console.log(data);



        /* Display Response */

        setResponse(
          data.data
        );

      } catch (error) {

        console.log(error);



        alert(
          error?.response?.data?.message ||
          "AI Generation Failed"
        );

      } finally {

        setLoading(false);
      }
    };



  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
        p-8
      "
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1
          className="
            text-5xl
            font-bold
            mb-10
            bg-gradient-to-r
            from-purple-400
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          AI Interview Preparation
        </h1>



        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="
            bg-white/10
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8
            space-y-6
          "
        >

          {/* Role */}
          <div>

            <label className="block mb-3 text-lg">

              Select Role

            </label>



            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-2xl
                bg-black/50
                border
                border-white/10
                outline-none
              "
            >

              <option>
                MERN Stack Developer
              </option>

              <option>
                Java Developer
              </option>

              <option>
                Backend Developer
              </option>

              <option>
                Frontend Developer
              </option>

              <option>
                DSA
              </option>

              <option>
                React
              </option>

              <option>
                Node.js
              </option>

            </select>

          </div>



          {/* Difficulty */}
          <div>

            <label className="block mb-3 text-lg">

              Difficulty

            </label>



            <select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(
                  e.target.value
                )
              }
              className="
                w-full
                p-4
                rounded-2xl
                bg-black/50
                border
                border-white/10
                outline-none
              "
            >

              <option>
                Beginner
              </option>

              <option>
                Intermediate
              </option>

              <option>
                Advanced
              </option>

            </select>

          </div>



          {/* Topic */}
          <div>

            <label className="block mb-3 text-lg">

              Topic

            </label>



            <input
              type="text"
              placeholder="Enter topic..."
              value={topic}
              onChange={(e) =>
                setTopic(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-2xl
                bg-black/50
                border
                border-white/10
                outline-none
              "
            />

          </div>



          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-blue-600
              font-semibold
              text-lg
              hover:scale-[1.01]
              transition-all
            "
          >

            {loading
              ? "Generating..."
              : "Generate Interview"}

          </button>

        </form>



        {/* AI Response */}
        {
          response && (

            <div
              className="
                mt-10
                p-8
                rounded-3xl
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
              "
            >

              <h2
                className="
                  text-3xl
                  font-bold
                  mb-8
                "
              >
                AI Response
              </h2>



              <div
                className="
                  prose
                  prose-invert
                  max-w-none
                  leading-8
                "
              >

                <ReactMarkdown>

                  {response}

                </ReactMarkdown>

              </div>

            </div>
          )
        }

      </div>

    </div>
  );
};

export default InterviewPage;