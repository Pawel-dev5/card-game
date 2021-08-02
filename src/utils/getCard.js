export const getCards = ({ setData, setCount, setShowCard}) => {
    setData((prevState) => ({
    drawnCards: [
      ...prevState.drawnCards,
      prevState.cards[prevState.cards.length - 1],
    ],
    cards: [...prevState.cards.slice(0, -1)],
  }));
  setCount((prevCount) => prevCount + 1);
  setShowCard(false);
};
