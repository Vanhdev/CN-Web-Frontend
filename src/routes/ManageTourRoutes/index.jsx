import { Route, Routes } from "react-router-dom";
import AddTour from "../../pages/SinglePageAdminManager/ManageTour/AddTour";
import AddDestination from "../../pages/SinglePageAdminManager/ManageTour/AddDestination";
import AddVoucher from "../../pages/SinglePageAdminManager/ManageTour/AddVoucher";
import AddService from "../../pages/SinglePageAdminManager/ManageTour/AddService";
import TourList from "../../pages/SinglePageAdminManager/ManageTour/TourList";
import TourStock from "../../pages/SinglePageAdminManager/ManageTour/TourStock";

function ManageTourRoutes() {
    return(
        <div className="manage-tour-routes">
            <Routes>
                <Route path="/add-tour" element={<AddTour/>}></Route>
                <Route path="/add-destination" element={<AddDestination/>}></Route>
                <Route path="/add-voucher" element={<AddVoucher/>}></Route>
                <Route path="/add-service" element={<AddService/>}></Route>
                <Route path="/tour-list" element={<TourList/>}></Route>
                <Route path="/tour-stock" element={<TourStock/>}></Route>
            </Routes>
        </div>
    )
}

export default ManageTourRoutes;