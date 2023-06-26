import { useDispatch, useSelector } from "react-redux";
import WrapComments from "../WrapComments";
import { useEffect, useState } from "react";
import { getAllRates } from "../../../API";
import { useParams } from "react-router-dom";

function AllComments() {
    const dispatch = useDispatch();
    const allRates = useSelector(state => state.tour.allRates);
    const user = useSelector( state => state.auth.login?.currentUser);
    const tour = useSelector( state => state.tour.tour);
    
    
    const {id: idTour} = useParams();
    const [pageIDTour, setPageIDTour] = useState(idTour);

    useEffect(() => {
        const fetchDataAndUpdateState = () => {
            if(idTour) {
                setPageIDTour(idTour);
            }
        
            if (user?.accessToken && idTour) {
                getAllRates(user?.accessToken, dispatch, idTour);
            }
        };
        
        fetchDataAndUpdateState();
    }, [pageIDTour])

    return(
        <>
            <div className="margin50">Đánh giá</div>
            {
                tour?.tour?.id && pageIDTour && allRates && allRates?.rates?.map( (item,index) =>
                    <WrapComments key={index} index={index} item={item}/>
                )
            }
        </>
    )
}

export default AllComments;