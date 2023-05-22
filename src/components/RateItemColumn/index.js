import { Rate } from "antd";

function RateItemColumn(props) {
    const {label, value} = props;
    
    return(
        <div className="rate-item">
            <div>{label}</div>
            <Rate allowHalf allowClear={false} value={value} style={{color: 'var(--green-color)'}}></Rate>
        </div>    
    )
}

export default RateItemColumn;