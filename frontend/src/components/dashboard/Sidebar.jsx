import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation();



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
        w-72
        min-h-screen
        bg-black/40
        backdrop-blur-xl
        border-r
        border-white/10
        text-white
        p-6
      "
    >

      {/* Logo */}
      <div className="mb-10">

        <h1
          className="
            text-3xl
            font-bold
            bg-gradient-to-r
            from-purple-400
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          PrepAI
        </h1>

      </div>



      {/* Navigation */}
      <div className="space-y-3">

        {navItems.map((item) => (

          <Link
            key={item.name}
            to={item.path}
            className={`
              flex
              items-center
              gap-3
              px-5
              py-4
              rounded-2xl
              transition-all
              duration-300
              hover:bg-white/10
              hover:scale-[1.02]

              ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-purple-600 to-blue-600"
                  : "bg-white/5"
              }
            `}
          >

            <span className="font-medium">
              {item.name}
            </span>

          </Link>

        ))}

      </div>

    </div>
  );
};

export default Sidebar;