import { Space } from "antd";
import IconText from "../../Forums/ComponentsForum/IconText";
import AlertConfirmDeletePost from "../../Forums/ComponentsForum/AlertConfirmDeletePost";
import { RemoveRedEyeOutlined, Favorite } from '@mui/icons-material';

function IconListPost(props) {
    const {post} = props;

    return(
        <div style={{marginRight: '25px'}}>
            <Space direction='vertical'>
                <IconText icon={<RemoveRedEyeOutlined fontSize="small" style={{color: 'var(--blue-color)'}}/>} text={`${post.userId}`}/>
                <IconText icon={<Favorite fontSize="small" style={{color: 'var(--pink-color)'}}/>} text={`${post.reactions}`}/>
                <AlertConfirmDeletePost/>
            </Space>
        </div>
    )
}

export default IconListPost;