const TestHeader = ({
  topic,
  timeLeft,
  formatTime,
}) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold capitalize">
        {topic} Test 🚀
      </h1>

      <div className="bg-red-500/20 px-4 py-2 rounded-xl text-lg font-semibold">
        ⏰ {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default TestHeader;