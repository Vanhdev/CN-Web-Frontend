import AvatarPost from "../../../AvatarPost";
import avatar from '../../../../assets/images/main-avatar.png';
import { Image, Space, Spin, Tag } from "antd";
import './index.css';
import IconText from "../IconText";
import {LikeFilled, DislikeFilled, EyeFilled} from '@ant-design/icons';
import {useEffect, useState} from 'react';
import IconButton from "../IconButton";
import { getAllPosts, getDetailPost, getListCommentsById, upLike } from "../../../../API";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ConvertDate, ConvertLink } from "../../../../functions";

function DetailPostPick(props) {
    const {idPost, detailPost, user, linkPost} = props;

    const dispatch = useDispatch();

    const handleClickLike = () => {
        const action_like = {
            post_id: idPost,
            action: "like"
        }
        upLike(user?.accessToken, dispatch, action_like);
    }

    const handleClickDislike = () => {
        const action_dislike = {
            post_id: idPost,
            action: "dislike"
        }
        upLike(user?.accessToken, dispatch, action_dislike);
    }


    return(
        <>
            {
            detailPost && user && user.email !== "admin@gmail.com"
            && 
            <Space className="detail-post-pick" direction="vertical" size={20}>
                <div className="header-post">
                    <AvatarPost avatar={avatar} name={user.name} date={detailPost.createdAt}/>
                    <Tag color="green">Topic: {detailPost.topic} </Tag>
                </div>
                <div className="content-post">
                    <div style={{textAlign: 'center'}}>
                        <b style={{fontSize: '18px'}}>{detailPost.title}</b>
                    </div>
                    {detailPost.content}
                </div>
                <div>
                    <Space size={16}>
                        <div className="image-container">
                            <Image src={linkPost.image_url}></Image>
                        </div>
                        <div className="image-container">
                            <Image src={linkPost.image_url}></Image>
                        </div>
                        <div className="image-container">
                            <Image src={linkPost.image_url}></Image>
                        </div>
                        <div className="image-container">
                            <Image src={linkPost.image_url}></Image>
                        </div>
                        <div className="image-container">
                            <Image src={linkPost.image_url}></Image>
                        </div>
                    </Space>
                </div>
                <Space size={40}>
                    <IconButton 
                        icon={<LikeFilled style={{color: 'var(--pink-color)'}}/>}
                        text={detailPost.num_like}
                        handleClick={handleClickLike}
                    />
                    <IconButton 
                        icon={<DislikeFilled style={{color: 'black'}}/>} 
                        text={detailPost.num_dislike}
                        handleClick={handleClickDislike}
                    />
                    <IconText 
                        icon={<EyeFilled style={{color: 'var(--blue-color)'}}/>} 
                        text={1024}
                    />
                </Space>
            </Space>
            }
        </>    
    )
}

export default DetailPostPick;