import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Keyboard.css';
import Key from '../Key/Key';
import { rootState } from '../../interface';
import { decreasePosition, increaseRow, setBoard } from '../../redux/boardSlice';

const Keyboard: React.FC = () => {
  const rows: string[] = ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m'];
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.position);
  const row = useSelector((state: rootState) => state.board.row);
  const wordList = useSelector((state: rootState) => state.board.wordList);
  const correctWord = useSelector((state: rootState) => state.board.correctWord);
  const dispatch = useDispatch();
  let currentWord =
    position % 5 === 0 && position > 0
      ? `${board[position - 5]}${board[position - 4]}${board[position - 3]}${board[position - 2]}${
          board[position - 1]
        }`.toLowerCase()
      : '';
  const clickBack = () => {
    // Cant back to above line
    if (Math.floor(position - 1) / 5 < row) return;
    const newBoard = [...board];
    newBoard[position - 1] = '';
    dispatch(decreasePosition());
    dispatch(setBoard(newBoard));
  };
  const clickEnter = () => {
    if (!wordList.includes(currentWord)) {
      return alert('Invalid word!');
    }
    // Cant enter the new line if not at the end of line
    if (position % 5 === 0 && position !== 0) {
      dispatch(increaseRow());
    }
    if (position >= 30) {
      alert(`The secret word is ${correctWord}`);
    }
  };
  return (
    <div className="keyboard-container">
      {rows.map((row, index) => (
        <div key={`row-${index}`} className="row">
          {row.split(' ').map((letter, index) => (
            <div key={`key-${row}-${index}`} className="letter-row">
              {letter === 'z' && <span onClick={clickEnter}>Enter</span>}
              <Key letter={letter.toUpperCase()} />
              {letter === 'm' && <span onClick={clickBack}>Back</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
