import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Question } from "./types";

import questionList from "../questions.json";

export interface QuizState {
  questions: Question[];
  answers: string[];
}

const initialState: QuizState = {
  questions: questionList.questions,
  answers: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<string>) => {
      state.answers.push(action.payload);
    },
  },
  selectors: {
    selectQuestions: (state) => state.questions,
    selectAnswers: (state) => state.answers,
  },
});

export const quizSliceReducer = quizSlice.reducer;
export const { addAnswer } = quizSlice.actions;
export const { selectQuestions, selectAnswers } = quizSlice.selectors;
