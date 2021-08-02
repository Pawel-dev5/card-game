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
    drawnCards.length !== 0 &&
    bet === "Higher" &&
    drawnCards[count - 1].value < drawnCards[count].value
  ) {
    return (
      setScore({
        ...score,
        [count]: score[count] + 0.1,
        total: score.total + 0.1
      }),
      setBet(""),
      setShowCard(true)
    )
  } else if (
    drawnCards.length !== 0 &&
    bet === "Lower" &&
    drawnCards[count - 1].value > drawnCards[count].value
  ) {
    return (
      setScore({
        ...score,
        [count]: score[count] + 0.1,
        total: score.total + 0.1
      }),
      setBet(""),
      setShowCard(true)
    )
  } else if (
    drawnCards.length !== 0 &&
    bet === "Equal" &&
    drawnCards[count - 1].value === drawnCards[count].value
  ) {
    return (
      setScore({
        ...score,
        [count]: score[count] + 0.1,
        total: score.total + 0.1
      }),
      setBet(""),
      setShowCard(true)
    )
  } else {
    return (
      setBet(""),
      setShowCard(true)
    )
  }
};
