import { Space } from "antd";

function IconButton(props) {
    const {icon, text, handleClick} = props;

    return(
        <Space size={3} style={{cursor: 'pointer'}} onClick={handleClick}>
            {icon} <span style={{color: 'var(--gray-color)'}}>{text}</span>
        </Space>
    )
}

export default IconButton;