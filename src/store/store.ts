import { configureStore } from "@reduxjs/toolkit";
import { quizSliceReducer } from "./QuizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
