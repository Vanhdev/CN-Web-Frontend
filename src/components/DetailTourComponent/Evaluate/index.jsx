import { Space } from "antd";
import RateItemResult from "../../Comments/RateItemResult";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Evaluate() {
    const [position, setPosition] = useState(0);
    const [room, setRoom] = useState(0);
    const [service, setService] = useState(0);
    const [price, setPrice] = useState(0);

    const allRates = useSelector(state => state.tour.allRates);

    console.log("length:" + allRates?.rates?.length);

    useEffect( () => {
        let position = 0;
        let room = 0;
        let service = 0;
        let price = 0;
        allRates?.rates?.map( item => {
            position += item.location_rate;
            room += item.infrastructure_rate;
            service += item.service_rate;
            price += item.price_rate;
        })
        setPosition(position/allRates?.rates?.length);
        setRoom(room/allRates?.rates?.length);
        setService(service/allRates?.rates?.length);
        setPrice(price/allRates?.rates?.length);
    }, [allRates])

    return(
        <>
            <div className="common-title">Đánh giá</div>
            <div className="wrap-all-rate">
                <div className="final-rate">
                    <Space size={0} className="rate">
                        <h2 className="rate-number">
                            {allRates?.rates?.length ? parseFloat(((position + service + room + price)/4).toFixed(1)) : "0.0"}
                        </h2>/5
                    </Space>
                    <div>Give me some feedbacks, we give you satisfaction!</div>
                </div>
                <div>
                    <RateItemResult label='Vị trí địa lý' rate={position}></RateItemResult>
                    <RateItemResult label='Dịch vụ' rate={service}></RateItemResult>
                    <RateItemResult label='Phòng ốc' rate={room}></RateItemResult>
                    <RateItemResult label='Giá cả' rate={price}></RateItemResult>
                </div>
            </div>
        </>    
    )
}

export default Evaluate;