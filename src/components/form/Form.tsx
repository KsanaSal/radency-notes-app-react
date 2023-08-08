import { useEffect, useState } from "react";
import categories from "../../mockData/categoriesData";
import CancelBtn from "../buttons/CancelBtn";
import CreateEditBtn from "../buttons/CreateEditBtn";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCurrentNoteId,
    selectNotes,
} from "../../redux/notes/selectorNotes";
import {
    setCreateNotes,
    setCurrentNoteId,
    setEditNotes,
    setIsShowModal,
} from "../../redux/notes/sliceNotes";

const Form = () => {
    const [selectCategory, setSelectCategory] = useState("");
    const notes = useSelector(selectNotes);
    const noteId = useSelector(selectCurrentNoteId);
    const currentNote = notes.find((note) => note.recordId === noteId);
    const dispatch = useDispatch();
    const handleOnCloseModal = () => {
        dispatch(setIsShowModal(false));
        dispatch(setCurrentNoteId(""));
    };

    useEffect(() => {
        currentNote && setSelectCategory(currentNote?.categoryName);
    }, [currentNote]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const newNote = {
            categoryId: formData.get("noteCategory"),
            categoryName: categories.find(
                (category) =>
                    category.categoryId === formData.get("noteCategory")
            )?.categoryName,
            categoryImg: categories.find(
                (category) =>
                    category.categoryId === formData.get("noteCategory")
            )?.categoryImg,
            createDate: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            }),
            content: formData.get("noteContent"),
            nameTitle: formData.get("noteTitle"),
            recordId: noteId || String(Date.now()),
            archived: false,
        };

        const newNotes = notes.map((note) => {
            if (note.recordId === newNote.recordId) {
                return newNote;
            }
            return note;
        });

        dispatch(
            noteId
                ? setEditNotes(newNotes)
                : setCreateNotes([...notes, newNote])
        );
        dispatch(setIsShowModal(false));
        dispatch(setCurrentNoteId(""));
    };

    return (
        <form id="createNoteForm" onSubmit={handleSubmit}>
            <div className="mb-3 md:mb-4 lg:mb-5">
                <label
                    htmlFor="noteTitle"
                    className="block font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]"
                >
                    Title:
                </label>
                <input
                    type="text"
                    id="noteTitle"
                    name="noteTitle"
                    className="w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] border border-gray-300 rounded-md px-2 md:px-3 py-1 md:py-2 focus:outline-none focus:border-teal-500"
                    defaultValue={currentNote?.nameTitle || ""}
                    required
                />
            </div>
            <div className="mb-3 md:mb-4 lg:mb-5">
                <label
                    htmlFor="noteCategory"
                    className="block font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]"
                >
                    Category:
                </label>
                <select
                    id="noteCategory"
                    name="noteCategory"
                    className="w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-teal-800 border border-gray-300 rounded-md px-2 md:px-3 py-1 md:py-2 focus:outline-none focus:border-teal-500"
                    required
                    value={selectCategory}
                    onChange={(e) => setSelectCategory(e.target.value)}
                >
                    <option value="" disabled>
                        Select a category...
                    </option>
                    {categories.map((category) => (
                        <option
                            value={category.categoryId}
                            key={category.categoryId}
                        >
                            {category.categoryName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3 md:mb-4 lg:mb-5">
                <label
                    htmlFor="noteContent"
                    className="block font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]"
                >
                    Content:
                </label>
                <textarea
                    id="noteContent"
                    name="noteContent"
                    rows={4}
                    className="w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] border border-gray-300 rounded-md px-2 md:px-3 py-1 md:py-2 focus:outline-none focus:border-teal-500"
                    defaultValue={currentNote?.content || ""}
                    required
                ></textarea>
            </div>
            <div className="flex justify-end">
                <CancelBtn handleCloseModal={handleOnCloseModal} />
                <CreateEditBtn />
            </div>
        </form>
    );
};

export default Form;
