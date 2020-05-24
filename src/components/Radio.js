import React from "react";


function Radio(props) {
    return (
        <p>
            <label>
                <input value={props.title} name="group1" type="radio" onChange={props.onChange}
                       checked={props.checked}/>
                <span>{props.title}</span>
            </label>
        </p>);
}
export default Radio;