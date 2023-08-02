import { useState } from "react";
import ModalWindow from "../components/modalWindow/ModalWindow";
import ActiveTable from "../components/tables/ActiveTable";
import CreateNoteBtn from "../components/buttons/CreateNoteBtn";

const ActiveNotes = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    return (
        <section className="text-gray-800 w-full">
            <h1 className="text-[40px] font-bold text-center">Active list</h1>
            <ActiveTable />
            <CreateNoteBtn handleOpenModal={handleOpenModal} />
            {openModal && <ModalWindow closeModal={setOpenModal} />}
        </section>
    );
};

export default ActiveNotes;
