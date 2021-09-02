import React from 'react'
import logo from './logo.png';
import './Banner.css';
function Banner() {
    return (
        <div className="banner" >
            <img className="banner__logo"
                src={logo}
                alt="Logo" />
        </div>
    )
}

export default Banner
