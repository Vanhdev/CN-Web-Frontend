import { useState, useEffect } from "react";
import BlueRiverHeader from "../../BlueRiverHeader";
import ForumContent from "../ForumContent";
import ForumHeader from "../ForumHeader";
import { Spin } from "antd";
import { getAllPosts } from "../../../API";
import { useDispatch } from "react-redux";

function Forum() {
    return(
        <>  
            <BlueRiverHeader/>
            <div style={{padding: ' 40px 60px'}}>
                <ForumHeader/>
                <ForumContent/>
            </div>
        </>
    )
}

export default Forum;