import { useSelector } from "react-redux";
import Form from "../form/Form";
import { selectCurrentNoteId } from "../../redux/notes/selectorNotes";

const ModalWindow = () => {
    const noteId = useSelector(selectCurrentNoteId);

    return (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-opacity-50 bg-gray-900">
            <div className="bg-teal-50 p-8 rounded-lg w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] text-gray-800">
                <h2 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-bold mb-3 md:mb-4 lg:mb-5 text-center">
                    {noteId ? "Edit Note" : "Create New Note"}
                </h2>
                <Form />
            </div>
        </div>
    );
};

export default ModalWindow;
