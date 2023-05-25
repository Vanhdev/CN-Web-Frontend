import { Space } from "antd";
import IconText from "../../Forums/ComponentsForum/IconText";
import AlertConfirmDeletePost from "../../Forums/ComponentsForum/AlertConfirmDeletePost";
import {EyeOutlined, HeartFilled} from '@ant-design/icons';

function IconListPost(props) {
    const {post} = props;

    return(
        <div style={{marginRight: '25px'}}>
            <Space direction='vertical'>
                <IconText icon={<EyeOutlined style={{color: 'var(--blue-color)'}}/>} text={`${post.userId}`}/>
                <IconText icon={<HeartFilled style={{color: 'var(--pink-color)'}}/>} text={`${post.reactions}`}/>
                <AlertConfirmDeletePost/>
            </Space>
        </div>
    )
}

export default IconListPost;