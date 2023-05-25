import { useState, useEffect } from "react";
import AdminListPost from "../../../../components/ComponentAdmin/AdminListPost";
import HeaderTitleSearch from "../../../../components/ComponentAdmin/HeaderTitleSearch";
import './index.css';
import { getAllPosts } from "../../../../API";
import { Spin } from "antd";

function PostList() {

    const [adminPosts, setAdminPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getAllPosts().then(res => { //thay data in here
            setAdminPosts(res.posts);
            setLoading(false);
        })
    }, [])

    if(loading) {
        return(
            <Spin></Spin>
        )
    }

    
    const handleSearchText = (text) => {
        getAllPosts().then(res => {
            let searchPosts = [];
            for(let post of res.posts) {
                let title = post.title;
                let val = new RegExp(text, 'gi');
                if(title.match(val)) {
                    searchPosts.push(post);
                }
            }
            setAdminPosts(searchPosts);
        })
    }

    return(
        <div className="post-list">
            <HeaderTitleSearch 
                title='Danh sách bài viết' 
                search={true} 
                handleSearchText={handleSearchText}
            />
            <AdminListPost list={true} check={false} adminPosts={adminPosts}/>
        </div>
    )
}

export default PostList;