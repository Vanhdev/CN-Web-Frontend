import { useState } from "react";
import BlueRiverHeader from "../../components/BlueRiverHeader";
import NavBar from "../../components/NavBar";
import PersonalContent from "../../components/PersonalContent";
import './index.css';
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Personal() {
    
    const user = useSelector( state => state.auth.login?.currentUser);
    const navigate = useNavigate();

    useEffect( () => {
        if(!user) {
            navigate('/login');
        }
    }, [])

    return(
        <>
            {
                user 
                && user.email !== "admin@gmail.com" 
                && <div>
                    <BlueRiverHeader></BlueRiverHeader>
                    <div className="personal-container">
                        <NavBar></NavBar>
                        <div style={{padding: '0 30px'}}>
                            <PersonalContent></PersonalContent>
                        </div>
                    </div>
                </div>
            }
            {
            !user && <Spin></Spin>
            }
        </>    
    )
}

export default Personal;