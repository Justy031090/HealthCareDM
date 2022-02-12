import React from 'react';

const ProfileAbout = ({ profile }) => {
    return (
        <div className="profile-about bg-light">
            {profile?.bio && (
                <div className="bio">
                    <h2 className="text-primary">
                        {profile?.user?.firstName} {profile?.user?.lastName}'s
                        Bio
                    </h2>
                    <p className="lead">{profile?.bio}</p>
                    <div className="line"></div>
                </div>
            )}

            <h2 className="text-primary">Education</h2>
            <div className="education">
                <div>
                    <i className="fa fa-check"></i> education
                </div>
                <div>
                    <i className="fa fa-check"></i>education
                </div>
            </div>
        </div>
    );
};

export default ProfileAbout;
