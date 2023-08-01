const SummaryBodyTable = () => {
    return (
        <tbody className="flex flex-col gap-[10px] text-gray-600">
            <tr className="flex items-center text-left  py-2 px-4 bg-white border border-teal-500 rounded-md overflow-hidden shadow-sm hover:shadow-md">
                <td className="w-[70px] shrink-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                    <div className="bg-teal-300 p-2 rounded-full flex justify-center w-[50px] h-[50px]">
                        <img
                            src="${category.categoryImg}"
                            alt="${category.categoryName}"
                            width="20"
                            height="20"
                        />
                    </div>
                </td>
                <td className="w-[550px] shrink-0 text-gray-800 font-semibold">
                    category
                </td>
                <td className="w-[270px] shrink-0">active count</td>
                <td className="w-[270px] shrink-0">archive count</td>
            </tr>
        </tbody>
    );
};

export default SummaryBodyTable;
