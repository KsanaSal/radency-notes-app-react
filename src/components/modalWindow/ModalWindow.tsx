import Form from "../form/Form";

const ModalWindow = ({
    closeModal,
}: {
    closeModal: (boolean: boolean) => void;
}) => {
    const handleCloseModal = () => {
        closeModal(false);
    };

    return (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-opacity-50 bg-gray-900">
            <div className="bg-teal-50 p-8 rounded-lg w-[500px] text-gray-800">
                <h2 className="text-[30px] font-bold mb-4 text-center">
                    Create New Note
                </h2>
                <Form closeModal={handleCloseModal} />
            </div>
        </div>
    );
};

export default ModalWindow;
