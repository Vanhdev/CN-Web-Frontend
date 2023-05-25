import { useState, useEffect } from "react";
import AllUserPost from "../../../components/Forums/ComponentsForum/AllUserPost";
import './index.css';
import { getAllPosts } from "../../../API";
import { Spin } from "antd";

function MyPost() {

    const [userPosts, setUserPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllPosts().then(res => { //thay data in here
            setUserPosts(res.posts);
            setLoading(false);
        })
    }, [])

    if(loading) {
        return(
            <Spin></Spin>
        )
    }

    return(
        <div className="my-post">
            <AllUserPost userPosts={userPosts}/>
        </div>    
    )
}

export default MyPost;