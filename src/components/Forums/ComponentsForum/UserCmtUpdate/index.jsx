import { Button, Input } from 'antd';
import avatar from '../../../../assets/images/main-avatar.png';
import AvatarPost from '../../../AvatarPost';
import { useDispatch } from 'react-redux';
import { updateCommentPost } from '../../../../redux/commentPostSlice';
import { useState } from 'react';
import { updateCommentOfPost } from '../../../../API';


function UserCmtUpdate(props) {
    const dispatch = useDispatch();
    const {comment, user, setOpenUpdate} = props;

    const [cmt, setCmt] = useState(comment.content);

    const handleUpdateCommentPost = () => {
        const newComment = {
            id: comment.id,
            content: cmt,
        }
        updateCommentOfPost(user?.accessToken, dispatch, newComment);
        setOpenUpdate(false);
    }

    // console.log(user.accessToken);

    return(
        <div className="user-cmt-update">
            <div className='user-cmt-post__header'>
                <AvatarPost avatar={avatar} name={user.name} date="2023/06/22"/>
                <Button 
                    type="primary" 
                    onClick={handleUpdateCommentPost}
                    style={{backgroundColor: "green"}}
                >Lưu lại</Button>
            </div>
            <div>
                <Input.TextArea
                    className='user-cmt-post__content'
                    style={{height: '100px'}} 
                    defaultValue={cmt}
                    onChange={(e) => setCmt(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UserCmtUpdate;