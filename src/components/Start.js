import { Link } from "react-router-dom";
import CardsPNG from "../assets/blackjack2.png";
export const Start = ({ setGame, setStart, setCount, sumData, setData }) => {
  const newGame = () => {
    setGame(true);
    setStart(false);
    setCount(1);
  };
  const keepGame = () => {
    setGame(false);
    setStart(false);
    setData(sumData);
  };
  const checkLocalStorage = JSON.parse(localStorage.getItem("sumData"));
  return (
    <>
      <div className="header-container">
        <div className="start-box">
          <div>
            <h1>The Best Card Bet Game</h1>
            <h3>Let's play!</h3>
          </div>
        </div>
        <div>
          <img src={CardsPNG} alt="cards" />
        </div>
      </div>
      <div className="start-buttons">
        {checkLocalStorage !== null ? (
          <Link to="/game">
            <button onClick={keepGame}>Previous game</button>
          </Link>
        ) : (
          ""
        )}
        <Link to="/game">
          <button onClick={newGame}>New Game</button>
        </Link>
      </div>
    </>
  );
};
