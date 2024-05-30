import {IButton} from "../../types/IButton";

const SubmitButton = (props: IButton) => {

    return<div className="border border-solid p-3 bg-blue-600 cursor-pointer" onClick={props.onClick}>
        {props.label}
    </div>
}

export default SubmitButton;