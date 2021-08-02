import { Score } from "./Score";
import CardsPNG from "../assets/blackjack2.png";
export const Finish = ({ score }) => {
  return (
    <div className="header-container">
      <div>
        <h2>Congratulations, this's the end of fantastic Card Bet Game!</h2>
        <hr />
        <Score score={score} />
      </div>
      <div>
        <img src={CardsPNG} alt="cards" />
      </div>
    </div>
  );
};
