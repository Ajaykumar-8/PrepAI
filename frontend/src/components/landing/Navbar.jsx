import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-black/30
        border-b
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-6
          py-5
        "
      >
        {/* Logo */}
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

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white">
            Features
          </a>

          <a href="#ai" className="text-gray-300 hover:text-white">
            AI
          </a>

          <a
            href="#testimonials"
            className="text-gray-300 hover:text-white"
          >
            Testimonials
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="
              px-5
              py-2
              rounded-2xl
              bg-white/10
              hover:bg-white/20
              transition
            "
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
              px-5
              py-2
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-blue-600
              hover:scale-105
              transition
            "
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;