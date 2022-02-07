import React from 'react';
import { Link } from 'react-router-dom';

const ProfileTop = ({
    profile: { status, company, location, social, website, user },
}) => {
    return (
        <div className="profile-top bg-primary">
            <img className="round-img" src={user?.avatar} alt="Not Found" />
            <h1 className="large">
                {user?.firstName} {user?.lastName}
            </h1>
            {status && <p className="lead">{status}</p>}
            {company && <p className="lead">{company}</p>}
            {location && <p className="lead">{location}</p>}
            <div className="social">
                {website && (
                    <Link
                        to={website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-globe fa-2x"></i>
                    </Link>
                )}
                {social && social.twitter && (
                    <Link
                        to={social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter fa-2x"></i>
                    </Link>
                )}

                {social && social.facebook && (
                    <Link
                        to={social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook fa-2x"></i>
                    </Link>
                )}

                {social && social.linkedin && (
                    <Link
                        to={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </Link>
                )}
                {social && social.instagram && (
                    <Link
                        to={social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram fa-2x"></i>
                    </Link>
                )}
                {social && social.youtube && (
                    <Link
                        to={social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-youtube fa-2x"></i>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProfileTop;
