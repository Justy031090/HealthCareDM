import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/loginAction';

const Navbar = () => {
    const [calcDropdown, setCalcDropdown] = useState(false);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ref = useRef();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    };
    const handleMouseDown = () => {
        setCalcDropdown(false);
    };
    const timeout = setTimeout(handleMouseDown, 2500);

    const handleMouseEnter = () => {
        clearTimeout(timeout);
        setCalcDropdown(true);
    };
    useEffect(() => {
        let handler = (e) => {
            if (!ref.current.contains(e.target)) {
                setCalcDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [calcDropdown]);

    return (
        <nav className="navbar container">
            <p className="navbar logo">m.Care</p>
            <Link to="/">Home</Link>
            <Link to="/recipies">Recipies</Link>
            <div
                className="dropdown"
                ref={ref}
                onClick={(e) => setCalcDropdown(false)}
            >
                <button
                    className="btn btn-primary"
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => timeout()}
                >
                    Calculators <i className="fa fa-caret-down"></i>
                </button>
                <div
                    className={
                        calcDropdown
                            ? 'dropdown-content show'
                            : 'dropdown-content'
                    }
                >
                    <div>
                        <Link to="/calculators/bolus">Bolus Calculator</Link>
                        <Link to="/recipies">Recipies</Link>
                    </div>
                </div>
            </div>
            <Link to="/forum">Forum</Link>

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
        </nav>
    );
};

export default Navbar;
