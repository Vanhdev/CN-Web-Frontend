import { Route, Routes } from "react-router-dom";
import Personal from "../../pages/Personal";
import DetailTour from "../../pages/DetailTour";
import Forum from "../../components/Forums/Forum";
import AskSomething from "../../pages/ForumPages/AskSomething";

function AppRoutes() {
    return(
        <>
            <Routes>
                <Route path="/personal-info/*" element={<Personal/>}></Route>
                <Route path="/detail-tour/:id" element={<DetailTour/>}></Route>
                <Route path="/ask-something" element={<AskSomething/>}></Route>
                <Route path="/forum/*" element={<Forum/>}></Route>
            </Routes>
        </>    
    )
}

export default AppRoutes;