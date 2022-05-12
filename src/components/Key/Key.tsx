import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Key.css';
import { rootState } from '../../interface';
import { setBoard } from '../../redux/boardSlice';
import { increasePosition } from '../../redux/boardSlice';
interface Props {
  letter: string;
}

const Key: React.FC<Props> = (props) => {
  const { letter } = props;
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.position);
  const dispatch = useDispatch();
  let currentRow = Math.floor(position / 5);
  const row = useSelector((state: rootState) => state.board.row);
  const chooseLetter = () => {
    // Cant fill the square if over the board
    if (position >= 30) {
      return;
    }
    // Cant fill the next line if don't click enter
    if (currentRow > row) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(increasePosition());
  };
  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
