export const Score = ({ score }) => {
  const totalScore = score.total.toFixed(1);
  return (
    <div>
      <h2>Total Score: {totalScore}</h2>
    </div>
  );
};
