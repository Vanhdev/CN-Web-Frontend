import { useDispatch, useSelector } from "react-redux";
import WrapComments from "../WrapComments";
import { useEffect } from "react";
import { getAllRates } from "../../../API";

function AllComments() {
    const dispatch = useDispatch();
    const allRates = useSelector(state => state.tour.allRates);
    const user = useSelector( state => state.auth.login?.currentUser);
    const tour = useSelector( state => state.tour.tour);
    console.log("see all rates: ",allRates);
    const userValues = [];

    useEffect(() => {
        getAllRates(user?.accessToken, dispatch, tour?.tour?.id);
    }, [])

    return(
        <>
            <div className="margin50">Đánh giá</div>
            {
                allRates?.rates?.map( (item,index) =>
                    <WrapComments key={index} index={index} item={item}/>
                )
            }
        </>
    )
}

export default AllComments;