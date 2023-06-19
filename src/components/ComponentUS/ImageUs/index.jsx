import { Image } from "antd";
import compoUs from "../../../assets/images/compo-us.jpg";

function ImageUs() {
    const acme = {
        fontFamily: "'Acme', sans-serif",
        fontSize: 150,
    }

    const abel = {
        fontFamily: "'Abel', sans-serif",
        fontSize: 50,
        marginLeft: 140,
        marginTop: '-40px'
    }

    const imageText = {
        position: 'absolute',
        top: 120,
        color: "white",
        left: 80
    }

    return(
        <div className="image-us">
            <div style={{position: "relative"}}>
                <Image src={compoUs} preview={false}></Image>
                <div style={imageText}>
                    <div style={acme}>Love</div>
                    <div style={abel}>Where we’re going ...</div>
                </div>
            </div>
        </div>    
    )
}

export default ImageUs; 