import React from "react";


function Checkbox(props) {
    return (
        <p>
            <label>
                <input type="checkbox" name="language" className="filled-in" checked={props.checked}
                       onClick={props.onClick} value={props.value}/>
                <span>{props.value}</span>
            </label>
        </p>
    );
}
export default Checkbox;