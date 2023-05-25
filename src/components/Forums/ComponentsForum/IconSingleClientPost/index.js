import { Space } from "antd";
import IconText from "../IconText";
import {EyeOutlined, HeartFilled} from '@ant-design/icons';

function IconSingleClientPost(props) {
    const {post} = props;

    return(
        <div>
            <Space direction='vertical'>
                <IconText icon={<EyeOutlined style={{color: 'var(--blue-color)'}}/>} text={`${post.userId}`}/>
                <IconText icon={<HeartFilled style={{color: 'var(--pink-color)'}}/>} text={`${post.reactions}`}/>
            </Space>
        </div>
    )
}
export default IconSingleClientPost;