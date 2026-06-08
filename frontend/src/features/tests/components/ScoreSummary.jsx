const ScoreSummary = ({
  score,
  total,
}) => {

  const percentage =
    Math.round(
      (score / total) * 100
    );

  return (

    <div
      className="
        mt-6
        bg-white/5
        p-6
        rounded-2xl
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          mb-3
        "
      >

        Performance

      </h2>

      <p>
        Percentage:
        {" "}
        {percentage}%
      </p>

    </div>
  );
};

export default ScoreSummary;