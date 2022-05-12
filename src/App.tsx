import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Board from './components/Board/Board';
import Heading from './components/Heading/Heading';
import {rootState} from "./interface";

function App() {
  const board = useSelector((state: rootState) => state.board.board)
  return (
    <div className="App">
      <Heading type="h1" text="Wordiee" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
