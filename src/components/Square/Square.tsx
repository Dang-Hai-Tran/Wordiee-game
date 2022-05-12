import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { motion } from 'framer-motion';
import './Square.css';
import { rootState } from '../../interface';

interface Props {
  square: string;
  squareIndex: number;
}
const Square: React.FC<Props> = (props) => {
  const { square, squareIndex } = props;
  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };
  const correctWord = useSelector((state: rootState) => state.board.correctWord).toUpperCase();
  const rowRedux = useSelector((state: rootState) => state.board.row);
  const [correct, setCorrect] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  let positionInRow = squareIndex % 5;
  // Set status apter click Enter
  useEffect(() => {
    if (correctWord[positionInRow] === square) {
      setCorrect(true);
    } else if (!correct && square !== '' && correctWord.includes(square)) {
      setAlmost(true);
    } else if (!correct && square !== '' && !correctWord.includes(square)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [square, positionInRow, correctWord, correct]);
  const status =
    Math.floor(squareIndex / 5) < rowRedux && (correct ? 'correct' : almost ? 'almost' : wrong ? 'wrong' : '');
  return (
    <motion.div animate={square ? 'filled' : 'unfilled'} variants={variants}>
      <div className="square" id={`${status}`}>
        {square}
      </div>
    </motion.div>
  );
};

export default Square;
