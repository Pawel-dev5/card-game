import { Score } from "./Score";
import CardsPNG from "../assets/blackjack2.png";
import Confetti from "react-confetti";
export const Finish = ({ score }) => {
  return (
    <>
      <div className="header-container finish">
        <div>
          <h2>Congratulations, this's the end of fantastic Card Bet Game!</h2>
          <hr />
          <Score score={score} />
        </div>
        <div>
          <img src={CardsPNG} alt="cards" />
        </div>
        <Confetti className="confetti" friction={0.99} />
      </div>
    </>
  );
};
