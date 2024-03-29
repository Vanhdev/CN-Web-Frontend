import { Rate } from "antd";

function RateItemResult(props) {
    const {label, setValue, rate} = props;

    if(!rate) {
        return(
            <div className="all-rate">
                <div>{label}</div>
                <div>
                    <Rate 
                        allowHalf
                        style={{color: 'var(--green-color)'}}
                        onChange={(value) => setValue(value)}
                    ></Rate>
                </div>
            </div>  
        )
    }
    return(
        <div className="all-rate">
            <div>{label}</div>
            <div>
                <Rate 
                    value={rate} 
                    allowHalf 
                    allowClear={false}
                    style={{color: 'var(--green-color)'}}
                    ></Rate>
            </div>
        </div>   
    )
}

export default RateItemResult;