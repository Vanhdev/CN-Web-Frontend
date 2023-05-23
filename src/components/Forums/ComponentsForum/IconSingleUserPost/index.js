import { Space } from "antd";
import {EyeOutlined, HeartFilled} from '@ant-design/icons';
import IconText from '../IconText';
import AlertConfirmDeletePost from '../AlertConfirmDeletePost';

function IconSingleUserPost() {
    return(
        <div>
            <Space direction='vertical'>
                <IconText icon={<EyeOutlined style={{color: 'var(--blue-color)'}}/>} text="1560"/>
                <IconText icon={<HeartFilled style={{color: 'var(--pink-color)'}}/>} text="243"/>
                <AlertConfirmDeletePost/>
            </Space>
        </div>    
    )
}

export default IconSingleUserPost;