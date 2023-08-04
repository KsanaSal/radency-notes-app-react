import { useSelector } from "react-redux";
import { selectCurrentNoteId } from "../../redux/notes/selectorNotes";

const CreateEditBtn = () => {
    const noteId = useSelector(selectCurrentNoteId);

    return (
        <button
            type="submit"
            className="text-white text-[18px] bg-teal-500 border-teal-800 border-2 px-4 py-2 rounded-md ml-3 hover:bg-teal-100 hover:text-teal-800"
        >
            {noteId ? "Edit" : "Create"}
        </button>
    );
};

export default CreateEditBtn;
