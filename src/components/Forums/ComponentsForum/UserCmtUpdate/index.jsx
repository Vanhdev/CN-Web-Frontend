import { Button, Input } from 'antd';
import avatar from '../../../../assets/images/main-avatar.png';
import AvatarPost from '../../../AvatarPost';
import { useDispatch } from 'react-redux';
import { updateCommentPost } from '../../../../redux/commentPostSlice';


function UserCmtUpdate(props) {
    const dispatch = useDispatch();
    const {comment, setComment, setOpenUpdate} = props;

    const handleUpdateCommentPost = () => {
        const newCmt = {
            text: comment,
        }
        dispatch(updateCommentPost(newCmt));
        setOpenUpdate(false);
    }

    return(
        <div className="user-cmt-update">
            <div className='user-cmt-post__header'>
                <AvatarPost avatar={avatar} name='Anh Leonard' date='12/04/2023'/>
                <Button 
                    type="primary" 
                    onClick={handleUpdateCommentPost}
                >Lưu lại</Button>
            </div>
            <div>
                <Input.TextArea
                    className='user-cmt-post__content'
                    style={{height: '100px'}} 
                    defaultValue={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UserCmtUpdate;