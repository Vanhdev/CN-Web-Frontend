import ClientCmtPost from "../ClientCmtPost";
import SingleCmtPost from "../SingleCmtPost";
import WrapCmtsPost from "../WrapCmtsPost";

function AllCommentsPost() {
    return(
        <div className="all-comments-post">
            <div>Bình luận</div>
            <SingleCmtPost/>
            <div style={{marginTop: '80px'}}>
                <WrapCmtsPost/>
                <ClientCmtPost/>
            </div>
        </div>    
    )
}

export default AllCommentsPost;