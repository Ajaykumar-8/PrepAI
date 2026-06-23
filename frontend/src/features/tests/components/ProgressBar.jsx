const ProgressBar = ({
  currentQuestion,
  questions,
  difficulty,
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2 text-sm text-gray-400">
        <span>
          Question {currentQuestion + 1} /{" "}
          {questions.length}
        </span>

        <span>{difficulty}</span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
          style={{
            width: `${
              ((currentQuestion + 1) /
                questions.length) *
              100
            }%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;