import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/loginAction';

const Navbar = () => {
    const [calcDropdown, setCalcDropdown] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const calcRef = useRef();
    const userRef = useRef();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    };
    const handleCalcMouseDown = () => {
        setCalcDropdown(false);
    };
    const handleUserMouseDown = () => {
        setUserDropdown(false);
    };
    const handleCalcMouseEnter = () => {
        setCalcDropdown(true);
        setTimeout(handleCalcMouseDown, 4000);
    };
    const handleUserMouseEnter = () => {
        setUserDropdown(true);
        setTimeout(handleUserMouseDown, 4000);
    };
    useEffect(() => {
        let calcHandler = (e) => {
            if (!calcRef.current.contains(e.target)) {
                setCalcDropdown(false);
            }
        };
        document.addEventListener('mousedown', calcHandler);

        return () => {
            document.removeEventListener('mousedown', calcHandler);
        };
    }, [calcDropdown]);

    useEffect(() => {
        let userHandler = (e) => {
            if (!userRef.current.contains(e.target)) {
                setUserDropdown(false);
            }
        };
        document.addEventListener('mousedown', userHandler);

        return () => {
            document.removeEventListener('mousedown', userHandler);
        };
    }, [userDropdown]);

    return (
        <nav className="navbar-container">
            <div className="logo">m.Care</div>

            <Link to="/">Home</Link>
            <Link to="/recipies">Recipies</Link>
            <Link to="/profiles">Community</Link>
            <Link to="/forum/posts">Forum</Link>

            <div className="dropdown" ref={calcRef}>
                <button
                    className="btn btn-primary center"
                    onClick={() => setCalcDropdown(true)}
                    onMouseOver={() => handleCalcMouseEnter()}
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
                    <Link to="/calculators/bolus">Bolus Calculator</Link>
                    <Link to="/calculators/bmi">BMI Calculator</Link>
                    <Link to="/calculators/bmr">BMR Calculator</Link>
                </div>
            </div>

            {userInfo ? (
                <div className={'user-info'} ref={userRef}>
                    <button
                        className="btn btn-primary"
                        onClick={() => setUserDropdown(true)}
                        onMouseOver={() => handleUserMouseEnter()}
                    >
                        <i className="fas fa-user"></i>{' '}
                        {userInfo.firstName[0].toUpperCase() +
                            userInfo.firstName.substring(1)}{' '}
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div
                        className={
                            userDropdown ? 'user-content show' : 'user-content'
                        }
                    >
                        <button
                            className="btn btn-primary"
                            onClick={logoutHandler}
                        >
                            Logout
                        </button>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
            ) : (
                <div className="navbar-right">
                    <div className="login" onClick={() => navigate('/login')}>
                        Login
                    </div>
                    <div
                        className="login"
                        onClick={() => navigate('/register')}
                    >
                        Sign Up
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
