import Button from "../components/Button";
import ActiveTable from "../components/activeTable/ActiveTable";

const ActiveNotes = () => {
    return (
        <section className="text-gray-800 w-full">
            <h1 className="text-[40px] font-bold text-center">Active list</h1>
            <ActiveTable />
            <Button />
        </section>
    );
};

export default ActiveNotes;
