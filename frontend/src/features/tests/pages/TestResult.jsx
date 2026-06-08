import ResultCard from "../components/ResultCard";
import ScoreSummary from "../components/ScoreSummary";

const TestResult = ({
  score,
  total,
}) => {

  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
      "
    >

      <div>

        <ResultCard
          score={score}
          total={total}
        />

        <ScoreSummary
          score={score}
          total={total}
        />

      </div>

    </div>
  );
};

export default TestResult;