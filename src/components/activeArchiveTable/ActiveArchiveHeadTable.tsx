import iconArchived from "../../assets/images/icon-archived.svg";
import iconDelete from "../../assets/images/icon-delete.svg";
import iconUnarchived from "../../assets/images/icon-unarchived.svg";

const ActiveArchiveHeadTable = ({ type }: { type: "active" | "archived" }) => {
    const isActive = type === "active";
    return (
        <thead>
            <tr className=" flex justify-between text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold py-4 px-2 bg-teal-200 border border-teal-700 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md">
                <th className="w-[30px] md:w-[40px] lg:w-[55px] shrink-0"></th>
                <th className="w-[70px] md:w-[100px] lg:w-[130px] shrink-0">
                    Name
                </th>
                <th className="w-[80px] md:[110px] lg:w-[140px] shrink-0">
                    Created
                </th>
                <th className="w-[80px] md:w-[100px] lg:w-[130px] shrink-0">
                    Category
                </th>
                <th className="w-[130px] md:w-[200px] lg:w-[250px] shrink-0">
                    Content
                </th>
                <th className="w-[70px] md:w-[100px] lg:w-[130px] shrink-0">
                    Dates
                </th>
                <th
                    className={`${
                        isActive
                            ? "w-[80px] md:w-[100px] lg:w-[130px]"
                            : "w-[30px] md:w-[40px] lg:w-[50px]"
                    } shrink-0`}
                >
                    {" "}
                    {isActive ? (
                        <div className="flex items-center gap-[2px] md:gap-1 lg:gap-2 justify-end">
                            <div className="p-1 md:p-2">
                                <img
                                    className="w-[16px] md:w-[18px] lg:w-[20px] h-[16px] md:h-[18px] lg:h-[20px]"
                                    src={iconArchived}
                                    alt="Icon archive"
                                    // width="20"
                                    // height="20"
                                />
                            </div>
                            <div className="p-1 md:p-2">
                                <img
                                    className="w-[16px] md:w-[18px] lg:w-[20px] h-[16px] md:h-[18px] lg:h-[20px]"
                                    src={iconDelete}
                                    alt="Icon delete"
                                    // width="20"
                                    // height="20"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="p-1 md:p-2">
                            <img
                                className="w-[16px] md:w-[18px] lg:w-[20px] h-[16px] md:h-[18px] lg:h-[20px]"
                                src={iconUnarchived}
                                alt="Icon archive"
                                // width="20"
                                // height="20"
                            />
                        </div>
                    )}
                </th>
            </tr>
        </thead>
    );
};

export default ActiveArchiveHeadTable;
