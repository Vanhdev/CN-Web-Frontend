import { useEffect, useState } from "react";
import AdminListPost from "../../../../components/ComponentAdmin/AdminListPost";
import HeaderTitleSearch from "../../../../components/ComponentAdmin/HeaderTitleSearch";
import { getAllPosts } from "../../../../API";
import { Spin } from "antd";

function PostCheck() {

    const [adminPosts, setAdminPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getAllPosts().then(res => { //thay data ở đây
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
            <HeaderTitleSearch title='Danh sách bài viết chờ kiểm duyệt' search={true} handleSearchText={handleSearchText}/>
            <AdminListPost list={false} check={true} adminPosts={adminPosts}/>
        </div>
    )
}

export default PostCheck;