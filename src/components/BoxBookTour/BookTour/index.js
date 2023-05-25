import { Button, Card, DatePicker, Divider, Image, Input, InputNumber, Radio, Space } from "antd";
import './index.css';
import PersonTicker from "../PersonTicker";
import vatIcon from '../../../assets/images/VAT.svg';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function BookTour() {
    const tour = useSelector(state => state.tour);

    const [dateStart, setDateStart] = useState(tour.dateStart);
    const [time, setTime] = useState(tour.time);
    const [countAdult, setCountAdult] = useState(tour.countAdult);
    const [countTeenager, setCountTeenager] = useState(tour.countTeenager);
    const [countBaby, setCountBaby] = useState(tour.countBaby);
    const [total, setTotal] = useState(tour.total);

    const [totalAdult, setTotalAdult] = useState(0);
    const [totalTeenager, setTotalTeenager] = useState(0);
    const [totalBaby, setTotalBaby] = useState(0);

    const [loadTime, setLoadTime] = useState(false);

    const handleDate = (date, dateString) => {
        dateString ? (setLoadTime(true) && setDateStart(dateString)) : setLoadTime(false);
    }

    const dispatch = useDispatch();

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
                                    <Radio value={'8:30'}>8:30</Radio>
                                    <Radio value={'10:30'}>10:30</Radio>
                                    <Radio value={'12:30'}>12:30</Radio>
                                </Radio.Group>
                            )}
                        </div>
                    </div>
                    <Divider className="style-divider"/>

                    <div className="price-ticker">
                        <div className="main-fee-title">Giá vé</div>
                        <div>
                           <PersonTicker label='Người lớn (≥18 tuổi)' price={100} countPerson={countAdult} setCountPerson={setCountAdult} setTotalPerson={setTotalAdult}/>
                           <PersonTicker label='Thiếu niên (13 - 17 tuổi)' price={90} countPerson={countTeenager} setCountPerson={setCountTeenager} setTotalPerson={setTotalTeenager}/>
                           <PersonTicker label='Trẻ em(0 - 12 tuổi)' price={0} countPerson={countBaby} setCountPerson={setCountBaby} setTotalPerson={setTotalBaby}/>
                        </div>
                    </div>
                    <Divider className="style-divider"/>

                    <div className="fee-adding">
                        <div className="main-fee-title">Chi phí bổ sung</div>
                        <div className="fee-detail">
                            <Space>
                                <Image src={vatIcon} ></Image>
                                <div style={{color: 'var(--gray-color)', fontWeight: '200'}}>Thuế VAT</div>
                            </Space>
                           <div>$10</div>
                        </div>
                    </div>
                    <Divider className="style-divider"/>

                    <div className="total-money total-money-style">
                        <div>Tổng tiền</div>
                        <div>
                            {totalAdult + totalTeenager + totalBaby + 10}
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button className="pay-button">Thanh toán</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default BookTour;