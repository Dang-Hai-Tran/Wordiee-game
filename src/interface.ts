interface boardState {
  board: string[];
  position: number;
  row: number;
  correctWord: string;
  wordList: string[];
}

export interface rootState {
  board: boardState
}