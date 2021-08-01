import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    cards: [],
    drawnCards: [],
    randomCard: "",
  });

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
    }
    fetchMyAPI();
  }, []);

  function getCard() {
    setData((prevState) => ({
      drawnCards: [
        ...prevState.drawnCards,
        prevState.cards[prevState.cards.length - 1],
      ],
      cards: [...prevState.cards.slice(0, -1)],
      randomCard: "",
    }));
  }

  if (data) {
    return (
      <div className="App">
        <h2>Card Bid Game</h2>
        <button onClick={getCard}>Start</button>
        <br />
        {data.drawnCards.length === 0 ? (
          <>
            <p>Brak Kart</p>
          </>
        ) : (
          <>
            {data.drawnCards.map((item) => {
              return (
                <>
                  <img src={item.image} alt="card"></img>
                  <p>{item.code}</p>
                </>
              );
            })}
          </>
        )}
      </div>
    );
  } else return <h1>Ładuję</h1>;
}

export default App;
