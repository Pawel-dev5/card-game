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
    <div className="header-container">
      <div>
        {checkLocalStorage !== null ? (
          <>
            <button onClick={keepGame}>Keep playing</button>
          </>
        ) : ("")}
        <button onClick={newGame}>New Game</button>
      </div>
      <div>
        <img src={CardsPNG} alt="cards" />
      </div>
    </div>
  );
};
