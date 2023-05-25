import { Space } from "antd";

function IconButtonDelete(props) {
    const {icon, text, onClick} = props;
    const handleDeletePost = () => {
        onClick();
    }
    return(
        <Space size={3} style={{cursor: 'pointer'}} onClick={handleDeletePost}>
            {icon} <span style={{color: 'var(--gray-color)', fontSize: '14px'}}>{text}</span>
        </Space>
    )
}

export default IconButtonDelete;