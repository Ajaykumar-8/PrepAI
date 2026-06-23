import axios from "axios";

const API =
  "http://localhost:5000/api/analytics";

export const fetchAnalytics =
  async () => {
    const user =
      JSON.parse(
        localStorage.getItem(
          "userInfo"
        )
      );

    const { data } =
      await axios.get(
        `${API}/${user._id}`
      );

    return data.analytics;
  };