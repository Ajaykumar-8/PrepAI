import Flashcard
from "./Flashcard";



const FlashcardsSection = ({
  flashcards,
}) => {

  return (

    <div className="mt-8">

      <h2
        className="
          text-3xl
          font-bold
          mb-5
        "
      >

        Flashcards 🧠

      </h2>



      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        "
      >

        {
          flashcards.map(
            (
              card,
              index
            ) => (

              <Flashcard

                key={index}

                card={card}
              />
            )
          )
        }

      </div>

    </div>
  );
};

export default FlashcardsSection;