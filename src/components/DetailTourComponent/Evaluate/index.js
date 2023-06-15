import { Space } from "antd";
import RateItemResult from "../../Comments/RateItemResult";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Evaluate() {
    const [position, setPosition] = useState(0);
    const [room, setRoom] = useState(0);
    const [service, setService] = useState(0);
    const [price, setPrice] = useState(0);

    const userValues = useSelector(state => state.commentsTour.comments);

    useEffect( () => {
        let position = 0;
        let room = 0;
        let service = 0;
        let price = 0;
        userValues.map( item => {
            position += item.positionValue;
            room += item.roomValue;
            service += item.serviceValue;
            price += item.priceValue;
        })
        setPosition(position/userValues.length);
        setRoom(room/userValues.length);
        setService(service/userValues.length);
        setPrice(price/userValues.length);
    }, [userValues])

    return(
        <>
            <div className="common-title">Đánh giá</div>
            <div className="wrap-all-rate">
                <div className="final-rate">
                    <Space size={0} className="rate">
                        <h2 className="rate-number">{userValues.length !== 0 ? parseFloat(((position + service + room + price)/4).toFixed(1)) : '5.0'}</h2>/5
                    </Space>
                    <div>Give me some feedbacks, we give you satisfaction!</div>
                </div>
                <div>
                    <RateItemResult label='Vị trí địa lý' value={position}></RateItemResult>
                    <RateItemResult label='Dịch vụ' value={service}></RateItemResult>
                    <RateItemResult label='Phòng ốc' value={room}></RateItemResult>
                    <RateItemResult label='Giá cả' value={price}></RateItemResult>
                </div>
            </div>
        </>    
    )
}

export default Evaluate;