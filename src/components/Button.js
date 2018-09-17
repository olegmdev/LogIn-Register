import React from 'react';

const Button = (props)=> (
    <button className={props.className}>
        {props.children}
    </button>
)

export default Button;