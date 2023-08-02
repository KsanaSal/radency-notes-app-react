import ModalWindow from "../components/modalWindow/ModalWindow";
import ActiveTable from "../components/tables/ActiveTable";
import CreateNoteBtn from "../components/buttons/CreateNoteBtn";
import { useDispatch, useSelector } from "react-redux";
import { selectIsShowModal } from "../redux/notes/selectorNotes";
import { setIsShowModal } from "../redux/notes/sliceNotes";

const ActiveNotes = () => {
    const isShowModal = useSelector(selectIsShowModal);
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        dispatch(setIsShowModal(true));
    };

    return (
        <section className="text-gray-800 w-full">
            <h1 className="text-[40px] font-bold text-center">Active list</h1>
            <ActiveTable />
            <CreateNoteBtn handleOpenModal={handleOpenModal} />
            {isShowModal && <ModalWindow />}
        </section>
    );
};

export default ActiveNotes;
