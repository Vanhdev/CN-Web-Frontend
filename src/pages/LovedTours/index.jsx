import { Card, Empty} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { deleteLovedTour, getAllLovedTour } from "../../API";
import { useNavigate } from "react-router-dom";
import ModalConfirmDeleteTourBooked from "../../components/ModalConfirmDeleteTourBooked";

function LovedTours() {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpen = (item) => {
        setSelectedItem(item);
    };

    const handleClose = () => {
        setSelectedItem(null);
    };

    const user = useSelector( state => state.auth.login?.currentUser);
    const lovedTours = useSelector( state => state.tour.allLovedTours);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [isRequestMade, setRequestMade] = useState(false);
    useEffect(() => {

        if(user?.accessToken){
            getAllLovedTour(user?.accessToken, dispatch, user?.id);
        }
        
        // if(user?.accessToken && !isRequestMade){
        //     getAllLovedTour(user?.accessToken, dispatch, user?.id);
        //     setRequestMade(true);
        // }

    },[lovedTours])

    const handleNavigateTour = (idTour) => {
        navigate(`/detail-tour/${idTour}`);
    }

    const handleDeleteLovedTour = (idLovedTour) => {
        if(user?.accessToken && idLovedTour) {
            deleteLovedTour(user?.accessToken, dispatch, idLovedTour, user?.id);
        }
    }

    return(
        <div className="tour-histories">
            <div style={{margin: "15px 70px", fontSize: 20}}>Favourite Tours</div>
            <div style={{margin: "0 70px 40px", display: "flex", flexWrap: "wrap", gap: "40px"}}>
                {
                    lovedTours?.length ? lovedTours?.map ( (item,index) => {
                        return(
                            <Card
                                title={item?.tour?.name}
                                bordered={true}
                                style={{
                                    width: 300,
                                    
                                }}
                                extra={
                                    <div>
                                        <a 
                                            onClick={() => handleNavigateTour(item?.tour?.id)}
                                            style={{
                                                marginRight: "10px",
                                                color: "blue"
                                            }}
                                        >More</a>
                                        <a 
                                            onClick={() => handleOpen(item?.tour?.id)}
                                        >Delete</a>
                                    </div>
                                }
                                key={item?.booking?.id}
                                >
                                    <p>Slots: {item?.tour?.slots}</p>
                                    <p>Start date: {item?.tour?.start_date}</p>
                                    <p>Duration: {item?.tour?.duration}</p>
                                    <p>Price start: {item?.tour?.price}</p>
                            </Card>
                        )
                    }) : <Empty style={{width: 900}}/>
                }

                {selectedItem && (
                    <ModalConfirmDeleteTourBooked
                        open={selectedItem !== null}
                        setOpenProp={handleClose}
                        handleDeleteBookedTour={handleDeleteLovedTour}
                        item={selectedItem}
                        title="Are you sure you want to delete this loved tour?"
                    />
                )}
            </div>
        </div>
    )
}

export default LovedTours;