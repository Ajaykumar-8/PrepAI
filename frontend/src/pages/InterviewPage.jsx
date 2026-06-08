import { useState } from "react";

import ReactMarkdown
from "react-markdown";

import {
  generateInterview,
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



        const data =
          await generateInterview(

            {
              role,
              difficulty,
              topic,
            },

            userInfo.token
          );



        setResponse(
          data.data
        );

      } catch (error) {

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
        w-full
        max-w-5xl
      "
    >

      {/* HEADING */}
      <h1
        className="
          text-5xl
          font-bold
          mb-8
          bg-gradient-to-r
          from-purple-400
          to-blue-400
          bg-clip-text
          text-transparent
        "
      >

        AI Interview 🚀

      </h1>



      {/* FORM */}
      <form

        onSubmit={submitHandler}

        className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-7
          space-y-5
        "
      >

        {/* ROLE */}
        <div>

          <label
            className="
              block
              mb-2
              text-base
            "
          >

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
              bg-black
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



        {/* DIFFICULTY */}
        <div>

          <label
            className="
              block
              mb-2
              text-base
            "
          >

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
              bg-black
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



        {/* TOPIC */}
        <div>

          <label
            className="
              block
              mb-2
              text-base
            "
          >

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
              bg-black
              border
              border-white/10
              outline-none
            "
          />

        </div>



        {/* BUTTON */}
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
            hover:opacity-90
            transition-all
          "
        >

          {
            loading

              ? "Generating..."

              : "Generate Interview"
          }

        </button>

      </form>



      {/* RESPONSE */}
      {
        response && (

          <div
            className="
              mt-8
              p-7
              rounded-3xl
              bg-white/5
              border
              border-white/10
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                mb-6
              "
            >

              AI Response

            </h2>



            <div
              className="
                prose
                prose-invert
                max-w-none
                leading-7
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
  );
};

export default InterviewPage;