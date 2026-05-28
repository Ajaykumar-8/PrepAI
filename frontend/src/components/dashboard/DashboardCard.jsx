import { motion } from "framer-motion";

const DashboardCard = ({
  title,
  value,
  icon: Icon,
}) => {

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="
        p-6
        rounded-3xl
        bg-white/10
        border
        border-white/10
        backdrop-blur-xl
      "
    >

      <div className="flex items-center justify-between mb-5">

        <Icon
          className="text-purple-400"
          size={28}
        />

        <span className="text-3xl font-bold">
          {value}
        </span>

      </div>

      <h3 className="text-gray-300">
        {title}
      </h3>

    </motion.div>
  );
};

export default DashboardCard;