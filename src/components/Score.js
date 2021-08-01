export const Score = ({ score }) => {
  const totalScore = score.toFixed(1);
  return (
    <div>
      <h2>Your Score: {totalScore}</h2>
    </div>
  );
};
