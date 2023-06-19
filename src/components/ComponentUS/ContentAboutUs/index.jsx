import './index.css';
import divideLine from '../../../assets/images/divide-line.svg';
import AboutUsFooter from '../AboutUsFooter';
import AboutUsStart from '../AboutUsStart';
import AboutUsContent from '../AboutUsContent';
import { AppBar, Box } from '@mui/material';
import styled from '@emotion/styled';

function ContentAboutUs() {

    const AppBarStyle = styled(AppBar) ({
        position: 'static',
        height: '2250px',
        backgroundColor: '#FFFFFF',
        color: "#000",
        // marginTop: "-5px",
        boxShadow: 'none',
    })
    return(
        <AppBarStyle>
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
        </AppBarStyle>    
    )
}

export default ContentAboutUs;