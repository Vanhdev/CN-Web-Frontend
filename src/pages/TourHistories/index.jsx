import { Card, Col, Empty, Modal, Row } from "antd";
import TourBox from "../../components/TourBox";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteBookedTour, getAllBookedTour } from "../../API";
import ModalConfirmDeleteTourBooked from "../../components/ModalConfirmDeleteTourBooked";

function TourHistories() {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpen = (item) => {
        setSelectedItem(item);
    };

    const handleClose = () => {
        setSelectedItem(null);
    };
    const user = useSelector( state => state.auth.login?.currentUser);
    const bookedTours = useSelector( state => state.tour.allBookedTours);
    const dispatch = useDispatch();

    useEffect(() => {

        if(user?.accessToken){
            getAllBookedTour(user?.accessToken, dispatch, user?.id);
        }

    },[bookedTours])

    const handleDeleteBookedTour = (idBooking) => {
        deleteBookedTour(user?.accessToken, dispatch, idBooking);
    }

    return(
        <div className="tour-histories">
            <div style={{margin: "15px 70px", fontSize: 20}}>Tour Histories</div>
            <div style={{margin: "0 70px 40px", display: "flex", flexWrap: "wrap", gap: "40px"}}>
                {
                    bookedTours?.length ? bookedTours?.map ( (item,index) => {
                        return(
                            <Card
                                title={item?.tour?.name}
                                bordered={true}
                                style={{
                                    width: 300,
                                    
                                }}
                                extra={
                                    <>
                                        <a onClick={() => handleOpen(item?.booking?.id)}>Cancel</a>
                                    </>
                                }
                                key={item?.booking?.id}
                                >
                                    <p>Slots: {item?.booking?.num_people}</p>
                                    <p>Start date: {item?.booking?.arrival_day}</p>
                                    <p>Time start: {item?.booking?.arrival_time}</p>
                                    <p>Duration: {item?.tour?.duration}</p>
                                    <p>Price: {item?.booking?.price}</p>
                            </Card>
                        )
                    }) : <Empty style={{width: 900}}/>
                }
                {selectedItem && (
                    <ModalConfirmDeleteTourBooked
                        open={selectedItem !== null}
                        setOpenProp={handleClose}
                        handleDeleteBookedTour={handleDeleteBookedTour}
                        item={selectedItem}
                        title="Are you sure you want to delete this tour?"
                    />
                )}
            </div>
        </div>
    )
}

export default TourHistories;