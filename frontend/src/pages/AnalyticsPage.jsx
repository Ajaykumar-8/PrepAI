import {
  useEffect,
  useState,
} from "react";

import {
  fetchAnalytics,
} from "../services/analyticsAPI";

import {
  fetchTopicAnalytics,
} from "../services/topicAnalyticsAPI";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AnalyticsPage = () => {
  const [analytics,
    setAnalytics] =
    useState(null);

  const [topics,
    setTopics] =
    useState([]);

  useEffect(() => {
    const loadData =
      async () => {
        const analyticsData =
          await fetchAnalytics();

        const topicData =
          await fetchTopicAnalytics();

        setAnalytics(
          analyticsData
        );

        setTopics(
          topicData
        );
      };

    loadData();
  }, []);

  if (!analytics)
    return (
      <div className="text-white">
        Loading...
      </div>
    );

  const pieData = [
    {
      name: "Accuracy",
      value:
        analytics.averageAccuracy,
    },
    {
      name: "Remaining",
      value:
        100 -
        analytics.averageAccuracy,
    },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-8">
        Analytics 📊
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          {
            title:
              "Tests Taken",
            value:
              analytics.testsTaken,
          },
          {
            title:
              "Avg Score",
            value:
              analytics.averageScore,
          },
          {
            title:
              "Accuracy",
            value: `${analytics.averageAccuracy}%`,
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <p className="text-gray-400">
              {card.title}
            </p>
            <h2 className="text-4xl font-bold mt-2">
              {card.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Pie */}
        <div className="bg-white/5 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-5">
            Accuracy Overview
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
              >
                <Cell fill="#9333ea" />
                <Cell fill="#2563eb" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar */}
        <div className="bg-white/5 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-5">
            Topic Performance
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart
              data={topics}
            >
              <XAxis
                dataKey="_id"
              />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="avgScore"
                fill="#9333ea"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;