import { useDispatch, useSelector } from "react-redux";
import iconUnarchived from "../../assets/images/icon-unarchived.svg";
import { selectNotes } from "../../redux/notes/selectorNotes";
import parseDate from "../../utils/parseDate";
import { setNotes } from "../../redux/notes/sliceNotes";

const ArchiveBodyTable = () => {
    const notes = useSelector(selectNotes);
    const renderedData = notes.filter((item) => item.archived);
    const dispatch = useDispatch();

    const handleUnarchivedBtnClick = (recordId: string) => {
        const itemToUpdate = notes.map((item) =>
            item.recordId === recordId
                ? { ...item, archived: !item.archived }
                : item
        );

        dispatch(setNotes(itemToUpdate));
    };

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
                        <td className="w-[130px] shrink-0 text-gray-800 text-[18px] font-semibold truncate text-ellipsis white-space: nowrap">
                            {item.nameTitle}
                        </td>
                        <td className="w-[140px] shrink-0">
                            {item.createDate}
                        </td>
                        <td className="w-[130px] shrink-0">
                            {item.categoryName}
                        </td>
                        <td className="w-[250px] shrink-0 truncate text-ellipsis white-space: nowrap">
                            {item.content}
                        </td>
                        <td className="w-[130px] shrink-0">
                            {parseDate(item.content)}
                        </td>
                        <td className="flex gap-5 w-[50px] shrink-0">
                            <button
                                className="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]"
                                onClick={() =>
                                    handleUnarchivedBtnClick(item.recordId)
                                }
                            >
                                <img
                                    src={iconUnarchived}
                                    alt="Icon archive"
                                    width="20"
                                    height="20"
                                />
                            </button>
                        </td>
                    </tr>
                ))}
        </tbody>
    );
};

export default ArchiveBodyTable;
