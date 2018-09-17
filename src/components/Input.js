import React from 'react';

const Input = (props)=> (
    <label>
        {props.label}
        <input type="text" placeholder={props.placeholder}/>
    </label>
)

export default Input;