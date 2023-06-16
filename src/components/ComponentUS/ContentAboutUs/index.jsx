import './index.css';
import divideLine from '../../../assets/images/divide-line.svg';
import AboutUsFooter from '../AboutUsFooter';
import AboutUsStart from '../AboutUsStart';
import AboutUsContent from '../AboutUsContent';
import Footer from '../../Footer';

function ContentAboutUs() {
    return(
        <div className="content-us">
            <div className="wrap-content-us">
                <div className="about-us-start">
                    <AboutUsStart/>
                </div>
                <div className="about-us-divide">
                    <img src={divideLine}/>
                </div>
                <div className="about-us-content">
                    <AboutUsContent/>
                </div>
                <div className="about-us-divide">
                    <img src={divideLine}/>
                </div>
                <div className="about-us-footer">
                    <AboutUsFooter/>
                </div>
            </div>
        </div>    
    )
}

export default ContentAboutUs;