import ArchivedTable from "../components/tables/ArchivedTable";

const ArchivedNotes = () => {
    return (
        <section className="text-gray-800 w-full">
            <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold">
                Archived list
            </h1>
            <ArchivedTable />
        </section>
    );
};

export default ArchivedNotes;
