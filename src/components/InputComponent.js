import React from "react";

function InputComponent(props) {
    return (<div>
        <label
            id={props.id + "-label"}
            htmlFor={props.id}>
            {props.id}
        </label>
        <input id={props.id}
               type={props.type}
               placeholder={"Enter your " + props.id}
               required
               value={props.value}
               onChange={props.onChange}
               min={props.min}
               max={props.max}
        >
        </input>
    </div>);
}
export default InputComponent;