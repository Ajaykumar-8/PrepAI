import axios from "axios";

const API_URL =
  "http://localhost:5000/api/results";

export const fetchLeaderboard =
  async () => {
    const { data } =
      await axios.get(
        `${API_URL}/leaderboard`
      );

    console.log(
      "Leaderboard API:",
      data
    );

    return data.leaderboard;
  };