import { Rate } from "antd";

function RateItemResult(props) {
    const {label, value, setValue} = props;

    if(!value) {
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
                    value={value} 
                    allowHalf 
                    allowClear={false}
                    style={{color: 'var(--green-color)'}}
                    ></Rate>
            </div>
        </div>   
    )
}

export default RateItemResult;