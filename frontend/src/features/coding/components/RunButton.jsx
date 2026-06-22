const RunButton = ({
  runCode,
  loading,
}) => {

  return (

    <button
      onClick={runCode}
      disabled={loading}
      className="
        px-6
        py-3
        rounded-xl
        bg-gradient-to-r
        from-purple-600
        to-blue-600
      "
    >

      {
        loading
          ? "Running..."
          : "Run Code"
      }

    </button>
  );
};

export default RunButton;