const CreateNoteBtn = ({
    handleOpenModal,
}: {
    handleOpenModal: () => void;
}) => {
    return (
        <button
            type="button"
            className="text-gray-800 font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] border-2 px-3 py-1 rounded-lg border-teal-800 bg-teal-200 hover:bg-teal-800 hover:text-white block mt-4 ml-auto"
            data-create-note
            onClick={handleOpenModal}
        >
            Create Note
        </button>
    );
};

export default CreateNoteBtn;
