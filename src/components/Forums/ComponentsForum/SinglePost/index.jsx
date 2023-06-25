import ContentSinglePostClient from '../../../ContentSinglePostClient';
import IconSingleUserPost from '../IconSingleUserPost';

function SinglePost(props) {
    const {post} = props;

    return(
        <div className="single-post">
            <ContentSinglePostClient post={post}/>
            <IconSingleUserPost post={post}/>
        </div>    
    )
}

export default SinglePost;