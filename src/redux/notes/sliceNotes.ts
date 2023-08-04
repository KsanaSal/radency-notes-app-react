import { createSlice } from "@reduxjs/toolkit";
import initData from "../../mockData/initData";

const initialState = {
    notes: initData,
    currentNoteId: "",
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

        setCurrentNoteId: (state, action) => ({
            ...state,
            currentNoteId: action.payload,
        }),
    },
});

export const { setNotes, setIsShowModal, setCurrentNoteId } = sliceNotes.actions;

export default sliceNotes.reducer;
