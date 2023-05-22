import { Button, Input, Space } from "antd";
import AvatarPost from "../../../AvatarPost";
import './index.css';

function SingleCmtPost() {
    return(
        <div className='single-cmt-post'>
            <div className="margin20">
                <AvatarPost 
                    avatar="https://i.pinimg.com/236x/d1/92/f4/d192f4e8c7c281ae9a7bd850b5f99164.jpg" 
                    name="Anh Leonard" 
                    date="17/05/2023"
                />
            </div>
            <div className="margin20">
                <Input.TextArea className="post-comment" size="large" placeholder="Nhập bình luận của bạn"></Input.TextArea>
            </div>
            <div className="margin20">
                <Button size="large" shape="round" type="primary" style={{float: 'right', backgroundColor: 'green', width: '100px'}}>Đăng</Button>
            </div>
        </div>
    )
}

export default SingleCmtPost;