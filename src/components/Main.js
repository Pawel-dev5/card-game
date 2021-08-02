import { Start } from "./Start";
import { Game } from "./Game";
import { useState, useEffect } from "react";
export const Main = () => {
  const [start, setStart] = useState(true);
  const [game, setGame] = useState(false);
  // Localstorage
  const storageData = JSON.parse(localStorage.getItem("sumData"));
  const storageCount = JSON.parse(localStorage.getItem("count"));
  const [sumData, setSumData] = useState(storageData || []);
  console.log("SumData");
  console.log(sumData);
  const [data, setData] = useState({
    cards: [],
    drawnCards: [],
  });
  console.log("Data");
  console.log(data);
  const [count, setCount] = useState(storageCount || 1);
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
  useEffect(() => {
    if (data.drawnCards.length > 2) {
      return (
        localStorage.setItem("sumData", JSON.stringify(data))
      );
    }
  });
  const clearTasks = () => {
    localStorage.setItem("sumData", JSON.stringify([]));
    setSumData([]);
  };
  const localCount = localStorage.getItem("count");
  console.log(localCount);
  return (
    <>
      {start ? (
        <Start
          setData={setData}
          setGame={setGame}
          game={game}
          start={start}
          setStart={setStart}
          setCount={setCount}
          sumData={sumData}
        />
      ) : (
        <Game
          data={data}
          setData={setData}
          count={count}
          setCount={setCount}
          showCard={showCard}
          setShowCard={setShowCard}
          bet={bet}
          setBet={setBet}
          score={score}
          setScore={setScore}
          clearTasks={clearTasks}
          setSumData={setSumData}
        />
      )}
    </>
  );
};
