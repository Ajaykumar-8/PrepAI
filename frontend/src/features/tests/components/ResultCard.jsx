const ResultCard = ({
  score,
  total,
}) => {

  return (

    <div
      className="
        bg-white/10
        p-10
        rounded-3xl
        text-center
      "
    >

      <h1
        className="
          text-5xl
          font-bold
          mb-6
        "
      >

        Test Completed 🎉

      </h1>



      <p className="text-3xl">

        Score:
        {" "}
        {score}
        /
        {total}

      </p>

    </div>
  );
};

export default ResultCard;