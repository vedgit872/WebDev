import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from "./EmojiClicker"
import ScoreKeeperMulti from './ScoreKeeperMulti'
import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";
function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}
function App() {
  return (
    <>
      <BoxGrid />
      {/* <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      /> */}
      {/* <ScoreKeeperMulti /> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper /> */}
      {/* <Dumbo />
      <Counter /> */}
    </>
  )
}
export default App
