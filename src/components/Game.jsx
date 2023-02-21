import Board from "./Board";
import { useState } from "react";
import calculateWinner from "../functions/calculateWinner";
import ButtonX from "../img/x.svg";
import ButtonO from "../img/O.svg";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <p>
        {winner
          ? "Ganhador" + winner
          : "Próximo Jogador: " + (xIsNext ? "X" : "0")}
      </p>
    </>
  );
};

export default Game;
