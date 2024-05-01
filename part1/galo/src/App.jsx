import Square from "./Square.jsx";
import React from "react";
import {useState} from "react";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    const nextSquares = squares.slice();
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext && nextSquares[index] === null) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div className="screen">
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((value, index) => (
          <Square
            onClick={() => handleClick(index)}
            key={index}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}
