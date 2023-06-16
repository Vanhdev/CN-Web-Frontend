import { Space, message } from "antd";

function IconCheck(props) {
    const {icon, text, post} = props;
    
    const handleCheckPost = () => {
        message.success(`Đã duyệt bài "${post.title}"`);
    }

    return(
        <Space 
            size={3} 
            onClick={handleCheckPost} 
            style={{cursor: 'pointer'}}
            className="icon-text"
            direction="row"
        >
            <span>{icon}</span>
            <span style={{color: 'var(--gray-color)', fontSize: '14px'}}>{text}</span>
        </Space>
    )
}

export default IconCheck;