import React from 'react';
import './BackGround.css'
function BackGround() {
    return (
        <div className="middle">
            <div className="middle__space"></div>
            <div className="middle__space"></div>
            <div className="middle__space"></div>
            <div className="middle__space"></div>
            <div className="middle__space"></div>
            <h1 className="middle__text">TRAILFLIX FOR MOVIE AND SERIES TRAILER</h1>

            <form className="middle__search">
                <input type="text" placeholder="Search Trailers.." />
                <button type="submit" value="SEARCH" className="button">Search</button>
            </form>
        </div>
    )
}

export default BackGround
