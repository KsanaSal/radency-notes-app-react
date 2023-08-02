const CancelBtn = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
    return (
        <button
            type="button"
            id="cancelCreateNote"
            className=" text-teal-500 text-[18px] hover:text-teal-800 border-teal-800 border-2 px-4 py-2 rounded-md mr-3 bg-white hover:bg-teal-100"
            onClick={handleCloseModal}
        >
            Cancel
        </button>
    );
};

export default CancelBtn;
