import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppState } from "./slices";
export const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
