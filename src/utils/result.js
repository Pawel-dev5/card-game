export const result = ({
  bet,
  setBet,
  setShowCard,
  score,
  setScore,
  data,
  count,
  setItemValue,
  itemValue,
  setSecondItemValue,
  secondItemValue
}) => {
  const drawnCards = data.drawnCards;
  if (
    drawnCards.length !== 0 &&
    bet === "Higher" &&
    drawnCards[count - 1].value < drawnCards[count].value
  ) {
    return (
      setScore(score + 0.1),
      setBet(""),
      setShowCard(true)
    )
  } else if (
    drawnCards.length !== 0 &&
    bet === "Lower" &&
    drawnCards[count - 1].value > drawnCards[count].value
  ) {
    return (
      setScore(score + 0.1),
      setBet(""),
      setShowCard(true)
    )
  } else if (
    drawnCards.length !== 0 &&
    bet === "Equal" &&
    drawnCards[count - 1].value === drawnCards[count].value
  ) {
    return (
      setScore(score + 0.1),
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
