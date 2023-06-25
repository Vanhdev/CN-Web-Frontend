import { useState, useEffect } from "react";
import { getAllPosts, getListPosts } from "../../../API";
import ClientPost from "../../../components/Forums/ComponentsForum/ClientPost";
import './index.css';
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ForumHome() {

    const data = useSelector(state => state.searchText);
    const textSearch = data.text;

    const user = useSelector((state) => state.auth.login?.currentUser);
    const allPosts = useSelector((state) => state.post.allPosts);

    const [clientPosts, setClientPosts] = useState(allPosts);
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

    }, []);
    
    useEffect( () => {
        setLoading(true);
        getAllPosts().then(res => {
            let searchPosts = [];
            for(let post of res.posts) {
                let title = post.title;
                let val = new RegExp(textSearch, 'gi');
                if(title.match(val)) {
                    searchPosts.push(post);
                }
            }
            setClientPosts(searchPosts);
            setLoading(false);
        })
    }, [textSearch])

    if(loading) {
        return(
            <Spin></Spin>
        )
    }


    return(
        <div className='forumHome'>
            <div style={{marginTop: '15px', fontSize: '20px'}}>Bài viết mới nhất</div>
            <ClientPost allPosts={allPosts}/>
        </div>    
    )
}

export default ForumHome;