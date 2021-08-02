import "./App.css";
import { Main } from "./components/Main";
import { Game } from "./components/Game";

export const App = () => {
  return (
    <div className="App">
      <Game />
      {/* <Main /> */}
    </div>
  );
};