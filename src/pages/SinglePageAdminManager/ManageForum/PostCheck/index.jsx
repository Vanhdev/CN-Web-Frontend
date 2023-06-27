import { useEffect, useState } from "react";
import AdminListPost from "../../../../components/ComponentAdmin/AdminListPost";
import HeaderTitleSearch from "../../../../components/ComponentAdmin/HeaderTitleSearch";
import { getAllPosts, getListPosts, searchMakeNewPosts } from "../../../../API";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminPostCheck from "../../../../components/ComponentAdmin/AdminPostCheck";
import { useCallback } from "react";

function PostCheck() {

    const [adminPosts, setAdminPosts] = useState([]);

    const data = useSelector(state => state.searchText);

    // const textSearch = data.text;

    const user = useSelector((state) => state.auth.login?.currentUser);
    const allPosts = useSelector((state) => state.post.allPosts);

    const [loading, setLoading] = useState(false);
    const [textSeach, setTextSearch] = useState('');

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

    }, [allPosts]);

    const [searchResults, setSearchResults] = useState(allPosts);

    useEffect(() => {
        let searchPosts = [];
        allPosts.forEach( post =>{
            let title = post.title;
            let val = new RegExp(textSeach, 'gi');
            if(title.match(val)) {
                searchPosts.push(post);
            }
        });
        setSearchResults(searchPosts);
      }, [textSeach]);

    const handleSearchText = (text) => {
        setTextSearch(text);
    }

    if(loading) {
        return(
            <Spin></Spin>
        )
    }

    return(
        <div className="post-list">
            <HeaderTitleSearch title='Danh sách bài viết chờ kiểm duyệt' search={true} handleSearchText={handleSearchText}/>
            <AdminPostCheck list={false} check={true} adminPosts={searchResults}/>
        </div>
    )
}

export default PostCheck;