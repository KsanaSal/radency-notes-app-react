import { INotes } from "../models/interfaceNotes";

export const countNotesCategory = (
    categoryId: string,
    archived: boolean,
    notes: INotes[]
) =>
    notes.filter(
        (item) => item.categoryId === categoryId && item.archived === archived
    ).length;
