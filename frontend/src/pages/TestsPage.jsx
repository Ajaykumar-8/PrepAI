import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TestsPage = () => {
  const navigate = useNavigate();

  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH TESTS
  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/tests"
      );

      if (data.success) {
        setTests(data.tests);
      }
    } catch (error) {
      console.log("Error fetching tests:", error);
    } finally {
      setLoading(false);
    }
  };

  // START TEST
  const startTest = (test) => {
    const randomDifficulty =
      test.difficulties[
        Math.floor(
          Math.random() *
            test.difficulties.length
        )
      ];

    navigate(
      `/test-interface?topic=${test.topic}&difficulty=${randomDifficulty}&count=10`
    );
  };

  // LOADING UI
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
        Loading Tests...
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl">
      {/* PAGE TITLE */}
      <h1
        className="
          text-4xl
          md:text-5xl
          font-bold
          mb-10
        "
      >
        Mock Tests 🚀
      </h1>

      {/* TEST GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >
        {tests.map((test, index) => (
          <div
            key={index}
            className="
              bg-white/10
              border
              border-white/10
              rounded-2xl
              p-6
              hover:scale-[1.02]
              hover:border-purple-500
              transition-all
              duration-300
            "
          >
            {/* TOPIC */}
            <h2
              className="
                text-2xl
                font-bold
                mb-4
                capitalize
              "
            >
              {test.topic}
            </h2>

            {/* DETAILS */}
            <div
              className="
                space-y-3
                mb-6
                text-gray-400
                text-sm
                md:text-base
              "
            >
              <p>
                <span className="text-white font-medium">
                  Levels:
                </span>{" "}
                {test.difficulties.join(", ")}
              </p>

              <p>
                <span className="text-white font-medium">
                  Questions:
                </span>{" "}
                {test.totalQuestions}
              </p>

              <p>
                <span className="text-white font-medium">
                  Category:
                </span>{" "}
                {test.categories.join(", ")}
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                startTest(test)
              }
              className="
                w-full
                py-3
                rounded-xl
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
        ))}
      </div>
    </div>
  );
};

export default TestsPage;