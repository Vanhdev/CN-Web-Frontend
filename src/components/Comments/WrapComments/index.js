import { useState } from "react";
import UpdateComment from "../UpdateComment";
import UserComments from "../UserComments";

function WrapComments() {
    const [showUpdate, setShowUpdate] = useState(false);

    return(
        <>
            {showUpdate ? <UpdateComment setShowUpdate={setShowUpdate}/> : <UserComments setShowUpdate={setShowUpdate}/>}
        </>
    )
}

export default WrapComments;