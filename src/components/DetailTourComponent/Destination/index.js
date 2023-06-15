import { Collapse } from "antd";
const {Panel} = Collapse;

function Destination(props) {

    const {name, desc} = props;

    return(
        <Collapse expandIconPosition="start" className="collapse-tour">
            <Panel
                header={name}
                key={name}
            >
                <div>{desc}</div>
            </Panel>
        </Collapse>
    )
}

export default Destination;