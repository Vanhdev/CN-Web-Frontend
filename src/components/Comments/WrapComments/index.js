import { useState } from "react";
import UpdateComment from "../UpdateComment";
import UserComments from "../UserComments";

function WrapComments(props) {
    const {item, index} = props;

    const [showUpdate, setShowUpdate] = useState(false);

    return(
        <>
            {
                showUpdate ? <UpdateComment setShowUpdate={setShowUpdate} item={item} index={index}/> : <UserComments setShowUpdate={setShowUpdate} item={item} index={index}/>
            }
        </>
    )
}

export default WrapComments;