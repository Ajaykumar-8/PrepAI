import {
  useEffect,
  useState,
} from "react";

import {
  fetchLeaderboard,
} from "../services/leaderboardAPI";

const LeaderboardPage = () => {
  const [leaders,
    setLeaders] =
    useState([]);

  useEffect(() => {
    const load =
      async () => {
        const data =
          await fetchLeaderboard();

          console.log(data);
        setLeaders(data);
      };

    load();
  }, []);

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-10">
        Leaderboard 🏆
      </h1>

      {/* Top 3 */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {leaders
          .slice(0, 3)
          .map(
            (
              leader,
              index
            ) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <p className="text-gray-400">
                  {
                    [
                      "1st",
                      "2nd",
                      "3rd",
                    ][index]
                  }{" "}
                  Place
                </p>

                <h2 className="text-2xl font-semibold">
                  {leader?.userName || "Unknown User"}
                </h2>

                <p className="text-purple-400 text-3xl mt-3">
                  {
                    leader.totalScore
                  }
                </p>
              </div>
            )
          )}
      </div>

      {/* Full ranking */}
      <div className="space-y-4">
        {leaders.map(
          (
            leader,
            index
          ) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex justify-between items-center"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h2 className="text-2xl font-semibold">
                  {
                    leader.userName
                  }
                </h2>
              </div>

              <div className="text-right">
                <p className="text-purple-400 text-2xl font-bold">
                  {
                    leader.totalScore
                  }
                </p>

                <p className="text-gray-400 text-sm">
                  {
                    leader.testsTaken
                  }{" "}
                  Tests
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;