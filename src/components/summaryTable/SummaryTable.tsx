import SummaryBodyTable from "./SummaryBodyTable";
import SummaryHeadTable from "./SummaryHeadTable";

const SummaryTable = () => {
    return (
        <table className=" relative flex flex-col rounded-md text-description gap-[10px] text-base font-normal mt-4">
            <SummaryHeadTable />
            <SummaryBodyTable />
        </table>
    );
};
export default SummaryTable;
