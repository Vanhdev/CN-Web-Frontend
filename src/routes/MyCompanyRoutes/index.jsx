import { Route, Routes } from "react-router-dom";
import AboutUs from "../../pages/AboutUs";
import ContactUs from "../../pages/ContactUs";  

function MyCompanyRoutes() {
    return(
        <div>
            <Routes className="my-company-routes">
                <Route path="/about-us" element={<AboutUs/>}></Route>
                <Route path="/contact-us" element={<ContactUs/>}></Route>
            </Routes>
        </div>
    )
}

export default MyCompanyRoutes;