import React from 'react';

import Link from './Link';

const Social = (props)=> (
    <div className="social-box">
        <Link href="#">
            <i className="fa fa-google"></i>
            Log in with google
        </Link>

        <Link href="#">
            <i className="fa fa-twitter bgr"></i>
            Log in with twitter
        </Link>
    </div>
)

export default Social;