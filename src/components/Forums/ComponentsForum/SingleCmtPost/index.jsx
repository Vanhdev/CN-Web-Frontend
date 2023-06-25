import { Button, Input } from "antd";
import AvatarPost from "../../../AvatarPost";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCommentPost } from "../../../../API";

function SingleCmtPost() {
    const [content, setContent] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.login?.currentUser);
    const detailPost = useSelector(state => state.post.detailPost.post);

    const curUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        date_of_birth: user.date_of_birth
    };

    const currentTime = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    useEffect( () => {
        if (!user) {
            navigate('/login');
        }
    
    },[]);


    const handleUpComment = () => {
        const new_cmt = {
            user_id: user.id,
            post_id: detailPost.id,
            content: content
        }
        addCommentPost(user?.accessToken, dispatch, new_cmt, curUser);
    }

    return(
        <>
            {
                user && user.email !== "admin@gmail.com" && currentTime
                &&
                <div className='single-cmt-post'>
                    <div className="margin20">
                        <AvatarPost 
                            avatar="https://i.pinimg.com/236x/d1/92/f4/d192f4e8c7c281ae9a7bd850b5f99164.jpg" 
                            name={user.name} 
                            date={currentTime}
                        />
                    </div>
                    <div className="margin20">
                        <Input.TextArea 
                            className="post-comment" 
                            size="large" 
                            placeholder="Nhập bình luận của bạn"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></Input.TextArea>
                    </div>
                    <div className="margin20">
                        <Button 
                            size="large" 
                            shape="round" 
                            type="primary" 
                            style={{float: 'right', backgroundColor: 'green', width: '100px'}}
                            onClick={handleUpComment}
                        >Đăng</Button>
                    </div>
                </div>
            }
        </>
    )
}

export default SingleCmtPost;