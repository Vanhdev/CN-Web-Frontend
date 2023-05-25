import { useState } from "react";
import BlueRiverHeader from "../../components/BlueRiverHeader";
import NavBar from "../../components/NavBar";
import PersonalContent from "../../components/PersonalContent";
import './index.css';

function Personal() {
    return(
        <div>
            <BlueRiverHeader></BlueRiverHeader>
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