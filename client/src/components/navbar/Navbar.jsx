import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/loginAction';

const Navbar = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    };
    return (
        <nav className="navbar container">
            <p className="navbar logo">m.Care</p>
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
                {userInfo ? (
                    <div className="user-info">
                        <div className="logout" onClick={logoutHandler}>
                            {userInfo.firstName[0].toUpperCase() +
                                userInfo.firstName.substring(1)}
                            <small className="small">Logout(dropdown)</small>
                        </div>
                        <div className="profile">
                            <Link to="/profile">Profile</Link>
                        </div>
                    </div>
                ) : (
                    <div className="login" onClick={() => navigate('/login')}>
                        Login
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
