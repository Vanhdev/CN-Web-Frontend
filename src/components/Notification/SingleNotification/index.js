import { Typography, Modal } from "antd";
import './index.css';
import DetailAnswer from "../DetailAnswer";
import { useState } from "react";

function SingleNotification() {
    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen(true);
    }

    return(
        <div className="single-notification" onClick={handleMenuClick}>
            <Typography.Title>I can't find the meeting point. What do I do?</Typography.Title>
            <Typography.Paragraph
                ellipsis={{
                    rows: 1,
                    expandable: false,
                }}
            >If you want to create a website where questions and answers can be published, then the themes in this collection will provide you with everything you need.</Typography.Paragraph>
            <DetailAnswer open={open} setOpen={setOpen}/>
        </div>
    )
}
export default SingleNotification;