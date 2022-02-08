import React from 'react';
import { Link } from 'react-router-dom';

const ProfileTop = ({ profile }) => {
    return (
        <div className="profile-top bg-primary">
            <img
                className="round-img"
                src={profile?.user?.avatar}
                alt="My Profile Pic"
            />
            <h1 className="large">
                {profile?.user?.firstName} {profile?.user?.lastName}
            </h1>
            {profile?.status && <p className="lead">{profile?.status}</p>}
            {profile?.company && <p className="lead">{profile?.company}</p>}
            {profile?.location && <p className="lead">{profile?.location}</p>}
            <div className="social">
                {profile?.website && (
                    <Link
                        to={profile?.website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-globe fa-2x"></i>
                    </Link>
                )}
                {profile?.social && profile?.social?.twitter && (
                    <Link
                        to={profile.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter fa-2x"></i>
                    </Link>
                )}

                {profile?.social && profile?.social?.facebook && (
                    <Link
                        to={profile.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook fa-2x"></i>
                    </Link>
                )}

                {profile?.social && profile?.social?.linkedin && (
                    <Link
                        to={profile.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </Link>
                )}
                {profile?.social && profile?.social?.instagram && (
                    <Link
                        to={profile.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram fa-2x"></i>
                    </Link>
                )}
                {profile?.social && profile?.social?.youtube && (
                    <Link
                        to={profile.social.youtube}
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
