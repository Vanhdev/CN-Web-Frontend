import { Space } from "antd";

function IconText(props) {
    
    const {icon, text} = props;

    return(
        <Space size={3}>
            {icon} <span style={{color: 'var(--gray-color)', fontSize: '14px'}}>{text}</span>
        </Space>
    )
}

export default IconText;