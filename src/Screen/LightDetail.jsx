import { useParams } from "react-router-dom";
import Default from "../Template/Default";

function LightDetail(props) {
    const {id} = useParams();
    return (
        <Default>
            {props &&
                <div>{props.item.id}</div>
            }
        </Default>
    );
}

export default LightDetail;