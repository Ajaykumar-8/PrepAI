const DashboardPreview = () => {
  return (
    <section
      className="
        max-w-7xl
        mx-auto
        px-6
        pb-28
      "
    >
      <div
        className="
          rounded-[40px]
          border
          border-white/10
          bg-white/10
          backdrop-blur-xl
          overflow-hidden
        "
      >
        <div
          className="
            bg-gradient-to-r
            from-purple-600/30
            to-blue-600/30
            p-6
            border-b
            border-white/10
          "
        >
          <h2 className="text-3xl font-bold">
            Dashboard Preview
          </h2>
        </div>

        <div className="p-10">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            "
          >
            <div
              className="
                p-6
                rounded-3xl
                bg-black/30
                border
                border-white/10
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                AI Interviews
              </h3>

              <p className="text-gray-400">
                Personalized AI interview feedback.
              </p>
            </div>

            <div
              className="
                p-6
                rounded-3xl
                bg-black/30
                border
                border-white/10
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                Resume Score
              </h3>

              <p className="text-gray-400">
                ATS optimization and resume analytics.
              </p>
            </div>

            <div
              className="
                p-6
                rounded-3xl
                bg-black/30
                border
                border-white/10
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                DSA Analytics
              </h3>

              <p className="text-gray-400">
                Track coding consistency and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;