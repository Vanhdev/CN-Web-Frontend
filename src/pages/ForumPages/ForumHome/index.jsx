import { useState, useEffect } from "react";
import { getAllPosts } from "../../../API";
import ClientPost from "../../../components/Forums/ComponentsForum/ClientPost";
import './index.css';
import { Spin } from "antd";
import { useSelector } from "react-redux";

function ForumHome() {

    const data = useSelector(state => state.searchText);
    const textSearch = data.text;

    const allPosts = useSelector((state) => state.post.allPosts?.listPosts);
    // console.log("allPost: ", allPosts);

    const [clientPosts, setClientPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllPosts().then(res => { //thay data in here
            setClientPosts(res.posts);
            setLoading(false);
        })
    }, [])
    
    useEffect( () => {
        setLoading(true);
        getAllPosts().then(res => { //thay data in here
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

    // console.log(clientPosts);


    return(
        <div className='forumHome'>
            <div style={{marginTop: '15px', fontSize: '20px'}}>Bài viết mới nhất</div>
            <ClientPost clientPosts={clientPosts}/>
        </div>    
    )
}

export default ForumHome;