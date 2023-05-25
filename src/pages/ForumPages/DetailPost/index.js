import { useParams } from "react-router-dom";
import AllCommentsPost from "../../../components/Forums/ComponentsForum/AllCommentsPost";
import DetailPostPick from "../../../components/Forums/ComponentsForum/DetailPostPick";
import './index.css';

function DetailPost() {
    const page = useParams();
    const idPost = page.id;

    return(
        <div className="detail-post">
            <div className="detail-post-pick">
                <DetailPostPick idPost={idPost}/>
            </div>
            <div className="detail-post-comments">
                <AllCommentsPost/>
            </div>
        </div>    
    )
}

export default DetailPost;