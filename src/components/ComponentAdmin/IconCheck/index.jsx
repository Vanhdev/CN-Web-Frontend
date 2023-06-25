import { Box, styled } from "@mui/material";
import { Space, message } from "antd";
import { acceptPostByAdmin } from "../../../API";
import { useDispatch, useSelector } from "react-redux";

function IconCheck(props) {
    const {icon, text, post} = props;
    const user = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    
    const handleCheckPost = () => {
        const new_status = {
            status: "true"
        }
        acceptPostByAdmin(user?.accessToken, dispatch, new_status, post?.id);
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