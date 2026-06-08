const ProgressBar = ({
  current,
  total,
}) => {

  const percentage =
    (current / total) * 100;

  return (

    <div className="mb-8">

      <div
        className="
          w-full
          bg-white/10
          h-3
          rounded-full
        "
      >

        <div
          style={{
            width: `${percentage}%`,
          }}

          className="
            bg-gradient-to-r
            from-purple-600
            to-blue-500
            h-3
            rounded-full
          "
        />

      </div>

    </div>
  );
};

export default ProgressBar;