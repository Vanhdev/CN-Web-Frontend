import AboutStartHeader from "../AboutStartHeader";
import './index.css';

function ContentContactUs() {
    return(
        <div className="wrap-content-us">
            <AboutStartHeader title="How do you can contact us?"/>
            <div className="content-contact">
                <div className="content-contact-detail">Email: tripwise@gmail.com</div>
                <div className="content-contact-detail">Phone Number: +0965 725 632</div>
                <div className="content-contact-detail">Address: University Offices, Wellington Square, Oxford OX1 2JD</div>
            </div>
        </div>
    )
}

export default ContentContactUs;