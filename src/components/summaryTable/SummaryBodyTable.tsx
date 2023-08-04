import { useSelector } from "react-redux";
import categories from "../../mockData/categoriesData";
import { countNotesCategory } from "../../utils/countNotesCategory";
import { selectNotes } from "../../redux/notes/selectorNotes";

const SummaryBodyTable = () => {
    const notes = useSelector(selectNotes);

    return (
        <tbody className="flex flex-col gap-[10px] text-gray-600">
            {categories &&
                categories.map((category) => (
                    <tr
                        className="flex items-center text-left  py-2 px-4 bg-white border border-teal-500 rounded-md overflow-hidden shadow-sm hover:shadow-md"
                        key={category.categoryId}
                    >
                        <td className="w-[70px] shrink-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                            <div className="bg-teal-300 p-2 rounded-full flex justify-center w-[50px] h-[50px]">
                                <img
                                    src={category.categoryImg}
                                    alt={category.categoryName}
                                    width="20"
                                    height="20"
                                />
                            </div>
                        </td>
                        <td className="w-[550px] shrink-0 text-gray-800 font-semibold">
                            {category.categoryName}
                        </td>
                        <td className="w-[270px] shrink-0">
                            {countNotesCategory(
                                category.categoryId,
                                false,
                                notes
                            )}
                        </td>
                        <td className="w-[270px] shrink-0">
                            {countNotesCategory(
                                category.categoryId,
                                true,
                                notes
                            )}
                        </td>
                    </tr>
                ))}
        </tbody>
    );
};

export default SummaryBodyTable;
