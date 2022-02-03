import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="navbar logo">m.Care</div>
            <div className="navbar left-side">
                <Link to="/">Home</Link>
                <Link to="/calculators">Calculators</Link>
                <Link to="/recipies">Recipies</Link>
                <Link to="/forum">Forum</Link>
            </div>
            <div className="navbar right-side">
                <input
                    type="text"
                    placeholder="Search..."
                    className="nav-input"
                />
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
