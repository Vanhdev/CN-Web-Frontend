import ContentSinglePost from "../../ContentSinglePost";
import IconCheckPost from "../IconCheckPost";
import IconListPost from "../IconListPost";

function AdminSinglePost(props) {
    const {list, check, post} = props;

    return(
        <div className="single-post">
            <ContentSinglePost post={post}/>
            {list && <IconListPost post={post}/>}
            {check && <IconCheckPost post={post}/>}
        </div>
    )
}

export default AdminSinglePost;