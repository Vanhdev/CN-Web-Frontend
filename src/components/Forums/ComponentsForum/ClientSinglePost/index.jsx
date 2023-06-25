import ContentSinglePostClient from '../../../ContentSinglePostClient';
import IconSingleClientPost from '../IconSingleClientPost';

function ClientSinglePost(props) {
    const {post} = props;

    return(
        <div className="single-post">
            <ContentSinglePostClient post={post}/>
            <IconSingleClientPost post={post}/>
        </div>    
    )
}

export default ClientSinglePost;