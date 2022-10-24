import React from "react";
import './FormInput.scss'

export const FormInput = ({label,  handleOnChange, ...otherProps }) => (
    <div className="group">
        <input
            className="form-input"
            onChange={handleOnChange} {...otherProps} />

{
            label ?
            (<label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`} >{label}</label>)
            :null
        }
        {console.log("otherProps", otherProps)}

    </div>
)