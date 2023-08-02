import { useState } from "react";
import categories from "../../mockData/categoriesData";
import CancelBtn from "../buttons/CancelBtn";
import CreateEditBtn from "../buttons/CreateEditBtn";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes } from "../../redux/notes/selectorNotes";
import { setIsShowModal, setNotes } from "../../redux/notes/sliceNotes";

const Form = () => {
    const [selectCategory, setSelectCategory] = useState("");
    const notes = useSelector(selectNotes);
    const dispatch = useDispatch();

    const handleOnCloseModal = () => {
        dispatch(setIsShowModal(false));
    };

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
            recordId: String(Date.now()),
            archived: false,
        };
        dispatch(setNotes([...notes, newNote]));
        dispatch(setIsShowModal(false));
    };

    return (
        <form id="createNoteForm" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                    htmlFor="noteTitle"
                    className="block font-semibold text-[20px]"
                >
                    Title:
                </label>
                <input
                    type="text"
                    id="noteTitle"
                    name="noteTitle"
                    className="w-full text-[18px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="noteCategory"
                    className="block font-semibold text-[20px]"
                >
                    Category:
                </label>
                <select
                    id="noteCategory"
                    name="noteCategory"
                    className="w-full text-[18px] text-teal-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500"
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
            <div className="mb-4">
                <label
                    htmlFor="noteContent"
                    className="block font-semibold text-[20px]"
                >
                    Content:
                </label>
                <textarea
                    id="noteContent"
                    name="noteContent"
                    rows={4}
                    className="w-full text-[18px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500"
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
