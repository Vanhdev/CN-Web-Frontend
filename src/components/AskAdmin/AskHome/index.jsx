import BlueRiverHeader from "../../BlueRiverHeader";
import AllQuestions from "../AskComponents/AllQuestions";
import AskBox from "../AskComponents/AskBox";
import AskHeader from "../AskComponents/AskHeader";
import { useSelector } from "react-redux";

function AskHome() {
    const currentUser = useSelector(state => state.auth.login.currentUser);
    return(
        <>  
            <BlueRiverHeader currentUser={currentUser} />
            <div style={{padding: ' 40px 60px'}}>
                <AskHeader/>
                <div style={{width: '60%', margin: '0 auto'}}>
                    <AskBox/>
                    <div className="wrap-all-questions" style={{marginTop: '75px'}}>
                        <AllQuestions/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AskHome;