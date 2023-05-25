import { Route, Routes } from "react-router-dom";
import ManageTourRoutes from "../ManageTourRoutes";
import ManageForumRoutes from "../ManageForumRoutes";
import ManageClient from '../../pages/SinglePageAdminManager/ManageClient';
import ManageQuestion from '../../pages/SinglePageAdminManager/ManageQuestion';
import ManageStatistic from '../../pages/SinglePageAdminManager/ManageStatistic';

function ManageAdminRoutes() {
    return(
        <Routes>
            <Route path="/manage-tour/*" element={<ManageTourRoutes/>}></Route>
            <Route path="/manage-forum/*" element={<ManageForumRoutes/>}></Route>
            <Route path="/manage-client" element={<ManageClient/>}></Route>
            <Route path="/manage-question" element={<ManageQuestion/>}></Route>
            <Route path="/manage-statistic" element={<ManageStatistic/>}></Route>
        </Routes> 
    )
}

export default ManageAdminRoutes;