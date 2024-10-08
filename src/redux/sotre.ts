import { configureStore } from "@reduxjs/toolkit";
import treeDataReducer from "./treeData/treeDataSlice";

export const store = configureStore({
    reducer: { treeData: treeDataReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
