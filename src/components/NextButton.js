import { getCards } from "../utils/getCard";
import { Test } from "./Test";
export const NextButton = ({
  setData,
  setCount,
  setShowCard,
  count,
  showCard,
  data
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
              count
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
                  count
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
                  count
                })
              }
            >
              Next round
            </button>
          )}
        </>
      )}
      {/* <Test/> */}
    </div>
  );
};
