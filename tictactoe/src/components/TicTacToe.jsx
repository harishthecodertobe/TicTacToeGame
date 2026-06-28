import { useState } from "react";

const TicTac = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner() {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[b] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  }

  const winner = checkWinner();

  const isDraw = !winner && board.every((cell) => cell !== "");

  function handleClick(index) {
    if (winner || board[index]) return;

    const newBoard = [...board];

    if (isXTurn) {
      newBoard[index] = "X";
    } else {
      newBoard[index] = "O";
    }

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center gap-6">
      <h1 className="text-white text-5xl font-bold">
        Tic Tac Toe Game
      </h1>

      <h2 className="text-white text-2xl font-semibold">
        {winner
          ? `🏆 Winner: ${winner}`
          : isDraw
          ? "🤝 Match Draw"
          : `Current Turn: ${isXTurn ? "X" : "O"}`}
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="h-32 w-32 bg-blue-800 rounded-2xl text-white text-5xl font-bold hover:bg-blue-700 transition-all duration-200"
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="bg-green-500 px-8 py-3 rounded-xl text-white text-xl font-semibold hover:bg-green-600 transition-all"
      >
        Reset
      </button>
    </div>
  );
};

export default TicTac;