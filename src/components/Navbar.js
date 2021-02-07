import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
import logo from '../images/a1-logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <Link to="/" >
                <img id="logo" src={logo} alt={"logo"} />
            </Link>
        </nav>
    )
}

export default Navbar;
