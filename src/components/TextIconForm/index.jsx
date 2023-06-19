import { Box, styled } from "@mui/material";
import { RemoveRedEyeOutlined } from '@mui/icons-material';

function TextIconForm(props) {
    const {icon, text} = props;
    
    const IconText = styled(Box) ({
        display: "flex",
        alignItems: "center",
        gap: "5px"
    })

    return(
        <div className="component-text-icon">
            <IconText>
                <div><RemoveRedEyeOutlined fontSize="24px"/></div>
                <div>Count: 99</div>
            </IconText>
        </div>
    )
}

export default TextIconForm;