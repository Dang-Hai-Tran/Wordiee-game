import { createSlice } from "@reduxjs/toolkit";
import wordList from "../words.json";

let randomNum = Math.floor(Math.random()*wordList.words.length);

const initialState = {
  board: [
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
  ],
  position: 0,
  row: 0,
  correctWord: wordList.words[randomNum].toUpperCase(),
  wordList: wordList.words,
}
console.log(initialState.correctWord);
const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload
    },
    increasePosition: (state) => {
      state.position += 1;
    },
    decreasePosition: (state) => {
      state.position -= 1;
    },
    increaseRow: (state) => {
      state.row += 1;
    },
  }

});

export const {setBoard, increasePosition, decreasePosition, increaseRow} = boardSlice.actions;
export default boardSlice.reducer;