import { createSlice } from "@reduxjs/toolkit";
import { InitialStateTypes } from "./treeDataSlice.types";
import { arrayMove } from "@dnd-kit/sortable";

const initialState: InitialStateTypes = {
    treeData: [],
    activeItemId: "",
};

export const treeDataSlice = createSlice({
    name: "treeData",
    initialState,
    reducers: {
        removeItem: (state, { payload }) => {},
        moveItem: (state, { payload }) => {
            const { oldIndex, newIndex } = payload;
            const oldTreeData = state.treeData;
            state.treeData = arrayMove(oldTreeData, oldIndex, newIndex);
        },
        setItems: (state, { payload }) => {
            state.treeData = payload;
        },
        setActiveItemId: (state, { payload }) => {
            state.activeItemId = payload;
        },
    },
});

export const { removeItem, moveItem, setItems, setActiveItemId } =
    treeDataSlice.actions;
export default treeDataSlice.reducer;
