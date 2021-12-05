import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="header">

            <nav>
                <Link className="title" to="/">intuitive Quiz Hub</Link> {" "}
                <hr className="divider" />

            </nav>
        </div>
    );
};

export default Header;