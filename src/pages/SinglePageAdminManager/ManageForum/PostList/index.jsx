import { useState, useEffect } from "react";
import AdminListPost from "../../../../components/ComponentAdmin/AdminListPost";
import HeaderTitleSearch from "../../../../components/ComponentAdmin/HeaderTitleSearch";
import './index.css';
import { getAllPosts, getListPosts } from "../../../../API";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostList() {

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

    }, []);

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
            <HeaderTitleSearch 
                title='Danh sách bài viết' 
                search={true} 
                handleSearchText={handleSearchText}
            />
            <AdminListPost list={true} check={false} adminPosts={searchResults}/>
        </div>
    )
}

export default PostList;