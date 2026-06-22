import {
  Link,
  useLocation,
} from "react-router-dom";



const Sidebar = () => {

  const location =
    useLocation();



  const navItems = [

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
      name: "Coding",
      path: "/coding",
    },

    {
      name: "Profile",
      path: "/profile",
    },
  ];



  return (

    <aside
      className="
        w-[250px]
        h-screen
        bg-black
        border-r
        border-white/10
        px-5
        py-6
        flex
        flex-col
        shrink-0
        overflow-hidden
      "
    >

      {/* LOGO */}
      <div className="mb-8">

        <h1
          className="
            text-5xl
            font-extrabold
            bg-gradient-to-r
            from-purple-400
            to-blue-500
            bg-clip-text
            text-transparent
          "
        >

          PrepAI

        </h1>

      </div>



      {/* NAVIGATION */}
      <nav
        className="
          flex
          flex-col
          gap-3
          overflow-y-auto
          pr-1
        "
      >

        {
          navItems.map(
            (item) => (

              <Link

                key={item.name}

                to={item.path}

                className={`
                  px-5
                  py-4
                  rounded-3xl
                  text-lg
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    location.pathname ===
                    item.path

                      ? "bg-gradient-to-r from-purple-600 to-blue-500"

                      : "bg-white/5 hover:bg-white/10"
                  }
                `}
              >

                {item.name}

              </Link>
            )
          )
        }

      </nav>

    </aside>
  );
};

export default Sidebar;