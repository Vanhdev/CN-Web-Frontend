import ImageUs from "../../components/ComponentUS/ImageUs";
import HeaderUs from "../../components/ComponentUS/HeaderUs";
import MyCompanyRoutes from "../../routes/MyCompanyRoutes";
import FooterCompany from "../../components/FooterCompany";

function MyCompany() {
    return(
        <div className="my-company">
            <HeaderUs/>
            <ImageUs/>
            <MyCompanyRoutes/>
            <FooterCompany/>
        </div>
    )
}

export default MyCompany;