import { useState } from "react";

import avatar from '../../../../assets/images/main-avatar.png';
import { Space, Typography } from "antd";
import AlertDelete from "../../../AlertDelete";
import DropdownUserOption from "../../../DropdownUserOption";
import AvatarPost from '../../../AvatarPost';
import './index.css';

function UserCmtPost(props) {
    const [openAlert, setOpenAlert] = useState(false);
    const { comment, user, setOpenUpdate } = props;
    
    return(
        <div className="user-cmt-post">
            <div className="user-cmt-post__header">
                <AvatarPost avatar={avatar} name={user.name} date='17/05/2023'/>
                {
                    openAlert ? <AlertDelete setShowAlert={setOpenAlert} comment={comment}/> : <DropdownUserOption setShowAlert={setOpenAlert} setShowUpdate={setOpenUpdate}/>
                }
            </div>
            <div>
                <Typography.Paragraph className="user-cmt-post__content">
                    {comment.content}
                </Typography.Paragraph>
            </div>
        </div>   
    )
}

export default UserCmtPost;