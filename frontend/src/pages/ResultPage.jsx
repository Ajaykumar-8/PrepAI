import {
  useLocation,
  useNavigate,
} from "react-router-dom";



const ResultPage = () => {

  const location =
    useLocation();

  const navigate =
    useNavigate();



  const {
    score,
    total,
  } = location.state || {

    score: 0,
    total: 0,
  };



  const percentage =
    total > 0

      ? Math.round(
          (score / total) * 100
        )

      : 0;



  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
        p-10
      "
    >

      <div
        className="
          w-full
          max-w-3xl
          bg-white/10
          border
          border-white/10
          rounded-3xl
          p-10
          text-center
        "
      >

        <h1
          className="
            text-6xl
            font-bold
            mb-10
          "
        >

          Test Result 🚀

        </h1>



        <div
          className="
            text-4xl
            mb-6
          "
        >

          Score:
          {" "}
          {score}
          {" / "}
          {total}

        </div>



        <div
          className="
            text-3xl
            text-purple-400
            mb-10
          "
        >

          {percentage}% Accuracy

        </div>



        <button

          onClick={() =>
            navigate("/tests")
          }

          className="
            px-10
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-purple-600
            to-blue-500
            text-2xl
            font-bold
          "
        >

          Back to Tests

        </button>

      </div>

    </div>
  );
};

export default ResultPage;