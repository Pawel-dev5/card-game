import { Link } from "react-router-dom";
import CardsPNG from "../assets/blackjack2.png";
export const Start = ({
  setGame,
  game,
  setStart,
  setCount,
  sumData,
  setData,
}) => {
  console.log(game);
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
          <div>
            {checkLocalStorage !== null ? (
              <Link to="/game">
                <button onClick={keepGame}>Previous game</button>
              </Link>
            ) : ("")}
            <Link to="/game">
              <button onClick={newGame}>New Game</button>
            </Link>
          </div>
        </div>
        <div>
          <img src={CardsPNG} alt="cards" />
        </div>
      </div>
    </>
  );
};
