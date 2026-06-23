import { useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { saveResult } from "../services/resultAPI";
import useTestQuestions from "../hooks/useTestQuestions";
import useTestTimer from "../hooks/useTestTimer";

import TestHeader from "../components/TestHeader";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

const TestInterface = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const topic =
    searchParams.get("topic");

  const difficulty =
    searchParams.get("difficulty");

  const count =
    Number(
      searchParams.get("count")
    ) || 10;

  const {
    questions,
    loading,
  } = useTestQuestions(
    topic,
    difficulty,
    count
  );

  const [
    currentQuestion,
    setCurrentQuestion,
  ] = useState(0);

  const [
    selectedAnswer,
    setSelectedAnswer,
  ] = useState(null);

  const [
    userAnswers,
    setUserAnswers,
  ] = useState([]);

  const [score, setScore] =
    useState(0);

  const [
    testFinished,
    setTestFinished,
  ] = useState(false);

  // FINISH TEST
  const finishTest =
    async (
      finalScore = score
    ) => {
      if (testFinished) return;

      setTestFinished(true);

      const user =
        JSON.parse(
          localStorage.getItem(
            "userInfo"
          )
        );

      const accuracy =
        Math.round(
          (finalScore /
            questions.length) *
            100
        );

      try {
        await saveResult({
          userId: user?._id,
          userName: user?.name,   // ADD THIS
          topic,
          difficulty,
          score: finalScore,
          total: questions.length,
          accuracy,
        });
      } catch (error) {
        console.log(
          "Save Result Error:",
          error
        );
      }

      navigate("/result", {
        state: {
          score: finalScore,
          total: questions.length,
          accuracy,
          topic,
          difficulty,
          questions,
          userAnswers,
        },
      });
    };

  // TIMER
  const timeLeft =
    useTestTimer(
      600,
      testFinished,
      finishTest
    );

  // FORMAT TIMER
  const formatTime = (
    seconds
  ) => {
    const mins =
      Math.floor(
        seconds / 60
      );

    const secs =
      seconds % 60;

    return `${mins}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };

  // SELECT ANSWER
  const handleAnswer = (
    index
  ) => {
    setSelectedAnswer(index);

    const updatedAnswers =
      [...userAnswers];

    updatedAnswers[
      currentQuestion
    ] = index;

    setUserAnswers(
      updatedAnswers
    );
  };

  // NEXT QUESTION
  const handleNext = () => {
    let updatedScore =
      score;

    if (
      selectedAnswer ===
      questions[
        currentQuestion
      ].correctAnswer
    ) {
      updatedScore += 1;
      setScore(
        updatedScore
      );
    }

    if (
      currentQuestion + 1 <
      questions.length
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );

      setSelectedAnswer(
        userAnswers[
          currentQuestion + 1
        ] ?? null
      );
    } else {
      finishTest(
        updatedScore
      );
    }
  };

  // LOADING
  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-white
          text-2xl
          font-bold
        "
      >
        Loading Questions...
      </div>
    );
  }

  // NO QUESTIONS
  if (!questions.length) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-white
          text-2xl
          font-bold
        "
      >
        No Questions Found
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-6
          py-8
        "
      >
        {/* HEADER */}
        <TestHeader
          topic={topic}
          timeLeft={timeLeft}
          formatTime={
            formatTime
          }
        />

        {/* PROGRESS */}
        <ProgressBar
          currentQuestion={
            currentQuestion
          }
          questions={
            questions
          }
          difficulty={
            difficulty
          }
        />

        {/* QUESTION CARD */}
        <QuestionCard
          question={
            questions[
              currentQuestion
            ]
          }
          selectedAnswer={
            selectedAnswer
          }
          handleAnswer={
            handleAnswer
          }
          handleNext={
            handleNext
          }
          currentQuestion={
            currentQuestion
          }
          questions={
            questions
          }
        />
      </div>
    </div>
  );
};

export default TestInterface;