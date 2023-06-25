import { Space } from "antd";
import AlertConfirmDeletePost from "../../Forums/ComponentsForum/AlertConfirmDeletePost";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconCheck from "../IconCheck";

function IconCheckPost(props) {
    const {post} = props;

    return(
        <div style={{marginRight: '25px'}}>
            <Space direction='vertical'>
                <IconCheck 
                    icon={<CheckCircleIcon 
                    fontSize="small" 
                    style={{color: 'green'}}/>} 
                    text="Duyệt bài" 
                    post={post}
                />
                <AlertConfirmDeletePost/>
            </Space>
        </div>
    )
}

export default IconCheckPost;