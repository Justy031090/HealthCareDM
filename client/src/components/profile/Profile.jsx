import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getUserDetails } from '../../actions/userDetailsAction';
import './profile.css';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, profile } = userDetails;

    useEffect(() => {
        if (!userInfo) {
            return navigate('/login');
        }
        dispatch(getUserDetails());
    }, [userInfo, navigate, dispatch]);

    return (
        <div className="profile-container">
            {profile?.user ? (
                <h2 className="large text-primary">
                    <i className="fas fa-user"> </i>{' '}
                    {profile.user.firstName[0].toUpperCase() +
                        userInfo.firstName.substring(1)}
                </h2>
            ) : (
                <h2 className="large text-primary">
                    <i className="fas fa-user"> </i> Welcome
                </h2>
            )}
            {loading && <div>Loading...</div>}
            <p className="lead">HELLO SOMETHING IS WRITTEN HERE </p>
            <Link to="/update-profile" className="btn btn-primary">
                Update Profile
            </Link>
        </div>
    );
};

export default Profile;
