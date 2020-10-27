import React from 'react';
import {Link} from 'react-router-dom';
import Proptypes from 'prop-types';
import './navbar.css'
import cabin from './navigation-images/cabin.svg';
import ranger from './navigation-images/ranger.svg'

const Navbar = ({stateCode}) => {
    return (
        <div className="navbar-header parkName-link">
            <Link to="/about">
                <img src={ranger} className="button-image" alt="favorite parks"/>
            </Link>
            <h1>National Parks Guide</h1>
            <Link to={`/${stateCode}`} >
                <img src={cabin} className="button-image" alt="home button"/>
            </Link>
        </div>
    )
};

Navbar.propTypes = {
    stateCode: Proptypes.string.isRequired,
}


export default Navbar;