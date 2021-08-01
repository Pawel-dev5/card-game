import { getCards } from "../utils/getCard";
export const NextButton = ({
  setData,
  setCount,
  setShowCard,
  count,
  showCard,
}) => {
  return (
    <div className="next-button">
      {count === 30 ? (
        <button
          onClick={() =>
            getCards({
              setData,
              setCount,
              setShowCard,
            })
          }
        >
          Finish
        </button>
      ) : (
        <>
          {showCard ? (
            <button
              onClick={() =>
                getCards({
                  setData,
                  setCount,
                  setShowCard,
                })
              }
            >
              Next round
            </button>
          ) : (
            <button
              disabled
              onClick={() =>
                getCards({
                  setData,
                  setCount,
                  setShowCard,
                })
              }
            >
              Next round
            </button>
          )}
        </>
      )}
    </div>
  );
};
