import { useState } from "react";
import BlueRiverHeader from "../../components/BlueRiverHeader";
import NavBar from "../../components/NavBar";
import PersonalContent from "../../components/PersonalContent";
import './index.css';
import { useSelector } from "react-redux";

function Personal() {
    const currentUser = useSelector(state => state.auth.login.currentUser);
    return(
        <div>
            <BlueRiverHeader currentUser={currentUser}></BlueRiverHeader>
            <div className="personal-container">
                <NavBar></NavBar>
                <div style={{padding: '0 30px'}}>
                    <PersonalContent></PersonalContent>
                </div>
            </div>
        </div>    
    )
}

export default Personal;