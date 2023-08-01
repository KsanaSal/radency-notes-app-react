import iconUnarchived from "../../assets/images/icon-unarchived.svg";

const ArchiveBodyTable = () => {
    return (
        <tbody className="flex flex-col gap-[10px] text-gray-600">
            <tr className="flex justify-between items-center text-left py-2 px-2 bg-white border border-teal-500 rounded-md overflow-hidden shadow-sm hover:shadow-md">
                <td className="w-[55px] shrink-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                    <div className="bg-teal-300 p-2 rounded-full flex justify-center w-[50px] h-[50px]">
                        <img
                            src=""
                            alt="category icon"
                            width="20"
                            height="20"
                        />
                    </div>
                </td>
                <td className="w-[120px] shrink-0 text-gray-800 text-[18px] font-semibold truncate text-ellipsis white-space: nowrap">
                    title name
                </td>
                <td className="w-[135px] shrink-0">date</td>
                <td className="w-[130px] shrink-0">category</td>
                <td className="w-[170px] shrink-0 truncate text-ellipsis white-space: nowrap">
                    content
                </td>
                <td className="w-[130px] shrink-0">date content</td>
                <td className="flex gap-5 w-[50px] shrink-0">
                    <button
                        className="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]"
                        data-unarchive="${item.recordId}"
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
        </tbody>
    );
};

export default ArchiveBodyTable;
