import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
import cabin from './navigation-images/cabin.svg';
import ranger from './navigation-images/ranger.svg'

const Navbar = () => {
    return (
        <div className="navbar-header">
            <Link to="/favorites">
                <img src={ranger} className="button-image"/>
            </Link>
            <h1>National Parks Guide</h1>
            <Link to="/">
                <img src={cabin} className="button-image"/>
            </Link>
        </div>
    )
};

export default Navbar;