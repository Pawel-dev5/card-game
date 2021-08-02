export const getCards = ({
  setData,
  setCount,
  setShowCard,
  data,
  count,
}) => {
  setData((prevState) => ({
    drawnCards: [
      ...prevState.drawnCards,
      prevState.cards[prevState.cards.length - 1],
    ],
    cards: [...prevState.cards.slice(0, -1)],
  }));
  setCount((prevCount) => prevCount + 1);
  setShowCard(false);
  localStorage.setItem("sumData", JSON.stringify(data));
  localStorage.setItem("count", JSON.stringify(Number(count + 1)));
};
