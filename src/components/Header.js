import { Score } from "./Score";
import CardsPNG from '../assets/blackjack2.png';
export const Header = ({ score }) => {
  return (
    <>
      <div className="header-container">
        <div>
          <h1>Card Bet Game</h1>
        </div>
        <div>
          <img src={CardsPNG} alt="cards" />
        </div>
      </div>
      <Score score={score} />
    </>
  );
};
