import { Alert, Button, Space } from "antd";

function AlertDelete(props) {
    const {setShowAlert} = props;
    return(
        <Alert
            message="Bạn có chắc chắn xóa bình luận này không?"
            type="info"
            action={
                <Space direction="vertical" style={{marginLeft: '25px'}}>
                    <Button size="small" danger type="primary" style={{width: 70}}>
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
        <Button size="small" type="primary" style={{width: 70}} onClick={handleCloseItem}>
            Hủy bỏ
        </Button>
    )
}

export default AlertDelete;