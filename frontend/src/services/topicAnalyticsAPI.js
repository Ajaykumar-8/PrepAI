import axios from "axios";

const API =
  "http://localhost:5000/api/topic-analytics";

export const fetchTopicAnalytics =
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

    return data.topics;
  };