import { AppBar, styled } from "@mui/material";
import AboutStartHeader from "../AboutStartHeader";
import './index.css';

function ContentContactUs() {

    const AppBarStyle = styled(AppBar) ({
        position: 'static',
        height: '330px',
        backgroundColor: '#FFFFFF',
        color: "#000",
        // marginTop: "-7px",
        boxShadow: 'none',
    })

    return(
        <AppBarStyle>
            <div className="content-us">
                <div className="wrap-content-us">
                    <AboutStartHeader title="How do you can contact us?"/>
                    <div className="content-contact">
                        <div className="content-contact-detail">Email: tripwise@gmail.com</div>
                        <div className="content-contact-detail">Phone Number: +0965 725 632</div>
                        <div className="content-contact-detail">Address: University Offices, Wellington Square, Oxford OX1 2JD</div>
                    </div>
                </div>
            </div>
        </AppBarStyle>
    )
}

export default ContentContactUs;