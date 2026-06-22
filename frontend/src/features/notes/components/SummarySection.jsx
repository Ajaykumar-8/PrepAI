const SummarySection = ({
  summary,
}) => {

  return (

    <div
      className="
        mt-8
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-7
      "
    >

      <h2
        className="
          text-3xl
          font-bold
          mb-5
        "
      >

        Summary 📄

      </h2>



      <p
        className="
          leading-8
          text-gray-300
        "
      >

        {summary}

      </p>

    </div>
  );
};

export default SummarySection;