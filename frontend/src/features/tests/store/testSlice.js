import {
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {

  currentQuestion: 0,

  answers: [],

  score: 0,
};

const testSlice =
  createSlice({

    name: "test",

    initialState,

    reducers: {

      setAnswer:
        (
          state,
          action
        ) => {

          state.answers[
            action.payload.questionIndex
          ] =
            action.payload.answer;
        },

      nextQuestion:
        (state) => {

          state.currentQuestion++;
        },

      setScore:
        (
          state,
          action
        ) => {

          state.score =
            action.payload;
        },
    },
  });

export const {

  setAnswer,
  nextQuestion,
  setScore,

} = testSlice.actions;

export default testSlice.reducer;