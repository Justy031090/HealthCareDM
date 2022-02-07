import React from 'react';
import { Link } from 'react-router-dom';
import './profile-page.css';

const ProfileItem = ({ profile }) => {
    const { user, status, location, company } = profile;
    return (
        <div className="profiles-page">
            <img src={user.avatar} alt="Not Found" className="round-img" />
            <div>
                <h2>
                    {user.firstName} {user.lastName}
                </h2>
                <p>{status}</p>
                <p>{company && <span>at {company}</span>}</p>
                <p>{location && <span>{location}</span>}</p>
                <Link to={`/profiles/${user._id}`} className="btn btn-primary">
                    View Profile
                </Link>
            </div>
            <ul>
                <li>HARDCODED EDUCATION</li>
            </ul>
        </div>
    );
};

export default ProfileItem;
