import { Score } from "./Score";
import CardsPNG from '../assets/blackjack2.png';
export const Header = ({ score, count }) => {
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
      <div className="header">
        <div className="nav-buttons-container">
          <h2>Round {count}/30</h2>
        </div>
        <Score score={score} />
      </div>
    </>
  );
};
