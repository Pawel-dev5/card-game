import { Score } from "./Score";
export const Finish = ({score}) => {
  return (
    <div>
      <h2>Congratulations, this's the end of fantastic bet card game!</h2>
      <Score score={score} />
    </div>
  );
};
