import SummaryTable from "../components/tables/SummaryTable";

const SummeryNotes = () => {
    return (
        <section className="text-gray-800 w-full">
            <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold">
                Summary list
            </h1>
            <SummaryTable />
        </section>
    );
};

export default SummeryNotes;
