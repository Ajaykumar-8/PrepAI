import {
  useEffect,
  useState,
} from "react";

const useTestTimer =
  (
    duration,
    onComplete
  ) => {

    const [
      timeLeft,
      setTimeLeft,
    ] = useState(duration);

    useEffect(() => {

      if (timeLeft <= 0) {

        onComplete();

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

    }, [timeLeft]);

    return timeLeft;
};

export default useTestTimer;