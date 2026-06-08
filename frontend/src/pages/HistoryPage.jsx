const HistoryPage = () => {

  const history = [

    {
      title: "React Test",
      score: 85,
      difficulty: "Beginner",
      date: "June 8, 2026",
    },

    {
      title: "Node.js Test",
      score: 92,
      difficulty: "Intermediate",
      date: "June 7, 2026",
    },

    {
      title: "DSA Test",
      score: 76,
      difficulty: "Advanced",
      date: "June 6, 2026",
    },
  ];



  return (

    <div
      className="
        w-full
        max-w-6xl
      "
    >

      {/* HEADING */}
      <h1
        className="
          text-5xl
          font-bold
          mb-8
        "
      >

        Test History 📚

      </h1>



      {/* STATS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
          mb-8
        "
      >

        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
          "
        >

          <p className="text-gray-400 mb-2">

            Total Tests

          </p>

          <h2
            className="
              text-4xl
              font-bold
            "
          >

            24

          </h2>

        </div>



        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
          "
        >

          <p className="text-gray-400 mb-2">

            Average Score

          </p>

          <h2
            className="
              text-4xl
              font-bold
            "
          >

            84%

          </h2>

        </div>



        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
          "
        >

          <p className="text-gray-400 mb-2">

            Highest Score

          </p>

          <h2
            className="
              text-4xl
              font-bold
            "
          >

            96%

          </h2>

        </div>

      </div>



      {/* HISTORY LIST */}
      <div className="space-y-4">

        {
          history.map(
            (
              item,
              index
            ) => (

              <div

                key={index}

                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  justify-between
                "
              >

                {/* LEFT */}
                <div>

                  <h2
                    className="
                      text-2xl
                      font-semibold
                      mb-2
                    "
                  >

                    {item.title}

                  </h2>



                  <div
                    className="
                      flex
                      gap-4
                      text-gray-400
                    "
                  >

                    <p>

                      {item.difficulty}

                    </p>

                    <p>

                      {item.date}

                    </p>

                  </div>

                </div>



                {/* SCORE */}
                <div
                  className="
                    text-right
                  "
                >

                  <p
                    className="
                      text-3xl
                      font-bold
                      text-purple-400
                    "
                  >

                    {item.score}%

                  </p>



                  <p
                    className="
                      text-gray-400
                      mt-1
                    "
                  >

                    Score

                  </p>

                </div>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default HistoryPage;