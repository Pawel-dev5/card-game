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
  console.log(count)
  const drawnCards = data.drawnCards;
  if (
    drawnCards.length !== 0 &&
    bet === "Higher" &&
    drawnCards[count - 1].value < drawnCards[count].value
  ) {
    return (
      setScore({
        1: score[1],
        2: score[2],
        3: score[3],
        4: score[4],
        5: score[5],
        6: score[6],
        7: score[7],
        8: score[8],
        9: score[9],
        11: score[11],
        12: score[12],
        13: score[13],
        14: score[14],
        15: score[15],
        16: score[16],
        17: score[17],
        18: score[18],
        19: score[19],
        20: score[20],
        21: score[21],
        22: score[22],
        23: score[23],
        24: score[24],
        25: score[25],
        26: score[26],
        27: score[27],
        28: score[28],
        29: score[29],
        30: score[30],
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
        1: score[1],
        2: score[2],
        3: score[3],
        4: score[4],
        5: score[5],
        6: score[6],
        7: score[7],
        8: score[8],
        9: score[9],
        11: score[11],
        12: score[12],
        13: score[13],
        14: score[14],
        15: score[15],
        16: score[16],
        17: score[17],
        18: score[18],
        19: score[19],
        20: score[20],
        21: score[21],
        22: score[22],
        23: score[23],
        24: score[24],
        25: score[25],
        26: score[26],
        27: score[27],
        28: score[28],
        29: score[29],
        30: score[30],
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
        1: score[1],
        2: score[2],
        3: score[3],
        4: score[4],
        5: score[5],
        6: score[6],
        7: score[7],
        8: score[8],
        9: score[9],
        11: score[11],
        12: score[12],
        13: score[13],
        14: score[14],
        15: score[15],
        16: score[16],
        17: score[17],
        18: score[18],
        19: score[19],
        20: score[20],
        21: score[21],
        22: score[22],
        23: score[23],
        24: score[24],
        25: score[25],
        26: score[26],
        27: score[27],
        28: score[28],
        29: score[29],
        30: score[30],
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
