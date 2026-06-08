import OptionCard from "./OptionCard";

const QuestionCard = ({
  question,
  options,
  selectedAnswer,
  onSelect,
}) => {

  return (

    <div
      className="
        bg-white/10
        p-8
        rounded-3xl
      "
    >

      <h2
        className="
          text-3xl
          font-bold
          mb-8
        "
      >

        {question}

      </h2>



      <div className="space-y-4">

        {
          options.map(
            (
              option,
              index
            ) => (

              <OptionCard
                key={index}
                option={option}
                isSelected={
                  selectedAnswer === index
                }
                onClick={() =>
                  onSelect(index)
                }
              />
            )
          )
        }

      </div>

    </div>
  );
};

export default QuestionCard;