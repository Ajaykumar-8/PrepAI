import {

  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,

} from "recharts";



const data = [

  {
    name: "Correct",
    value: 80,
  },

  {
    name: "Wrong",
    value: 20,
  },
];



const COLORS = [

  "#9333EA",
  "#2563EB",
];



const AnalyticsPage = () => {

  return (

    <div
      className="
        w-full
        max-w-7xl
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

        Analytics 📊

      </h1>



      {/* STATS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-5
          mb-8
        "
      >

        {[
          {
            title: "Tests Taken",
            value: "24",
          },

          {
            title: "Average Score",
            value: "82%",
          },

          {
            title: "Accuracy",
            value: "80%",
          },

          {
            title: "Leaderboard Rank",
            value: "#12",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
            "
          >

            <h2
              className="
                text-gray-400
                text-lg
                mb-2
              "
            >

              {item.title}

            </h2>



            <p
              className="
                text-4xl
                font-bold
              "
            >

              {item.value}

            </p>

          </div>
        ))}

      </div>



      {/* CHART CARD */}
      <div
        className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-6
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            mb-6
          "
        >

          Performance Overview

        </h2>



        <div
          className="
            w-full
            h-[350px]
          "
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie

                data={data}

                dataKey="value"

                outerRadius={120}

                label
              >

                {
                  data.map(
                    (
                      entry,
                      index
                    ) => (

                      <Cell

                        key={index}

                        fill={
                          COLORS[index]
                        }
                      />
                    )
                  )
                }

              </Pie>



              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default AnalyticsPage;