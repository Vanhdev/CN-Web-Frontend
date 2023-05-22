import avatar from '../../../../assets/images/main-avatar.svg';
import { Divider, List, Space, Tag, Typography } from "antd";
import AvatarPost from '../../../AvatarPost';
import {EyeOutlined, HeartFilled, DeleteFilled} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import IconText from '../IconText';
import AlertConfirmDeletePost from '../AlertConfirmDeletePost';

function SinglePost() {
    const navigate = useNavigate();
    const handleOpenPost = () => {
        navigate('/forum/detail-post/123');
    }
    return(
        <div className="single-post">
            <div>
                <AvatarPost avatar={avatar} name="Anh Leonard" date="16/05/2023"/>
                <div>
                <Space>
                    <div className='client-post-title' onClick={handleOpenPost}>What Instagram Ads Will Look Like</div>
                    <Tag color='magenta'>Topic: Topic in here</Tag>
                </Space>
                </div>
                <Typography.Paragraph ellipsis={{rows: 1, expandable: true, symbol: 'More'}} className='client-post-desc'>I apologize for the confusion. The onPreview event in Ant Design's Image component is used for triggering a preview of the image, rather than canceling it. If you want to prevent the image from being clicked or disable the preview functionality altogether, you can use the preview prop and set it to false. I apologize for the confusion. The onPreview event in Ant Design's Image component is used for triggering a preview of the image, rather than canceling it. If you want to prevent the image from being clicked or disable the preview functionality altogether, you can use the preview prop and set it to false.</Typography.Paragraph>
            </div>
            <Divider type="vertical" className='forum-divider-style'/>
            <div>
                <Space direction='vertical'>
                    <IconText icon={<EyeOutlined style={{color: 'var(--blue-color)'}}/>} text="1560"/>
                    <IconText icon={<HeartFilled style={{color: 'var(--pink-color)'}}/>} text="243"/>
                    <AlertConfirmDeletePost/>
                </Space>
            </div>
        </div>    
    )
}

export default SinglePost;