import { useEffect } from "react";
import BlueRiverHeader from "../../BlueRiverHeader";
import ForumContent from "../ForumContent";
import ForumHeader from "../ForumHeader";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Forum() {
    // const navigate = useNavigate();
    // const user = useSelector((state) => state.auth.login?.currentUser);

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login');
    //     }
    // }, []);
    const currentUser = useSelector(state => state.auth.login.currentUser);

    return(
        <>
            {/* {
                user && <div>  
                            <BlueRiverHeader/>
                            <div style={{padding: ' 40px 60px'}}>
                                <ForumHeader/>
                                <ForumContent/>
                            </div>
                        </div>
            }
            {
                !user && <Spin></Spin>
            } */}
            <div>  
                <BlueRiverHeader currentUser={currentUser} />
                <div style={{padding: ' 40px 60px'}}>
                    <ForumHeader/>
                    <ForumContent/>
                </div>
            </div>
        </>
    )
}

export default Forum;