import { useSelector } from "react-redux";
import Form from "../form/Form";
import { selectCurrentNoteId } from "../../redux/notes/selectorNotes";

const ModalWindow = () => {
    const noteId = useSelector(selectCurrentNoteId);

    return (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-opacity-50 bg-gray-900">
            <div className="bg-teal-50 p-8 rounded-lg w-[500px] text-gray-800">
                <h2 className="text-[30px] font-bold mb-4 text-center">
                    {noteId ? "Edit Note" : "Create New Note"}
                </h2>
                <Form />
            </div>
        </div>
    );
};

export default ModalWindow;
