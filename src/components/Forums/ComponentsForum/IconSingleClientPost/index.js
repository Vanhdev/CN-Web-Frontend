import { Space } from "antd";
import IconText from "../IconText";
import {EyeOutlined, HeartFilled} from '@ant-design/icons';

function IconSingleClientPost() {
    return(
        <div>
            <Space direction='vertical'>
                <IconText icon={<EyeOutlined style={{color: 'var(--blue-color)'}}/>} text="1560"/>
                <IconText icon={<HeartFilled style={{color: 'var(--pink-color)'}}/>} text="243"/>
            </Space>
        </div>
    )
}
export default IconSingleClientPost;