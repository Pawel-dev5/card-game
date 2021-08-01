import { Score } from "./Score";
export const Header = ({ score, count, handleIncrement, showCard }) => {
  return (
    <div className="header">
      <div className="nav-buttons-container">
        <h2>Round {count}/30</h2>
      </div>
        <Score score={score} />
    </div>
  );
};
