import { useSelector } from "react-redux";
import WrapComments from "../WrapComments";

function AllComments() {

    const userValues = useSelector(state => state.commentsTour.comments);

    console.log(userValues);

    return(
        <>
            <div className="margin50">Bình luận</div>
            {
                userValues.map( (item,index) => 
                    <WrapComments key={index} index={index} item={item}/>
                )
            }
        </>
    )
}

export default AllComments;