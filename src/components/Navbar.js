import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" >
                Logo
            </Link>
        </nav>
    )
}

export default Navbar
