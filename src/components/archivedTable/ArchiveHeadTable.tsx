const ArchiveHeadTable = () => {
    return (
        <thead>
            <tr className=" flex justify-between text-left text-[20px] font-semibold py-4 px-2 bg-teal-200 border border-teal-700 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md">
                <th className="w-[55px] shrink-0"></th>
                <th className="w-[130px] shrink-0">Name</th>
                <th className="w-[140px] shrink-0">Created</th>
                <th className="w-[130px] shrink-0">Category</th>
                <th className="w-[250px] shrink-0">Content</th>
                <th className="w-[130px] shrink-0">Dates</th>
                <th className="w-[50px] shrink-0">
                    <div className="p-2">
                        <img
                            src="${iconUnarchive}"
                            alt="Icon archive"
                            width="20"
                            height="20"
                        />
                    </div>
                </th>
            </tr>
        </thead>
    );
};

export default ArchiveHeadTable;
