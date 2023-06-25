import { useState } from "react";
import UserCmtPost from "../UserCmtPost";
import UserCmtUpdate from "../UserCmtUpdate";
import { useSelector } from "react-redux";

function WrapCmtsPost(props) {
    const { comment, user } = props;

    const [openUpdate, setOpenUpdate] = useState(false);

    return(
        <div className="wrap-cmt-post margin20">
            {!openUpdate ? <UserCmtPost setOpenUpdate={setOpenUpdate} comment={comment} user={user}/> : <UserCmtUpdate setOpenUpdate={setOpenUpdate} comment={comment} user={user}/>}
        </div>
    )
}
export default WrapCmtsPost;