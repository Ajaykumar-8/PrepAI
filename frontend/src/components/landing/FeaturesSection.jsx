import {
  Brain,
  FileText,
  Code2,
  NotebookPen,
} from "lucide-react";

import { motion } from "framer-motion";

const FeaturesSection = () => {

  const features = [
    {
      title: "AI Mock Interviews",
      description:
        "Practice real interview scenarios powered by AI.",
      icon: Brain,
    },
    {
      title: "Resume Analyzer",
      description:
        "Improve ATS score and optimize your resume.",
      icon: FileText,
    },
    {
      title: "DSA Practice",
      description:
        "Track coding performance and consistency.",
      icon: Code2,
    },
    {
      title: "Smart Notes",
      description:
        "Generate AI notes instantly from preparation.",
      icon: NotebookPen,
    },
  ];

  return (
    <section
      id="features"
      className="
        max-w-7xl
        mx-auto
        px-6
        pb-28
      "
    >
      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-center
          mb-16
        "
      >
        Powerful Features
      </h2>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
        "
      >
        {features.map((feature, index) => {

          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="
                p-8
                rounded-3xl
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-500
                  to-blue-500
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >
                <Icon size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;