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

        setDeleteNotes: (state, action) => ({
            ...state,
            notes: action.payload,
        }),

        setCreateNotes: (state, action) => ({
            ...state,
            notes: action.payload,
        }),

        setEditNotes: (state, action) => ({
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

export const {
    setNotes,
    setIsShowModal,
    setCurrentNoteId,
    setDeleteNotes,
    setCreateNotes,
    setEditNotes,
} = sliceNotes.actions;

export default sliceNotes.reducer;
