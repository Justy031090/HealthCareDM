import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProfilesById } from '../../actions/profilesAction';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import './profile.css';

const ProfileById = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const profilesState = useSelector((state) => state.profiles);
    const { loading, profiles } = profilesState;

    useEffect(() => {
        dispatch(getProfilesById(params.id));
    }, [dispatch, params]);

    return (
        <div className="profile-container">
            {profiles === null || loading ? (
                <div>Loading...</div>
            ) : (
                <div className="info-container">
                    <div className="profile-grid">
                        <ProfileTop profile={profiles} />
                        <ProfileAbout profile={profiles} />
                    </div>
                    <Link to="/profiles" className="btn btn-light">
                        Back
                    </Link>
                    {userInfo && userInfo._id === params.id && (
                        <Link to="/update-profile" className="btn btn-dark">
                            Edit Profile
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProfileById;
