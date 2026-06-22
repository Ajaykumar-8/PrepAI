import { useState } from "react";

import {
  generateQuestions,
  saveQuestions,
} from "../../../../services/questionAPI";

const QuestionGeneratorPage = () => {
  const [topic, setTopic] = useState("React");
  const [category, setCategory] = useState("Frontend");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [count, setCount] = useState(10);
  const [questions, setQuestions] = useState([]);

  const generateHandler = async () => {
  console.log("Generate Clicked");

  try {
    const res = await generateQuestions({
      topic,
      category,
      difficulty,
      count,
    });

    console.log("Response:", res);

    setQuestions(res.questions);
  } catch (error) {
    console.log("Frontend Error:", error);
  }
};

  const saveHandler = async () => {
    try {
      await saveQuestions({ questions });
      alert("Saved Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Admin Question Generator
        </h1>

        {/* Form */}
        <div className="grid grid-cols-4 gap-4 mb-8">

          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="p-3 rounded-xl bg-zinc-900 border border-zinc-700"
          />

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded-xl bg-zinc-900 border border-zinc-700"
          />

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="p-3 rounded-xl bg-zinc-900 border border-zinc-700"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="p-3 rounded-xl bg-zinc-900 border border-zinc-700"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-10">
            <button
                type="button"
                onClick={() => {
                console.log("Generate Clicked");
                generateHandler();
                }}
                className="px-6 py-3 rounded-xl bg-purple-600"
            >
                Generate
            </button>

            <button
                type="button"
                onClick={() => {
                console.log("Save Clicked");
                saveHandler();
                }}
                className="px-6 py-3 rounded-xl bg-blue-600"
            >
                Save
            </button>
            </div>

        {/* Questions Preview */}
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-700"
            >
              <h2 className="font-semibold mb-3">
                {index + 1}. {q.question}
              </h2>

              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <p key={i} className="text-zinc-300">
                    {opt}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default QuestionGeneratorPage;