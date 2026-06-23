import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const ResultPage = () => {
  const navigate =
    useNavigate();

  const { state } =
    useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No Result Found
      </div>
    );
  }

  const {
    score,
    total,
    accuracy,
    questions,
    userAnswers,
  } = state;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div
        className="
          bg-white/10
          p-10
          rounded-3xl
          text-center
          w-full
          max-w-2xl
        "
      >
        <h1 className="text-5xl font-bold mb-8">
          Test Result 🚀
        </h1>

        <p className="text-3xl mb-4">
          Score: {score} / {total}
        </p>

        <p className="text-2xl text-purple-400 mb-8">
          {accuracy}% Accuracy
        </p>

        <div className="flex gap-4 justify-center">
          {/* BACK */}
          <button
            onClick={() =>
              navigate("/tests")
            }
            className="
              px-8 py-4
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-blue-500
            "
          >
            Back to Tests
          </button>

          {/* REVIEW */}
          <button
            onClick={() =>
              navigate("/review", {
                state: {
                  questions,
                  userAnswers,
                },
              })
            }
            className="
              px-8 py-4
              rounded-xl
              bg-green-600
            "
          >
            Review Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;