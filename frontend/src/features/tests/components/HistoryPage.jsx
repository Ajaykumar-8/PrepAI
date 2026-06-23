import {
  useEffect,
  useState,
} from "react";

import {
  fetchHistory,
} from "../services/resultAPI";

const HistoryPage = () => {
  const [history, setHistory] =
    useState([]);

  useEffect(() => {
    const loadHistory =
      async () => {
        const data =
          await fetchHistory();

        setHistory(data);
      };

    loadHistory();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-3">
            Test History 📜
          </h1>

          <p className="text-gray-400 text-lg">
            Track your previous mock test performances
          </p>
        </div>

        {/* EMPTY */}
        {!history.length ? (
          <div
            className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-12
              text-center
            "
          >
            <h2 className="text-2xl font-semibold mb-3">
              No test history yet
            </h2>

            <p className="text-gray-400">
              Complete your first test to see your progress here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {history.map(
              (item, index) => (
                <div
                  key={index}
                  className="
                    bg-white/5
                    border border-white/10
                    rounded-3xl
                    p-6
                    hover:border-purple-500
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex justify-between items-start">
                    {/* LEFT */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-3xl font-bold capitalize">
                          {item.topic}
                        </h2>

                        <span
                          className="
                            px-3 py-1
                            rounded-full
                            bg-white/10
                            text-sm
                            capitalize
                          "
                        >
                          {item.difficulty}
                        </span>
                      </div>

                      <div className="space-y-2 text-gray-300">
                        <p>
                          Score:
                          <span className="font-semibold ml-2">
                            {item.score}/{item.total}
                          </span>
                        </p>

                        <p>
                          Date:
                          <span className="ml-2 text-gray-400">
                            {new Date(
                              item.createdAt
                            ).toLocaleDateString()}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SCORE */}
                    <div className="text-right">
                      <div
                        className="
                          text-4xl
                          font-bold
                        "
                      >
                        {item.accuracy}%
                      </div>

                      <p className="text-gray-400 text-sm">
                        Accuracy
                      </p>
                    </div>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="mt-6">
                    <div
                      className="
                        w-full
                        h-3
                        bg-white/10
                        rounded-full
                        overflow-hidden
                      "
                    >
                      <div
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-purple-600
                          to-blue-500
                        "
                        style={{
                          width: `${item.accuracy}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;