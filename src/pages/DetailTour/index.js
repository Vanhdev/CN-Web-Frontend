import {Button, Carousel, Col, Collapse, Divider, Form, Image, Input, Rate, Row, Space, message} from "antd";
import BlueRiverHeader from "../../components/BlueRiverHeader";
import location from '../../assets/images/location.svg';
import './index.css';
import ImageIcon from '../../assets/images/image.svg';
import price from '../../assets/images/price.svg';
import time from '../../assets/images/time.svg';
import category from '../../assets/images/category.svg';
import person from '../../assets/images/person.svg';
import timeToTravel from '../../assets/images/time-to-travel.svg';
import letGoTravel from '../../assets/images/letGoTravel.svg';
import greenTick from '../../assets/images/green-tick.svg';

import AllComments from "../../components/Comments/AllComments";
import BookTour from "../../components/BoxBookTour/BookTour";
import CurrentUserComment from "../../components/Comments/CurrentUserComment";
import Evaluate from "../../components/DetailTourComponent/Evaluate";

const { Panel } = Collapse;

function DetailTour() {
    
    const contentStyle = {
        height: '180px',
        color: '#000',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    return(
        <div className="detailTour">
            <BlueRiverHeader></BlueRiverHeader>
            <div className="detail-tour-container">
                <div className="detail-tour-header">
                    <div>
                        <div className="all-title-header">
                            <div>
                                <h2>Waterfalls, Geysers And Glacier</h2>
                                <Space className="address" size={8}>
                                    <Image src={location}></Image>
                                    <div style={{color: 'var(--gray-color)', fontSize: '18px'}}>Warsaw, Poland</div>
                                </Space>
                            </div>
                            <Space size={10} className="button-image">
                                <Image src={ImageIcon}></Image>
                                <div style={{color: 'var(--image-color)'}}>Kho ảnh</div>
                            </Space>
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
                            <HeaderIcon label={'Giá'} icon={price} desc={'từ $100'}/>
                            <HeaderIcon label={'Thời lượng'} icon={time} desc={'6 ngày'}/>
                            <HeaderIcon label={'Thể loại'} icon={category} desc={'Biển, Núi'}/>
                            <HeaderIcon label={'Max'} icon={person} desc={'20'}/>
                        </Space>
                    </div>
                </div>
                <div className="detail-tour-content">
                    <Row>
                        <Col span={16}>
                            <div>
                                <div className="common-title">Tổng quan</div>
                                <div style={{lineHeight: '25px', textAlign:'justify', fontWeight: '300', marginTop: '20px', fontSize: '15px'}}>
                                    The Discovery Islands are a sea kayaking paradise, and as you will discover, one of the West Coast’s best kept secrets. You’ll find no better sea kayaking vacation throughout remote islands on BC’s central coast.
                                    Comprised of a dozen islands in the Discovery Passage between Vancouver Island and the mainland in British Columbia, we will take you kayaking throughout this sparsely inhabited remote group of islands on this kayaking tour.
                                    Paddling around the islands provides the ideal way to get close to nature and be completely enveloped in the beauty of towering trees, remote beaches, and mountains. Discover the wildlife that inhabit this region and the secrets of British Columbia’s rich and plentiful inter-tidal life while exploring magical waterways.‍
                                </div>
                            </div>
                            <Divider/>
                            <div>
                                <div className="common-title">Điểm nổi bật</div>
                                <div>
                                    <ul style={{lineHeight: '25px', textAlign:'justify', fontWeight: '300', marginTop: '20px', marginLeft: '20px', fontSize: '15px'}}>
                                        <li>Be enveloped in the beauty of towering trees, remote beaches, and mountains of the Canadian wilderness</li>
                                        <li>Have close encounters with BC’s coastal wildlife; sea lions, seals, pacific white sided dolphins, otters, birds and some of the largest starfish in the world</li>
                                        <li>Be on the lookout for Humpback whales that have made a strong resurgence in the Discovery Islands</li>
                                        <li>Coastal cuisine designed by a local gourmet chef</li>
                                        <li>Quality expedition tents & warm sleeping bags all included in the price of the trip</li>
                                        <li>High Staff to Guest Ration</li>
                                    </ul>
                                </div>
                            </div>
                            <Divider/>
                            <div className="wrap-all-services">
                                <div className="common-title">Bao gồm các dịch vụ</div>
                                <div className='all-services'>
                                    <Service desc="Specialized bilingual guide"/>
                                    <Service desc="Specialized bilingual guide"/>
                                    <Service desc="Specialized bilingual guide"/>
                                    <Service desc="Specialized bilingual guide"/>
                                    <Service desc="Specialized bilingual guide"/>
                                </div>
                            </div>
                            <Divider/>
                            <div className="wrap-all-tours">
                                <div className="common-title">Các địa điểm tham quan cụ thể</div>
                                <div className="all-destinations">
                                    <Destination name={'South Iceland'} desc='hello hello'/>
                                    <Destination name={'The South Coast'} desc='hello hello'/>
                                    <Destination name={'South Iceland'} desc='hello hello'/>
                                    <Destination name={'South Iceland'} desc='hello hello'/>
                                    <Destination name={'South Iceland'} desc='hello hello'/>
                                </div>
                            </div>
                            <Divider/>
                            <div className="wrap-rate">
                                <Evaluate/>
                            </div>
                            <div className="wrap-comments">
                                <CurrentUserComment/>
                                <div className="all-comments">
                                    <AllComments/>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <BookTour/>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

function HeaderIcon({label, icon, desc}) {
    return(
        <Space className="wrap-icon" size={8}>
            <div>
                <Image src={icon} className="image-icon"></Image>
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

function Destination({name, desc}) {
    return(
        <Collapse expandIconPosition="start" className="collapse-tour">
            <Panel
                header={name}
                key={name}
            >
                <div>{desc}</div>
            </Panel>
        </Collapse>
    )
}

export default DetailTour;