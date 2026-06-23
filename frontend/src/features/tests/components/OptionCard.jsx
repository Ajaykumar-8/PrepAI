const QuestionCard = ({
  question,
  selectedAnswer,
  handleAnswer,
  handleNext,
  currentQuestion,
  questions,
}) => {
  return (
    <div className="bg-white/10 border border-white/10 rounded-2xl p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
        {question.question}
      </h2>

      <div className="grid gap-3">
        {question.options.map(
          (option, index) => (
            <button
              key={index}
              onClick={() =>
                handleAnswer(index)
              }
              className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                selectedAnswer === index
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 border-transparent"
                  : "bg-black border-white/10 hover:border-purple-500"
              }`}
            >
              {option}
            </button>
          )
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={
          selectedAnswer === null
        }
        className="mt-6 w-full py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-500 disabled:opacity-50"
      >
        {currentQuestion + 1 ===
        questions.length
          ? "Finish Test"
          : "Next Question"}
      </button>
    </div>
  );
};

export default QuestionCard;