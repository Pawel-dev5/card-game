export const result = ({
  bet,
  setBet,
  setShowCard,
  score,
  setScore,
  data,
  count,
}) => {
  const drawnCards = data.drawnCards;
  if (
    bet === "Higher" &&
    drawnCards[count - 1].value < drawnCards[count].value
  ) {
    setScore(score + 0.1);
    setBet("");
    setShowCard(true);
  } else if (
    bet === "Lower" &&
    drawnCards[count - 1].value > drawnCards[count].value
  ) {
    setScore(score + 0.1);
    setBet("");
    setShowCard(true);
  } else if (
    bet === "Equal" &&
    drawnCards[count - 1].value === drawnCards[count].value
  ) {
    setScore(score + 0.1);
    setBet("");
    setShowCard(true);
  } else {
    setBet("");
    setShowCard(true);
  }
};
