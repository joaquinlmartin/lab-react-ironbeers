import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return (
        <nav className="Navbar">
            <ul className="NavBar-ul">
                <Link to="/">🏡</Link>
            </ul>
        </nav>
    )
}

export default Header;