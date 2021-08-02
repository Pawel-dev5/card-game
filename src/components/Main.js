import { useEffect, useState } from "react";
import { Bet } from "./Bet";
import { Cards } from "./Cards";
import { Header } from "./Header";
import { Finish } from "./Finish";
import { ProgressBar } from "./ProgressBar";
export const Main = () => {
  const [data, setData] = useState({
    cards: [],
    drawnCards: [],
  });
  const [count, setCount] = useState(1);
  const [showCard, setShowCard] = useState(false);
  const [bet, setBet] = useState("");
  const [score, setScore] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 0,
    28: 0,
    29: 0,
    30: 0,
    total: 0,
  });
  // Getting data from API
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
      );
      response = await response.json();
      setData({
        cards: response.cards,
        drawnCards: [],
      });
      setData((prevState) => ({
        drawnCards: [
          ...prevState.drawnCards,
          prevState.cards[prevState.cards.length - 1],
          prevState.cards[prevState.cards.length - 2],
        ],
        cards: [...prevState.cards.slice(0, -2)],
      }));
    }
    fetchMyAPI();
  }, []);
  // Limit of rounds
  if (data.drawnCards.length !== 32) {
    return (
      <div className="layout">
        <ProgressBar count={count} score={score} />
        <div>
          <Header setCount={setCount} count={count} score={score} />
          <Bet
            drawnCards={data.drawnCards}
            count={count}
            bet={bet}
            setBet={setBet}
            setShowCard={setShowCard}
            showCard={showCard}
            score={score}
            setScore={setScore}
          />
          <Cards
            drawnCards={data.drawnCards}
            count={count}
            setCount={setCount}
            bet={bet}
            setBet={setBet}
            setShowCard={setShowCard}
            showCard={showCard}
            score={score}
            setScore={setScore}
            data={data}
            setData={setData}
          />
        </div>
      </div>
    );
  } else return <Finish score={score} />;
};
