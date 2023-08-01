import ActiveBodyTable from "./ActiveBodyTable";
import ActiveHeadTable from "./ActiveHeadTable";

const ActiveTable = () => {
    return (
        <table className="relative flex flex-col rounded-md text-description gap-[10px] text-base font-normal mt-4">
            <ActiveHeadTable />
            <ActiveBodyTable />
        </table>
    );
};

export default ActiveTable;
