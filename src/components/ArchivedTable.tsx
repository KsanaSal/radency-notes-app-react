import ActiveArchiveBodyTable from "./activeArchiveTable/ActiveArchiveBodyTable";
import ActiveArchiveHeadTable from "./activeArchiveTable/ActiveArchiveHeadTable";

const ArchivedTable = () => {
    return (
        <table className="relative flex flex-col rounded-md text-description gap-[10px] text-base font-normal mt-4">
            <ActiveArchiveHeadTable type="archived" />
            <ActiveArchiveBodyTable type="archived" />
        </table>
    );
};

export default ArchivedTable;
