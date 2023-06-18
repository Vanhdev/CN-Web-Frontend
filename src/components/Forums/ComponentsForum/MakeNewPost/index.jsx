import { Button, Col, Input, Modal, Row, Space, Upload } from "antd";
import './index.css';
import { useState } from "react";
import UploadImage from "../UploadImage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewPost } from "../../../../API";

function MakeNewPost() {
    const [namePost, setNamePost] = useState('');
    const [topicPost, setTopicPost] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [fullDesc, setFullDesc] = useState('');
    const [imageList, setImageList] = useState([]);

    const user = useSelector( state => state.auth.login?.currentUser);
    console.log("current id of user: ", user.id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNewPost = () => {
        const newPost = {
            user_id: user.id,
            title: namePost,
            // topicPost: topicPost,
            // shortDesc: shortDesc,
            content: fullDesc,
            // imageList: imageList,
        }
        // createNewPost(newPost, dispatch, navigate);
    }

    return(
        <div className="makeNewPost">
            <Space direction="vertical" size={20}>
                <Row>
                    <Col span={18}>
                        <InputTag placeholder={'Tên bài viết'} setPost={setNamePost}/>
                    </Col>
                    <Col span={5} style={{marginLeft: 32}}>
                        <InputTag placeholder='Tên chủ đề bài viết' setPost={setTopicPost}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <InputTag placeholder={'Mô tả ngắn gọn chủ đề của bạn'} setPost={setShortDesc}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Input.TextArea 
                            placeholder="Mô tả chi tiết"
                            style={{height: '200px'}}
                            onChange={(e) => setFullDesc(e.target.value)}
                            className="main-font"
                        ></Input.TextArea>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div>Hình ảnh đính kèm</div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Space>
                            <UploadImage imageList={imageList} setImageList={setImageList}/>
                        </Space>
                    </Col>
                </Row>
                <Button 
                    type="primary" 
                    style={{backgroundColor: 'green', float: 'right'}} 
                    size="large"
                    onClick={handleNewPost}
                >Đăng bài</Button>
            </Space>
        </div>    
    )
}

function InputTag({placeholder, setPost}) {
    return(
        <Input className="main-font" placeholder={placeholder} size="large" onChange={(e) => setPost(e.target.value)}></Input>
    )
}

export default MakeNewPost;