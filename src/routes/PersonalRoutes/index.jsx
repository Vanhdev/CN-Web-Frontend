import { Route, Routes } from "react-router-dom";
import PersonalInfo from "../../pages/PersonalInfo";
import TourHistories from "../../pages/TourHistories";
import LovedTours from "../../pages/LovedTours";
import ChangePass from "../../pages/ChangePass";

function PersonalRoutes() {
    return(
        <>
            <Routes>
                <Route path="/" element={<PersonalInfo/>}></Route>
                <Route path="/tour-histories" element={<TourHistories/>}></Route>
                <Route path="/loved-tours" element={<LovedTours/>}></Route>
                <Route path="/change-pass" element={<ChangePass/>}></Route>
            </Routes>
        </>    
    )
}

export default PersonalRoutes;