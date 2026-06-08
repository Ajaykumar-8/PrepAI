const LeaderboardPage = () => {

  const leaders = [

    {
      name: "Ajay",
      score: 95,
    },

    {
      name: "Rahul",
      score: 90,
    },

    {
      name: "Kiran",
      score: 88,
    },

    {
      name: "Suresh",
      score: 84,
    },
  ];



  return (

    <div
      className="
        w-full
        max-w-5xl
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

        Leaderboard 🏆

      </h1>



      {/* TOP CARDS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
          mb-8
        "
      >

        {/* 1ST */}
        <div
          className="
            bg-gradient-to-r
            from-yellow-500/20
            to-yellow-300/10
            border
            border-yellow-500/20
            rounded-3xl
            p-6
          "
        >

          <p className="text-lg text-gray-300">

            1st Place

          </p>

          <h2
            className="
              text-3xl
              font-bold
              mt-2
            "
          >

            {leaders[0].name}

          </h2>

          <p
            className="
              text-yellow-400
              text-2xl
              mt-2
            "
          >

            {leaders[0].score}

          </p>

        </div>



        {/* 2ND */}
        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
          "
        >

          <p className="text-lg text-gray-300">

            2nd Place

          </p>

          <h2
            className="
              text-3xl
              font-bold
              mt-2
            "
          >

            {leaders[1].name}

          </h2>

          <p
            className="
              text-purple-400
              text-2xl
              mt-2
            "
          >

            {leaders[1].score}

          </p>

        </div>



        {/* 3RD */}
        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
          "
        >

          <p className="text-lg text-gray-300">

            3rd Place

          </p>

          <h2
            className="
              text-3xl
              font-bold
              mt-2
            "
          >

            {leaders[2].name}

          </h2>

          <p
            className="
              text-blue-400
              text-2xl
              mt-2
            "
          >

            {leaders[2].score}

          </p>

        </div>

      </div>



      {/* FULL LIST */}
      <div className="space-y-4">

        {
          leaders.map(
            (
              leader,
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
                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-gradient-to-r
                      from-purple-600
                      to-blue-500
                      flex
                      items-center
                      justify-center
                      font-bold
                    "
                  >

                    {index + 1}

                  </div>



                  <h2
                    className="
                      text-2xl
                      font-semibold
                    "
                  >

                    {leader.name}

                  </h2>

                </div>



                {/* SCORE */}
                <p
                  className="
                    text-2xl
                    font-bold
                    text-purple-400
                  "
                >

                  {leader.score}

                </p>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default LeaderboardPage;