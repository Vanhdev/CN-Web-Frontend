import { Space } from "antd";
import MakeNewPost from "../../../components/Forums/ComponentsForum/MakeNewPost";
import ClientPost from "../../../components/Forums/ComponentsForum/ClientPost";
import './index.css';

function NewPost() {
    return(
        <div className="new-post">
            <div className="make-new-post">
                <div style={{margin: '20px 0', fontSize: '18px'}}>Make New Post</div>
                <MakeNewPost/>
            </div>
        </div>
    )
}

export default NewPost;