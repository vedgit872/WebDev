import { useState } from "react";

function generateGameBoard() {
  console.log("MAKING THE INITIAL GAME BOARD");
  return Array(5000);
}
export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);//generateGameBoard executed once
  // const [board, setBoard] = useState(generateGameBoard());// generateGameBoard() executed every time  stae changed ,component RE_RENDERED
  return (
    <button onClick={() => setBoard("hello!")}>Click me to change state</button>
  );
}
