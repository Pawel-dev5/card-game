import { Start } from "./Start";
import { Game } from "./Game";
import { useState, useEffect } from "react";
import { rounds } from "../utils/rounds";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export const Main = () => {
  const [start, setStart] = useState(true);
  const [game, setGame] = useState(false);
  // Localstorage
  const storageData = JSON.parse(localStorage.getItem("sumData"));
  const storageCount = JSON.parse(localStorage.getItem("count"));
  const storageScore = JSON.parse(localStorage.getItem("score"));
  const [sumData, setSumData] = useState(storageData || []);
  const [data, setData] = useState({
    cards: [],
    drawnCards: [],
  });
  const [count, setCount] = useState(storageCount || 1);
  const [showCard, setShowCard] = useState(false);
  const [bet, setBet] = useState("");
  const [score, setScore] = useState(storageScore || rounds);
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
    localStorage.setItem("score", JSON.stringify(rounds));
  }, []);
  useEffect(() => {
    if (data.drawnCards.length > 2) {
      return localStorage.setItem("sumData", JSON.stringify(data));
    }
  });
  return (
    <>
      <BrowserRouter>
        <Switch>
          {start ? (
            <Route exact path="/" component={Start}>
              <Start
                setData={setData}
                setGame={setGame}
                game={game}
                start={start}
                setStart={setStart}
                setCount={setCount}
                sumData={sumData}
              />
            </Route>
          ) : (
            <Route path="/game" component={Game}>
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
                setStart={setStart}
                setSumData={setSumData}
              />
            </Route>
          )}
          <Redirect exact from="/game" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};
