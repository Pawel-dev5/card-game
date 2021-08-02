import { getCards } from "../utils/getCard";
export const NextButton = ({
  setData,
  setCount,
  setShowCard,
  count,
  showCard,
  data,
  sumData
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
              data,
              count,
              sumData
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
                  data,
                  count,
                  sumData
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
                  data,
                  count,
                  sumData
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
