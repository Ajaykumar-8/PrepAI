const Dashboard = () => {

  return (

    <div
      className="
        w-full
      "
    >

      {/* TITLE */}
      <h1
        className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          mb-10
        "
      >

        Welcome to PrepAI 🚀

      </h1>



      {/* CARDS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          max-w-7xl
          gap-6
        "
      >

        {/* CARD */}
        <div
          className="
            bg-white/10
            border
            border-white/10
            rounded-3xl
            p-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              mb-4
            "
          >

            AI Interviews

          </h2>

          <p
            className="
              text-gray-400
              text-lg
            "
          >

            Practice AI-generated
            interview questions.

          </p>

        </div>



        {/* CARD */}
        <div
          className="
            bg-white/10
            border
            border-white/10
            rounded-3xl
            p-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              mb-4
            "
          >

            Resume Analyzer

          </h2>

          <p
            className="
              text-gray-400
              text-lg
            "
          >

            Analyze resumes with
            AI feedback.

          </p>

        </div>



        {/* CARD */}
        <div
          className="
            bg-white/10
            border
            border-white/10
            rounded-3xl
            p-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              mb-4
            "
          >

            Mock Tests

          </h2>

          <p
            className="
              text-gray-400
              text-lg
            "
          >

            Improve technical
            interview preparation.

          </p>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;