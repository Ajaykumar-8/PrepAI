const Footer = () => {
  return (
    <footer
      className="
        border-t
        border-white/10
        py-10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        "
      >
        <h1
          className="
            text-2xl
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

        <p className="text-gray-400">
          © 2026 PrepAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;