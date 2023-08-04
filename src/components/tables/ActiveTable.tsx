import ActiveArchiveBodyTable from "../activeArchiveTable/ActiveArchiveBodyTable";
import ActiveArchiveHeadTable from "../activeArchiveTable/ActiveArchiveHeadTable";

const ActiveTable = () => {
    return (
        <table className="relative flex flex-col rounded-md text-description gap-[10px] text-base font-normal mt-4">
            <ActiveArchiveHeadTable type="active" />
            <ActiveArchiveBodyTable type="active" />
        </table>
    );
};

export default ActiveTable;
