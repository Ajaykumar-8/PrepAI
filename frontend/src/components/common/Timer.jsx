import {
  useEffect,
  useState,
} from "react";



const Timer = ({
  duration,
  onSubmit,
}) => {

  const [timeLeft,
    setTimeLeft] =
    useState(
      duration * 60
    );



  useEffect(() => {

    if (timeLeft <= 0) {

      onSubmit();

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



  return (

    <div className="text-3xl">

      {
        Math.floor(
          timeLeft / 60
        )
      }

      :

      {
        String(
          timeLeft % 60
        ).padStart(2, "0")
      }

    </div>
  );
};

export default Timer;