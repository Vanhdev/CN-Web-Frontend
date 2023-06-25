import { Descriptions, Divider, Modal, Space, Tag, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import AvatarPost from '../AvatarPost';
import avatar from '../../assets/images/main-avatar.png';
import { useSelector } from "react-redux";
import { useState } from "react";

function ContentSinglePostAdmin(props) {
    const {post} = props;
    const user = useSelector(state => state.auth.login?.currentUser);

    const date_created_at = new Date(post.createdAt);
    const month = date_created_at.getMonth() + 1;
    const createdAt = date_created_at.getFullYear() + "/" + month + "/" + date_created_at.getDate();

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpenPost = () => {
        setOpen(true);
    }

    return(
        <>
            <div>
                <AvatarPost avatar={avatar} name={`USER ID: ${post.user_id}`} date={createdAt}/>
                <div>
                <Space>
                    <div className='client-post-title' onClick={handleOpenPost}>{post.title}</div>
                    <Tag color='magenta'>Topic: {post.topic}</Tag>
                </Space>
                </div>
                <Typography.Paragraph ellipsis={{rows: 1, expandable: true, symbol: 'More'}} className='client-post-desc'>{post.content}</Typography.Paragraph>
            </div>
            <Divider type="vertical" className='forum-divider-style'/>
            <Modal
                title={`Title: ${post.title}`}
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
                footer={null}
            >
                <Descriptions title="Detail post: " layout="vertical">
                    <Descriptions.Item label="User ID">{post.user_id}</Descriptions.Item>
                    <Descriptions.Item label="Created At">{post.createdAt}</Descriptions.Item>
                    <Descriptions.Item label="Topic">{post.topic}</Descriptions.Item>
                    <Descriptions.Item label="Content" span={3}>
                        {post.content}
                    </Descriptions.Item>
                    <Descriptions.Item label="Like">{post.num_like}</Descriptions.Item>
                    <Descriptions.Item label="Dislike">{post.num_dislike}</Descriptions.Item>
                </Descriptions>
            </Modal>
        </>    
    )
}

export default ContentSinglePostAdmin;