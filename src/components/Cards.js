import { result } from "../utils/result";
import { NextButton } from "./NextButton";
import { useState } from "react";
export const Cards = ({
  data,
  setData,
  bet,
  showCard,
  count,
  setCount,
  setBet,
  setShowCard,
  score,
  setScore,
}) => {

  const [itemValue, setItemValue] = useState('')
  const [secondItemValue, setSecondItemValue] = useState('')

  return (
    <>
      {data.drawnCards.length === 0 ? (
        <p>Draw the first card</p>
      ) : (
        <div className="card-container">
          <div>
            <img src={data.drawnCards[count - 1].image} alt="card" />
          </div>
          {showCard ? (
            <div>
              <img src={data.drawnCards[count].image} alt="card" />
            </div>
          ) : (
            <div className="blank-card">
              <div>
                {bet ? (
                  <button
                    onClick={() =>
                      result({
                        bet,
                        setBet,
                        setShowCard,
                        score,
                        setScore,
                        data,
                        count,
                        itemValue,
                        setItemValue,
                        secondItemValue,
                        setSecondItemValue
                      })
                    }
                  >
                    Show Card
                  </button>
                ) : (
                  <p>Bet next card</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      <NextButton
        count={count}
        showCard={showCard}
        setData={setData}
        setCount={setCount}
        setShowCard={setShowCard}
      />
    </>
  );
};
