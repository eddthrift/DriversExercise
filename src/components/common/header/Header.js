import React from 'react';
import logo from '../../../assets/logo.png';

import './Header.css';

function Header(){
    return(
        <div className="header-container">
            <img src={logo} alt='Logo'/>
        </div>
    );
};

export default Header;