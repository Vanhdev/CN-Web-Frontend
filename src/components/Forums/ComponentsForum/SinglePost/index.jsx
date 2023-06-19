import ContentSinglePost from '../../../ContentSinglePost';
import IconSingleUserPost from '../IconSingleUserPost';

function SinglePost(props) {
    const {post} = props;

    return(
        <div className="single-post">
            <ContentSinglePost post={post}/>
            <IconSingleUserPost post={post}/>
        </div>    
    )
}

export default SinglePost;