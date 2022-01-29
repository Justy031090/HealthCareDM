import React from 'react';
import './navbar/navbar.css';
import { Link } from 'react-router-dom';

const links = [];
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar left-side">
                <Link to="/">Home</Link>
                <Link to="/">Calculators</Link>
                <Link to="/">Recipies</Link>
                <Link to="/">Forum</Link>
            </div>
            <div className="navbar right-side">
                <input type="text" placeholder="Search" />
                <Link to="/">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
