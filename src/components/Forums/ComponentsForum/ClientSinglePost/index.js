import avatar from '../../../../assets/images/main-avatar.svg';
import { Divider, List, Space, Tag, Typography } from "antd";
import AvatarPost from '../../../AvatarPost';
import {EyeOutlined, HeartFilled, DeleteFilled} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import IconText from '../IconText';
import IconButtonDelete from '../IconButtonDelete';
import AlertConfirmDeletePost from '../AlertConfirmDeletePost';
import ContentSinglePost from '../../../ContentSinglePost';
import IconSingleClientPost from '../IconSingleClientPost';

function ClientSinglePost() {
    return(
        <div className="single-post">
            <ContentSinglePost/>
            <IconSingleClientPost/>
        </div>    
    )
}

export default ClientSinglePost;