import ClientPost from "../../../components/Forums/ComponentsForum/ClientPost";
import './index.css';

function ForumHome() {
    return(
        <div className='forumHome'>
            <div style={{marginTop: '15px', fontSize: '20px'}}>Bài viết mới nhất</div>
            <ClientPost/>
        </div>    
    )
}

export default ForumHome;