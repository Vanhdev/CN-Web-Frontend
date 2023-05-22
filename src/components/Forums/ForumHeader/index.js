import { Button, Image, Input, Space } from "antd";
import forumIcon from '../../../assets/images/forum-icon.svg';
import addPost from '../../../assets/images/add-post.svg';
import collections from '../../../assets/images/collections.svg';
import {FileAddOutlined, FormOutlined, SnippetsOutlined} from '@ant-design/icons';
import './index.css';
import { useNavigate } from "react-router-dom";
const {Search} = Input;

function ForumHeader() {
    const navigate = useNavigate();

    const handleNewPost = () => {
        navigate('/forum/new-post');
    }
    const handleMyPost = () => {
        navigate('/forum/my-posts');
    }
    const handleForumHome = () => {
        navigate('/forum/');
    }

    return(
        <div className="forumHeader">
            <Space className="wrap-logo">
                <div>
                    <Image preview={false} src={forumIcon} className="logo-forum" onClick={handleForumHome}/>
                </div>
                <div className="all-titles">
                    <div className="main-title">Diễn đàn</div>
                    <div className="adding-title">Bring you into an amazing world!</div>
                </div>
            </Space>
            <div>
                <Space>
                    <Search className="forum-search" placeholder="Tìm kiếm chủ đề" size="large"/>
                    <Space size={30}>
                        <Button size="large" icon={<FormOutlined />} onClick={handleNewPost} className="btn-post">Bài viết mới</Button>
                        <Button icon={<SnippetsOutlined />} size="large" onClick={handleMyPost} >Bài viết của tôi</Button>
                    </Space>
                </Space>
            </div>
        </div>    
    )
}

export default ForumHeader;