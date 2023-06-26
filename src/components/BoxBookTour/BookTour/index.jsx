import { Button, Card, DatePicker, Divider, Image, Input, InputNumber, Radio, Space, message } from "antd";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import './index.css';
import PersonTicker from "../PersonTicker";
import vatIcon from '../../../assets/images/VAT.svg';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userBookTour } from "../../../API";

function BookTour(props) {
    const {detailTour} = props;
    const user = useSelector( state => state.auth.login?.currentUser);

    const [dateStart, setDateStart] = useState("");
    const [time, setTime] = useState("");
    const [countAdult, setCountAdult] = useState(0);
    const [countTeenager, setCountTeenager] = useState(0);
    const [countBaby, setCountBaby] = useState(0);
    const [total, setTotal] = useState(0);

    const [totalAdult, setTotalAdult] = useState(0);
    const [totalTeenager, setTotalTeenager] = useState(0);
    const [totalBaby, setTotalBaby] = useState(0);

    const [loadTime, setLoadTime] = useState(false);

    const handleDate = (date, dateString) => {
        if(dateString) {
            setLoadTime(true);
            setDateStart(dateString);
        }
        else {
            setLoadTime(false);
        }
    }

    useEffect(() => {
        function calculateTotalMoney() {
            const total = (totalAdult + totalTeenager + totalBaby + 10)* (100 - detailTour.voucher.discount)/100;
            setTotal(total);
        }

        calculateTotalMoney();

    }, [totalAdult, totalTeenager, totalBaby])

    const dispatch = useDispatch();

    const handlePaymentTour = () => {
        const new_tour_booking = {
            user_id: user.id,
            tour_id: detailTour.tour.id,
            arrival_day: dateStart,
            arrival_time: time,
            price: total,
            num_people: countAdult + countTeenager + countBaby
        }
        userBookTour(user?.accessToken, dispatch, new_tour_booking);
        message.success("Booking tour completed successfully!")
    }

    return(
        <div className="bookTour">
            <Card
                title="Đặt tour này"
                bordered={true}
                style={{
                    width: '85%',
                    boxShadow: 'rgba(90, 98, 170, 0.4) 0px 7px 29px 0px',
                    borderRadius: '20px',
                    color: 'var(--blue-color)'
                }}
                className="cardBookTour"
            >
                <div className="bookTourContainer">
                    <div className="date-start">
                        <div className="main-fee-title">Ngày khởi hành</div>
                        <div>
                            <DatePicker defaultValue={dateStart} onChange={handleDate}/>
                        </div>
                    </div>
                    <Divider className="style-divider"/>

                    <div className="time-start">
                        <div className="main-fee-title">Thời gian</div>
                        <div>
                            {loadTime && (
                                <Radio.Group value={time} onChange={(e) => setTime(e.target.value)}>
                                    <Radio value={detailTour.arrival1.arrival_at} >{detailTour.arrival1.arrival_at.slice(0,5)}</Radio>
                                    <Radio value={detailTour.arrival2.arrival_at} >{detailTour.arrival2.arrival_at.slice(0,5)}</Radio>
                                    <Radio value={detailTour.arrival3.arrival_at} >{detailTour.arrival3.arrival_at.slice(0,5)}</Radio>
                                </Radio.Group>
                            )}
                        </div>
                    </div>
                    <Divider className="style-divider"/>

                    <div className="price-ticker">
                        <div className="main-fee-title">Giá vé</div>
                        <div>
                           <PersonTicker 
                                label='Người lớn (≥18 tuổi)' 
                                price={detailTour.tour.price} 
                                countPerson={countAdult} 
                                setCountPerson={setCountAdult} 
                                setTotalPerson={setTotalAdult}
                                max={detailTour.tour.slots - countTeenager - countBaby}
                           />
                           <PersonTicker 
                                label='Thiếu niên (13 - 17 tuổi)' 
                                price={detailTour.tour.price*0.8} 
                                countPerson={countTeenager} 
                                setCountPerson={setCountTeenager} 
                                setTotalPerson={setTotalTeenager}
                                max={detailTour.tour.slots - countAdult - countBaby}
                           />
                           <PersonTicker 
                                label='Trẻ em(0 - 12 tuổi)' 
                                price={0} 
                                countPerson={countBaby} 
                                setCountPerson={setCountBaby} 
                                setTotalPerson={setTotalBaby}
                                max={detailTour.tour.slots - countTeenager - countAdult}
                           />
                        </div>
                    </div>
                    <Divider className="style-divider"/>

                    <div className="fee-adding">
                        <div className="main-fee-title">Chi phí bổ sung</div>
                        <div>
                            <div className="fee-detail" style={{margin: "10px 0"}}>
                                <Space>
                                    <NewReleasesOutlinedIcon color="action"/>
                                    <div style={{color: 'var(--gray-color)', fontWeight: '200'}}>Thuế VAT</div>
                                </Space>
                                <div>$10</div>
                            </div>
                            <div className="fee-detail" style={{margin: "10px 0"}}>
                                <Space>
                                    <LocalOfferOutlinedIcon color="action"/>
                                    <div style={{color: 'var(--gray-color)', fontWeight: '200'}}>Voucher {detailTour.voucher.name}</div>
                                </Space>
                                <div>{detailTour.voucher.discount}%</div>
                            </div>
                        </div>
                    </div>
                    <Divider className="style-divider"/>

                    <div className="total-money total-money-style">
                        <div>Tổng tiền</div>
                        <div>
                            ${total}
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button 
                            className="pay-button"
                            onClick={handlePaymentTour}
                        >Thanh toán</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default BookTour;