import { useDispatch, useSelector } from "react-redux";
import ClientCmtPost from "../ClientCmtPost";
import SingleCmtPost from "../SingleCmtPost";
import WrapCmtsPost from "../WrapCmtsPost";
import { useEffect, useState } from "react";
import { getAllCmtsByID } from "../../../../redux/commentPostSlice";
import { Spin } from "antd";
import { getListCommentsById } from "../../../../API";
import { useNavigate } from "react-router-dom";

function AllCommentsPost(props) {

    const {allComments, user} = props;

    return(
        <>
            {
                user && user.email !== "admin@gmail.com"
                &&
                <div className="all-comments-post">
                    <div>Bình luận</div>
                    <SingleCmtPost/>
                    <div style={{marginTop: '80px'}}>
                        {
                            allComments && allComments.map((comment, index) => {
                                if(comment.user_id === user.id) {
                                    return(
                                        <WrapCmtsPost comment={comment} user={user} key={comment.id}/>
                                    )
                                }
                            })
                        }
                        {allComments && <ClientCmtPost allComments={allComments} user={user}/>}
                    </div>
                </div>
            }
        </>    
    )
}

export default AllCommentsPost;