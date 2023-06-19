import { Box, styled } from "@mui/material";
import { Space, message } from "antd";

function IconCheck(props) {
    const {icon, text, post} = props;
    
    const handleCheckPost = () => {
        message.success(`Đã duyệt bài "${post.title}"`);
    }

    const IconText = styled(Box) ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px"
    })

    return(
        <IconText
            onClick={handleCheckPost}
            style={{cursor: 'pointer'}}
        >
            <div>{icon}</div>
            <div>{text}</div>
        </IconText>
    )
}

export default IconCheck;