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
                        className="flex items-center text-left text-[12px] sm:text-[14px] lg:text-[16px] py-2 px-2 bg-white border border-teal-500 rounded-md overflow-hidden shadow-sm hover:shadow-md"
                        key={category.categoryId}
                    >
                        <td className="w-[32px] md:w-[50px] lg:w-[70px] shrink-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                            <div className="bg-teal-300 p-2 rounded-full flex items-center justify-center w-[30px] md:w-[40px] lg:w-[50px] h-[30px] md:h-[40px] lg:h-[50px]">
                                <img
                                    className="w-[16px] md:w-[18px] lg:w-[20px] h-[16px] md:h-[18px] lg:h-[20px]"
                                    src={category.categoryImg}
                                    alt={category.categoryName}
                                />
                            </div>
                        </td>
                        <td className="w-[250px] md:w-[450px] lg:w-[550px] shrink-0 text-gray-800 font-semibold text-[14px] sm:text-[16px] lg:text-[18px]">
                            {category.categoryName}
                        </td>
                        <td className="w-[100px] md:w-[170px] lg:w-[270px] shrink-0">
                            {countNotesCategory(
                                category.categoryId,
                                false,
                                notes
                            )}
                        </td>
                        <td className="w-[100px] md:w-[170px] lg:w-[270px] shrink-0">
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
