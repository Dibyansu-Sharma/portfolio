import React, { useState } from "react";
import Board from "./board";

const calculateWinner = (squares: (string | null)[]) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6], // Diagonals
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Returns "X" or "O"
    }
  }
  return null;
};

const Game: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);

  const handleClick = (index: number) => {
    if (squares[index] || winner) return; // Prevents clicking if already played or game won
    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5 text-white">
      <h1 className="text-4xl font-bold">Tic-Tac-Toe</h1>
      <p className="text-lg">
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`}
      </p>
      <Board squares={squares} onClick={handleClick} />
      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      >
        Restart Game
      </button>
    </div>
  );
};

export default Game;
