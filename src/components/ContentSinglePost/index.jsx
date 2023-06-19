import { Divider, Space, Tag, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import AvatarPost from '../AvatarPost';
import avatar from '../../assets/images/main-avatar.png';

function ContentSinglePost(props) {
    const {post} = props;

    const navigate = useNavigate();
    const handleOpenPost = () => {
        navigate(`/forum/detail-post/${post.id}`);
    }

    return(
        <>
            <div>
                <AvatarPost avatar={avatar} name="Anh Leonard" date="16/05/2023"/>
                <div>
                <Space>
                    <div className='client-post-title' onClick={handleOpenPost}>{post.title}</div>
                    <Tag color='magenta'>Topic: {post.tags[0]}, {post.tags[1]}, {post.tags[2]}</Tag>
                </Space>
                </div>
                <Typography.Paragraph ellipsis={{rows: 1, expandable: true, symbol: 'More'}} className='client-post-desc'>{post.body}</Typography.Paragraph>
            </div>
            <Divider type="vertical" className='forum-divider-style'/>
        </>    
    )
}

export default ContentSinglePost;