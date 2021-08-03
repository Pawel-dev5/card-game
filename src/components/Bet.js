export const Bet = ({ bet, setBet }) => {
  return (
    <div className="bet-continer">
      <div className="bet-box">
        <h3>Next card will be: {bet}</h3>
        <div className="bet-buttons">
          <button onClick={() => setBet("Higher")}>Higher</button>
          <button onClick={() => setBet("Equal")}>Equal</button>
          <button onClick={() => setBet("Lower")}>Lower</button>
        </div>
      </div>
    </div>
  );
};
