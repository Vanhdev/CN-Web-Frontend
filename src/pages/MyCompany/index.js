import ImageUs from "../../components/ComponentUS/ImageUs";
import HeaderUs from "../../components/ComponentUS/HeaderUs";
import MyCompanyRoutes from "../../routes/MyCompanyRoutes";

function MyCompany() {
    return(
        <div className="my-company">
            <HeaderUs/>
            <ImageUs/>
            <MyCompanyRoutes/>
        </div>
    )
}

export default MyCompany;