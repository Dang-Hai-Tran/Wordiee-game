import React from 'react';

import Keyboard from '../Keyboard/Keyboard';
import Square from '../Square/Square';
import "./Board.css";

interface Props {
  board: string[];
}

const Board: React.FC<Props> = (props) => {
  const { board } = props;

  return (
    <>
      <div className="board">
        {board.map((square, index) => (
          <Square key={`square-${index}`} square={square} squareIndex={index} />
        ))}
      </div>
      <Keyboard />
    </>
  );
};

export default Board;
