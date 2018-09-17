import React from 'react';

import leeds from './../assets/leeds.png';
import nhs from './../assets/nhs.png';

const Footer = (prosp)=> ( 
    <div className="footer">
        <p>Copyright 2018 Leeds City Councli. All rights reserved</p>
        <div className="footer-img">
            <img src={leeds} alt="leeds"/>
            <img src={nhs} alt="nsh"/>
        </div>
    </div>
)

export default Footer;