import { useState } from "react";

import { motion } from "framer-motion";

import {
  generateAIInterview,
} from "../../services/aiService";

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

        const data =
          await generateAIInterview({
            role,
            difficulty,
            topic,
          });

        setResponse(data.data);

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
    <div className="min-h-screen bg-black text-white p-6">

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          max-w-4xl
          mx-auto
        "
      >

        <h1 className="text-4xl font-bold mb-8">

          AI Interview Preparation

        </h1>



        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="
            space-y-5
            bg-white/10
            p-8
            rounded-3xl
            border
            border-white/10
          "
        >

          {/* Role */}
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



          {/* Difficulty */}
          <select
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value)
            }
            className="
              w-full
              p-4
              rounded-2xl
              bg-black
              border
              border-white/10
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



          {/* Topic */}
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
            "
          />



          {/* Button */}
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
            "
          >

            {loading
              ? "Generating..."
              : "Generate Interview"}

          </button>

        </form>



        {/* AI Response */}
        {response && (

          <div
            className="
              mt-10
              p-8
              rounded-3xl
              bg-white/10
              border
              border-white/10
              whitespace-pre-wrap
            "
          >

            {response}

          </div>

        )}

      </motion.div>

    </div>
  );
};

export default InterviewPage;