import ContentSinglePost from '../../../ContentSinglePost';
import IconSingleClientPost from '../IconSingleClientPost';

function ClientSinglePost(props) {
    const {post} = props;

    return(
        <div className="single-post">
            <ContentSinglePost post={post}/>
            <IconSingleClientPost post={post}/>
        </div>    
    )
}

export default ClientSinglePost;