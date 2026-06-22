const Flashcard = ({
  card,
}) => {

  return (

    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-6
      "
    >

      <p
        className="
          text-lg
          leading-7
        "
      >

        {card}

      </p>

    </div>
  );
};

export default Flashcard;