import { createSlice } from "@reduxjs/toolkit";
import initData from "../../mockData/initData";

const initialState = {
    notes: initData,
    loading: false,
    error: null,
};

const sliceNotes = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setNotes: (state, action) => ({
            ...state,
            data: action.payload,
        }),
    },
});

export const { setNotes } = sliceNotes.actions;

export default sliceNotes.reducer;
