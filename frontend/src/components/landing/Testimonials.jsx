import { Star } from "lucide-react";

const Testimonials = () => {

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      review:
        "PrepAI completely transformed my interview preparation.",
    },
    {
      name: "Priya Verma",
      role: "Software Engineer",
      review:
        "The AI interviews feel incredibly realistic and useful.",
    },
    {
      name: "Arjun Patel",
      role: "Full Stack Developer",
      review:
        "One of the best AI preparation platforms.",
    },
  ];

  return (
    <section
      id="testimonials"
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
        Loved By Developers
      </h2>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
        "
      >
        {testimonials.map((item, index) => (
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
            <div className="flex gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-300 mb-6">
              "{item.review}"
            </p>

            <div>
              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;