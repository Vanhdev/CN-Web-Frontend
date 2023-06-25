import { Space } from "antd";
import IconText from "../IconText";
import { RemoveRedEyeOutlined, Favorite } from '@mui/icons-material';

function IconSingleClientPost(props) {
    const {post} = props;

    return(
        <div>
            <Space direction='vertical'>
                {/* <IconText icon={<RemoveRedEyeOutlined fontSize="small" style={{color: 'var(--blue-color)'}}/>} text={`${}`}/> */}
                <IconText icon={<Favorite fontSize="small" style={{color: 'var(--pink-color)'}}/>} text={`${post.num_like}`}/>
            </Space>
        </div>
    )
}
export default IconSingleClientPost;