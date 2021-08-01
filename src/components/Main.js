import { useEffect, useState } from "react";
import { Bet } from "./Bet";
import { Cards } from "./Cards";
import { Header } from "./Header";
import { Finish } from "./Finish";
export const Main = () => {
  const [data, setData] = useState({
    cards: [],
    drawnCards: [],
  });
  const [count, setCount] = useState(1);
  const [showCard, setShowCard] = useState(false);
  const [bet, setBet] = useState("");
  const [score, setScore] = useState(0);
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

  if (data.drawnCards.length !== 32) {
    return (
      <div>
        <h1>Card Bet Game</h1>
        <Header
          setCount={setCount}
          count={count}
          score={score}
        />
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
    );
  } else return <Finish score={score} />;
};
