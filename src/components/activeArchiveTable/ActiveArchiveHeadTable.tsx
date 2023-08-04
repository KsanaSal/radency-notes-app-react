import iconArchived from "../../assets/images/icon-archived.svg";
import iconDelete from "../../assets/images/icon-delete.svg";
import iconUnarchived from "../../assets/images/icon-unarchived.svg";

const ActiveArchiveHeadTable = ({ type }: { type: "active" | "archived" }) => {
    const isActive = type === "active";
    return (
        <thead>
            <tr className=" flex justify-between text-left text-[20px] font-semibold py-4 px-2 bg-teal-200 border border-teal-700 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md">
                <th className="w-[55px] shrink-0"></th>
                <th className="w-[130px] shrink-0">Name</th>
                <th className="w-[140px] shrink-0">Created</th>
                <th className="w-[130px] shrink-0">Category</th>
                <th className="w-[250px] shrink-0">Content</th>
                <th className="w-[130px] shrink-0">Dates</th>
                <th
                    className={`${
                        isActive ? "w-[130px]" : "w-[50px]"
                    } shrink-0`}
                >
                    {" "}
                    {isActive ? (
                        <div className="flex gap-2 justify-end">
                            <div className="p-2">
                                <img
                                    src={iconArchived}
                                    alt="Icon archive"
                                    width="20"
                                    height="20"
                                />
                            </div>
                            <div className="p-2">
                                <img
                                    src={iconDelete}
                                    alt="Icon delete"
                                    width="20"
                                    height="20"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="p-2">
                            <img
                                src={iconUnarchived}
                                alt="Icon archive"
                                width="20"
                                height="20"
                            />
                        </div>
                    )}
                </th>
            </tr>
        </thead>
    );
};

export default ActiveArchiveHeadTable;
