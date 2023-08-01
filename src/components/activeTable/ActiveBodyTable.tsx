import { useSelector } from "react-redux";
import iconArchived from "../../assets/images/icon-archived.svg";
import iconDelete from "../../assets/images/icon-delete.svg";
import iconEdit from "../../assets/images/icon-edit.svg";
import { selectNotes } from "../../redux/notes/selectorNotes";
import parseDate from "../../utils/parseDate";

const ActiveBodyTable = () => {
    const notes = useSelector(selectNotes);
    const renderedData = notes.filter((item) => !item.archived);

    return (
        <tbody className="flex flex-col gap-[10px] text-gray-600">
            {renderedData &&
                renderedData.map((item) => (
                    <tr
                        className="flex justify-between items-center text-left py-2 px-2 bg-white border border-teal-500 rounded-md overflow-hidden shadow-sm hover:shadow-md"
                        key={item.recordId}
                    >
                        <td className="w-[55px] shrink-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                            <div className="bg-teal-300 p-2 rounded-full flex justify-center w-[50px] h-[50px]">
                                <img
                                    src={item.categoryImg}
                                    alt={item.categoryName}
                                    width="20"
                                    height="20"
                                />
                            </div>
                        </td>
                        <td className="w-[120px] shrink-0 text-gray-800 text-[18px] font-semibold truncate text-ellipsis white-space: nowrap">
                            {item.nameTitle}
                        </td>
                        <td className="w-[135px] shrink-0">
                            {item.createDate}
                        </td>
                        <td className="w-[130px] shrink-0">
                            {item.categoryName}
                        </td>
                        <td className="w-[170px] shrink-0 truncate text-ellipsis white-space: nowrap">
                            {item.content}
                        </td>
                        <td className="w-[130px] shrink-0">
                            {parseDate(item.content)}
                        </td>
                        <td className="flex gap-5 w-[130px] shrink-0">
                            <div className="flex gap-2">
                                <button
                                    className="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]"
                                    data-edit="${item.recordId}"
                                >
                                    <img
                                        src={iconEdit}
                                        alt="Icon edit"
                                        width="20"
                                        height="20"
                                    />
                                </button>
                                <button
                                    className="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]"
                                    data-archive="${item.recordId}"
                                >
                                    <img
                                        src={iconArchived}
                                        alt="Icon archive"
                                        width="20"
                                        height="20"
                                    />
                                </button>
                                <button
                                    className="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]"
                                    data-delete="${item.recordId}"
                                >
                                    <img
                                        src={iconDelete}
                                        alt="Icon delete"
                                        width="20"
                                        height="20"
                                    />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
        </tbody>
    );
};

export default ActiveBodyTable;
