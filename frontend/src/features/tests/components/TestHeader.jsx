const TestHeader = ({
  title,
  timeLeft,
}) => {

  return (

    <div
      className="
        flex
        justify-between
        items-center
        mb-10
      "
    >

      <h1
        className="
          text-5xl
          font-bold
        "
      >

        {title}

      </h1>



      <div
        className="
          bg-red-500/20
          px-6
          py-3
          rounded-2xl
        "
      >

        ⏳ {timeLeft}s

      </div>

    </div>
  );
};

export default TestHeader;