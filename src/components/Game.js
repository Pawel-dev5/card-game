import { Bet } from "./Bet";
import { Cards } from "./Cards";
import { Header } from "./Header";
import { Finish } from "./Finish";
import { ProgressBar } from "./ProgressBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export const Game = ({
  data,
  count,
  showCard,
  bet,
  score,
  setData,
  setCount,
  setShowCard,
  setBet,
  setScore,
  setStart,
}) => {
  // Limit of rounds
  if (data.drawnCards.length !== 32) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/game">
            <div className="layout">
              <ProgressBar count={count} score={score} />
              <div>
                <Header setCount={setCount} count={count} score={score} />
                <Bet
                  drawnCards={data.drawnCards}
                  count={count}
                  bet={bet}
                  setBet={setBet}
                  setShowCard={setShowCard}
                  showCard={showCard}
                  score={score}
                  setScore={setScore}
                />
                <Cards
                  drawnCards={data.drawnCards}
                  count={count}
                  setCount={setCount}
                  bet={bet}
                  setBet={setBet}
                  setShowCard={setShowCard}
                  showCard={showCard}
                  score={score}
                  setScore={setScore}
                  data={data}
                  setData={setData}
                />
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  } else return <Finish score={score} setStart={setStart} />;
};
