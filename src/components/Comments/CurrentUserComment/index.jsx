import { Button, Divider, Form, Input, Space, message } from "antd";
import AvatarPost from "../../AvatarPost";
import RateItemResult from "../RateItemResult";
import avatar from '../../../assets/images/main-avatar.png';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeNewRate } from "../../../API";
import { styled } from "@mui/material";

function CurrentUserComment() {
    const [positionValue, setPositionValue] = useState(0);
    const [roomValue, setRoomValue] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const [serviceValue, setServiceValue] = useState(0);

    const user = useSelector( state => state.auth.login?.currentUser);
    const tour = useSelector( state => state.tour.tour);
    
    const dispatch = useDispatch();

    const hanlePostComment = () => {
        const newComment = {
            user_id: user.id,
            tour_id: tour.tour.id,
            location_rate: positionValue,
            infrastructure_rate: roomValue,
            price_rate: priceValue,
            service_rate: serviceValue,
        }
        makeNewRate(user?.accessToken, dispatch, newComment);
        setPositionValue(0);
        setPriceValue(0);
        setRoomValue(0);
        setServiceValue(0);
    }

    const SpaceRate = styled("div")({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "10px",
    })

    const SpaceRateItem = styled("div")({
        display: "flex",
        justifyContent: "space-between",
    })

    return(
        <>
            <AvatarPost avatar={avatar} name={user.name} date='12/04/2023'/>
            <SpaceRate>
                <SpaceRateItem>
                    <RateItemResult label={'Vị trí địa lý'} rate={positionValue} setValue={setPositionValue}/>
                    <RateItemResult label={'Dịch vụ'} rate={serviceValue} setValue={setServiceValue}/>
                </SpaceRateItem>
                <SpaceRateItem>
                    <RateItemResult label={'Phòng ốc'} rate={roomValue} setValue={setRoomValue}/>
                    <RateItemResult label={'Giá cả'} rate={priceValue} setValue={setPriceValue}/>
                </SpaceRateItem>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "15px" }}>
                    <Button 
                        htmlType="button" 
                        type="primary" 
                        className="post-comment-button" 
                        onClick={hanlePostComment}
                        style={{
                            backgroundColor: "green",
                            width: "100px",
                        }}
                    >Đăng</Button>
                </div>
            </SpaceRate>
        </>    
    )
}

export default CurrentUserComment;