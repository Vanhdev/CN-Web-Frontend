import { useState } from "react";

import avatar from '../../../../assets/images/main-avatar.svg';
import { Typography } from "antd";
import AlertDelete from "../../../AlertDelete";
import DropdownUserOption from "../../../DropdownUserOption";
import AvatarPost from '../../../AvatarPost';
import './index.css';

function UserCmtPost(props) {
    const [openAlert, setOpenAlert] = useState(false);
    const {setOpenUpdate, comment} = props;
    
    return(
        <div className="user-cmt-post">
            <div className="user-cmt-post__header">
                <AvatarPost avatar={avatar} name='Anh Leonard' date='17/05/2023'/>
                {
                    openAlert ? <AlertDelete setShowAlert={setOpenAlert}/> : <DropdownUserOption setShowAlert={setOpenAlert} setShowUpdate={setOpenUpdate}/>
                }
            </div>
            <div>
                <Typography.Paragraph className="user-cmt-post__content">
                    {comment}
                </Typography.Paragraph>
            </div>
        </div>   
    )
}

export default UserCmtPost;