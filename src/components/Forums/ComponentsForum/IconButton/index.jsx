import { Space } from "antd";

function IconButton(props) {
    const { icon, text, action, setAction, status, setStatus, setOtherNumber, setNumberLike } = props;
    const handleClickIcon = () => {
        if(status === true && action === true) {
            return;
        }
        else if(status === false && action === false){
            setAction(true);
            setNumberLike(pre => pre + 1);
        }
        else if(status === false && action === true) {
            setAction(false);
            setNumberLike(pre => pre - 1);
        }
        else if(status === true && action === false) {
            setAction(true);
            setNumberLike(pre => pre + 1);
            setStatus(false);
            setOtherNumber(pre => pre - 1);
        }
    }

    return(
        <Space size={3} onClick={handleClickIcon} style={{cursor: 'pointer'}}>
            {icon} <span style={{color: 'var(--gray-color)'}}>{text}</span>
        </Space>
    )
}

export default IconButton;