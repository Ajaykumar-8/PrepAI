import {
  Link,
  useLocation,
} from "react-router-dom";

const Sidebar = () => {

  const location =
    useLocation();

  const menuItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
    },

    {
      name: "AI Interview",
      path: "/interview",
    },

    {
      name: "Mock Tests",
      path: "/tests",
    },

    {
      name: "Analytics",
      path: "/analytics",
    },

    {
      name: "Leaderboard",
      path: "/leaderboard",
    },

    {
      name: "History",
      path: "/history",
    },

    {
      name: "Resume Analyzer",
      path: "/resume",
    },

    {
      name: "Notes",
      path: "/notes",
    },

    {
      name: "Profile",
      path: "/profile",
    },
  ];

  return (

    <div
      className="
        w-[300px]
        min-h-screen
        bg-black
        border-r
        border-white/10
        p-6
      "
    >

      <h1
        className="
          text-5xl
          font-bold
          text-purple-400
          mb-14
        "
      >
        PrepAI
      </h1>

      <div className="space-y-4">

        {
          menuItems.map(
            (item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`
                  block
                  p-5
                  rounded-3xl
                  text-xl
                  font-semibold
                  transition-all

                  ${
                    location.pathname ===
                    item.path

                      ? `
                        bg-gradient-to-r
                        from-purple-600
                        to-blue-500
                        text-white
                      `

                      : `
                        bg-white/5
                        text-white
                        hover:bg-white/10
                      `
                  }
                `}
              >

                {item.name}

              </Link>
            )
          )
        }

      </div>

    </div>
  );
};

export default Sidebar;