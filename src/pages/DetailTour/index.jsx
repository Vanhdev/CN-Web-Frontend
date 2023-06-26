import {Button, Carousel, Col, Collapse, Divider, Form, Image, Input, Rate, Row, Space, Spin, message} from "antd";
import BlueRiverHeader from "../../components/BlueRiverHeader";
import location from '../../assets/images/location.svg';
import './index.css';
import ImageIcon from '../../assets/images/image.svg';
import price from '../../assets/images/price.svg';
import time from '../../assets/images/time.svg';
import category from '../../assets/images/category.svg';
import person from '../../assets/images/person.svg';
import timeToTravel from '../../assets/images/time-to-travel.jpg';
import letGoTravel from '../../assets/images/letGoTravel.jpg';
import greenTick from '../../assets/images/green-tick.svg';

import BookTour from "../../components/BoxBookTour/BookTour";
import Evaluate from "../../components/DetailTourComponent/Evaluate";
import Destination from "../../components/DetailTourComponent/Destination";
import CommentsTour from "../../components/CommentsTours";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailTour } from "../../API";
import { ConvertLink, typeArray } from "../../functions";

const { Panel } = Collapse;

function DetailTour() {

    const user = useSelector( state => state.auth.login?.currentUser);
    const tour = useSelector( state => state.tour.tour);

    console.log("detailTour: ", tour);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id: idTour} = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!user?.accessToken) {
            navigate('/login');
        }

        if(user?.accessToken && idTour) {
            setLoading(true);
            getDetailTour(user?.accessToken, dispatch, idTour);
            setLoading(false);
        }
        
    }, [])
    
    if(loading) {
        return <Spin></Spin>
    }
    
    const contentStyle = {
        height: '180px',
        color: '#000',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return(
        <>
            {
                user && tour?.tour?.id
                &&
                <div className="detailTour">
                    <BlueRiverHeader></BlueRiverHeader>
                    <div className="detail-tour-container">
                        <div className="detail-tour-header">
                            <div>
                                <div className="all-title-header">
                                    <div>
                                        <h1 style={{fontSize: 35}}>{tour.tour.name}</h1>
                                        <Space className="address" size={8}>
                                            <Image src={location}></Image>
                                            <div style={{color: 'var(--gray-color)', fontSize: '18px'}}>{tour.place.name}</div>
                                        </Space>
                                    </div>
                                    <Image 
                                        src={ConvertLink(tour?.linkImg?.image_url)} 
                                        height={60}
                                        style={{borderRadius: '10px', marginTop: "5px", border: "2px solid #000"}}
                                    ></Image>
                                </div>
                                <div>
                                    <Carousel autoplay>
                                        <div>
                                            <div style={contentStyle}>
                                                <Image src={timeToTravel}></Image>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={contentStyle}>
                                                <Image src={letGoTravel}></Image>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={contentStyle}>
                                                <Image src={timeToTravel}></Image>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={contentStyle}>
                                                <Image src={letGoTravel}></Image>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                                <Space className="all-icons" size={100}>
                                    <HeaderIcon label={'Giá'} icon={price} desc={`từ $${tour.tour.price}`}/>
                                    <HeaderIcon label={'Thời lượng'} icon={time} desc={`${tour.tour.duration} ngày`}/>
                                    <HeaderIcon label={'Thể loại'} icon={category} desc={`${typeArray[tour.tour.type_id]}`}/>
                                    <HeaderIcon label={'Max'} icon={person} desc={`${tour.tour.slots}`}/>
                                </Space>
                            </div>
                        </div>
                        <div className="detail-tour-content">
                            <Row>
                                <Col span={16}>
                                    <div>
                                        <div className="common-title">Tổng quan</div>
                                        <div style={{lineHeight: '25px', textAlign:'justify', fontWeight: '300', marginTop: '20px', fontSize: '15px'}}>
                                            {tour.tour.overview}
                                        </div>
                                    </div>
                                    <Divider/>
                                    <div>
                                        <div className="common-title">Điểm nổi bật</div>
                                        <div style={{lineHeight: '25px', textAlign:'justify', fontWeight: '300', marginTop: '20px', fontSize: '15px'}}>
                                            {tour.tour.highlight}
                                        </div>
                                    </div>
                                    <Divider/>
                                    <div className="wrap-all-services">
                                        <div className="common-title">Bao gồm các dịch vụ</div>
                                        <div className='all-services'>
                                            <Service desc={tour.service.name}/>
                                        </div>
                                    </div>
                                    <Divider/>
                                    <div className="wrap-all-tours">
                                        <div className="common-title">Địa điểm tham quan cụ thể</div>
                                        <div className="all-destinations">
                                            <Destination name={`${tour.place.name}`} desc={tour.place.description}/>
                                        </div>
                                    </div>
                                    <Divider/>
                                    <div className="wrap-rate">
                                        <Evaluate/>
                                    </div>

                                    {/* all comments below */}
                                    <CommentsTour/>
                                </Col>
                                <Col span={8}>
                                    <BookTour detailTour={tour}/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

function HeaderIcon({label, icon, desc}) {
    return(
        <Space className="wrap-icon" size={8}>
            <div>
                <Image src={icon} className="image-icon" preview={false}></Image>
            </div>
            <div>
                <div className="label-icon">{label}</div>
                <div className="price-icon">{desc}</div>
            </div>
        </Space>
    )
}
function Service({desc}) {
    return(
        <Space className="detail-service" size={10}>
            <Image src={greenTick}></Image>
            <div>{desc}</div>
        </Space>    
    )
}

export default DetailTour;