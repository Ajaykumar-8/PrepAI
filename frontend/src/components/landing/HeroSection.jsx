import { motion } from "framer-motion";

import { Sparkles, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="
        max-w-7xl
        mx-auto
        px-6
        pt-28
        pb-24
        text-center
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-white/10
            border
            border-white/10
            mb-8
          "
        >
          <Sparkles size={18} />
          AI-Powered Interview Preparation
        </div>

        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            max-w-5xl
            mx-auto
          "
        >
          Prepare Smarter With AI
        </h1>

        <p
          className="
            text-gray-300
            text-lg
            md:text-xl
            max-w-3xl
            mx-auto
            mt-8
          "
        >
          Crack interviews faster with AI mock interviews,
          resume analysis, DSA tracking, and smart preparation tools.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">
          <Link
            to="/signup"
            className="
              flex
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
            Start Preparing
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/dashboard"
            className="
              px-8
              py-4
              rounded-2xl
              bg-white/10
              hover:bg-white/20
              transition
            "
          >
            Live Demo
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;