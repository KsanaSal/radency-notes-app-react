const SummaryHeadTable = () => {
    return (
        <thead>
            <tr className=" flex text-left text-[18px] font-semibold py-2 px-4 bg-teal-200 border border-teal-700 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md">
                <th className="w-[70px] shrink-0"></th>
                <th className="w-[550px] shrink-0">Note Category</th>
                <th className="w-[270px] shrink-0">Active</th>
                <th className="w-[270px] shrink-0">Archived</th>
            </tr>
        </thead>
    );
};

export default SummaryHeadTable;
