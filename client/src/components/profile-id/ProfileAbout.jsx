import React from 'react';

const ProfileAbout = ({ profile: { bio, user } }) => {
    return (
        <div className="profile-about bg-light">
            {bio && (
                <div className="bio">
                    <h2 className="text-primary">
                        {user?.firstName} {user?.lastName}'s Bio
                    </h2>
                    <p className="lead">{bio}</p>
                    <div className="line"></div>
                </div>
            )}

            <h2 className="text-primary">Education</h2>
            <div className="education">
                <div>
                    <i className="fa fa-check"></i> hardcoded education
                </div>
                <div>
                    <i className="fa fa-check"></i>more hardcoded education
                </div>
            </div>
        </div>
    );
};

export default ProfileAbout;
