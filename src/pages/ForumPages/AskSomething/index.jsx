import { useEffect } from "react";
import AskHome from "../../../components/AskAdmin/AskHome";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AskSomething() {
    const user = useSelector(state => state.auth.login?.currentUser);
    const navigate = useNavigate();

    useEffect(() => {

        if(!user?.accessToken) {
            navigate('/login');
        }

    }, [])

    return(
        <>
            {
                user && <AskHome/>
            }
        </>    
    )
}

export default AskSomething;