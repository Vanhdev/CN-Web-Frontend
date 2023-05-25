import { Space } from "antd";
import {EyeOutlined, HeartFilled} from '@ant-design/icons';
import IconText from '../IconText';
import AlertConfirmDeletePost from '../AlertConfirmDeletePost';

function IconSingleUserPost(props) {
    const {post} = props;

    return(
        <div>
            <Space direction='vertical'>
                <IconText icon={<EyeOutlined style={{color: 'var(--blue-color)'}}/>} text={`${post.userId}`}/>
                <IconText icon={<HeartFilled style={{color: 'var(--pink-color)'}}/>} text={`${post.reactions}`}/>
                <AlertConfirmDeletePost/>
            </Space>
        </div>
    )
}

export default IconSingleUserPost;