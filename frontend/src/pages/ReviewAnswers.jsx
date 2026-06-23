import { useLocation, useNavigate } from "react-router-dom";

const ReviewAnswers = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    questions = [],
    userAnswers = [],
  } = location.state || {};

  // SAFETY CHECK
  if (!questions.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <h1 className="text-3xl font-bold mb-4">
          No Review Data Found
        </h1>

        <button
          onClick={() =>
            navigate("/tests")
          }
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500"
        >
          Back to Tests
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Review Answers 📝
        </h1>

        <div className="space-y-6">
          {questions.map(
            (q, index) => {
              const userAnswer =
                userAnswers[index];

              const isCorrect =
                userAnswer ===
                q.correctAnswer;

              return (
                <div
                  key={index}
                  className="bg-white/10 border border-white/10 rounded-2xl p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">
                    {index + 1}.{" "}
                    {q.question}
                  </h2>

                  <div className="space-y-3">
                    {q.options.map(
                      (
                        option,
                        optionIndex
                      ) => (
                        <div
                          key={optionIndex}
                          className={`p-3 rounded-xl ${
                            optionIndex ===
                            q.correctAnswer
                              ? "bg-green-600/30"
                              : optionIndex ===
                                  userAnswer &&
                                !isCorrect
                              ? "bg-red-600/30"
                              : "bg-black"
                          }`}
                        >
                          {option}
                        </div>
                      )
                    )}
                  </div>

                  <p className="mt-4 text-sm text-gray-400">
                    Explanation:{" "}
                    {q.explanation}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewAnswers;