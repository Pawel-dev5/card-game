export const Score = ({ score }) => {
  const totalScore = score.total.toFixed(1);
  console.log(score)
  return (
    <div>
      <h2>Your Score: {totalScore}</h2>
    </div>
  );
};
