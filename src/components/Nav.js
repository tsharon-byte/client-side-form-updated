import React from 'react';
import {Link} from 'react-router-dom';

import './App.css'

function Nav() {
    const style = {
        color: "white"
    };
    return (
        <nav>
            <div className="nav-wrapper  blue accent-1">
                <a href="/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/form' style={style}>
                        Add person
                    </Link></li>
                    <li><Link to='/list' style={style}>
                        List of persons
                    </Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;