import BlueRiverHeader from "../../BlueRiverHeader";
import ForumContent from "../ForumContent";
import ForumHeader from "../ForumHeader";

function Forum() {
    return(
        <>  
            <BlueRiverHeader/>
            <div style={{padding: ' 40px 60px'}}>
                <ForumHeader/>
                <ForumContent/>
            </div>
        </>
    )
}

export default Forum;