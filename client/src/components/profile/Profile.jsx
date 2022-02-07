import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getUserDetails } from '../../actions/userDetailsAction';
import ProfileTop from '../profile-id/ProfileTop';
import ProfileAbout from '../profile-id/ProfileAbout';

import './profile.css';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, profile } = userDetails;

    useEffect(() => {
        if (!userInfo) return navigate('/login');
        dispatch(getUserDetails());
    }, [userInfo, navigate, dispatch]);

    return (
        <div className="profile-container">
            <div className="info-container">
                {profile === null || loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="profile-grid">
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                    </div>
                )}
            </div>
            <Link to="/update-profile" className="btn btn-primary">
                Update Profile
            </Link>
        </div>
    );
};

export default Profile;
