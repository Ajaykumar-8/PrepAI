import { useNavigate } from "react-router-dom";



const TestsPage = () => {

  const navigate =
    useNavigate();



  const tests = [

    {
      id: 1,
      title: "React Basics",
      difficulty: "Beginner",
      questions: 20,
    },

    {
      id: 2,
      title: "Node.js APIs",
      difficulty: "Intermediate",
      questions: 25,
    },

    {
      id: 3,
      title: "DSA Mock Test",
      difficulty: "Advanced",
      questions: 30,
    },
  ];



  return (

    <div
      className="
        w-full
        max-w-7xl
      "
    >

      {/* PAGE TITLE */}
      <h1
        className="
          text-5xl
          font-bold
          mb-10
        "
      >

        Mock Tests 🚀

      </h1>



      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >

        {
          tests.map((test) => (

            <div

              key={test.id}

              className="
                bg-white/10
                border
                border-white/10
                rounded-3xl
                p-7
                hover:border-purple-500
                transition-all
                duration-300
              "
            >

              {/* TITLE */}
              <h2
                className="
                  text-3xl
                  font-bold
                  mb-5
                "
              >

                {test.title}

              </h2>



              {/* DETAILS */}
              <div
                className="
                  space-y-2
                  mb-7
                  text-gray-400
                  text-lg
                "
              >

                <p>

                  Difficulty:
                  {" "}
                  {test.difficulty}

                </p>

                <p>

                  Questions:
                  {" "}
                  {test.questions}

                </p>

              </div>



              {/* BUTTON */}
              <button

                onClick={() =>
                  navigate("/test-interface")
                }

                className="
                  w-full
                  py-3
                  rounded-2xl
                  font-semibold
                  text-lg
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-500
                  hover:opacity-90
                  transition-all
                "
              >

                Start Test

              </button>

            </div>
          ))
        }

      </div>

    </div>
  );
};

export default TestsPage;