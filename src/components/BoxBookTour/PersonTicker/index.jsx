import { InputNumber } from "antd";

function PersonTicker(props) {
    const {label, price, countPerson, setCountPerson, setTotalPerson} = props;

    const handleInputNumber = (value) => {
        setCountPerson(value);
        setTotalPerson(value*price);
    }

    return(
        <div className="person-ticker">
            <div>
                <div style={{color: 'var(--gray-color)', fontWeight: '200'}}>{label}</div>
                <div style={{color: 'var(--blue-color)'}}>${price}</div>
            </div>
            <div>
                <InputNumber min={0} max={5} defaultValue={0} value={countPerson} onChange={handleInputNumber}/>
            </div>
        </div>
    )
}

export default PersonTicker;