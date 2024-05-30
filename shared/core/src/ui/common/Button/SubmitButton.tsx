import {IButton} from "../../types/IButton";
import * as SC from "./styles";

const SubmitButton = (props: IButton) => {

    return<SC.Button onClick={props.onClick}>
        {props.label ?? "Submit"}
    </SC.Button>
}

export default SubmitButton;