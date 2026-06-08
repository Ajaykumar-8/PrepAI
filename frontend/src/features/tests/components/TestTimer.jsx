const TestTimer = ({
  timeLeft,
}) => {

  return (

    <div
      className="
        bg-red-500/20
        px-5
        py-3
        rounded-2xl
      "
    >

      ⏳ {timeLeft}s

    </div>
  );
};

export default TestTimer;