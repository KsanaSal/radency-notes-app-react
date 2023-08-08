const SummaryHeadTable = () => {
    return (
        <thead>
            <tr className=" flex text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold py-4 px-2 bg-teal-200 border border-teal-700 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md">
                <th className="w-[30px] md:w-[50px] lg:w-[70px] shrink-0"></th>
                <th className="w-[200px] md:w-[450px] lg:w-[550px] shrink-0">
                    Note Category
                </th>
                <th className="w-[90px] md:w-[170px] lg:w-[270px] shrink-0">
                    Active
                </th>
                <th className="w-[90px] md:w-[170px] lg:w-[270px] shrink-0">
                    Archived
                </th>
            </tr>
        </thead>
    );
};

export default SummaryHeadTable;
