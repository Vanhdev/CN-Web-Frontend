import { Route, Routes } from "react-router-dom";
import Personal from "../../pages/Personal";
import DetailTour from "../../pages/DetailTour";
import Forum from "../../components/Forums/Forum";
import AskSomething from "../../pages/ForumPages/AskSomething";
import MainAdminPage from "../../components/MainAdminPage";
import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";
import HomePage from "../../pages/AllTours";

function AppRoutes() {
    return(
        <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/personal-info/*" element={<Personal/>}></Route>
            <Route path="/detail-tour/:id" element={<DetailTour/>}></Route>
            <Route path="/ask-something" element={<AskSomething/>}></Route>
            <Route path="/forum/*" element={<Forum/>}></Route>
            <Route path="/admin/*" element={<MainAdminPage/>}></Route>
        </Routes>
    )
}

export default AppRoutes;