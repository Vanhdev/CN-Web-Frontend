import { useState } from "react";
import UserCmtPost from "../UserCmtPost";
import UserCmtUpdate from "../UserCmtUpdate";
import { useSelector } from "react-redux";

function WrapCmtsPost() {
    const textComment = useSelector(state => state.commentPost);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [response, setResponse] = useState(textComment.text);
    
    return(
        <div className="wrap-cmt-post margin20">
            {!openUpdate ? <UserCmtPost setOpenUpdate={setOpenUpdate} comment={response}/> : <UserCmtUpdate setOpenUpdate={setOpenUpdate} comment={response} setComment={setResponse}/>}
        </div>
    )
}
export default WrapCmtsPost;