import AllCommentsPost from "../../../components/Forums/ComponentsForum/AllCommentsPost";
import DetailPostPick from "../../../components/Forums/ComponentsForum/DetailPostPick";
import './index.css';

function DetailPost() {
    return(
        <div className="detail-post">
            <div className="detail-post-pick">
                <DetailPostPick/>
            </div>
            <div className="detail-post-comments">
                <AllCommentsPost/>
            </div>
        </div>    
    )
}

export default DetailPost;