import { createSlice } from "@reduxjs/toolkit";
import initData from "../../mockData/initData";

const initialState = {
    notes: initData,
    isShowModal: false,
    error: null,
};

const sliceNotes = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setNotes: (state, action) => ({
            ...state,
            notes: action.payload,
        }),
        setIsShowModal: (state, action) => ({
            ...state,
            isShowModal: action.payload,
        }),
    },
});

export const { setNotes, setIsShowModal } = sliceNotes.actions;

export default sliceNotes.reducer;
