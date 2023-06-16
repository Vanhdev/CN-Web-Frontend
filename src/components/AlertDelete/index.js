import { Alert, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "../../redux/commentsTourSlice";

function AlertDelete(props) {
    const {setShowAlert, index} = props;

    const dispatch = useDispatch();

    const handleDeleteComment = () => {
        dispatch(removeComment(index))
    }

    return(
        <Alert
            message="Bạn có chắc chắn xóa bình luận này không?"
            type="info"
            action={
                <Space direction="vertical" style={{marginLeft: '25px'}}>
                    <Button 
                        size="small" 
                        danger 
                        type="primary" 
                        style={{width: 70}}
                        onClick={handleDeleteComment}
                    >
                        Xóa
                    </Button>
                </Space>
            }
            closeIcon={<CloseItem setShowAlert={setShowAlert}/>}
            closable
        >
        </Alert>
    )
}

function CloseItem({setShowAlert}) {
    const handleCloseItem = () => {
        setShowAlert(false);
    }
    return(
        <Button 
        size="small"
        type="primary"
        style={{width: 70, backgroundColor: "blue"}} 
        onClick={handleCloseItem}>
            Hủy bỏ
        </Button>
    )
}

export default AlertDelete;