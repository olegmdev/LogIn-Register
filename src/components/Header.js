import React from 'react';

import logo from './../assets/logo.svg';

const Header = (props)=> (
    <header>
        <i className="fa fa-bars menu"></i>
        <img src={logo} alt="logo"/>
    </header>
)

export default Header;