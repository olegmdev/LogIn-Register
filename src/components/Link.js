import React from 'react';

const Link = (props)=> (
    <a href={props.href}>
        {props.children}
    </a>
)

export default Link;