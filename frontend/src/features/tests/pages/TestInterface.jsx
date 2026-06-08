import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";


import {
  fetchQuestions,
} from "../services/testAPI";

const TestInterface = () => {

  const navigate =
    useNavigate();



  const [questions,
  setQuestions]
  = useState([]);

  const [currentQuestion,
  setCurrentQuestion]
  = useState(0);

  const [selectedAnswer,
  setSelectedAnswer]
  = useState(null);

  const [score,
  setScore]
  = useState(0);

  const [loading,
  setLoading]
  = useState(true);

  const [timeLeft,
  setTimeLeft]
  = useState(600);

  const [testFinished,
  setTestFinished]
  = useState(false);



  // LOAD QUESTIONS
  useEffect(() => {

    const loadQuestions =
      async () => {

        try {

          const data =
            await fetchQuestions(
              "react",
              "beginner"
            );

          setQuestions(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    loadQuestions();

  }, []);



  // TIMER
  useEffect(() => {

    if (
      timeLeft <= 0 ||
      testFinished
    ) {

      finishTest();

      return;
    }

    const timer =
      setInterval(() => {

        setTimeLeft(
          (prev) => prev - 1
        );

      }, 1000);

    return () =>
      clearInterval(timer);

  }, [timeLeft, testFinished]);



  // FORMAT TIMER
  const formatTime =
    (seconds) => {

      const mins =
        Math.floor(
          seconds / 60
        );

      const secs =
        seconds % 60;

      return `${mins}:${
        secs < 10
          ? "0"
          : ""
      }${secs}`;
    };



  // HANDLE ANSWER
  const handleAnswer =
    (index) => {

      setSelectedAnswer(index);
    };



  // NEXT QUESTION
  const handleNext =
    () => {

      const correctAnswer =
        questions[
          currentQuestion
        ].correctAnswer;

      let updatedScore =
        score;

      if (
        selectedAnswer ===
        correctAnswer
      ) {

        updatedScore += 1;

        setScore(updatedScore);
      }



      if (
        currentQuestion + 1 <
        questions.length
      ) {

        setCurrentQuestion(
          currentQuestion + 1
        );

        setSelectedAnswer(null);

      } else {

        finishTest(updatedScore);
      }
    };



  // FINISH TEST
  const finishTest =
    (finalScore = score) => {

      setTestFinished(true);

      navigate(
        "/result",

        {
          state: {

            score:
              finalScore,

            total:
              questions.length,
          },
        }
      );
    };



  // LOADING
  if (loading) {

    return (

      <div
        className="
          min-h-screen
          bg-black
          text-white
          flex
          items-center
          justify-center
          text-3xl
          font-bold
        "
      >

        Loading Questions...

      </div>
    );
  }



  // NO QUESTIONS
  if (
    questions.length === 0
  ) {

    return (

      <div
        className="
          min-h-screen
          bg-black
          text-white
          flex
          items-center
          justify-center
          text-3xl
          font-bold
        "
      >

        No Questions Found

      </div>
    );
  }



  const question =
    questions[currentQuestion];



  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
        flex
      "
    >




      {/* CONTENT */}
      <div
        className="
          flex-1
          p-10
        "
      >

        {/* HEADER */}
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

            Mock Test 🚀

          </h1>

          <div
            className="
              bg-red-500/20
              px-6
              py-3
              rounded-2xl
              text-2xl
              font-bold
            "
          >

            ⏰ {formatTime(timeLeft)}

          </div>

        </div>



        {/* PROGRESS */}
        <div
          className="
            mb-8
          "
        >

          Question{" "}
          {currentQuestion + 1}
          {" / "}
          {questions.length}

        </div>



        {/* QUESTION CARD */}
        <div
          className="
            bg-white/10
            border
            border-white/10
            rounded-3xl
            p-10
          "
        >

          {/* QUESTION */}
          <h2
            className="
              text-3xl
              font-bold
              mb-10
            "
          >

            {question.question}

          </h2>



          {/* OPTIONS */}
          <div
            className="
              grid
              gap-5
            "
          >

            {
              question.options.map(

                (
                  option,
                  index
                ) => (

                  <button

                    key={index}

                    onClick={() =>
                      handleAnswer(index)
                    }

                    className={`
                      p-5
                      rounded-2xl
                      text-left
                      transition-all
                      duration-300
                      border

                      ${
                        selectedAnswer ===
                        index

                          ? "bg-gradient-to-r from-purple-600 to-blue-500 border-transparent"

                          : "bg-black border-white/10 hover:border-purple-500"
                      }
                    `}
                  >

                    {option}

                  </button>
                )
              )
            }

          </div>



          {/* BUTTON */}
          <button

            onClick={handleNext}

            disabled={
              selectedAnswer ===
              null
            }

            className="
              mt-10
              w-full
              py-5
              rounded-2xl
              text-2xl
              font-bold
              bg-gradient-to-r
              from-purple-600
              to-blue-500
              hover:scale-[1.02]
              transition-all
              duration-300
              disabled:opacity-50
            "
          >

            {
              currentQuestion + 1 ===
              questions.length

                ? "Finish Test"

                : "Next Question"
            }

          </button>

        </div>

      </div>

    </div>
  );
};

export default TestInterface;