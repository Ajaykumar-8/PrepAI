import axios from "axios";

const API_URL =
  "http://localhost:5000/api/results";

// SAVE RESULT
export const saveResult =
  async (resultData) => {
    const { data } =
      await axios.post(
        `${API_URL}/save`,
        resultData
      );

    return data;
  };

// GET HISTORY
export const fetchHistory =
  async () => {
    const user =
      JSON.parse(
        localStorage.getItem(
          "userInfo"
        )
      );

    const { data } =
      await axios.get(
        `${API_URL}/history/${user._id}`
      );

    return data.history;
  };