import { Box, styled } from "@mui/material";

function TextIconForm() {
    const IconText = styled(Box) ({
        
    })

    return(
        <div className="component-text-icon">
            <IconText>
                <div></div>
                <div>Count: 99</div>
            </IconText>
        </div>
    )
}

export default TextIconForm;