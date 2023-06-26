import { Modal } from "antd";

function ModalConfirmDeleteTourBooked(props) {
    const {open, setOpenProp, handleDeleteBookedTour, item, title} = props;

    const handleDoneDelete = () => {
        handleDeleteBookedTour(item);
        setOpenProp();
    }

    return(
        <Modal 
            open={open}
            centered
            onCancel={setOpenProp}
            title={title}
            onOk={handleDoneDelete}
        >

        </Modal> 
    )
}

export default ModalConfirmDeleteTourBooked;