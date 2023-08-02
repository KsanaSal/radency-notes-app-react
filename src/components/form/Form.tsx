import { useState } from "react";
import categories from "../../mockData/categoriesData";
import CancelBtn from "../buttons/CancelBtn";
import CreateEditBtn from "../buttons/CreateEditBtn";

const Form = ({ closeModal }: { closeModal: () => void }) => {
    const [selectCategory, setSelectCategory] = useState("");

    return (
        <form id="createNoteForm">
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
                <CancelBtn handleCloseModal={closeModal} />
                <CreateEditBtn />
            </div>
        </form>
    );
};

export default Form;
