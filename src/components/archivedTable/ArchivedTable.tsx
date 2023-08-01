import ArchiveBodyTable from "./ArchiveBodyTable";
import ArchiveHeadTable from "./ArchiveHeadTable";

const ArchivedTable = () => {
    return (
        <table className="relative flex flex-col rounded-md text-description gap-[10px] text-base font-normal mt-4">
            <ArchiveHeadTable />
            <ArchiveBodyTable />
        </table>
    );
};

export default ArchivedTable;
