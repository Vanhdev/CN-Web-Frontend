import { Col, Row } from "antd";
import TourBox from "../../components/TourBox";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBookedTour } from "../../API";

function TourHistories() {

    const user = useSelector( state => state.auth.login?.currentUser);
    const bookedTours = useSelector( state => state.tour.allBookedTours);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllBookedTour(user?.accessToken, dispatch, user?.id);
    },[])

    return(
        <div className="tour-histories">
            <div>Lịch sử đặt tour</div>
            <div className="tour-histories-items">
                {
                    bookedTours?.map((tour, index) => {
                        if(index % 2 === 0) {
                            return(
                                <Row className="w-full">
                                    <TourBox tour={tour[index]}/>
                                    {index + 1 && <TourBox tour={tour[index+1]}/>}
                                </Row>
                            )
                        } 
                    })
                }
            </div>
        </div>
    )
}

export default TourHistories;