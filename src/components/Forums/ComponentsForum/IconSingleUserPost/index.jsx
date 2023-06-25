import { Space } from "antd";
import {EyeOutlined, HeartFilled} from '@ant-design/icons';
import IconText from '../IconText';
import AlertConfirmDeletePost from '../AlertConfirmDeletePost';
import {RemoveRedEyeOutlined, Favorite} from '@mui/icons-material';

function IconSingleUserPost(props) {
    const {post} = props;

    return(
        <div>
            <Space direction='vertical'>
                {/* <IconText icon={<RemoveRedEyeOutlined fontSize="small" style={{color: 'var(--blue-color)'}}/>} text={`${post.userId}`}/> */}
                <IconText icon={<Favorite fontSize="small" style={{color: 'var(--pink-color)'}}/>} text={`${post.num_like}`}/>
                <AlertConfirmDeletePost/>
            </Space>
        </div>
    )
}

export default IconSingleUserPost;