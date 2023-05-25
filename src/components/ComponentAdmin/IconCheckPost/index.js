import { Space } from "antd";
import AlertConfirmDeletePost from "../../Forums/ComponentsForum/AlertConfirmDeletePost";
import {CheckCircleFilled} from '@ant-design/icons';
import IconCheck from "../IconCheck";

function IconCheckPost(props) {
    const {post} = props;

    return(
        <div style={{marginRight: '25px'}}>
            <Space direction='vertical'>
                <IconCheck icon={<CheckCircleFilled style={{color: 'green'}}/>} text="Duyệt bài" post={post}/>
                <AlertConfirmDeletePost/>
            </Space>
        </div>
    )
}

export default IconCheckPost;