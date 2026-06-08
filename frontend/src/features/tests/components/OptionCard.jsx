const OptionCard = ({
  option,
  isSelected,
  onClick,
}) => {

  return (

    <button
      onClick={onClick}

      className={`
        w-full
        text-left
        p-5
        rounded-2xl
        transition-all

        ${
          isSelected

            ? `
              bg-gradient-to-r
              from-purple-600
              to-blue-500
            `

            : `
              bg-white/5
              hover:bg-white/10
            `
        }
      `}
    >

      {option}

    </button>
  );
};

export default OptionCard;