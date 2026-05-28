import {
  Sparkles,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const AICapabilities = () => {

  const capabilities = [
    {
      title: "AI Feedback Engine",
      description:
        "Get intelligent real-time interview feedback.",
      icon: Sparkles,
    },
    {
      title: "Performance Analytics",
      description:
        "Track your preparation progress with AI insights.",
      icon: BarChart3,
    },
    {
      title: "Cloud Security",
      description:
        "Enterprise-grade secure AI platform.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="ai"
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
        AI Capabilities
      </h2>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
        "
      >
        {capabilities.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
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
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AICapabilities;