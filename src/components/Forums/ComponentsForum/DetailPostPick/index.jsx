import AvatarPost from "../../../AvatarPost";
import avatar from '../../../../assets/images/main-avatar.png';
import { Image, Space, Spin, Tag } from "antd";
import './index.css';
import IconText from "../IconText";
import {LikeFilled, DislikeFilled, EyeFilled} from '@ant-design/icons';
import {useEffect, useState} from 'react';
import IconButton from "../IconButton";
import { getAllPosts } from "../../../../API";

function DetailPostPick(props) {
    const {idPost} = props;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [countLike, setCountLike] = useState(102);
    const [countDislike, setCountDislike] = useState(10);
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    
    useEffect( () => {
        setLoading(true);
        getAllPosts().then(res => {
            setData(res.posts[idPost - 1]);
            setLoading(false);
        })
    },[]);

    if(loading) {
        return(
            <Spin></Spin>
        )
    }


    return(
        <Space className="detail-post-pick" direction="vertical" size={20}>
            <div className="header-post">
                <AvatarPost avatar={avatar} name="Anh Leonard" date="17/05/2023"/>
                {data.tags && <Tag color="green">Topic: {data.tags[0]}, {data.tags[1]}, {data.tags[2]} </Tag>}
            </div>
            <div className="content-post">
                <div style={{textAlign: 'center'}}>
                    <b style={{fontSize: '18px'}}>{data.title}</b>
                </div>
                {data.body}
            </div>
            <div>
                <Space size={16}>
                    <div className="image-container">
                        <Image src={'https://i.pinimg.com/236x/67/83/06/6783064c25cf7e3591650c91e84d09a0.jpg'}></Image>
                    </div>
                    <div className="image-container">
                        <Image src={'https://i.pinimg.com/236x/8d/64/68/8d64684c96e24e149cb804142bc0396d.jpg'}></Image>
                    </div>
                    <div className="image-container">
                        <Image src={'https://i.pinimg.com/236x/53/44/a1/5344a1382edb313e1f153084a24a4b40.jpg'}></Image>
                    </div>
                    <div className="image-container">
                        <Image src={'https://i.pinimg.com/236x/8d/64/68/8d64684c96e24e149cb804142bc0396d.jpg'}></Image>
                    </div>
                    <div className="image-container">
                        <Image src={'https://i.pinimg.com/236x/53/44/a1/5344a1382edb313e1f153084a24a4b40.jpg'}></Image>
                    </div>
                </Space>
            </div>
            <Space size={40}>
                {like
                ? (<IconButton 
                    icon={<LikeFilled style={{color: 'var(--pink-color)'}}/>}
                    text={countLike}
                    action={like}
                    status={dislike}
                    setStatus={setDislike}
                    setAction={setLike}
                    setOtherNumber={setCountDislike}
                    setNumberLike={setCountLike}
                />)
                : (<IconButton 
                    icon={<LikeFilled style={{color: 'var(--gray-color)'}}/>}
                    text={countLike}
                    action={like}
                    setAction={setLike}
                    status={dislike}
                    setStatus={setDislike}
                    setOtherNumber={setCountDislike}
                    setNumberLike={setCountLike}
                />)
                }
                {dislike
                ? (<IconButton 
                    icon={<DislikeFilled style={{color: 'black'}}/>} 
                    text={countDislike}
                    action={dislike}
                    setAction={setDislike}
                    status={like}
                    setStatus={setLike}
                    setOtherNumber={setCountLike}
                    setNumberLike={setCountDislike}
                />)
                :(<IconButton
                    icon={<DislikeFilled style={{color: 'var(--gray-color)'}}/>} 
                    text={countDislike}
                    action={dislike}
                    setAction={setDislike}
                    status={like}
                    setStatus={setLike}
                    setOtherNumber={setCountLike}
                    setNumberLike={setCountDislike}
                />)}
                <IconText 
                    icon={<EyeFilled style={{color: 'var(--blue-color)'}}/>} 
                    text={data.userId}
                />
            </Space>
        </Space>    
    )
}

export default DetailPostPick;