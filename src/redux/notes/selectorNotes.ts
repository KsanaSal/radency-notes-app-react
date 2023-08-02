import { INotes } from "../../models/interfaceNotes";

export const selectNotes = (state: { notes: { notes: INotes[] } }) =>
    state.notes.notes;

export const selectIsShowModal = (state: { notes: { isShowModal: boolean } }) =>
    state.notes.isShowModal;
