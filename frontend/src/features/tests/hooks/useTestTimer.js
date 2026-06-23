import { useEffect, useState } from "react";

const useTestTimer = (
  initialTime,
  testFinished,
  finishTest
) => {
  const [timeLeft, setTimeLeft] =
    useState(initialTime);

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

  return timeLeft;
};

export default useTestTimer;