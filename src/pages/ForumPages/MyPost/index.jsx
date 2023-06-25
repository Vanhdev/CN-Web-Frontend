import { useState, useEffect } from "react";
import AllUserPost from "../../../components/Forums/ComponentsForum/AllUserPost";
import './index.css';
import { getAllPosts, getListPosts } from "../../../API";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MyPost() {

    const user = useSelector(state => state.auth.login?.currentUser);
    const allPosts = useSelector(state => state.post.allPosts);
    const myPosts = allPosts.filter( post => {
        return post.user_id == user.id && post.status === 'true';
    })


    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    
        if (user?.accessToken) {
            setLoading(true);
            getListPosts(user?.accessToken, dispatch);
            setLoading(false);
        }
    }, [])

    if(loading) {
        return(
            <Spin></Spin>
        )
    }

    return(
        <>
            {
                user && myPosts
                &&
                <div className="my-post">
                    <AllUserPost userPosts={myPosts}/>
                </div>
            }  
        </>  
    )
}

export default MyPost;