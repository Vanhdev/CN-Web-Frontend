import AllComments from "../Comments/AllComments";
import CurrentUserComment from "../Comments/CurrentUserComment";

function CommentsTour() {
    return(
        <div className="wrap-comments">
            <CurrentUserComment/>
            <div className="all-comments">
                <AllComments/>
            </div>
        </div>
    )
}

export default CommentsTour;