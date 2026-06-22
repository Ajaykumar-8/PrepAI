const OutputConsole = ({
  output,
}) => {

  return (

    <div
      className="
        bg-black
        p-5
        rounded-2xl
        min-h-[200px]
        border
        border-white/10
      "
    >

      <h2 className="mb-4 font-bold">
        Output
      </h2>

      <pre className="text-green-400 whitespace-pre-wrap">
        {output}
      </pre>

    </div>
  );
};

export default OutputConsole;