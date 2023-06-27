import { useParams } from "react-router-dom";
import AllCommentsPost from "../../../components/Forums/ComponentsForum/AllCommentsPost";
import DetailPostPick from "../../../components/Forums/ComponentsForum/DetailPostPick";
import './index.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPost, getListCommentsById } from "../../../API";
import { Spin } from "antd";

function DetailPost() {

    const {id: pageIDParam} = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const detailPost = useSelector(state => state.post.detailPost.post);
    const linkPost = useSelector(state => state.post.detailPost.link);
    const allComments = useSelector(state => state.commentPost.allComments);
    const [loading, setLoading] = useState(false);
    const [pageID, setPageID] = useState(null);

    // console.log(detailPost);

    useEffect(() => {
        const fetchDataAndUpdateState = () => {
          if (pageIDParam) {
            setPageID(pageIDParam);
          }
      
          if (user?.accessToken) {
            getDetailPost(user?.accessToken, dispatch, pageID);
          }
        };
      
        fetchDataAndUpdateState();
    }, [pageID]);
      
    useEffect(() => {

        if (user?.accessToken && detailPost?.id && pageID) {
            getListCommentsById(user?.accessToken, dispatch, pageID);
        }

    }, [detailPost?.id, pageID]);

    if(loading) {
        return <Spin></Spin>
    }

    return(
        <>
        {
            detailPost && pageID && linkPost
            &&
            <div className="detail-post">
                <div className="detail-post-pick">
                    <DetailPostPick idPost={pageID} detailPost={detailPost} user={user} linkPost={linkPost}/>
                </div>
                <div className="detail-post-comments">
                    <AllCommentsPost idPost={pageID} allComments={allComments} user={user}/>
                </div>
            </div>
        }
        </>    
    )
}

export default DetailPost;