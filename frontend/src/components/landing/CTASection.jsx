import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section
      className="
        max-w-6xl
        mx-auto
        px-6
        pb-28
      "
    >
      <div
        className="
          p-12
          rounded-[40px]
          bg-gradient-to-r
          from-purple-600/30
          to-blue-600/30
          border
          border-white/10
          backdrop-blur-xl
          text-center
        "
      >
        <h2 className="text-5xl font-bold mb-6">
          Ready To Crack Your Dream Job?
        </h2>

        <p className="text-gray-300 text-lg mb-10">
          Start preparing with AI and level up your placements.
        </p>

        <Link
          to="/signup"
          className="
            inline-flex
            items-center
            gap-2
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-purple-600
            to-blue-600
            font-semibold
            hover:scale-105
            transition
          "
        >
          Get Started Free

          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;